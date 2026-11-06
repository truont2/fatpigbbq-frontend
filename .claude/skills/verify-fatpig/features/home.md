# Home page

The landing page introduces the restaurant with a photo hero and menu CTA, then story sections, a catering teaser, delivery-partner links, a scrollable favorites strip, rotating customer reviews, press articles, and a Visit Us block with address, hours, and map.

## Sub-features

- `home-hero` hero photo, brand h1, and "View Our Menu" button that routes to `/menu`.
- `home-favorites` horizontal favorites strip with left/right arrow buttons (desktop).
- `home-reviews` review carousel auto-advances every 6s. The dots jump to a review.
- `home-delivery` GrubHub / Uber Eats / DoorDash cards link out in a new tab.
- `home-press` three press cards link to external articles.
- `home-visit` address, hours (Sunday closed), Google Maps iframe.

## How to get to it (user POV)

- Open `/`, or click the logo or `HOME` in the nav.

## Driving it with verify.sh

Preconditions:

- Instance is healthy, with the desktop viewport `1440x900`.

- **Hero CTA.** Run `$V b goto "$($V url /)"` and `$V b wait h1`, then `$V shot home-hero-before --viewport`. Click with `$V b js "[...document.querySelectorAll('button')].find(b=>/View Our Menu/i.test(b.innerText)).click()"`, then `$V b wait "#meals"`. The URL ends in `/menu`.
- **Favorites arrows.** Back on `/`, run `$V b scroll "h2"` until "Customer Favorites" is in view (or `$V b js "[...document.querySelectorAll('h2')].find(h=>h.innerText.includes('Customer Favorites')).scrollIntoView()"`). Read the strip's `scrollLeft` (`document.querySelector('.snap-x').scrollLeft`), click the `→` button, wait 1s, and read it again. It should increase by about 300.
- **Reviews dots.** Click the 3rd dot under "What Our Customers Say" (`[...document.querySelectorAll('button')].filter(b=>b.className.includes('rounded-full w-'))[2]`, or via `snapshot -i`). The blockquote text changes to the `Mark H.` review.
- **Delivery links.** Run `$V b js "JSON.stringify([...document.querySelectorAll('a[target=_blank]')].filter(a=>/grubhub|ubereats|doordash|dine.online/.test(a.href)).map(a=>[a.innerText.trim().split('\\n')[0],a.href]))"`. Three cards are listed. Do not visit them.
- **Visit Us.** Run `$V b text`. It contains `7533 Olympic View Dr`, `Mon - Thurs`, and `Closed`.
- **Proof.** Take viewport screenshots after each step and run `$V b console --errors`.

## Gotchas

- The hero image fades in only after a 5.7 MB JPEG loads, so screenshots taken immediately can show a black hero. `wait h1`, then allow about 1s.
- The home Catering teaser starts at `opacity:0` (framer-motion `whileInView`). It is blank in full-page shots until scrolled.
- The reviews auto-advance every 6s, so assertions on the text race the timer. Click a dot first, then read within 6s.
- The map iframe is blank locally unless `REACT_APP_GOOGLE_MAPS` is set in `.env`. Treat the map as unverifiable locally and note it.
- GrubHub links differ: the home card goes to `fatpigbbq.dine.online`, while the footer goes to `grubhub.com`.
