# Design System — Key Tours
Generated: 2026-03-27
Languages: EN, PT
CTA: whatsapp
Brand voice: ~/.claude/landing-projects/key-tours/BRAND-VOICE.md

---

## Brand Identity

### Positioning
A private guided experience of Rio, led by a native Carioca who connects the city's past
to its present — so you leave understanding Rio, not just having visited it.

### Taglines

**EN — Warm:**
"Rio, as a Carioca knows it."

**EN — Bold:**
"Private tours of Rio. Led by someone who actually lives here."

**EN — Poetic:**
"Some cities take years to understand. Keyla gives you one afternoon."

**PT — Warm:**
"O Rio que uma carioca conhece."

**PT — Bold:**
"Passeios privados pelo Rio. Com quem realmente vive aqui."

**PT — Poetic:**
"Algumas cidades levam anos para entender. A Keyla te dá uma tarde."

---

## Color Palette

| Token | Hex | Usage | Reasoning |
|---|---|---|---|
| `--color-bg` | `#F7F0E6` | Page background | Warm cream — natural light of Rio, linen texture feel. From metta.wear's earth-tone aesthetic. |
| `--color-surface` | `#EDE3D4` | Cards, section alternates | Slightly darker sand — creates gentle depth without contrast shock |
| `--color-text` | `#2C1A0E` | Body copy | Warm dark brown, not cold black — keeps the page feeling alive, not printed |
| `--color-heading` | `#2D4A35` | Headlines, display text | Deep forest green — Keyla's 🍃 emoji repeated across @metta.wear content; tropical, grounded |
| `--color-accent` | `#C4622D` | CTAs, links, hover states | Terracotta — the 🧡 of metta.wear content; Brazilian warmth, harvest, handcraft |

**Support tokens:**
| Token | Hex | Usage |
|---|---|---|
| `--color-accent-light` | `#E8956A` | Hover state for accent |
| `--color-muted` | `#8C7B6B` | Captions, secondary text |
| `--color-border` | `#D4C4B0` | Dividers, card borders |
| `--color-white` | `#FFFDF9` | Text on dark sections |

---

## Typography

### Fonts

**Heading: Cormorant Garamond**
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Italic variant: 300i, 400i — used for tour names, quotes, poetic moments
- Why: Editorial warmth. Fashion-adjacent (Keyla is a fashion designer). Not corporate.
  Works at large display sizes without feeling heavy. Pairs Rio's cultural depth with
  approachable elegance.

**Body: Lato**
- Weights: 300 (light), 400 (regular), 700 (bold)
- Why: Clean, slightly humanist, warm at reading sizes. Doesn't compete with Cormorant.
  Good multilingual rendering (handles PT accents cleanly).

**No accent font needed** — Cormorant Garamond italic at light weight does the work of
a script/handwritten accent without adding a third font request.

### Google Fonts URL
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

### Type Scale
| Token | rem | Usage |
|---|---|---|
| `--text-xs` | 0.75rem | Captions, metadata |
| `--text-sm` | 0.875rem | Secondary labels, footer |
| `--text-base` | 1rem | Body copy |
| `--text-lg` | 1.125rem | Lead paragraph, intro |
| `--text-xl` | 1.25rem | Section intros |
| `--text-2xl` | 1.5rem | Sub-headings (H3) |
| `--text-3xl` | 2rem | Section headings (H2) |
| `--text-4xl` | 2.75rem | Hero headline (H1, desktop) |
| `--text-5xl` | 3.5rem | Hero headline (H1, large screen) |

**Heading font-family:** `'Cormorant Garamond', Georgia, serif`
**Body font-family:** `'Lato', system-ui, sans-serif`

---

## Page Sections

### 1. Nav / Language Toggle
**Purpose:** Minimal orientation. Language switch. No distraction from hero.
**Components:** Logo/name left, language toggle right (EN | PT), no other links
**Layout:** Fixed top, transparent on hero, white with shadow on scroll. Max-width 1100px centered.
**Note:** Logo = "Key Tours" wordmark in Cormorant Garamond 600, color-heading. No icon needed yet.

---

### 2. Hero
**Purpose:** Immediate signal: this is Rio, this is personal, this is different.
**Components:** Full-viewport height. Background: large warm photo (Rio street/viewpoint/culture).
Dark overlay 40%. Centered text block. Single CTA button.
**Layout:**
- Desktop: text centered, H1 large (--text-5xl), subheadline below, CTA below that. Vertically centered.
- Mobile: same structure, H1 at --text-3xl, tighter padding.
- Photo: warm-graded Rio image (golden hour preferred). Bleeds to all edges.

---

