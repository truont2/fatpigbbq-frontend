---
name: verify-fatpig
description: Launch the Fat Pig BBQ marketing site (Create React App web UI) on an isolated dev server and drive it with Playwright to prove a change works in the real app. Runs the feature-map journeys (nav, menu, home, contact, catering, about), a full visual audit across desktop/tablet/mobile, and before/after repros, capturing screenshots, video, and JSON results.
---

# verify-fatpig

The app is a single-page React site (CRA, `react-scripts start`, React Router v6, Tailwind v3). The only user surface is the browser. There is no backend in this repo. The contact form posts to formsubmit.co, delivery and press links go to third-party sites, and the map is a Google Maps embed (keyless fallback when `REACT_APP_GOOGLE_MAPS` is unset).

`verify.sh` manages the instance. Playwright (`@playwright/test`, a devDependency) is the only driver. Run everything from the repo root with `V=.claude/skills/verify-fatpig/verify.sh`.

## Launch

```bash
V=.claude/skills/verify-fatpig/verify.sh
$V launch                  # default port 3100; FATPIG_PORT=3123 $V launch for a second instance
```

- Needs `node_modules` and Playwright's Chromium: `npm install && npx playwright install chromium` once.
- It refuses a port that is already taken. **Never drive port 3000.** That is the human's own `npm start`.
- Ready means webpack printed `compiled`, `/` returns 200, **and** headless Chromium rendered the `<nav>` containing `FAT PIG BBQ`. On success it prints `READY http://localhost:<port>  run_dir=<dir>`. A cold start takes about 15-40s.
- No seed data or migrations. All content is static in `src/`.
- Each script opens its own browser, so instances on different ports never share browser state.

## Doctor

```bash
$V doctor     # read-only; exits 1 on any failure
```

It checks four things: the process group is alive, the port's listener belongs to *our* process group, the compile succeeded, and the nav renders in Chromium. It also prints the branch, commit, and `+dirty` state. Run it before the first drive, and again after any failed drive.

## Drive

```bash
node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys"            # every feature
node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" menu home  # a subset
node .claude/skills/verify-fatpig/visual-audit.mjs "$($V url)" "$($V out)/visual-audit"
```

- `journeys.mjs` runs one journey per `features/*.md` file. Step ids match each file's Sub-features. It prints `PASS`/`FAIL <feature>/<id> <detail>` and `TIME <feature>`, writes `results.json` and screenshots, and exits 1 on any FAIL. A full run takes about 40s.
- `visual-audit.mjs` sweeps every route at desktop, tablet, and mobile, clicks every in-app control, records video, and screenshots each step. It flags text that is covered, clipped, off-screen, hidden, or below WCAG AA contrast, and menu-tab jumps that leave a heading under the sticky bar. Known non-bugs live in its `KNOWN` list, each with a reason. They are reported as `allowed` and don't fail the run. Output is `issues.json` plus `steps/` and `video/`.
- `$V url /path` prints an absolute URL. `$V out` prints this run's evidence dir.

Stable handles in this app:
- Routes: `/`, `/about-page`, `/menu`, `/catering`, `/contact`. Any other path renders "Page under construction".
- Nav: `nav a` by visible text, CSS-uppercased (`innerText` is `MENU`). The current link has `aria-current="page"`. Below 1024px the links sit behind the button named `Open main menu`.
- Menu: sections `#meals`, `#sides`, `#beverages` with item `h3`s. Tabs are `.sticky a[href="#id"]`, and the active one has `aria-current="true"`.
- Contact form: `input[name=name]`, `input[name=email]`, `textarea[name=message]`.

## Evidence

