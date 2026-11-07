# Fat Pig BBQ verification map

This directory is the maintained source for verifying the user-facing behavior of the Fat Pig BBQ site. Read this index, then use the matching feature file as the recipe. All commands assume the repo root and `V=.claude/skills/verify-fatpig/verify.sh`.

## Baseline preconditions

- `$V launch` printed `READY`, and `$V doctor` prints `DOCTOR OK` for this run's port (default 3100).
- Viewports used by the journeys: desktop 1440x900, tablet 800x1024, mobile iPhone 13 (Playwright `devices`).
- Never drive port 3000 or any instance that this run did not launch.

## Driving conventions

- Each feature file's recipe is executable: `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" <feature>`. Keep the file's steps and the journey in sync.
- Prefer route paths, element ids, form `name` attributes, and visible link text over DOM position.
- Click the way a user would: a nav link, a tab, a button. Never call router or scroll APIs directly.
- Scroll motion sections into view before asserting on them.
- No mutations go to external services. Contact form submit, delivery links, and social links are checked up to the boundary.

## Proof and skip reporting

- Each journey writes screenshots and `results.json` into the output dir under `$($V out)`.
- Each journey ends with a `no-errors` step: no page errors and no 4xx/5xx responses.
- Record the feature ID and entry point with every artifact name, for example `menu-tab-sides-after.png`.
- Report an unreachable path with the attempted command and the unmet precondition. Do not report a skipped entry point as verified through another one.

## Feature entry contract

Each feature file has an H1, one paragraph of user-visible behavior, then exactly four H2s: `Sub-features`, `How to get to it (user POV)`, `Driving it with verify.sh`, `Gotchas`.

## Features

- [Site navigation](./navigation.md): desktop nav, mobile menu, active state, logo home link, unknown routes.
- [Menu](./menu.md): category tabs, sections, prices, PDF download.
- [Home page](./home.md): hero CTA, favorites carousel, reviews, delivery links, visit-us info.
- [Contact](./contact.md): contact details, form fields and validation (no submit).
- [Catering](./catering.md): catering info page and the home teaser that links to it.
- [About](./about.md): the story page and photo grid.
