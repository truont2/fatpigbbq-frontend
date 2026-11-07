# Site navigation

A visitor moves between Home, About, Menu, Catering, and Contact from a fixed top bar. At 1024px and wider the links are inline. Below 1024px a menu button opens a panel with the same links. The current page's link is marked, the logo returns home, every route change starts at the top, and unknown paths show a "Page under construction" page inside the same shell.

## Sub-features

- `nav-desktop` five inline links route client-side (no reload). About goes to `/about-page`, not `/about`.
- `nav-scroll-reset` a route change starts the new page at scroll 0.
- `nav-active` the current link has `aria-current="page"`, white text, and a brand-red bottom border.
- `nav-scrolled` past 20px of scroll the bar turns dark translucent.
- `nav-logo` the logo/wordmark returns to `/`.
- `nav-footer` on every page the footer's external links open in a new tab, its icon links have labels, and its logo keeps its aspect ratio.
- `nav-tablet-uses-mobile-menu` from 768px to 1023px the menu button shows instead of the inline links.
- `nav-mobile-open` the button (accessible name `Open main menu`) opens a panel with five links.
- `nav-mobile-closes` tapping a panel link navigates and closes the panel.
- `nav-unknown` an unknown path renders "Page under construction" below the fixed nav, with nav and footer.

## How to get to it (user POV)

- Click a link in the top bar on desktop, or open the menu button and tap a link below 1024px.
- Click the pig logo or the `FAT PIG BBQ` wordmark.
- Use the footer links (About Us, Our Menu, Contact), which appear on every page.
- Type a URL that doesn't exist, for example `/order`.

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" navigation`. Steps, at desktop 1440x900 unless noted:

- **Desktop link.** From the bottom of `/`, click the `MENU` link. The pathname is `/menu`, the h1 is `Our Menu`, and `scrollY` is `0` (`nav-desktop`, `nav-scroll-reset`).
- **Active link.** `nav a[aria-current=page]` reads `MENU`, with color `rgb(255, 255, 255)` and border-bottom `rgb(185, 28, 28)` (`nav-active`).
- **Scrolled bar.** At scroll 400 the nav class contains `bg-black/80` (`nav-scrolled`).
- **Logo.** Click `nav a[href='/']`. The pathname is `/` and the h1 contains `Fat Pig` (`nav-logo`).
- **Footer.** Every external footer link has `target="_blank"`, icon-only links have an `aria-label`, and the logo's rendered ratio matches its natural ratio (`nav-footer`).
- **Tablet (800px).** The menu button is displayed, and zero inline links are visible (`nav-tablet-uses-mobile-menu`).
- **Mobile (iPhone 13).** Click `Open main menu`. Five visible links appear. Tap `Contact`: the URL is `/contact` and the panel is gone (`nav-mobile-open`, `nav-mobile-closes`).
- **Unknown route (mobile).** At `/order`, the "Page under construction" h1 is visible below the nav's bottom edge and a footer exists (`nav-unknown`).
- **Proof.** `navigation-*.png` and `results.json` in the output dir.

## Gotchas

- Nav labels are uppercased by CSS: `innerText` is `MENU`, the DOM text is `Menu`.
- Hover styles apply only to inactive links. Move the mouse away before reading styles on a link you just clicked.
- Below 1024px the inline links are `display: none` but still in the DOM. Count only visible links (`offsetParent`).
- The `Open main menu` accessible name doesn't change when the panel is open. Assert the panel's links, not the button label.
