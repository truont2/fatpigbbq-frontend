// Visual audit: sweeps every route at three viewports, clicks every in-app control, records video,
// screenshots each step, and flags text that is covered, clipped, off-screen, invisible, or low contrast.
// Usage: node .claude/skills/verify-fatpig/visual-audit.mjs "$($V url)" "$($V out)/visual-audit"
// Exits 1 when any issue outside the KNOWN list is found. Report: <out>/issues.json, <out>/steps/*.png, <out>/video/*.webm
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire(new URL('../../../package.json', import.meta.url));
const { chromium, devices } = require('@playwright/test');

const BASE = (process.argv[2] || 'http://localhost:3100').replace(/\/+$/, '');
const OUT = process.argv[3] || '/tmp/fatpig-visual-audit';
fs.mkdirSync(path.join(OUT, 'steps'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'video'), { recursive: true });

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 } },
  tablet: { viewport: { width: 768, height: 1024 }, isMobile: true, hasTouch: true },
  mobile: { ...devices['iPhone 13'] },
};
const ROUTES = ['/', '/menu', '/catering', '/about-page', '/contact', '/order'];

// Known non-bugs. Each match is reported under "allowed" and does not fail the run.
const KNOWN = [
  { why: 'reviews carousel auto-rotates; a capture can land mid-fade', match: i => i.type === 'hidden-text' && i.route === '/' && /^(blockquote|cite)\b/.test(i.el || '') },
  { why: 'a tap on the previous page leaves :hover on whatever sits under the finger after navigating', match: i => i.type === 'low-contrast' && /^nav-to-/.test(i.step || '') },
  { why: 'back-to-top is hidden below 768px by design so it does not cover prices', match: i => i.type === 'control-missing' && i.step === 'back-to-top' && i.viewport === 'mobile' },
];

// Runs in the page. Inspects every text-bearing element inside the viewport.
const DETECT = (mode) => {
  const vw = innerWidth, vh = innerHeight, found = [];
  const parse = c => { const m = c.match(/[\d.]+/g) || [0, 0, 0, 0]; return { r: +m[0], g: +m[1], b: +m[2], a: m[3] === undefined ? 1 : +m[3] }; };
  const lum = ({ r, g, b }) => [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
  // Resolve what is actually painted under the text (siblings included), not just ancestors.
  const bgOf = (el, x, y) => {
    for (const under of document.elementsFromPoint(x, y)) {
      if (el.contains(under) && under !== el) continue;
      if (under.tagName === 'IMG' || under.tagName === 'IFRAME' || under.tagName === 'VIDEO') return null;
      const s = getComputedStyle(under);
      if (s.backgroundImage !== 'none') return null;
      const c = parse(s.backgroundColor);
      if (c.a > 0.5) return c;
      if (c.a > 0) return null;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  };
  const label = el => (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 50);
  const sig = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + '.' + String(el.className).split(' ').filter(Boolean).slice(0, 3).join('.');
  const textEls = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button,span,li,label,cite,blockquote,dt,dd,td,th')].filter(e => {
    if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return false;
    if (e.closest('.sr-only')) return false;
    const r = e.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < vh && getComputedStyle(e).visibility !== 'hidden';
  });
  for (const e of textEls) {
    const r = e.getBoundingClientRect(), text = label(e);
    if (!text) continue;
    let opacity = 1; for (let x = e; x; x = x.parentElement) opacity *= +getComputedStyle(x).opacity;
    if (opacity < 0.5) { found.push({ type: 'hidden-text', text, el: sig(e), detail: { opacity: +opacity.toFixed(2) } }); continue; }
    if (r.right > vw + 1 || r.left < -1) {
      const inScroller = (() => { for (let x = e.parentElement; x; x = x.parentElement) { const o = getComputedStyle(x).overflowX; if (o === 'auto' || o === 'scroll') return true; } return false; })();
      if (!inScroller) found.push({ type: 'offscreen-x', text, el: sig(e), detail: { left: Math.round(r.left), right: Math.round(r.right), vw } });
    }
    for (let x = e.parentElement, depth = 0; x && depth < 6; x = x.parentElement, depth++) {
      const s = getComputedStyle(x);
      if (s.overflowX === 'auto' || s.overflowX === 'scroll') break;
      if (s.overflow === 'hidden' || s.overflowY === 'hidden' || s.overflowX === 'hidden' || s.overflow === 'clip') {
        const pr = x.getBoundingClientRect();
        if (r.top < pr.top - 1 || r.bottom > pr.bottom + 1 || r.left < pr.left - 1 || r.right > pr.right + 1) {
          found.push({ type: 'clipped-by-ancestor', text, el: sig(e), detail: { by: sig(x), text: [r.top, r.bottom, r.left, r.right].map(Math.round), box: [pr.top, pr.bottom, pr.left, pr.right].map(Math.round) } });
        }
        break;
      }
    }
    const s = getComputedStyle(e);
    if ((s.overflow === 'hidden' || s.textOverflow === 'ellipsis') && e.scrollWidth > e.clientWidth + 1) found.push({ type: 'truncated', text, el: sig(e), detail: { scrollWidth: e.scrollWidth, clientWidth: e.clientWidth } });
    const range = document.createRange(); range.selectNodeContents(e);
    const lines = [...range.getClientRects()].filter(q => q.width > 2 && q.bottom > 0 && q.top < vh);
    for (const q of [lines[0], lines[lines.length - 1]].filter(Boolean)) {
      for (const [px, py] of [[q.left + 3, q.top + q.height / 2], [q.left + q.width / 2, q.top + q.height / 2]]) {
        if (px < 0 || px > vw || py < 0 || py > vh) continue;
        const hit = document.elementFromPoint(px, py);
        if (hit && !e.contains(hit) && !hit.contains(e)) {
          let cover = hit; while (cover.parentElement && !['fixed', 'sticky'].includes(getComputedStyle(cover).position)) cover = cover.parentElement;
          const pos = getComputedStyle(cover).position;
          if (['fixed', 'sticky'].includes(pos)) {
            const cr = cover.getBoundingClientRect();
            const headerLike = cr.top <= 100 && cr.width >= vw * 0.5;
            if (headerLike && mode !== 'top') break;
          }
          found.push({ type: 'occluded', text, el: sig(e), detail: { by: sig(['fixed', 'sticky'].includes(pos) ? cover : hit), byPosition: pos, at: [Math.round(px), Math.round(py)] } });
          break;
        }
      }
      if (found.length && found[found.length - 1].type === 'occluded' && found[found.length - 1].text === text) break;
    }
    const mid = lines[0] || r;
    const topHit = document.elementFromPoint(Math.min(vw - 1, Math.max(0, mid.left + 3)), Math.min(vh - 1, Math.max(0, mid.top + mid.height / 2)));
    if (!topHit || !(e.contains(topHit) || topHit.contains(e))) continue;
    const bg = bgOf(e, Math.min(vw - 1, Math.max(0, mid.left + Math.min(mid.width, 40) / 2)), Math.min(vh - 1, Math.max(0, mid.top + mid.height / 2)));
    if (bg) {
      const fg = parse(s.color);
      const L1 = lum(fg), L2 = lum(bg), ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const size = parseFloat(s.fontSize), bold = +s.fontWeight >= 700;
      const min = size >= 24 || (bold && size >= 18.66) ? 3 : 4.5;
      if (ratio < min) found.push({ type: 'low-contrast', text, el: sig(e), detail: { ratio: +ratio.toFixed(2), min, color: s.color } });
    }
  }
  return found;
};

