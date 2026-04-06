# Campaign Brief — Key Tours
Updated: 2026-04-02
Set by: campaign-brief

## Active Campaign Context
campaign_objective: conversion
funnel_stage:       BOFU
audience_temperature: warm
offer:              Private cultural tour of Rio de Janeiro from R$900 — led by native Carioca, 5hrs, door-to-door, up to 6 people. 4 routes: City Centre/Santa Teresa, Nature, Copacabana, Night Life.
platform:           google
campaign_type:
  google: Branded Search + Search (EN + ES ad groups)
start_date:         2026-04-02
end_date:           ongoing

## Strategic Rationale
Key Tours has zero owned acquisition — Google Search is the first owned channel targeting
the exact moment a culturally curious tourist searches "private tour rio de janeiro". Landing
page (keytours.guide) and WhatsApp conversion tracking (AW-18059668718) are live and validated.
Brand new account with no conversion history — Smart Bidding cannot run yet. Maximize Clicks
with CPC cap for first 60 days (data gathering phase), then switch to Target CPA after 30+
conversions. Branded Search (low spend) protects "key tours" / "keyla tour" from competitors.

## Audience Definition
**Primary:** 35–55 EN/ES speakers planning a Rio de Janeiro trip.
- Europeans: UK, France, Germany, Spain
- North Americans: US, Canada
- Latin Americans: Argentina, Chile
- Last-minute: Brazil (EN/ES)

Culturally curious, bored of standard group tours. Searching from home country weeks before
travel OR in Rio last-minute. Values depth over checklists. Not attached to formal certification.
Pre-qualified by the search query itself — warm intent, BOFU.

**Anti-audience:** Group tour seekers, credential-checkers, budget backpackers.

## Campaign Structure

### Campaign 1 — Branded Search (R$5–10/day)
Protect brand name. Exact match only.
Keywords: [key tours rio], [key tours rio de janeiro], [keyla tour rio], [keytours guide]
Bidding: Maximize Clicks (low budget, just protection)

### Campaign 2 — Generic Search EN (R$25–35/day)
High-intent English searches. Phrase + Exact match. No Broad Match.

**Ad Group 2a — Private Tour Intent**
[private tour rio de janeiro], "private tour rio", "private guided tour rio"
[private cultural tour rio], "rio de janeiro private guide"

**Ad Group 2b — Local/Authentic Intent**
"local guide rio de janeiro", "carioca guide rio", "authentic tour rio de janeiro"
[native guide rio], "rio insider tour"

**Ad Group 2c — Day Tour Intent**
"day tour rio de janeiro", "guided tour rio de janeiro", "best tour guide rio"
"cultural tour rio de janeiro"

### Campaign 3 — Generic Search ES (R$10–15/day)
Spanish-language searches. Phrase + Exact match.
"tour privado rio de janeiro", "guia local rio de janeiro", "tour cultural rio"
"tour privado rio", [tour privado rio de janeiro], "guia carioca rio"

**Total daily budget: R$40–60/day**
**Monthly budget: ~R$1,200–1,800/mo**

## RSA Ad Copy Guidelines (from brand voice)

### Headline pool (use 10–15 of 15 slots, no pinning)
Benefit angles to cover across headlines:
- Keyword inclusion: "Private Tours Rio de Janeiro" / "Cultural Tour Rio"
- Native knowledge: "A Carioca Who Knows Every Layer" / "Not Certified — Better"
- Intimacy: "Private. Never a Crowd." / "Up to 6 People, Door to Door"
- Decoding hook: "Understand Rio, Don't Just Visit It" / "Rio Decoded by a Local"
- Proof: "Endorsed by Voyageurs du Monde" / "5 Hours, 1 City, Countless Layers"
- CTA: "Message Keyla on WhatsApp" / "Book Your Private Rio Tour"
- Spanish: "Tour Privado con Guía Carioca" / "Conoce el Río Real"

### Description pool (3–4 of 4 slots)
- "Private cultural tour led by Keyla — a native Carioca. History, syncretism, samba, and the city's living soul. From R$900, 1–6 guests."
- "Not a certified guide — something rarer. A Carioca who actually inhabits the city, with knowledge no official script contains."
- "5 hours, door-to-door pickup, up to 6 people. City Centre, Nature, Copacabana, or Night Life. WhatsApp to book."
- "Tour privado guiado por una carioca local. Historia, cultura afrobrasileña y la vida real de Río. Desde R$900."

### Final URL
https://keytours.guide (all ad groups — single landing page)

## Bidding Strategy
**Phase 1 (0–30 conversions):** Maximize Clicks with CPC cap R$12–15
**Phase 2 (30+ conversions):** Switch to Target CPA — baseline set from Phase 1 CPL data
**Never:** Broad Match in Phase 1. Never Performance Max until 90+ days data.

## Negative Keywords (add from day 1)
free, cheap, bus tour, group tour, party, hostel, backpacker, cruise, transfer, airport,
certification, certified guide, viator, tripadvisor, airbnb [for search — not excluding platform]
agência, barato, excursão em grupo

## Success Metrics
- Primary: WhatsApp clicks → `generate_lead` (method: whatsapp) → conversion AW-18059668718
- Secondary: Email clicks, Instagram clicks (generate_lead other methods)
- Target Phase 1: 1–3 leads/month (learning), CPL baseline to establish
- Target Phase 2: CPL < R$300 (at R$900/tour and ~56% margin, any CPL under R$500 is profitable)

## Geo + Language Settings
- Campaigns 1 & 2: Language = English. Geo = US, CA, GB, FR, DE, AU, ES + BR
- Campaign 3: Language = Spanish. Geo = ES, AR, CL, CO, BR
- Location targeting: "People in or regularly in these locations" — captures home-country planning searches

## Strategy Phase
intake — client-brief.md is primary source. No prior campaign data. First 60 days = learning phase.
Consider running `/marketing-strategist key-tours` after first month of data.

## Source
| Field | Source | Confidence |
|-------|--------|------------|
| campaign_objective | client-brief: landing + tracking live, Google Ads account active | HIGH |
| funnel_stage | derived from conversion objective | HIGH |
| audience_temperature | client-profile: search intent = warm; tourists planning trip | HIGH |
| offer | client-profile: services & pricing section | HIGH |
| platform | --platform google flag | HIGH |
| campaign_type | new account → no Smart Bidding; Search + Branded per best practices 2026 | HIGH |
| audience geo/lang | client-profile target client + user input (ES + Americans added) | HIGH |
| RSA guidelines | BRAND-VOICE.md messaging pillars + RSA best practices 2026 | HIGH |
| budget | client-profile break-even + search volume estimates for niche tour queries | MEDIUM |
