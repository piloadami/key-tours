# Edit Log — Key Tours

## 2026-05-23 — Add "Private Tour" keyword to all 6 tour page titles (SEO T4)
**Request:** SEO audit T4 — add "private tour" keyword to title tags for ranking signal
**Changed:** tour-centro.html, tour-copa.html, tour-mototaxi.html, tour-music.html, tour-nature.html, tour-nightlife.html
**What changed:**
- tour-centro: `City Centre & Santa Teresa — Key Tours Rio` → `Private Tour: City Centre & Santa Teresa | Key Tours Rio`
- tour-copa: `Copacabana — Key Tours Rio` → `Private Tour: Copacabana | Key Tours Rio`
- tour-mototaxi: `Rio on Two Wheels — Key Tours Rio` → `Private Tour: Rio on Two Wheels | Key Tours Rio`
- tour-music: `Rio's Musical Soul — Key Tours Rio` → `Private Tour: Rio's Musical Soul | Key Tours Rio`
- tour-nature: `Rio Nature — Key Tours Rio` → `Private Tour: Rio Nature & Tijuca Forest | Key Tours Rio`
- tour-nightlife: `Night Life — Key Tours Rio` → `Private Tour: Rio Nightlife & Lapa | Key Tours Rio`
**Reason / context:** "Private tour Rio de Janeiro" has meaningful search volume. Title tag is Google's highest-weight on-page signal. Also normalised separator from `—` to `|` (industry standard for title tags).

## 2026-05-23 — Fix empty alt on YouTube thumbnail (SEO)
**Request:** SEO audit T9 — empty alt attribute on video poster image
**Changed:** index.html
**What changed:**
- `img` at line 1464 (YouTube thumbnail `EAYVSn5Shw0/maxresdefault.jpg`): `alt=""` → `alt="Key Tours Rio de Janeiro — video preview"`
**Reason / context:** Empty alt on a decorative-but-meaningful video poster thumbnail. Image is inside a clickable play button for the Key Tours promo video — descriptive alt improves accessibility and removes an SEO warning.

## 2026-05-01 — Stack hero microline partner names vertically (one per line)
**Request:** "hero section a bit crowded" → "just move each collaborator to its own line"
**Changed:** index.html (CSS only)
**What changed:**
- `.hero-trust` now uses `display: flex; flex-direction: column; align-items: center;` so the label + each partner anchor stack vertically and remain centered
- `.hero-trust-label` becomes block with bottom margin instead of inline with right margin
- `.hero-trust a` becomes `display: block` with small vertical padding (touch target spacing)
- `.hero-trust-sep` middots set to `display: none` (HTML markup preserved for revertability — just invisible)
- `line-height` tightened from 1.7 → 1.5 since separator spacing is no longer needed
**Reason / context:** On 375px iPhone SE viewport, the 4-partner hero microline was wrapping mid-name across 3 lines (e.g. "...Voyageurs du / Monde Dehouche Viajeros / Modo Avión LIT Media Productions"). Stacking each on its own line trades ~1 extra line of vertical space for clean readability — no more mid-word wraps. Also improves desktop hierarchy: partner names are scannable as a list rather than a comma-soup.

## 2026-05-01 — Make partnership names clickable inside the new FAQ answer
**Request:** "for what's your tour guide experience make mentions clickable"
**Changed:** index.html (CSS + FAQ HTML)
**What changed:**
- Added `.faq-a a` CSS rule: heading-color text, weight 500, subtle 1px beige underline (offset 3px), hover swaps to terracotta accent — matches the trust-strip link affordance pattern used elsewhere on the page
- Wrapped Voyageurs du Monde, Dehouche, Viajeros Modo Avión, and LIT Media Productions in `<a target="_blank" rel="noopener noreferrer">` tags inside all 3 language spans of the "What's your tour guide experience?" FAQ answer
- Schema.org JSON-LD intentionally NOT updated (Schema.org @text fields are plain text, no HTML allowed)
**Reason / context:** User wanted the partner names in the FAQ answer to be clickable for verification, matching the hero microline + trust-strip behavior.