const issues = [];
const seen = new Set();
const sleep = ms => new Promise(r => setTimeout(r, ms));
let stepNo = 0;

async function check(page, vp, route, step, mode = 'scrolled') {
  await sleep(700);
  const name = `${String(++stepNo).padStart(3, '0')}-${vp}-${(route === '/' ? 'home' : route.slice(1))}-${step}`.replace(/[^\w-]+/g, '_');
  await page.screenshot({ path: path.join(OUT, 'steps', name + '.png') });
  for (const f of await page.evaluate(DETECT, mode)) {
    const key = [vp, route, f.type, f.text, f.el].join('|');
    if (seen.has(key)) continue;
    seen.add(key);
    issues.push({ viewport: vp, route, step, screenshot: `steps/${name}.png`, ...f });
  }
}

async function sweep(page, vp, route, tag) {
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = page.viewportSize().height;
  for (let y = 0, i = 0; y < h; y += Math.round(vh * 0.8), i++) {
    await page.evaluate(top => window.scrollTo({ top, behavior: 'instant' }), y);
    await check(page, vp, route, `${tag}-scroll${i}`, i === 0 ? 'top' : 'scrolled');
  }
}

// In-app controls per route: [step name, locator factory]. External links are checked by href only.
const ACTIONS = {
  '/': [
    ['hero-cta', p => p.getByRole('button', { name: /view our menu/i })],
    ['favorites-next', p => p.locator('button', { hasText: '→' })],
    ['favorites-prev', p => p.locator('button', { hasText: '←' })],
    ['review-dot-2', p => p.locator('button.rounded-full.w-3').nth(1)],
    ['review-dot-4', p => p.locator('button.rounded-full.w-3').nth(3)],
    ['story-link', p => p.getByRole('link', { name: /read our story/i })],
    ['catering-learn-more', p => p.getByRole('link', { name: /^learn more$/i })],
    ['explore-menu', p => p.getByRole('button', { name: /explore our menu/i })],
  ],
  '/menu': [
    ['tab-sides', p => p.getByText('Sides', { exact: true }).first()],
    ['tab-beverages', p => p.getByText('Beverages', { exact: true }).first()],
    ['tab-meals', p => p.getByText('Meals', { exact: true }).first()],
    ['back-to-top', p => p.getByRole('button', { name: 'Back to top' })],
  ],
  '/contact': [
    ['focus-name', p => p.locator('input[name=name]'), 'focus'],
    ['type-email', p => p.locator('input[name=email]'), 'fill:linh@example.org'],
    ['focus-message', p => p.locator('textarea[name=message]'), 'focus'],
  ],
};

