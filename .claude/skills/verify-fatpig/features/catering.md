# Catering

A visitor learns how catering works and reaches it from the nav or the home-page teaser. There is no fixed menu: pricing is tailored to the party's needs and size, by phone or in person. Large orders need 24-48 hours' notice. Delivery is available for special occasions depending on order size and location. The page closes with three reheating steps.

## Sub-features

- `catering-teaser` the home "Bring the BBQ Home." block's `Learn More` link goes to `/catering`.
- `catering-page` the page shows "A Note on Ordering", "Delivery Service", and "Reheating Instructions" (Preheat to 250°F, Wrap Tightly, Heat for 20-30 Mins).
- `catering-call` "Call us at (425) 361-7640" is a `tel:+14253617640` link.

## How to get to it (user POV)

- Click `CATERING` in the nav (inside the menu button below 1024px).
- On the home page, scroll to "Bring the BBQ Home." and click `Learn More`.

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" catering`. Steps at desktop 1440x900:

- **Teaser.** On `/`, scroll the "Bring the BBQ Home." h3 into view and click the `Learn More` link. The URL becomes `/catering`.
- **Page.** Body text contains all three block headings and the three reheating steps.
- **Call.** The first `a[href^="tel:"]` is `tel:+14253617640`.
- **Proof.** `catering-page.png` and `results.json`.

## Gotchas

- `Learn More` is a plain `<a href="/catering">`, so it does a full page load, not a client-side route change. Wait for the URL and h1.
- Only the home teaser animates in on scroll. On `/catering`, only the hero h1 animates (on mount), and the blocks are static.
- The teaser promises pickup only. Delivery is mentioned only on `/catering`.