- Evidence lives in `$($V out)`, which is `/tmp/fatpig-verify/runs/<run-id>/` (`/private/tmp/...` on macOS). Cleanup never deletes it, and it copies `server.log` there on teardown. Show the user the screenshots that prove a claim; don't just cite counts.
- Proof standard: drive the real user path (click the link or tab a user would click, never call router or scroll APIs to fake it). Assert the resulting state, and assert no page errors or 4xx/5xx responses (each journey's `no-errors` step).
- External side effects: **never submit the contact form**. It emails the real restaurant. Verify up to submit (validity, action, method). Delivery, press, and social links are verified by `href` and `target`, not by visiting them.

## Cleanup

```bash
$V cleanup
```

Cleanup kills only the process group that `launch` recorded (never by process name), removes `/tmp/fatpig-verify/state/<port>`, keeps the run's evidence directory, and reports whether the port is free. Run it after every attempt, including failed ones.

## Before-state repro

To prove a fix, show the old code failing on the same check:

```bash
WT=/tmp/fatpig-before
git worktree add --detach "$WT" <old-commit>
cp -cR node_modules "$WT/node_modules"                     # APFS clone; never symlink, the main node_modules follows the current branch
(cd "$WT" && npm install --no-save <dep-removed-since>)     # only if the fix removed a dependency
(cd "$WT" && FATPIG_PORT=3200 .claude/skills/verify-fatpig/verify.sh launch)
node .claude/skills/verify-fatpig/journeys.mjs http://localhost:3200 "$WT-journeys" <feature>   # expect FAILs
(cd "$WT" && FATPIG_PORT=3200 .claude/skills/verify-fatpig/verify.sh cleanup)
rm -rf "$WT" && git worktree prune                          # `git worktree remove --force` fails on the cloned node_modules
```

Run the current branch's `journeys.mjs` against the old instance, as shown, so the old code meets the new check.

## Adding a check

New probes go into the skill, never into one-off scratchpad scripts:
- A behavior a user can see belongs to a feature. Add a step to that feature's journey in `journeys.mjs` as `ok(F, '<sub-feature-id>', pass, detail)`, and list the id under the matching `features/*.md` Sub-features and Driving section.
- A new page or flow gets a new `features/<name>.md` (entry contract in `features/README.md`) and a matching `JOURNEYS.<name>`.
- A sweep-wide detector goes into `visual-audit.mjs`. A known non-bug goes into its `KNOWN` list with a one-line reason.
- Checks take the base URL and output dir as arguments from `$($V url)` and `$($V out)`, with no absolute paths or hardcoded ports.
- Run a new check once against the old code (see Before-state repro) to show it fails, then against the fix.

## Playwright tips

- Scroll with `window.scrollTo({ top, behavior: 'instant' })`. The global `scroll-behavior: smooth` otherwise animates the jump, and an immediate read-back returns a mid-scroll value.
- After a `click`, the pointer stays over the element and its hover style changes computed colors. Call `page.mouse.move(5, 600)` before reading `getComputedStyle` (`settle()` in `journeys.mjs` does this).
- Hidden-at-this-breakpoint elements are still in the DOM. Filter by `offsetParent` or `isVisible()` before counting.
- Motion sections (home catering teaser, About story and grid) start at `opacity: 0` until scrolled into view. Scroll first. Full-page screenshots that don't scroll show them blank.

## Gotchas

- The project uses Tailwind v3. v4 syntax such as `text-brand-red!` produces no CSS and fails silently. Confirm a class took effect with `getComputedStyle`, not by reading the source.
- `overflow: hidden` on any ancestor disables `position: sticky` for its descendants. `.App` uses `overflow-x: clip`, which clips horizontally without breaking sticky. Keep it that way.

## Helpers

- `verify.sh`: `launch | doctor | url [path] | out | cleanup`. Env: `FATPIG_PORT` (default 3100), `FATPIG_VERIFY_ROOT`.
- `journeys.mjs`: `<baseUrl> <outDir> [feature ...]`, the executable feature map.
- `visual-audit.mjs`: `<baseUrl> <outDir>`, the full-site sweep.
- Feature recipes: [features/README.md](features/README.md).
