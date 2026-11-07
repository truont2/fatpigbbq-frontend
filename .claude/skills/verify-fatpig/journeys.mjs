// Feature-map journeys: one per features/*.md file, step ids match the file's Sub-features.
// Usage: node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" [feature ...]
// Features: navigation menu home contact catering about (default: all). Exits 1 on any FAIL.
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
const require = createRequire(new URL('../../../package.json', import.meta.url));
const { chromium, devices } = require('@playwright/test');

const BASE = (process.argv[2] || 'http://localhost:3100').replace(/\/+$/, '');
const OUT = process.argv[3] || '/tmp/fatpig-journeys';
const ONLY = process.argv.slice(4);
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 } },
  tablet: { viewport: { width: 800, height: 1024 } },
  mobile: { ...devices['iPhone 13'] },
};
const results = [];
let browser;

async function open(vp, route) {
  const ctx = await browser.newContext(VIEWPORTS[vp]);
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', e => page.errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) page.errors.push(`${r.status()} ${r.url().slice(0, 90)}`); });
  await page.goto(BASE + route, { waitUntil: 'networkidle' });
  return page;
}
const shot = (page, name) => page.screenshot({ path: path.join(OUT, `${name}.png`) });
const settle = async (page, ms = 1200) => { await page.mouse.move(5, 600).catch(() => {}); await page.waitForTimeout(ms); };
function ok(feature, id, pass, detail) {
  results.push({ feature, id, pass, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'} ${feature}/${id} ${JSON.stringify(detail)}`);
}
async function done(feature, page) {
  ok(feature, 'no-errors', page.errors.length === 0, page.errors.slice(0, 3));
  await page.context().close();
}

const JOURNEYS = {
  async navigation(F) {
    let p = await open('desktop', '/');
    await p.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
    await p.locator('nav a', { hasText: /^menu$/i }).first().click();
    await p.waitForSelector('#meals'); await settle(p, 400);
    ok(F, 'nav-desktop', new URL(p.url()).pathname === '/menu' && (await p.locator('h1').innerText()) === 'Our Menu', p.url());
    ok(F, 'nav-scroll-reset', (await p.evaluate(() => scrollY)) === 0, await p.evaluate(() => scrollY));
    const act = await p.evaluate(() => { const a = document.querySelector('nav a[aria-current=page]'); const s = getComputedStyle(a); return { text: a.innerText, color: s.color, border: s.borderBottomColor }; });
    ok(F, 'nav-active', act.text === 'MENU' && act.color === 'rgb(255, 255, 255)' && act.border === 'rgb(185, 28, 28)', act);
    await shot(p, 'navigation-active');
    await p.evaluate(() => window.scrollTo({ top: 400, behavior: 'instant' })); await settle(p, 500);
    ok(F, 'nav-scrolled', /bg-black\/80/.test(await p.locator('nav').first().getAttribute('class')), {});
    await p.locator("nav a[href='/']").first().click(); await settle(p, 600);
    ok(F, 'nav-logo', new URL(p.url()).pathname === '/' && /Fat Pig/.test(await p.locator('h1').innerText()), p.url());
    const foot = await p.evaluate(() => { const f = document.querySelector('footer'); const ext = [...f.querySelectorAll('a[href^=http]')]; const img = f.querySelector('img'); return { extNoNewTab: ext.filter(a => a.target !== '_blank').length, unlabeled: ext.filter(a => !a.innerText.trim() && !a.getAttribute('aria-label')).length, logoRatio: +(img.clientWidth / img.clientHeight).toFixed(2), naturalRatio: +(img.naturalWidth / img.naturalHeight).toFixed(2) }; });
    ok(F, 'nav-footer', foot.extNoNewTab === 0 && foot.unlabeled === 0 && Math.abs(foot.logoRatio - foot.naturalRatio) < 0.03, foot);
    await done(F, p);

    p = await open('tablet', '/');
    const tab = await p.evaluate(() => ({ burger: !!document.querySelector('nav button') && getComputedStyle(document.querySelector('nav button')).display !== 'none', desktopLinks: [...document.querySelectorAll('nav a')].filter(a => a.offsetParent && /^(HOME|ABOUT|MENU|CATERING|CONTACT)$/.test(a.innerText.trim())).length }));
    ok(F, 'nav-tablet-uses-mobile-menu', tab.burger && tab.desktopLinks === 0, tab);
    await shot(p, 'navigation-tablet');
    await done(F, p);

    p = await open('mobile', '/');
    await p.getByRole('button', { name: 'Open main menu' }).click(); await settle(p, 400);
    const links = await p.evaluate(() => [...document.querySelectorAll('nav a')].filter(a => a.offsetParent && /^(Home|About|Menu|Catering|Contact)$/.test(a.innerText.trim())).map(a => a.innerText.trim()));
    ok(F, 'nav-mobile-open', links.length === 5, links);
    await shot(p, 'navigation-mobile-open');
    await p.locator('nav a', { hasText: /^Contact$/ }).last().click(); await p.waitForURL('**/contact'); await settle(p, 600);
    const still = await p.locator('nav a', { hasText: /^Contact$/ }).last().isVisible();
    ok(F, 'nav-mobile-closes', !still, { url: p.url(), panelVisible: still });
    await p.goto(BASE + '/order', { waitUntil: 'networkidle' });
    const h = p.locator('h1', { hasText: 'Page under construction' });
    const navBottom = await p.evaluate(() => document.querySelector('nav').getBoundingClientRect().bottom);
    const hTop = (await h.boundingBox())?.y ?? -1;
    ok(F, 'nav-unknown', (await h.isVisible()) && hTop >= navBottom && (await p.locator('footer').count()) === 1, { hTop, navBottom });
    await shot(p, 'navigation-unknown-mobile');
    await done(F, p);
  },

  async menu(F) {
    for (const vp of ['desktop', 'mobile']) {
      const p = await open(vp, '/menu');
      if (vp === 'desktop') {
        const counts = await p.evaluate(() => ['meals', 'sides', 'beverages'].map(id => document.querySelectorAll('#' + id + ' h3').length));
        ok(F, 'menu-sections', JSON.stringify(counts) === '[13,10,3]', counts);
        ok(F, 'menu-no-placeholder-copy', !/\btest\b/i.test(await p.locator('#beverages').innerText()), {});
        ok(F, 'menu-tab-initial', (await p.locator('.sticky a[aria-current="true"]').innerText()) === 'Meals', {});
      }
      for (const tab of ['Sides', 'Beverages', 'Meals']) {
        await p.locator('.sticky a', { hasText: new RegExp(`^${tab}$`) }).click(); await settle(p, 1800);
        const t = await p.evaluate(label => {
          const bar = document.querySelector('.sticky').getBoundingClientRect();
          const h = [...document.querySelectorAll('h2')].find(x => x.innerText.trim() === label).getBoundingClientRect();
          const active = document.querySelector('.sticky a[aria-current="true"]');
          return { hash: location.hash, barTop: Math.round(bar.top), barBottom: Math.round(bar.bottom), headingTop: Math.round(h.top), vh: innerHeight, active: active && active.innerText, activeColor: active && getComputedStyle(active).color };
        }, tab);
        ok(F, `menu-tab-${vp}-${tab.toLowerCase()}`, t.hash === '#' + tab.toLowerCase() && t.barTop === 80 && t.headingTop >= t.barBottom + 8 && t.headingTop < t.vh / 2 && t.active === tab && t.activeColor === 'rgb(185, 28, 28)', t);
        await shot(p, `menu-tab-${vp}-${tab.toLowerCase()}`);
      }
      const btt = p.getByRole('button', { name: 'Back to top' });
      await p.evaluate(() => window.scrollTo({ top: 1500, behavior: 'instant' })); await settle(p, 400);
      if (vp === 'desktop') {
        ok(F, 'menu-back-to-top-visible', await btt.isVisible(), {});
        await btt.click(); await p.waitForTimeout(1500);
        ok(F, 'menu-back-to-top-scrolls', (await p.evaluate(() => scrollY)) === 0, await p.evaluate(() => scrollY));
        const pdf = p.locator('a', { hasText: /Download PDF/i });
        const href = await pdf.getAttribute('href');
        const r = await p.request.get(new URL(href, BASE).toString());
        ok(F, 'menu-pdf', r.status() === 200 && r.headers()['content-type'] === 'application/pdf' && (await pdf.getAttribute('target')) === '_blank', { status: r.status(), type: r.headers()['content-type'] });
      } else {
        ok(F, 'menu-back-to-top-hidden-mobile', !(await btt.isVisible().catch(() => false)), {});
      }
      await done(F, p);
    }
  },

  async home(F) {
    const p = await open('desktop', '/');
    await p.waitForSelector('h1'); await settle(p, 1000);
    await shot(p, 'home-hero');
    await p.getByRole('button', { name: 'View Our Menu' }).click(); await p.waitForSelector('#meals');
    ok(F, 'home-hero', new URL(p.url()).pathname === '/menu', p.url());
    await p.goto(BASE + '/', { waitUntil: 'networkidle' });

    const strip = p.locator('.snap-x').first();
    await strip.scrollIntoViewIfNeeded();
    const before = await strip.evaluate(e => e.scrollLeft);
    await p.locator('button', { hasText: '→' }).click(); await settle(p, 1000);
    const after = await strip.evaluate(e => e.scrollLeft);
    ok(F, 'home-favorites', after > before, { before, after });
    await shot(p, 'home-favorites');

    const dots = p.locator('button.w-3.h-3.rounded-full');
    await dots.nth(2).scrollIntoViewIfNeeded(); await dots.nth(2).click(); await settle(p, 800);
    const quote = await p.locator('blockquote').first().innerText();
    ok(F, 'home-reviews', (await dots.count()) === 4 && /barbecue was excellent/i.test(quote), quote.slice(0, 40));
    await shot(p, 'home-reviews');

    const delivery = await p.evaluate(() => [...document.querySelectorAll('a[target=_blank]')].filter(a => /order now/i.test(a.innerText)).map(a => new URL(a.href).host));
    ok(F, 'home-delivery', delivery.length === 3 && delivery.some(h => /dine\.online/.test(h)) && delivery.some(h => /ubereats/.test(h)) && delivery.some(h => /doordash/.test(h)), delivery);
    const press = await p.evaluate(() => [...document.querySelectorAll('a[target=_blank]')].filter(a => /read full story/i.test(a.innerText)).length);
    ok(F, 'home-press', press === 3, press);

    const frame = p.locator('iframe[title="Fat Pig BBQ Location"]');
    await frame.scrollIntoViewIfNeeded(); await settle(p, 600);
    const visit = await frame.evaluate(fr => { const m = fr.parentElement.getBoundingClientRect(), i = fr.parentElement.parentElement.children[1].getBoundingClientRect(); return { src: fr.src.slice(0, 60), gapX: Math.round(i.left - m.right), text: fr.parentElement.parentElement.innerText }; });
    ok(F, 'home-visit', /maps\.google\.com\/maps\?q=Fat\+Pig|google\.com\/maps\/embed\/v1\/place/.test(visit.src) && visit.gapX === 0 && /7533 Olympic View Dr/.test(visit.text) && /Mon - Thurs/.test(visit.text) && /Closed/.test(visit.text), { src: visit.src, gapX: visit.gapX });
    await frame.evaluate(fr => fr.parentElement.parentElement.scrollIntoView({ block: 'center' })); await settle(p, 500);
    await shot(p, 'home-visit');
    await done(F, p);
  },

  async contact(F) {
    const p = await open('desktop', '/contact');
    await p.waitForSelector('form');
    const d = await p.evaluate(() => ({ tel: document.querySelector('a[href^="tel:"]')?.getAttribute('href'), mail: document.querySelector('a[href^="mailto:"]')?.getAttribute('href') }));
    ok(F, 'contact-details', d.tel === 'tel:4253617640' && d.mail === 'mailto:fatpigbbq@yahoo.com', d);
    const valid = () => p.evaluate(() => document.querySelector('form').checkValidity());
    ok(F, 'contact-form-empty-invalid', (await valid()) === false, {});
    await p.fill('input[name=name]', 'Linh Tran');
    await p.fill('input[name=email]', 'not-an-email');
    await p.fill('textarea[name=message]', 'Catering for 30 on Saturday?');
    const mismatch = await p.evaluate(() => document.querySelector('input[name=email]').validity.typeMismatch);
    ok(F, 'contact-form-validation', (await valid()) === false && mismatch, { mismatch });
    await p.fill('input[name=email]', 'linh@example.org');
    const form = await p.evaluate(() => ({ action: document.querySelector('form').action, method: document.querySelector('form').method }));
    ok(F, 'contact-form-ready-unsent', (await valid()) === true && form.action.startsWith('https://formsubmit.co/') && form.method === 'post' && new URL(p.url()).pathname === '/contact', form);
    await p.locator('form').screenshot({ path: path.join(OUT, 'contact-form-filled.png') });
    await done(F, p);
  },

  async catering(F) {
    const p = await open('desktop', '/');
    const teaser = p.locator('h3', { hasText: 'Bring the BBQ Home.' });
    await teaser.scrollIntoViewIfNeeded(); await settle(p, 800);
    await p.getByRole('link', { name: /^learn more$/i }).click();
    await p.waitForURL('**/catering'); await p.waitForSelector('h1');
    ok(F, 'catering-teaser', new URL(p.url()).pathname === '/catering', p.url());
    const text = await p.locator('body').innerText();
    ok(F, 'catering-page', ['A Note on Ordering', 'Delivery Service', 'Reheating Instructions', 'Preheat to 250', 'Wrap Tightly', 'Heat for 20-30 Mins'].every(s => text.includes(s)), {});
    const tel = await p.locator('a[href^="tel:"]').first().getAttribute('href');
    ok(F, 'catering-call', tel === 'tel:+14253617640', tel);
    await shot(p, 'catering-page');
    await done(F, p);
  },

  async about(F) {
    const p = await open('desktop', '/');
    await p.locator('nav a', { hasText: /^about$/i }).first().click();
    await p.waitForURL('**/about-page'); await settle(p, 600);
    const grid = p.locator('img[alt="Restaurant Atmosphere"]');
    await grid.scrollIntoViewIfNeeded(); await settle(p, 1200);
    const a = await p.evaluate(() => ({
      h1: document.querySelector('h1')?.innerText,
      story: document.body.innerText.includes('The Story of Fat Pig BBQ') && document.body.innerText.includes('Bao Truong'),
      images: ['Fat Pig BBQ is Amazeballs', 'Delicious BBQ', 'Restaurant Atmosphere', 'Close up BBQ'].map(alt => { const i = document.querySelector(`img[alt="${alt}"]`); return !!i && i.naturalWidth > 0; }),
      current: document.querySelector('nav a[aria-current=page]')?.innerText,
    }));
    ok(F, 'about-page', a.h1 === 'About Us' && a.story && a.images.every(Boolean) && a.current === 'ABOUT', a);
    await shot(p, 'about-page');
    await done(F, p);
  },
};

browser = await chromium.launch();
try {
  for (const [name, run] of Object.entries(JOURNEYS)) {
    if (ONLY.length && !ONLY.includes(name)) continue;
    const t0 = Date.now();
    try { await run(name); } catch (e) { ok(name, 'journey-crashed', false, e.message.split('\n')[0]); }
    console.log(`TIME ${name} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  }
} finally {
  await browser.close();
}
fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify(results, null, 1));
const failed = results.filter(r => !r.pass).map(r => `${r.feature}/${r.id}`);
console.log(failed.length ? `FAILED: ${failed.join(', ')}` : `ALL PASS (${results.length} checks)`);
if (failed.length) process.exitCode = 1;