### 3. About Keyla
**Purpose:** The differentiator explained. One person, one story. Builds trust before selling.
**Components:** Portrait photo (Keyla, natural/candid), short bio paragraph, 3 detail tags.
**Layout:**
- Desktop: 2-col. Photo left (40%), text right (60%). Generous padding.
- Mobile: stacked, photo first, text below.
- Detail tags: small pill labels (e.g. "Native Carioca · Fashion Graduate · Cultural Guide")

---

### 4. The Tours
**Purpose:** 4 options, clearly explained. Enough to choose, not overwhelming.
**Components:** Section heading. 4 tour cards in 2×2 grid (desktop) or single column (mobile).
Each card: tour name (Cormorant italic), 2-line description, duration tag, one photo.
**Layout:** Cards on --color-surface background. Hover: subtle lift + accent border-left.
No prices on the page — price comes up in WhatsApp conversation.

---

### 5. How It Works
**Purpose:** Remove friction. Answer the "but how does it actually work?" question.
**Components:** 3-step horizontal flow. Icon (simple line) + step title + one sentence each.
**Steps:** 1. Message Keyla on WhatsApp → 2. Choose your tour and date → 3. We pick you up
**Layout:** Desktop: 3 cols. Mobile: stacked with connecting line. Background: --color-bg.

---

### 6. Social Proof
**Purpose:** Validate the experience with real voices. Build conviction before CTA.
**Components:** 2–3 testimonial cards. Quote (Cormorant italic), attribution, optional small photo.
**Layout:** Alternating or centered cards on --color-surface. If no testimonials yet: skip this
section and add `<!-- TESTIMONIALS: insert here once collected -->` comment in HTML.
**Fallback while collecting:** Use the Voyageurs du Monde concierge endorsement as a single
quote with attribution "Concierge, Voyageurs du Monde" — this is real, credible, premium.

---

### 7. Gallery
**Purpose:** Show the experience visually. Make the feeling real before they've been there.
**Components:** Masonry or 3-col grid of 6–9 tour photos. No captions needed.
**Layout:** Photos bleed to edges on mobile. Slight gaps on desktop. No borders.
**Note:** If video is ready, embed it above the photo grid as a 16:9 block.

---

### 8. Contact / Final CTA
**Purpose:** Convert. One clear action. Low friction.
**Components:** Short closing headline. 1–2 sentence body. Large WhatsApp button.
WhatsApp number placeholder. Optional: secondary line "or email".
**Layout:** Dark section (--color-heading as bg, --color-white text). Centered. Full-width.
CTA button: --color-accent fill, white text, rounded, generous padding.

---

### 9. Footer
**Purpose:** Minimal close. Instagram link. Language toggle repeat.
**Components:** Name, city, IG handle link, language toggle, copyright.
**Layout:** Single row desktop, stacked mobile. --color-surface bg.

---

## Copy — EN

### Nav
- Logo: **Key Tours**
- Language toggle: **EN** | PT

---

### Hero
**H1:** Rio, as a Carioca knows it.

**Subheadline:**
Private guided tours of Rio de Janeiro — led by Keyla, a native who's spent her whole life
inside this city's culture. Door to door. Up to 6 people. 5 hours.

**CTA button:** Message Keyla on WhatsApp

---

### About Keyla
**H2:** The guide no certification can produce.

**Body:**
I'm Keyla. I grew up in Rio, I studied fashion — not tourism — and I've spent years connecting
the city's history to how it actually lives today. When I show you the cathedral in the city
centre, I'll tell you why that church and the samba circle a few streets away are the same story.

I'm not certified. That means I won't read from a script. It means when you ask me something
I don't know, I'll tell you — and give you what I do know instead, which is the city through
the eyes of someone who inhabits it.

**Detail tags:**
- Native Carioca
- Fashion Graduate, IED Rio
- Cultural Guide since 2019

---

### The Tours
**Section H2:** Four ways to know Rio.

**Tour 1 — City Centre & Santa Teresa**
*The heart of the city, where Rio's contradictions make sense.*
Walk through the historic centre into the hills of Santa Teresa — from Afro-Brazilian syncretism
to the viewpoints where the whole city reveals itself. Keyla's favourite. The one that helps
everything click.

**Tour 2 — Rio Nature**
*Into Tijuca Forest, the lungs of the city.*
Waterfalls, mountain trails, and panoramic views above the skyline. A different side of Rio
that most visitors never find — and one of the largest urban forests in the world.

**Tour 3 — Copacabana**
*More than a beach. A whole chapter of Rio's history.*
Modernist architecture, the neighbourhood's oldest hotel, the art and stories layered into one
of the world's most iconic addresses. A walk for people who want to understand, not just arrive.

**Tour 4 — Night Life**
*Where Rio comes alive after dark.*
From bohemian Lapa to intimate live music to bars where locals actually go. An evening tour
for people who want to feel the city, not just observe it.

**Card shared label:** 5 hours · Private · Door to door · Up to 6 people

