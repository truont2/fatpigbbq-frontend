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
ok('no-console-errors', errs.length === 0, errs.slice(0, 3));
await b.close();
const failed = Object.entries(res).filter(([, v]) => !v).map(([k]) => k);
console.log(failed.length ? 'FAILED: ' + failed.join(',') : 'ALL PASS');
if (failed.length) process.exitCode = 1;