const browser = await chromium.launch();
const summary = { videos: [] };
try {
  for (const [vp, opts] of Object.entries(VIEWPORTS)) {
    const ctx = await browser.newContext({ ...opts, recordVideo: { dir: path.join(OUT, 'video'), size: opts.viewport } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url().slice(0, 100)}`); });
    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await sweep(page, vp, route, 'load');
      for (const [step, loc, how = 'click'] of ACTIONS[route] || []) {
        await page.goto(BASE + route, { waitUntil: 'networkidle' });
        if (step === 'back-to-top') { await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'instant' })); await sleep(300); }
        const l = loc(page).first();
        await l.waitFor({ state: 'attached', timeout: 3000 }).catch(() => {});
        if (!(await l.count())) { issues.push({ viewport: vp, route, step, type: 'control-missing', detail: await page.evaluate(() => ({ url: location.href, scrollY: Math.round(scrollY), height: document.documentElement.scrollHeight, buttons: [...document.querySelectorAll('button')].map(b => b.getAttribute('aria-label') || b.innerText.trim()).filter(Boolean) })) }); continue; }
        await l.scrollIntoViewIfNeeded().catch(() => {});
        if (!(await l.isVisible())) { if (vp === 'desktop') issues.push({ viewport: vp, route, step, type: 'control-not-visible' }); continue; }
        if (how === 'focus') await l.focus();
        else if (how.startsWith('fill:')) await l.fill(how.slice(5));
        else await l.click();
        await sleep(900);
        await check(page, vp, route, step);
        if (step.startsWith('tab-')) {
          await sleep(800);
          const t = await page.evaluate(label => {
            const bar = document.querySelector('.sticky').getBoundingClientRect();
            const h = [...document.querySelectorAll('h2')].find(x => x.innerText.trim().toLowerCase() === label);
            const r = h.getBoundingClientRect();
            return { barBottom: Math.round(bar.bottom), headingTop: Math.round(r.top), headingBottom: Math.round(r.bottom), vh: innerHeight };
          }, step.slice(4));
          if (t.headingTop < t.barBottom || t.headingBottom > t.vh / 2) issues.push({ viewport: vp, route, step, type: 'anchor-target-hidden', text: step.slice(4), detail: t });
        }
      }
    }
    // Navigation: desktop nav links, or the mobile menu on narrow viewports.
    await page.goto(BASE + '/', { waitUntil: 'networkidle' });
    const menuBtn = page.getByRole('button', { name: /open main menu/i });
    for (const name of ['About', 'Menu', 'Catering', 'Contact', 'Home']) {
      if (await menuBtn.isVisible()) { await menuBtn.click(); await sleep(400); await check(page, vp, new URL(page.url()).pathname, `mobile-menu-open-before-${name}`, 'overlay'); }
      await page.locator('nav a').filter({ hasText: new RegExp(`^${name}$`, 'i') }).locator('visible=true').first().click();
      await sleep(900);
      await check(page, vp, new URL(page.url()).pathname, `nav-to-${name}`, 'top');
    }
    if (errors.length) issues.push({ viewport: vp, type: 'network-or-page-errors', detail: [...new Set(errors)] });
    await ctx.close();
    summary.videos.push(await page.video().path());
  }
} finally {
  await browser.close();
}

const allowed = issues.filter(i => KNOWN.some(k => k.match(i))).map(i => ({ ...i, allowedBecause: KNOWN.find(k => k.match(i)).why }));
const real = issues.filter(i => !KNOWN.some(k => k.match(i)));
const counts = real.reduce((m, i) => ((m[i.type] = (m[i.type] || 0) + 1), m), {});
fs.writeFileSync(path.join(OUT, 'issues.json'), JSON.stringify({ base: BASE, counts, issues: real, allowed, ...summary }, null, 1));
for (const i of allowed) console.log(`allowed              ${i.viewport.padEnd(7)} ${(i.route || '').padEnd(11)} ${(i.step || '').padEnd(28)} ${i.type}: ${i.allowedBecause}`);
for (const i of real) console.log(`${i.type.padEnd(20)} ${i.viewport.padEnd(7)} ${(i.route || '').padEnd(11)} ${(i.step || '').padEnd(28)} ${JSON.stringify(i.text || '')} ${JSON.stringify(i.detail || '')}`);
console.log('COUNTS', JSON.stringify(counts), `allowed=${allowed.length}`, `steps=${stepNo}`, `report=${path.join(OUT, 'issues.json')}`);
if (real.length) process.exitCode = 1;
