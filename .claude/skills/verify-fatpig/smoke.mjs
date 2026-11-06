// Playwright regression smoke for fixed bugs. Usage: node .claude/skills/verify-fatpig/smoke.mjs "$($V url)" "$($V out)/smoke"

import { createRequire } from 'module';
const require = createRequire(new URL('../../../package.json', import.meta.url));
const { chromium, devices } = require('@playwright/test');
const B = (process.argv[2] || 'http://localhost:3100').replace(/\/+$/, ''); const OUT = process.argv[3] || '/tmp/fatpig-smoke'; (await import('fs')).mkdirSync(OUT, { recursive: true });
const res = {}; const ok = (k, pass, v) => { res[k] = pass; console.log((pass ? 'PASS ' : 'FAIL ') + k + ' ' + JSON.stringify(v)); };
const b = await chromium.launch();
const errs = [];
const d = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
d.on('pageerror', e => errs.push(e.message)); d.on('response', r => r.status() >= 400 && errs.push(r.status() + ' ' + r.url().slice(0, 90)));
// sticky tabs
await d.goto(B + '/menu', { waitUntil: 'networkidle' });
await d.getByText('Sides', { exact: true }).first().click(); await d.waitForTimeout(1200);
const top = await d.evaluate(() => Math.round(document.querySelector('.sticky').getBoundingClientRect().top));
ok('menu-sticky-tabs', top >= 60 && top <= 100, { top }); await d.screenshot({ path: OUT + '/fix-sticky-after.png' });
// test copy gone
const txt = await d.locator('#beverages').innerText(); ok('menu-no-test-copy', !/\btest\b/i.test(txt), txt.replace(/\s+/g, ' ').slice(0, 80));
// back to top
const btt = d.getByRole('button', { name: 'Back to top' }); ok('back-to-top-button', await btt.isVisible(), {});
await btt.screenshot({ path: OUT + '/fix-back-to-top.png' });
await btt.click(); await d.waitForTimeout(1500); ok('back-to-top-scrolls', (await d.evaluate(() => scrollY)) === 0, { y: await d.evaluate(() => scrollY) });
// route change scroll reset (desktop)
await d.goto(B + '/', { waitUntil: 'networkidle' }); await d.evaluate(() => scrollTo(0, document.body.scrollHeight)); await d.waitForTimeout(300);
await d.locator('nav a', { hasText: /^menu$/i }).first().click(); await d.waitForSelector('#meals'); await d.waitForTimeout(300);
ok('route-change-scroll-top', (await d.evaluate(() => scrollY)) === 0, { y: await d.evaluate(() => scrollY) });
// active nav contrast
const act = await d.evaluate(() => { const a = document.querySelector('nav a[aria-current=page]'); const s = getComputedStyle(a); return { text: a.innerText, color: s.color, border: s.borderBottomColor }; });
ok('nav-active-legible', act.text === 'MENU' && act.color === 'rgb(255, 255, 255)' && act.border === 'rgb(185, 28, 28)', act);
await d.screenshot({ path: OUT + '/fix-nav-active.png', clip: { x: 0, y: 0, width: 1440, height: 90 } });
// catering tel
await d.goto(B + '/catering', { waitUntil: 'networkidle' });
const tel = await d.evaluate(() => [...document.querySelectorAll('a[href^="tel:"]')].map(a => a.href + '|' + a.innerText));
ok('catering-tel-link', tel.some(t => t.startsWith('tel:+14253617640')), tel);
// footer
const foot = await d.evaluate(() => { const f = document.querySelector('footer'); const ext = [...f.querySelectorAll('a[href^=http]')]; const img = f.querySelector('img'); return { extNoTarget: ext.filter(a => a.target !== '_blank').length, unlabeled: ext.filter(a => !a.innerText.trim() && !a.getAttribute('aria-label')).length, logoRatio: +(img.clientWidth / img.clientHeight).toFixed(2), natural: +(img.naturalWidth / img.naturalHeight).toFixed(2) }; });
ok('footer-links-and-logo', foot.extNoTarget === 0 && foot.unlabeled === 0 && Math.abs(foot.logoRatio - foot.natural) < 0.03, foot);
// mobile
const m = await (await b.newContext({ ...devices['iPhone 13'] })).newPage();
m.on('pageerror', e => errs.push(e.message));
await m.goto(B + '/', { waitUntil: 'networkidle' });
await m.getByRole('button', { name: /open main menu/i }).click(); await m.waitForTimeout(400);
await m.locator('nav a', { hasText: /^contact$/i }).last().click(); await m.waitForURL('**/contact'); await m.waitForTimeout(700);
const still = await m.locator('nav a', { hasText: /^contact$/i }).last().isVisible();
ok('mobile-nav-closes', !still, { url: m.url(), panelVisible: still }); await m.screenshot({ path: OUT + '/fix-mobile-nav-after.png' });
await m.goto(B + '/order', { waitUntil: 'networkidle' });
ok('mobile-404-heading', await m.locator('h1', { hasText: 'Page under construction' }).isVisible(), {});
await m.screenshot({ path: OUT + '/fix-mobile-404.png' });
const hov = await m.evaluate(() => document.documentElement.scrollWidth <= innerWidth); ok('mobile-404-no-hscroll', hov, {});
// menu tab jumps leave the section heading fully visible below the sticky bar, and the active tab is red
for (const [vp, o] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', devices['iPhone 13']]]) {
  const pg = await (await b.newContext(o)).newPage();
  await pg.goto(B + '/menu', { waitUntil: 'networkidle' });
  for (const tab of ['Sides', 'Beverages', 'Meals']) {
    await pg.getByText(tab, { exact: true }).first().click(); await pg.mouse.move(5, 600); await pg.waitForTimeout(1600);
    const t = await pg.evaluate(label => {
      const bar = document.querySelector('.sticky').getBoundingClientRect();
      const h = [...document.querySelectorAll('h2')].find(x => x.innerText.trim() === label).getBoundingClientRect();
      const active = [...document.querySelectorAll('.sticky a')].find(a => a.innerText.trim() === label);
      return { barBottom: Math.round(bar.bottom), headingTop: Math.round(h.top), vh: innerHeight, activeColor: getComputedStyle(active).color };
    }, tab);
    ok(`menu-heading-clear-${vp}-${tab}`, t.headingTop >= t.barBottom + 8 && t.headingTop < t.vh / 2, t);
    ok(`menu-active-tab-red-${vp}-${tab}`, t.activeColor === 'rgb(185, 28, 28)', t.activeColor);
  }
  await pg.screenshot({ path: OUT + `/menu-tab-${vp}.png` });
}
// tablet nav: wordmark stays on one line and does not overlap any nav link
const tb = await (await b.newContext({ viewport: { width: 768, height: 1024 } })).newPage();
await tb.goto(B + '/', { waitUntil: 'networkidle' });
const nav = await tb.evaluate(() => {
  const brand = [...document.querySelectorAll('nav span')].find(s => s.innerText.trim() === 'FAT PIG BBQ' || s.innerText.trim() === 'Fat Pig BBQ').getBoundingClientRect();
  const links = [...document.querySelectorAll('nav a')].filter(a => a.offsetParent && a.getBoundingClientRect().width && /^(home|about|menu|catering|contact)$/i.test(a.innerText.trim())).map(a => a.getBoundingClientRect());
  const hit = links.some(l => !(l.right <= brand.left || l.left >= brand.right || l.bottom <= brand.top || l.top >= brand.bottom));
  return { brandHeight: Math.round(brand.height), overlaps: hit };
});
ok('tablet-nav-no-overlap', nav.brandHeight <= 32 && !nav.overlaps, nav);
await tb.screenshot({ path: OUT + '/tablet-nav.png', clip: { x: 0, y: 0, width: 768, height: 120 } });
// map card: map and info panel touch, no exposed card background between them
for (const [vp, o] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', devices['iPhone 13']]]) {
  const pg = await (await b.newContext(o)).newPage();
  await pg.goto(B + '/', { waitUntil: 'networkidle' });
  const f = pg.locator('iframe[title="Fat Pig BBQ Location"]'); await f.scrollIntoViewIfNeeded(); await pg.waitForTimeout(400);
  const g = await f.evaluate(fr => { const m = fr.parentElement.getBoundingClientRect(), i = fr.parentElement.parentElement.children[1].getBoundingClientRect(); return { gapX: Math.round(i.left - m.right), gapY: Math.round(i.top - m.bottom) }; });
  ok(`map-no-gap-${vp}`, vp === 'desktop' ? g.gapX === 0 : g.gapY === 0, g);
  await f.evaluate(fr => fr.parentElement.parentElement.scrollIntoView({ block: 'center' }));
  await pg.screenshot({ path: OUT + `/map-card-${vp}.png` });
}
ok('no-console-errors', errs.length === 0, errs.slice(0, 3));
await b.close();
const failed = Object.entries(res).filter(([, v]) => !v).map(([k]) => k);
console.log(failed.length ? 'FAILED: ' + failed.join(',') : 'ALL PASS');
if (failed.length) process.exitCode = 1;
