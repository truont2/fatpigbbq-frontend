# Contact

A visitor finds the address, a tappable phone number, and an email link, and can fill in a message form that posts to formsubmit.co.

## Sub-features

- `contact-details` the address, a `tel:4253617640` link showing (425) 361-7640, and `mailto:fatpigbbq@yahoo.com`.
- `contact-form-empty-invalid` the empty form fails browser validation (all three fields are `required`).
- `contact-form-validation` an invalid email fails with `typeMismatch`.
- `contact-form-ready-unsent` a complete form validates, and its `action` is `https://formsubmit.co/…` with method `post`. **Never submitted**: submitting emails the real business.

## How to get to it (user POV)

- Click `CONTACT` in the nav (inside the menu button below 1024px), or "Contact" in the footer.
- Go directly to `/contact`.

## Driving it with journeys.mjs

Preconditions:

- `$V doctor` prints `DOCTOR OK`.

Run `node .claude/skills/verify-fatpig/journeys.mjs "$($V url)" "$($V out)/journeys" contact`. Steps at desktop 1440x900, all on one page in order:

- **Details.** The `tel:` and `mailto:` hrefs match the values above.
- **Empty.** `form.checkValidity()` is `false`.
- **Bad email.** Fill name `Linh Tran`, email `not-an-email`, message `Catering for 30 on Saturday?`. `checkValidity()` is `false` and the email's `validity.typeMismatch` is `true`.
- **Ready, unsent.** Change the email to `linh@example.org`. `checkValidity()` is `true`, the action and method match, and the pathname is still `/contact`. Stop here.
- **Proof.** `contact-form-filled.png` and `results.json`.

## Gotchas

- Never click `Send Message` or call `form.submit()` / `requestSubmit()`. The form is a native POST with no JS handler.
- The "Ready" step depends on the name and message from the "Bad email" step. Run the steps in order.
- The placeholders (`John Doe`, `john@example.com`) are not values. Assert on `.value` and validity, not on visible text.
- The form has no hidden formsubmit fields (`_next`, `_captcha`), so after a real submit the visitor lands on formsubmit's page, not back on the site.