## 2026-05-01 — Add Dehouche, Viajeros Modo Avión, LIT Media Productions partnerships
**Request:** "hero section needs to contain more of keyla's partnerships to create authority" — add Dehouche, Viajeros Modo Avión, and LIT Media Productions next to existing Voyageurs du Monde mention
**Changed:** index.html (CSS + hero HTML + trust-strip HTML + FAQ HTML + JSON-LD)
**What changed:**
- New `.hero-trust` CSS block (microline style: muted beige, sm font-size, underlined links, accent-light hover) + `.hero-trust-sep` middot separator
- Added `<p class="hero-trust">` below the hero CTA button — single line "Booked by [Voyageurs du Monde · Dehouche · Viajeros Modo Avión · LIT Media Productions]" in EN/PT/ES, all 4 names link out to respective sites
- New `.trust-sep` + `.trust-item-multi` CSS for the Social Proof trust-strip (separator dot + wrap support)
- Extended Social Proof trust-strip — added Dehouche, Viajeros Modo Avión, LIT Media Productions as additional `<a class="trust-link">` items inside the same "Featured by" group, separated by `·` middots
- New FAQ Q&A inserted after "Why a non-certified guide?" — Q: "What's your tour guide experience?" / "Qual é a sua experiência como guia?" / "¿Cuál es tu experiencia como guía?". Answer mentions all 4 partnerships in 4 sentences (one per partner). LIT Media line specifies role as "logistics production manager for a Victoria's Secret event"
- Schema.org FAQPage JSON-LD updated with matching new Q&A in third-person Keyla form so Google sees the same content
**Voice/tone notes:** Matched existing FAQ first-person "I" voice (not third-person), neutral observational phrasing, no brochure framing. Dehouche described as "a Brazilian luxury travel agency"; Viajeros Modo Avión left undescribed (verb does the work: "hires me to guide their Spanish-speaking travelers"). LIT Media positioned as outside-guiding production work to honestly differentiate from the three travel partners.
**Reason / context:** User wanted more partnership authority signals in the hero. Voyageurs du Monde alone wasn't enough credibility ammo; Dehouche + Viajeros add tour-guide partnership depth across French / Brazilian / Spanish-speaking markets, LIT adds production credibility from a recognizable consumer brand (Victoria's Secret).

## 2026-04-30 — Make Voyageurs du Monde + Tripadvisor in trust strip clickable
**Request:** make voyagers du monde and listed on trip clickable
**Changed:** index.html
**What changed:**
- Wrapped "Voyageurs du Monde" wordmark in `<a class="trust-link" href="https://www.voyageursdumonde.fr/" target="_blank" rel="noopener noreferrer">`
- Added `.trust-link .trust-name` CSS rule with subtle 1px underline (color = `--color-border` beige, offset 4px) so both link names visually read as clickable. Hover swaps underline color to `--color-accent` (terracotta) for confirmation feedback
- TripAdvisor block was already a clickable `<a>` — the underline treatment applies via the same `.trust-link .trust-name` selector
**Reason / context:** Both items in the trust strip were styled identically (color: --color-heading / no underline) so neither read as a link. User pointed out VdM wasn't even an `<a>` tag. Now both have explicit anchor tags + persistent subtle underline + hover affordance.

## 2026-04-30 — Widen Santa Teresa video to 1100px + crop letterbox bars
**Request:** widen video frame; "still same" follow-up — letterbox bars still visible on poster
**Changed:** index.html
**What changed:**
- `.video-wrapper` max-width 900px → 1100px to match `.container` max-width
- `.video-poster img` scaled to 1.22 with `transform-origin: center top` — crops the ~17% black letterbox bar baked into YouTube's `maxresdefault.jpg` (original video shot ultrawide, fit into 16:9 canvas with bottom letterbox)
- Hover scale adjusted to compound (1.26 + translateY -1%) so motion still reads
**Reason / context:** YouTube's CDN thumbnail has letterbox bars from the original video aspect ratio. Cropping in CSS hides them. Permanent fix is re-uploading a true 16:9 still in YouTube Studio.

