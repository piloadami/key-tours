# Edit Log — Key Tours

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
