# Catering

A visitor learns how catering works: custom pricing by phone, 24-48h notice, optional delivery, and reheating instructions. They reach it from the nav or the home-page teaser.

## Sub-features

- `catering-page` `/catering` shows the "A Note on Ordering", "Delivery Service", and "Reheating Instructions" (3 steps) blocks.
- `catering-call` "Call us directly" should be a `tel:` link to (425) 361-7640 (currently fails, see Gotchas).
- `catering-teaser` the home "Bring the BBQ Home." block's "Learn More" link goes to `/catering`.

## How to get to it (user POV)

- Click `CATERING` in the nav.
- On the home page, scroll to "Bring the BBQ Home." and click `Learn More`.

## Driving it with verify.sh

Preconditions:

- Instance is healthy, with the desktop viewport `1440x900`.

- **Page content.** Run `$V b goto "$($V url /catering)"` and `$V b wait h1`, then scroll down (`$V b scroll footer`) so the motion blocks render. `$V b text` contains `A Note on Ordering`, `Preheat to 250`, `Wrap Tightly`, and `Heat for 20-30 Mins`.
- **Call link.** Run `$V b js "[...document.querySelectorAll('a')].find(a=>/Call us directly/i.test(a.innerText))?.href || 'NO_LINK'"`. Expected: it starts with `tel:`. Today it prints `NO_LINK` (FAIL).
- **Teaser.** Run `$V b goto "$($V url /)"`, scroll the teaser into view with `$V b js "[...document.querySelectorAll('h3')].find(h=>h.innerText.includes('Bring the BBQ')).scrollIntoView({block:'center'})"`, then click `Learn More` (`[...document.querySelectorAll('a')].find(a=>a.innerText.trim()==='Learn More').click()`). The URL ends in `/catering`.
- **Proof.** Run `$V shot catering-page --viewport` after scrolling, and `$V shot catering-teaser-before --viewport` before clicking.

## Gotchas

- **Known gap (2026-11-05):** "Call us directly" is a styled `<span>`, not a link, and the page shows no phone number. Report `catering-call` as failing until it becomes `<a href="tel:+14253617640">`.

- The teaser link is a plain `<a href="/catering">`, so clicking it does a full page reload, not a client-side route change. The assertion still holds.
- Motion blocks are invisible until scrolled into view. Assert on text after scrolling, or note that the text exists in the DOM regardless of opacity.
