# Home page

The landing page has a photo hero with a menu button, story and promise blocks, a catering teaser, delivery-partner cards, a scrollable favorites strip, a rotating reviews carousel, press cards, and a Visit Us block with address, hours, and a map.

## Sub-features

- `home-hero` the "View Our Menu" button routes to `/menu`.
- `home-favorites` the `→` arrow scrolls the favorites strip (arrows show on 768px and wider; on mobile you swipe).
- `home-reviews` four dot buttons. Each jumps to a review, and the carousel otherwise auto-advances every 6s.
- `home-delivery` three "Order Now" cards (GrubHub via `fatpigbbq.dine.online`, Uber Eats, DoorDash) open in new tabs.
- `home-press` three "Read Full Story" press cards open in new tabs.
- `home-visit` the map iframe sits flush against the address and hours panel, which lists Mon-Thurs, Fri-Sat, and Sunday closed.

## How to get to it (user POV)

- Open `/`, or click the logo or `HOME` in the nav.

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" home`. Steps at desktop 1440x900:

- **Hero.** Wait for the h1 plus about 1s for the fade-in, then click the `View Our Menu` button. `#meals` appears at `/menu`.
- **Favorites.** Scroll `.snap-x` into view, click the `→` button. `scrollLeft` increases (about 320, snapping to cards).
- **Reviews.** Click the 3rd `button.w-3.h-3.rounded-full`. Within about 1s the blockquote contains "barbecue was excellent". There are 4 dots.
- **Delivery and press.** Count `a[target=_blank]` whose text includes "Order Now" (3, with the hosts above) and "Read Full Story" (3). Don't visit them.
- **Visit Us.** Scroll the map iframe into view. Its `src` is the keyless `maps.google.com/maps?q=Fat+Pig…` embed (or the `google.com/maps/embed/v1/place` API when `REACT_APP_GOOGLE_MAPS` is set). The gap between map and panel is `0`, and the panel lists the address, `Mon - Thurs`, and `Closed`.
- **Proof.** `home-hero.png`, `home-favorites.png`, `home-reviews.png`, `home-visit.png`, and `results.json`.

## Gotchas

- The hero fades in only after its 5.7 MB photo loads. Screenshots taken right away show a dark hero.
- The catering teaser animates in on scroll (starts at `opacity: 0`), so full-page screenshots show it blank. Scroll first.
- Dot clicks don't reset the 6s timer, so the next auto-advance can come sooner. Read the quote right after clicking.
- Footer links also go to Uber Eats, DoorDash, and GrubHub (`grubhub.com`, unlike the card's `dine.online`). Scope delivery checks to "Order Now" cards.
- The map iframe is `loading="lazy"`. Scroll to it before reading its frame.