## 2026-04-30 — Trust strip: Voyageurs du Monde + TripAdvisor in proof section
**Request:** add a, and c, tripadvisor business listing is on (referring to: A) Trusted by partner strip with Voyageurs du Monde, C) reserve TripAdvisor badge slot — TA listing is now LIVE, no longer in moderation)
**Changed:** index.html
**What changed:**
- New `.trust-strip` CSS block colocated in the SOCIAL PROOF section CSS (flex row, centered, gap, beige border-bottom matching proof bg)
- New `<div class="trust-strip">` inserted at the top of the proof section, ABOVE the existing "Traveler Notes" journal-label — institutional credibility (agency endorsement + listing) precedes the personal testimonial quotes
- Two trust items: (1) "Featured by · Voyageurs du Monde" — italic wordmark, no logo file (avoids brand-asset uncertainty); (2) "Listed on Tripadvisor" — links to existing live listing https://www.tripadvisor.com/Attraction_Review-g303506-d34345028... reusing the same TA SVG owl mark already in nav-social
- All labels trilingual (EN/PT/ES) via existing `data-lang` system: EN "Featured by" / PT "Indicada por" / ES "Recomendada por"; EN "Listed on Tripadvisor" / PT "Listada no Tripadvisor" / ES "Listada en Tripadvisor"
- Mobile: stacks vertically at ≤600px, smaller font
**Reason / context:** Reinforces the partner credit (Voyageurs du Monde) that's already mentioned in About copy and FAQ Q3, and surfaces the now-live TripAdvisor listing as a discoverable trust signal beyond just the small icon in the nav. No JS, no new schema (existing TouristTrip + FAQPage stays). TA review badge widget (with stars + review count) is a future enhancement once reviews accumulate — current placement supports drop-in upgrade.

