# Site navigation

A visitor moves between Home, About, Menu, Catering, and Contact from a fixed top nav on desktop, or a collapsible menu on mobile. The current page is highlighted, and the logo returns home.

## Sub-features

- `nav-desktop` five links route to their pages without a full reload.
- `nav-active` the link for the current route is styled as active.
- `nav-logo` the logo/wordmark returns to `/`.
- `nav-mobile` below 768px a menu button reveals the same five links.
- `nav-scrolled` after scrolling, the nav gains a dark translucent background.
- `nav-unknown` an unknown path renders the "Page under construction" page inside the nav/footer shell.

## How to get to it (user POV)

- Click `HOME`, `ABOUT`, `MENU`, `CATERING`, or `CONTACT` in the top bar.
- Click the pig logo or the `FAT PIG BBQ` wordmark.
- On a phone, tap the menu (hamburger) button and then a link.
- Type a URL that doesn't exist, for example `/order`.

## Driving it with verify.sh

Preconditions:

- Instance is healthy, with the desktop viewport set.

- **Desktop link.** From `/`, click Menu. Run `$V b js "[...document.querySelectorAll('nav a')].find(a=>a.innerText.trim()==='MENU').click()"`, then `$V b wait "#meals"` and `$V b url`. The URL ends in `/menu` and the h1 reads `Our Menu`.
- **Active state.** Run `$V b js "[...document.querySelectorAll('nav a')].filter(a=>getComputedStyle(a).color==='rgb(185, 28, 28)').map(a=>a.innerText)"`. It returns `["MENU"]` while on `/menu`.
- **Logo home.** Run `$V b click "nav a[href='/']"`. The URL is `/` and the hero h1 contains `Fat Pig`.
- **Mobile menu.** Run `$V b device "iPhone 14"`, `$V b goto "$($V url /)"`, then `$V b snapshot -i` and click the button named `Open main menu`. Five link names appear in the panel. Tap `CONTACT`, and the URL is `/contact`.
- **Unknown route.** Run `$V b goto "$($V url /order)"`, then `$V b text`. The text contains `Page under construction`, plus the nav and footer.
- **Proof.** Run `$V shot nav-<id>-after --viewport` after each step, and `$V b console --errors`.

## Gotchas

- Nav labels are uppercased by CSS. `innerText` is `MENU`, while the DOM text is `Menu`.
- The active color is brand red `rgb(185, 28, 28)` on a dark hero photo, which has low contrast by design (see the design audit F1). The check is by computed color, not visual legibility.
- On the 404 page the heading is `invisible md:visible`, so on mobile the page shows no text at all. That is an existing bug, not a driver error.
- The scrolled-nav style uses a window scroll listener with a threshold of 20px. Scroll with `$V b scroll footer` before asserting.
