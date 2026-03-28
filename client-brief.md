# Client Brief — Key Tours
Date: 2026-03-27
Mode: interactive
Source: business-model questionnaire (Google Doc) + onboarding session

---

## Situation
Key Tours is a private guided tour operation in Rio de Janeiro led by Keyla — a native
Carioca. All current bookings come through two agencies (Voyageurs du Monde, Vamos Boca)
and European referrals. Agencies handle conversion; Keyla manages all post-booking
client communication via WhatsApp (pickup logistics, details). Zero owned digital presence.
Goal: grow to 10 tours/month consistently, build an owned channel for control and
consistency. No direct booking system needed at this stage.

## Diagnosis
Strong product, zero owned distribution. Keyla has a promo video (shot, not edited),
photos, no logo, no copy, testimonials incoming, and brand ideas/visual references ready.
The gap is entirely on the front end: no brand identity, no IG presence, no destination
for the promo video. The sequence is clear — brand first, then IG funnel, then a landing
page for the video and referral link.

---

## Recommended Stack

### Primary
- **brand-foundation** — no visual identity yet, has references/ideas ready. Must exist
  before anything can be designed.
  Skills: `/marketing-brand key-tours --name "Key Tours"`

- **ig-funnel** — natural owned channel for a visual, culture-forward tour business.
  Personal IG exists. Goal is digital presence + consistency.
  Scope: bio rewrite, link-in-bio, highlights architecture. No DM automation (manual by choice).
  Skills: `/ig-funnel key-tours --name "Key Tours"`

### Supporting
- **landing-page** — destination for promo video traffic + shareable referral link.
  Build after brand and IG are live.
  Skills: `/landing-design key-tours` → `/landing-build key-tours` → `/landing-deploy key-tours`

### Later
- **content-calendar** — once IG funnel is set, consistent posting is the growth lever
  to reach 10 tours/month.
  Skills: `/marketing-social key-tours --name "Key Tours"`

### Not Now
- **wa-funnel** — Keyla wants manual WhatsApp comms by choice. Respect it.
- **full-website / seo** — no search intent in her current audience. Overkill at this stage.
- **ads-campaign** — landing page must exist and be tested first.

---

## Deep Dive — Brand Foundation

**Origin / why it exists:**
Keyla started Key Tours because standard agency tours can't offer what she offers —
the lived knowledge of a native Carioca who actually inhabits the city. Not certified,
but deeply knowledgeable across culture, history, syncretism, contemporary life. Her
tours help culturally curious visitors decode the complexity of Rio in a way no script
or credential can replicate. The Voyageurs du Monde concierge who toured with her
praised the "quantidade diversa de conhecimento" — that's the origin in a phrase.

**Personality signals (from client feedback + questionnaire):**
- Humor, warmth, approachability
- Deep cultural knowledge across many dimensions
- Progressive, politically aware lens on the city
- Honest transparency (not certified — and that's the point)
- Intimate, personal — never a crowd

**Tone words to use:** curious, warm, local, layered, unpretentious
**Tone words to avoid:** formal, authoritative, touristy, polished-generic

**Visual references:** Has examples/ideas — to be collected in brand session.
**Existing constraints:** No logo, no brand colors, no fonts. Blank slate.

**Copy gold (verbatim from questionnaire):**
- "quantidade diversa de conhecimento sobre a cidade"
- "conseguir decodificar uma cidade tão complexa"
- "informações de uma carioca que vive a cidade — que guia nenhum tem"
- "referências atuais sobre cultura e comportamento"

---

## Deep Dive — IG Funnel

**Current state (scraped 2026-03-27):**
- Handle: @keylario — Keyla Bergamazi
- 1,702 followers / 2,771 following
- Already a professional/business account
- Bio: personal lifestyle (fashion designer at @metta.wear, Reiki, cooking) — no mention of tours
- 0 highlights, no external URL, no bio link
- Recent content: authentic personal reels, Afro-Brazilian cultural references, spiritual content
- Video performs best (119–188 likes on reels vs 35–83 on static)

**Decision point (RESOLVED 2026-03-28):** New dedicated Key Tours IG Business account
created and connected to Meta Business ad account `act_1688905458715220`. Account type:
Business (not Creator) — required for Meta Ads Manager integration and paid campaigns.
@keylario remains Keyla's personal account, separate from Key Tours business account.

**Goal:** Someone who hears about Key Tours via referral or sees the promo video should
land on @keylario, immediately understand what Keyla offers, and reach out via WhatsApp.

**Primary action:** WhatsApp contact (no DM automation — manual by choice).

**Scope:**
- Bio rewrite: lead with Key Tours, keep personality (culturally confident, PT+EN)
- Add external link: WhatsApp contact (+ landing page link once live)
- Highlights architecture: Tours (x4), About Keyla, Reviews (once collected), FAQ/Logistics
- No Typebot / DM automation at this stage

**Visual reference — @metta.wear (scraped 2026-03-27):**
- Palette: earthy greens (🍃), warm orange/terracotta (🧡), natural tones, light
- Aesthetic: artisanal, movement, Brazilian craft, authentic, warm
- 450 followers, small brand — Keyla is the designer
- Tone: personal, gentle, culturally proud, non-corporate
→ These tones translate directly to Key Tours: tropical, warm, cultural, handcrafted feel.
   NOT: slick agency blue, stock-photo glossy, corporate tourism palette.

**Content production:** photos available. Promo video unedited — editing (~1 week).
Video is a prerequisite for IG launch (Keyla's reels perform 2–3× better than statics).

---

## Deep Dive — Landing Page

**Primary action:** WhatsApp contact / booking inquiry
**Traffic source:** Promo video (primary) + referral link (share with friends)
**Post-conversion:** Keyla receives WhatsApp message, handles manually
**Permanent or campaign:** Permanent (evergreen destination)
**Proof:** Testimonials incoming — collecting now. Voyageurs du Monde concierge
endorsement is strong social proof. 4 tour descriptions from questionnaire are ready to use.

**Content status:**
- Photos: available ✓
- Video: shot but unedited ✗ (prerequisite: video editing before LP launch)
- Copy: needs writing ✗ (use questionnaire answers as source material)
- Testimonials: not yet ✗ (flag as open — collect before launch)
- Logo: not yet ✗ (brand-foundation prerequisite)

---

## Adaptive Probing Notes

1. **IG handle:** Not collected. Needed before /ig-funnel can run. Ask Keyla.
2. **Video editing:** Promo video is shot but unedited. Who edits it, and by when?
   This is a prerequisite for both IG and landing page. Needs a clear owner + timeline.
3. **Testimonial collection:** "Getting testimonials" — does Keyla have a plan for this
   (WhatsApp message to past clients?) or does it need a process? Suggest a simple Google
   Form or just a WhatsApp template message to 5 past clients.

---

## Open Questions

- [x] Keyla's IG handle — @key.tours (https://www.instagram.com/key.tours/), Business account, connected to act_1688905458715220
- [ ] Who edits the promo video and by when? (blocks IG + landing page)
- [ ] Testimonial collection plan — needs a process before LP launch
- [ ] Brand visual references — to be collected in /marketing-brand session

## Materials
Available: photos ✓, promo video (unedited) ✓, brand ideas/visual references ✓
Missing: logo, copy, testimonials, edited video
Content blocker: **YES** — video editing and testimonials must be resolved before
landing page can launch. Brand session needed before any design work.