---

### How It Works
**Section H2:** Simple from the first message.

**Step 1:** Message Keyla on WhatsApp — tell her which tour interests you and your dates.
**Step 2:** She'll confirm availability and answer any questions. No forms, no bookings systems.
**Step 3:** On the day, she and the driver pick you up at your hotel or Airbnb. You're in good hands.

---

### Social Proof
**Section H2:** What people say.

**Voyageurs du Monde quote (fallback):**
*"The range and depth of knowledge about the city is exceptional — unlike anything our clients
experience with standard guides."*
— Concierge, Voyageurs du Monde

**Placeholder for client testimonials:**
*(2 more testimonial slots — to be filled once collected)*

---

### Contact / Final CTA
**H2:** Ready to know Rio?

**Body:**
Send a message — no forms, no waiting. Just a conversation about when you're visiting and
what kind of experience you're looking for.

**CTA button:** Message on WhatsApp →

**WhatsApp pre-filled message:**
"Hi Keyla! I found Key Tours and I'd love to know more about the [TOUR NAME] tour.
I'm visiting Rio on [DATES]. Is that available?"

**Secondary line:** Or reach out on Instagram: @keylario

---

### Footer
Key Tours · Rio de Janeiro
[@keylario](https://instagram.com/keylario) · EN | PT
© 2026 Key Tours by Keyla Bergamazi

---

## Copy — PT

### Nav
- Logo: **Key Tours**
- Language toggle: EN | **PT**

---

### Hero
**H1:** O Rio que uma carioca conhece.

**Subheadline:**
Passeios privados pelo Rio de Janeiro — com a Keyla, uma carioca que passou a vida inteira
dentro da cultura desta cidade. Buscamos você. Até 6 pessoas. 5 horas.

**CTA button:** Falar com a Keyla no WhatsApp

---

### About Keyla
**H2:** A guia que nenhuma certificação consegue formar.

**Body:**
Sou a Keyla. Cresci no Rio, estudei moda — não turismo — e passei anos conectando a história
da cidade ao jeito como ela vive hoje. Quando passo pela catedral no centro, conto por que
aquela igreja e a roda de samba a algumas ruas dali são a mesma história.

Não sou guia credenciada. Isso significa que não vou ler roteiro. Significa que quando você
me perguntar algo que eu não sei, vou ser honesta — e vou te dar o que tenho, que é a cidade
pelos olhos de quem realmente vive nela.

**Detail tags:**
- Carioca nativa
- Formada em Moda, IED Rio
- Guia cultural desde 2019

---

### The Tours
**Section H2:** Quatro formas de conhecer o Rio.

**Tour 1 — Centro & Santa Teresa**
*O coração da cidade, onde as contradições do Rio fazem sentido.*
Do centro histórico até os morros de Santa Teresa — do sincretismo afro-brasileiro aos mirantes
onde a cidade inteira se revela. O favorito da Keyla. O que faz tudo se encaixar.

**Tour 2 — Natureza Carioca**
*Dentro da Floresta da Tijuca, o pulmão da cidade.*
Cachoeiras, trilhas e vistas panorâmicas acima do skyline. Um lado do Rio que a maioria dos
visitantes nunca encontra — e uma das maiores florestas urbanas do mundo.

**Tour 3 — Copacabana**
*Mais do que uma praia. Um capítulo inteiro da história carioca.*
Arquitetura modernista, o hotel mais antigo do bairro, a arte e as histórias em camadas num
dos endereços mais icônicos do mundo. Um passeio para quem quer entender, não só chegar.

**Tour 4 — Night Life**
*Onde o Rio ganha vida depois do escuro.*
Da boêmia da Lapa à música ao vivo intimista, dos bares onde os cariocas realmente vão. Um
passeio noturno para quem quer sentir a cidade, não só observá-la.

**Card shared label:** 5 horas · Privado · Buscamos você · Até 6 pessoas

---

### How It Works
**Section H2:** Simples desde a primeira mensagem.

**Step 1:** Manda mensagem para a Keyla no WhatsApp — fala qual passeio te interessa e suas datas.
**Step 2:** Ela confirma disponibilidade e responde o que você precisar. Sem formulários, sem sistemas.
**Step 3:** No dia, ela e o motorista te buscam no hotel ou Airbnb. Pode deixar nas mãos dela.

---

### Social Proof
**Section H2:** O que as pessoas dizem.

**Voyageurs du Monde quote (fallback):**
*"A variedade e profundidade de conhecimento sobre a cidade é excepcional — diferente de tudo
que nossos clientes vivenciam com guias convencionais."*
— Concierge, Voyageurs du Monde

---

### Contact / Final CTA
**H2:** Pronto pra conhecer o Rio de verdade?

**Body:**
Manda uma mensagem — sem formulário, sem espera. Só uma conversa sobre quando você vem
e que tipo de experiência você procura.

**CTA button:** Falar no WhatsApp →

**WhatsApp pre-filled message:**
"Oi Keyla! Achei o Key Tours e queria saber mais sobre o passeio [NOME DO PASSEIO].
Vou estar no Rio em [DATAS]. Tem disponibilidade?"

**Secondary line:** Ou me encontra no Instagram: @keylario

---

### Footer
Key Tours · Rio de Janeiro
[@keylario](https://instagram.com/keylario) · EN | PT
© 2026 Key Tours por Keyla Bergamazi

---

## CTA Configuration

**Type:** WhatsApp
**Number placeholder:** `5521996763901` — replace with full international format: `+55119XXXXXXXX`
**Implementation:** `https://wa.me/5521996763901?text={encoded_message}`

**WhatsApp message — EN:**
```
Hi Keyla! I found Key Tours and I'd love to know more about the [TOUR NAME] tour. I'm visiting Rio on [DATES]. Is that available?
```

**WhatsApp message — PT:**
```
Oi Keyla! Achei o Key Tours e queria saber mais sobre o passeio [NOME DO PASSEIO]. Vou estar no Rio em [DATAS]. Tem disponibilidade?
```

---

## Technical Spec

**File structure:** Single `index.html` — all CSS inline in `<style>`, no external CSS files.
**Fonts:** Google Fonts via `<link>` in `<head>`, `font-display: swap`
**Breakpoints:**
- Mobile: 375px (default, mobile-first)
- Tablet: 768px
- Desktop: 1100px

**Language toggle system:**
```html
<!-- Toggle button switches data-lang attribute on <html> element -->
<html lang="en" data-lang="en">
<!-- All bilingual elements: -->
<span data-en="English text" data-pt="Texto em português"></span>
<!-- JS reads data-lang, shows matching attribute, hides other -->
<!-- Persists to localStorage key: "keytours-lang" -->
```

**Video embed:** Yes — 16:9 ratio, placed above gallery section.
```html
<!-- Placeholder: replace src with actual video file or YouTube embed -->
<div class="video-wrapper" style="aspect-ratio: 16/9; max-width: 900px; margin: 0 auto;">
  <video controls poster="{POSTER_IMAGE}" style="width:100%; height:100%; object-fit:cover;">
    <source src="{VIDEO_FILE}" type="video/mp4">
  </video>
</div>
```

**Image slots:**
| Slot | File | Dimensions | Alt text (EN) |
|---|---|---|---|
| `hero-bg` | `hero.jpg` | 1920×1080px min | "Rio de Janeiro street scene, golden hour" |
| `keyla-portrait` | `keyla.jpg` | 600×800px | "Keyla Bergamazi, Key Tours guide, Rio de Janeiro" |
| `tour-centro` | `tour-centro.jpg` | 800×600px | "City centre and Santa Teresa, Rio de Janeiro tour" |
| `tour-nature` | `tour-nature.jpg` | 800×600px | "Tijuca Forest, Rio de Janeiro nature tour" |
| `tour-copa` | `tour-copa.jpg` | 800×600px | "Copacabana neighbourhood history tour" |
| `tour-nightlife` | `tour-nightlife.jpg` | 800×600px | "Rio de Janeiro nightlife tour, Lapa" |
| `gallery-1` to `gallery-6` | `gallery-1.jpg` etc. | 600×600px | "Rio de Janeiro cultural tour" |

**Performance:**
- Hero image: `<link rel="preload" as="image" href="hero.jpg">`
- Gallery images: `loading="lazy"`
- Fonts: `font-display: swap` (already in Google Fonts URL)

**Analytics placeholder:** `<!-- GA4 or other analytics: insert here -->`

---

## Imagery Direction

**Color grading:** Warm, natural. Golden hour preferred. Slight desaturation of harsh blues.
Pull the oranges and greens. Think Wes Anderson but real. Not Instagram filter.

**Shot types needed (priority order):**
1. Keyla in motion — walking, gesturing, talking (not posing at camera)
2. Architecture details — tiles, facades, doors — warmth and texture
3. Cultural moments — food on table, live music venue, market stalls
4. Landscape/viewpoint — Santa Teresa rooftops, Tijuca canopy, Copacabana from above
5. Small group atmosphere — 2–3 people listening/laughing with Keyla (candid)

**Mood:** Lived-in. Warm. Curious. Not staged tourism.

**Avoid:**
- Stock photo aesthetic (too clean, too generic, wrong skin tones/faces for Brazil)
- Blue-tinted "Instagram travel" grade
- Posed "look at the landmark" shots
- Corporate tourism brochure layouts (evenly lit, symmetrical, lifeless)
- Anything that looks like it could be any city in the world
