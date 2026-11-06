---
name: verify-fatpig
description: Launch and drive the Fat Pig BBQ marketing site (Create React App web UI) in an isolated dev server plus gstack headless browser, and capture screenshot/DOM evidence. Use when you need to prove a UI change works in the real app: nav, home sections, menu, catering, contact form, routing.
---

# verify-fatpig

The app is a single-page React site (CRA, `react-scripts start`, React Router v6, Tailwind v3). The only user surface is the browser. There is no backend in this repo. The contact form posts to formsubmit.co, delivery links go to third-party sites, and the map is a Google Maps iframe that needs `REACT_APP_GOOGLE_MAPS`.

Everything runs through `.claude/skills/verify-fatpig/verify.sh`, from the repo root. Set `V=.claude/skills/verify-fatpig/verify.sh`.

## Launch

```bash
V=.claude/skills/verify-fatpig/verify.sh
$V launch                  # default port 3100; FATPIG_PORT=3123 $V launch for a second instance
```

- Needs `node_modules` (run `npm install` once) and gstack's browse binary at `~/.claude/skills/gstack/browse/dist/browse` (override with `BROWSE_BIN`).
- It refuses a port that is already taken. **Never drive port 3000.** That is the human's own `npm start`.
- Ready means: webpack printed `compiled`, `/` returns 200, **and** the headless browser rendered the `<nav>` containing `FAT PIG BBQ`. On success it prints `READY http://localhost:<port>  run_dir=<dir>`. A cold start takes about 15-40s.
- No seed data or migrations. All content is static in `src/`.
- Each instance gets its own browser tab (`BROWSE_SESSION=fatpig-verify-<port>`), so parallel runs on different ports don't collide. The browse daemon itself is shared, so don't call `browse stop`/`restart`.

## Doctor

```bash
$V doctor     # read-only; exits 1 on any failure
```

It checks four things: the process group is alive, the port's listener belongs to *our* process group, the compile succeeded, and the nav renders. It also prints the branch, commit, and `+dirty` state, so you know which code you are looking at. Run it first whenever anything looks off.

## Drive

`$V b <browse command>` runs gstack browse in this instance's tab. `$V url /path` prints the absolute URL. Useful commands: `goto`, `wait <sel>`, `click <sel>`, `fill <sel> <val>`, `js <expr>`, `text`, `snapshot -i` (ARIA tree with `@eN` refs you can click), `viewport 1440x900`, `device "iPhone 14"`, `console --errors`.

```bash
$V b viewport 1440x900
$V b goto "$($V url /menu)"
$V b wait "#meals"
$V b js "[...document.querySelectorAll('a')].find(a=>a.innerText.trim()==='Sides').click()"
```

Stable handles in this app:
- Routes: `/`, `/about-page`, `/menu`, `/catering`, `/contact`. Any other path renders the "Page under construction" page.
- Nav: `nav a` by visible text. Nav text is CSS-uppercased, so `innerText` returns `HOME`, `MENU`, and so on. The mobile menu button has the accessible name `Open main menu`.
- Menu sections: `#meals`, `#sides`, `#beverages`. Item names are `h3` elements inside each section.
- Contact form: `input[name=name]`, `input[name=email]`, `textarea[name=message]`, `button[type=submit]`.
- Selector click via `$V b click` takes CSS. For text matching, use `js` with `innerText` as shown above, or `snapshot -i` and then `click @eN`.

Framer Motion sections (home Catering block, About, Catering page) start at `opacity:0` until scrolled into view. Scroll the element into view (`$V b scroll <sel>`) before you screenshot or assert visibility.

## Evidence

```bash
$V shot <name> [--viewport]       # PNG into the run dir (full page by default)
$V b js "JSON.stringify({...})" | tee "$($V out)/<name>.json"
```

- Evidence lives in `$($V out)`, which is `/tmp/fatpig-verify/runs/<run-id>/` (`/private/tmp/...` on macOS). Cleanup never deletes it, and it copies `server.log` there on teardown.
- Proof standard: drive the real user path (click the link or tab a user would click, not `history.pushState` or a scroll call). Capture state **before and after** the action, plus a JSON probe of the resulting DOM or scroll state, and `console --errors` for new errors. The two React Router "Future Flag" warnings are a known baseline.
- External side effects: **do not submit the contact form**. It sends a real email to the restaurant through formsubmit.co. Verify the form up to submit: fields, `required` validation (`$V b js "document.querySelector('form').checkValidity()"`), and the `action` URL. Delivery and social links are verified by `href` and `target`, not by visiting them.
- Full-page screenshots don't scroll, so motion sections can show up as blank bands. That is a capture artifact, not proof of a bug. Scroll first, then check.

## Cleanup

```bash
$V cleanup
```

Cleanup kills only the process group that `launch` recorded (never by process name), removes `/tmp/fatpig-verify/state/<port>`, keeps the run's evidence directory, and reports whether the port is free. Run it after every attempt, including failed ones.

## Playwright

`@playwright/test` is a devDependency (Chromium via `npx playwright install chromium`). Use it for scripted multi-step flows, device emulation (`devices['iPhone 13']`), `reducedMotion`, and network/response checks. Resolve it from the repo with `createRequire(<repo>/package.json)` when a script lives outside the repo. Point it at `$($V url)`, the instance `launch` started, and write screenshots under `$($V out)`.

- `node .claude/skills/verify-fatpig/smoke.mjs "$($V url)" "$($V out)/smoke"` is a regression smoke for previously fixed bugs (sticky menu tabs, scroll reset, mobile menu close, active nav, back-to-top, 404 on mobile, catering tel link, footer links/logo, no 4xx responses). It prints PASS/FAIL per check and exits 1 on any failure.

- `node .claude/skills/verify-fatpig/visual-audit.mjs "$($V url)" "$($V out)/visual-audit"` sweeps every route at desktop, tablet, and mobile, clicks every in-app control, records video, and screenshots each step. It flags text that is covered, clipped, off-screen, hidden, or below WCAG AA contrast, and menu-tab jumps that leave the heading under the sticky bar. The report is `issues.json` next to `steps/` and `video/`. Known non-bugs: review-carousel lines caught mid-fade (`hidden-text`), hover colors left behind by the previous tap (`low-contrast` on a link), and mobile `back-to-top` (`control-missing`, because the button is hidden below 768px by design).

## Helpers

- `verify.sh`: `launch | doctor | b <browse args> | shot <name> [flags] | url [path] | out | cleanup`. Env: `FATPIG_PORT` (default 3100), `BROWSE_BIN`, `FATPIG_VERIFY_ROOT`.
- Feature recipes: [features/README.md](features/README.md).
