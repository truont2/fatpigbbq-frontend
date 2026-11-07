# Menu

A visitor browses Meals, Sides, and Beverages. Each item shows a photo, uppercase name, price, and description (beverages have no description). A sticky tab bar jumps between categories and marks the one in view. A PDF menu opens in a new tab. On desktop, a back-to-top button appears after scrolling.

## Sub-features

- `menu-sections` three sections render: `#meals` (13 items), `#sides` (10), `#beverages` (3).
- `menu-no-placeholder-copy` no item shows placeholder text such as "test".
- `menu-tab-initial` on load, the Meals tab is active.
- `menu-tab-<viewport>-<category>` clicking a tab sets the URL hash, keeps the bar pinned at 80px, lands the section heading fully below the bar in the top half of the screen, and marks that tab active in brand red.
- `menu-back-to-top-visible`, `menu-back-to-top-scrolls` past 600px of scroll on 768px and wider, a `Back to top` button appears and returns to the top.
- `menu-back-to-top-hidden-mobile` below 768px the button is hidden so it doesn't cover prices.
- `menu-pdf` "Download PDF Menu" serves a PDF and opens in a new tab.

## How to get to it (user POV)

- Click `MENU` in the nav, "View Our Menu" or "Explore Our Menu" on the home page, or "Our Menu" in the footer.
- Go directly to `/menu`, or to `/menu#sides` for a category.

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" menu`. Steps at desktop 1440x900, then iPhone 13:

- **Sections (desktop).** The `h3` counts per section are `[13, 10, 3]`, `#beverages` text has no `test`, and `.sticky a[aria-current="true"]` reads `Meals`.
- **Tab jumps.** Click the `.sticky a` for Sides, Beverages, then Meals. After each: `location.hash` matches, the bar's top is `80`, the heading's top is at least the bar's bottom plus 8 (about `192`) and less than half the viewport, and the active tab is that category in `rgb(185, 28, 28)`.
- **Back to top.** Scroll to 1500. On desktop, `Back to top` is visible, and clicking it returns `scrollY` to `0`. On mobile it is not visible.
- **PDF (desktop).** Fetching the link's `href` returns `200 application/pdf`, and the link has `target="_blank"`.
- **Proof.** `menu-tab-<viewport>-<category>.png` and `results.json`.

## Gotchas

- The tabs are plain `<a href="#id">` anchors. The global `scroll-behavior: smooth` animates the jump, and sections use `scroll-mt-48` (192px) so headings clear the nav and bar. There is no JS offset.
- The active tab comes from an IntersectionObserver, so it updates while scrolling. Wait for the smooth scroll to finish (about 1.8s) before asserting.
- `.App` must keep `overflow-x: clip`. `overflow: hidden` on any ancestor disables `position: sticky`.
- Several items share photos (for example the small ribs meal and the small combo). That's content, not a rendering bug.