## 2026-04-30 — Lite-YouTube poster on Santa Teresa feature video
**Request:** fix youtube thumbnail on home page — embed was rendering as black with overlay only, even though the YouTube channel thumbnail (Keyla, "Welcome to Santa Teresa Tour") looks great
**Changed:** index.html
**What changed:**
- Replaced inline iframe with click-to-load `<button class="video-poster">` containing `<img>` of `https://img.youtube.com/vi/EAYVSn5Shw0/maxresdefault.jpg` (YouTube's CDN copy of the uploaded custom thumbnail) + circular gold play button overlay matching the brand `--color-gold`
- Added `.video-poster`, `.video-poster img`, `.video-play` CSS — radial vignette, hover scale on image + play button, `box-shadow` lift on play button
- Added `loadVideo()` JS — swaps poster for autoplay iframe on click. Keeps original allow/allowfullscreen/referrerpolicy attrs
- Mobile: `.video-play` shrinks to 64px on ≤480px
**Reason / context:** the embed was showing only YouTube's chrome (title bar + play overlay) with a black background — the actual thumbnail wasn't loading reliably in the iframe. Lite-YouTube pattern guarantees the thumbnail renders, also improves perceived load (no iframe until click).

## 2026-04-30 — Add FAQ section + FAQPage schema on homepage
**Request:** add a FAQ to key tours website: how, what, why a non certified guide, insurance? — expanded to 9 Qs in conversation (added safety, cancellation/refund, languages, mobility/kids, what to bring/tipping)
**Changed:** index.html
**What changed:**
- New `.faq*` CSS block (light bg matching `.how`, max-width 42rem readable column, thin border separators, Abril Fatface questions, light DM Sans answers)
- New `<section id="faq" class="faq section-pad">` between How It Works and Traveler Notes — 9 Q&As, all in EN/PT/ES via existing `data-lang` system, first-person Keyla voice matching About section
- Wave divider comment relabeled `how → proof` → `faq → proof` (no visual change — same divider works since FAQ shares `--color-bg` with `.how`)
- FAQPage schema.org JSON-LD added as a second `<script type="application/ld+json">` block (existing TourOperator schema untouched). 9 Q&A entries written third-person about Keyla per FAQPage convention. Helps Google surface "People also ask" rich snippets.
**Reason / context:** Pre-CTA objection handling. Reddit research surfaced safety, cancellation policy, language, mobility as recurring traveler concerns beyond user's original 4. Cancellation policy locked as "48h free / inside 48h reschedule, no deposit kept on good-faith cancellations". Payment methods locked as cash on day (BRL/USD/EUR) + Wise + Payoneer + PayPal. Q1 includes the picnic-by-river / guitar / kids-in-Portuguese anecdote as concrete proof of customization. No JS added — stacked Q&A pattern, no accordion.

## 2026-04-29 — Add Santa Teresa YouTube video on homepage
**Request:** add santa teresa youtube video on home page, where do you suggest?
**Changed:** index.html
**What changed:**
- New `.video-feature` CSS block (dark-forest bg, 16:9 wrapper, max-width 900px, caption styling)
- New `<section class="video-feature">` inserted between hero→about wave and About section
- YouTube embed via youtube-nocookie.com (privacy-enhanced), loading="lazy"
- Trilingual caption (EN/PT/ES) using existing data-lang system
- Journal-label "Santa Teresa" matching existing label pattern
**Reason / context:** User wanted high-impact placement right after hero (vs spec-default location above gallery). Section uses same dark-forest bg as About so the existing hero→green wave flows continuously into the new section, no extra wave needed. Video URL: https://www.youtube.com/watch?v=EAYVSn5Shw0

## 2026-04-29 — Add Instagram + YouTube icons to top nav
**Request:** add a section on header with instagram and youtube clickable icons, open on a new page
**Changed:** index.html
**What changed:**
- New `.nav-right`, `.nav-social` CSS (flex group, 40x40 link targets, gold hover matching footer pattern)
- Wrapped existing `.lang-toggle` in `.nav-right` alongside new `.nav-social` (logo stays left, social + lang cluster right)
- Inline SVG icons (Instagram + YouTube glyphs, Simple Icons CC0) — no external deps
- Targets: `target="_blank"` + `rel="noopener noreferrer"`
- Instagram → https://www.instagram.com/key.tours/
- YouTube → https://www.youtube.com/watch?v=EAYVSn5Shw0 (specific Santa Teresa video, per user choice; channel URL exists at @key.tours.rio.2026 if swap needed later)
**Reason / context:** Visitor discovery. User chose specific video over channel URL.

## 2026-04-29 — Center lang toggle, social icons to right, add Gmail icon
**Request:** move EN, PT ES to the center, move social icons to the side. also ad a gmail one at the top
**Changed:** index.html
**What changed:**
- `.nav-inner` switched from flex/space-between to grid `1fr auto 1fr` (logo left, lang centered, social right)
- Removed `.nav-right` wrapper; nav-social now direct child of nav-inner with `justify-self: end`
- Added `.lang-toggle { justify-self: center }`
- Added third social icon: Gmail (mailto:key.tour.rio@gmail.com from memory `project_key-tours-gbp`)
- Mobile media query: icons shrink to 32x32 (from 40x40) at ≤480px so 3 icons + 3 lang buttons + logo all fit
**Reason / context:** Cleaner nav hierarchy — logo identity left, primary action (language) center, secondary contact channels right.

## 2026-04-29 — Remove @keylario Instagram link from footer
**Request:** good, get rid of keyalrio IG in the bottom
**Changed:** index.html
**What changed:**
- Removed `<a class="footer-ig">@keylario</a>` from footer-links
- Removed dead `.footer-ig` + `:hover` CSS rules (both occurrences — base styles and dark-section override)
**Reason / context:** Top nav now has @key.tours IG icon (the proper Key Tours account). The footer's @keylario was Keyla's personal account, redundant in this context. Note: contact section above footer still has "Or on Instagram: @keylario" line (3 langs, lines ~1593-1595) — left intact, ask user if also unwanted.

## 2026-04-29 — Remove @keylario Instagram line from contact section
**Request:** still there? (re: "Or on Instagram: @keylario" in contact CTA)
**Changed:** index.html
**What changed:** Removed `<p class="contact-secondary">` block containing the EN/PT/ES "Or on Instagram: @keylario" line, just above the footer.
**Reason / context:** User confirmed via screenshot the line was still showing. Same reason as the prior footer removal — top nav already has @key.tours IG icon; @keylario is Keyla's personal account.

## 2026-04-29 — Fix EXIF rotation on gallery-4 and gallery-5
**Request:** great, why are these on the side? (re: football + moto-tour photos showing sideways in gallery)
**Changed:** images/gallery-4.jpg, images/gallery-5.jpg
**What changed:** Used `PIL.ImageOps.exif_transpose()` to bake EXIF rotation into pixel data. Both files were iPhone 11 Pro shots with EXIF orientation tags (gallery-4 = 8 / 270° CW, gallery-5 = 6 / 90° CW) that the browser wasn't respecting. After fix: pixels are physically 1200×900 landscape, no EXIF orientation tag.
**Reason / context:** Browser EXIF handling can be inconsistent with `object-fit: cover` + transform rotations on the polaroid wrapper. Baking rotation into pixels is the durable fix — works regardless of browser/CSS combinations. Also stripped EXIF orientation tag so future tools won't double-rotate.

## 2026-04-29 — Re-rotate gallery-4 and gallery-5 (first fix was wrong direction)
**Request:** still showing it sideways
**Changed:** images/gallery-4.jpg, images/gallery-5.jpg
**What changed:**
- gallery-4: rotated 90° CW (final dims 900×1200 portrait, content upright)
- gallery-5: rotated 90° CW then 180° (final dims 900×1200 portrait, content upright)
**Reason / context:** The previous `ImageOps.exif_transpose` fix trusted the EXIF orientation tags, but those tags were lying — the underlying pixel content was already upright in the original portrait files, so applying the EXIF rotation made them sideways. Verified each file visually with Read tool after rotation. Lesson: when EXIF orientation seems wrong, verify pixel content visually before trusting `exif_transpose` — bogus EXIF tags can flip a correct image into an incorrect one.

## 2026-04-30 — Add Tripadvisor icon to top nav
**Request:** can we add a tripadvisor icon in the header
**Changed:** index.html
**What changed:**
- Added 4th icon to `.nav-social` (after Gmail): Tripadvisor owl SVG (Simple Icons CC0)
- Link → https://www.tripadvisor.com/Attraction_Review-g303506-d34345028-Reviews-Key_Tours_Rio-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html
- `target="_blank" rel="noopener noreferrer"` (consistent with other socials)
- Mobile media query: tightened to 28x28 (from 32x32) icons + 16px SVG + 2px gap to fit 4 icons + lang-toggle + logo on 375px screens
**Reason / context:** TA listing went live as `Key_Tours_Rio` (geo-disambiguator added because Athens operator owns "Key Tours" globally). Adds a 4th channel — channel grid is now: IG (community), YT (preview content), Gmail (lead capture), TA (social proof / reviews). Order on page reflects funnel position (top-of-funnel discovery → bottom-of-funnel reviews).

## 2026-04-30 — Hide logo on mobile, shift lang toggle left
**Request:** you can get rid of the logo on mobile, shift langugeas toglge to the left
**Changed:** index.html
**What changed:**
- Mobile media query (≤480px): `.nav-logo { display: none }`
- Mobile grid template: `auto 1fr` (was inheriting `1fr auto 1fr`)
- `.lang-toggle { justify-self: start }` on mobile (was inheriting `center`)
- Bumped mobile icons back up to 32x32 (from 28x28) since removing logo freed horizontal space
**Reason / context:** Mobile nav was tight with logo + 3 lang buttons + 4 social icons. Logo exists in hero immediately below — redundant on mobile. New mobile layout: [EN/PT/ES left] ........ [IG · YT · Gmail · TA right]. Desktop unchanged: logo left, lang centered, icons right.

## 2026-04-30 — Edge-to-edge video on mobile
**Request:** is there a way to increase youtube screen box size on mobile?
**Changed:** index.html
**What changed:**
- New mobile media query (≤480px): `.video-feature .container { padding: 0 }` so the video wrapper bleeds full-width
- Journal label + caption keep their `var(--space-6)` horizontal padding for breathing room
- Desktop/tablet behaviour unchanged (video still capped at 900px max-width, container padding intact)
**Reason / context:** On 375px screens the video was constrained to ~327px wide (container had 24px padding each side). Full-bleed gives ~48px more width and ~27px more height — roughly 15% bigger, more impactful as the first thing visitors see after the hero.
