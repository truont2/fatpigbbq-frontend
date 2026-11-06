# Contact

A visitor finds the address, phone, and email, and can fill in a message form addressed to the restaurant.

## Sub-features

- `contact-details` address, `(425) 361-7640`, and a `mailto:fatpigbbq@yahoo.com` link.
- `contact-form-fields` Name, Email, and Message fields with visible labels, all `required`.
- `contact-form-validation` the browser blocks an empty or invalid email.
- `contact-form-submit` POST to formsubmit.co. **Never exercised by verification** (it emails the real business).

## How to get to it (user POV)

- Click `CONTACT` in the nav, or "Contact" in the footer.
- Go directly to `/contact`.

## Driving it with verify.sh

Preconditions:

- Instance is healthy.

- **Details.** Run `$V b goto "$($V url /contact)"` and `$V b wait form`, then `$V b js "JSON.stringify({tel:document.body.innerText.includes('(425) 361-7640'), mail:document.querySelector('a[href^=mailto]').href})"`. The result is `tel:true`, and `mail` is `mailto:fatpigbbq@yahoo.com`.
- **Empty invalid.** Run `$V b js "document.querySelector('form').checkValidity()"`. It returns `false`.
- **Bad email.** Run `$V b fill "input[name=name]" "Linh Tran"`, `$V b fill "input[name=email]" "not-an-email"`, and `$V b fill "textarea[name=message]" "Catering for 30 on Saturday?"`. `checkValidity()` is still `false`, and `document.querySelector('input[name=email]').validity.typeMismatch` is `true`.
- **Valid, unsent.** Run `$V b fill "input[name=email]" "linh@example.org"`. `checkValidity()` is `true`. Read `document.querySelector('form').action` and expect a `https://formsubmit.co/...` URL with method `post`. Stop here.
- **Proof.** Run `$V shot contact-form-filled --viewport` and save the probes as JSON.

## Gotchas

- Do not click `Send Message` or call `form.submit()`. It sends a real email and redirects to formsubmit's captcha page.
- The placeholders (`John Doe`, `john@example.com`) are not values. Assert on `.value`, not on visible text.
- Labels are uppercase via CSS (`NAME`, `EMAIL`, `MESSAGE`).
