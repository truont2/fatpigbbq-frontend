# About

A visitor reads the restaurant's story: Bao Truong founded Fat Pig BBQ in 2018 from a backyard barbecue passion, with a mission of affordable, quality food for Edmonds. A four-photo grid sits beside the story.

## Sub-features

- `about-page` `/about-page` shows the "About Us" hero, "The Story of Fat Pig BBQ" text naming Bao Truong, four loaded photos, and the nav's `ABOUT` link marked current.

## How to get to it (user POV)

- Click `ABOUT` in the nav, "About Us" in the footer, or "Read Our Story" on the home page.
- Go directly to `/about-page` (`/about` is the "Page under construction" page).

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" about`. Steps at desktop 1440x900:

- **Open.** From `/`, click the `ABOUT` nav link. The URL becomes `/about-page`.
- **Content.** Scroll the photo grid into view. The h1 is `About Us`, the body names "The Story of Fat Pig BBQ" and "Bao Truong", the four images (alts `Fat Pig BBQ is Amazeballs`, `Delicious BBQ`, `Restaurant Atmosphere`, `Close up BBQ`) have `naturalWidth > 0`, and `nav a[aria-current=page]` reads `ABOUT`.
- **Proof.** `about-page.png` and `results.json`.

## Gotchas

- The story text and photo grid animate in on scroll. Full-page screenshots taken without scrolling show a blank area where the grid belongs.
