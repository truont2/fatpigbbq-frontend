# Menu

A visitor browses Meals, Sides, and Beverages with a photo, name, price, and description per item. They jump between categories with tabs and can download a PDF menu.

## Sub-features

- `menu-sections` three sections render: `#meals` (13 items), `#sides` (10), `#beverages` (3).
- `menu-tab` clicking a category tab smooth-scrolls its section under the nav and marks the tab active.
- `menu-sticky-tabs` the tab bar should stay visible while scrolling (currently broken, see Gotchas).
- `menu-pdf` "Download PDF Menu" opens the PDF in a new tab.

## How to get to it (user POV)

- Click `MENU` in the nav, a home-page "View Our Menu" / "Explore Our Menu" button, or "Our Menu" in the footer.
- Go directly to `/menu`.

## Driving it with verify.sh

Preconditions:

- Instance is healthy, with the desktop viewport `1440x900`.

- **Sections.** Run `$V b goto "$($V url /menu)"` and `$V b wait "#meals"`, then `$V b js "JSON.stringify(['meals','sides','beverages'].map(id=>[id,document.querySelectorAll('#'+id+' h3').length]))"`. It returns `[["meals",13],["sides",10],["beverages",3]]`. Run `$V shot menu-tab-before --viewport`.
- **Tab jump.** Click Sides with `$V b js "[...document.querySelectorAll('a')].find(a=>a.innerText.trim()==='Sides').click()"`, wait about 1.5s for the 500ms smooth scroll, then run `$V b js "JSON.stringify({scrollY, sidesTop:Math.round(document.getElementById('sides').getBoundingClientRect().top)})"`. `sidesTop` is about `150` and `scrollY` is greater than 3000. Run `$V shot menu-tab-sides-after --viewport`.
- **Sticky tabs.** Run `$V b js "Math.round(document.querySelector('.sticky').getBoundingClientRect().top)"` after the jump. The expected value is `80`. Today it returns a large negative number (FAIL, see Gotchas).
- **PDF.** Read the href with `$V b js "[...document.querySelectorAll('a')].find(a=>/Download PDF/i.test(a.innerText)).href"`, then `curl -s -o /dev/null -w '%{http_code} %{content_type}' <href>`. Expect `200 application/pdf`, and the link has `target=_blank`.
- **Proof.** Save the JSON probes with `| tee "$($V out)/menu-*.json"`, plus the screenshots above.

## Gotchas

- **Known bug:** `.App` (src/App.css / App.js wrapper) has `overflow: hidden`, which disables `position: sticky`, so the tab bar scrolls away. Verified 2026-11-05 (`top` was -3087). Report it as a failing journey until fixed. Don't weaken the assertion.
- The tabs are `react-scroll` `<a>` elements with no `href`. `$V b click "a"` by CSS is ambiguous, so use the `innerText` match.
- The active-tab class is applied by scroll-spy after the scroll settles. Assert after waiting, not immediately.
- The full-page screenshot is very tall (about 7000px). Prefer `--viewport` for proof.
