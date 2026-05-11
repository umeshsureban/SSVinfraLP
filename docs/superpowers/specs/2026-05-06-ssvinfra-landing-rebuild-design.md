# SSV Infra Landing Page — CRO + AEO + GEO Rebuild
**Date:** 2026-05-06  
**File:** `ssvinfra.html` (single self-contained HTML file)  
**Status:** Approved

---

## 1. Goals

| Goal | Definition of done |
|------|-------------------|
| CRO | Higher lead form fills, more WhatsApp/phone initiations, reduced bounce |
| AEO | Page answers appear in Google AI Overviews, Perplexity, SearchGPT for wind EPC queries |
| GEO | AI engines (ChatGPT, Gemini, Claude) correctly identify SSV Infra as a Wind/Hybrid EPC company in Karnataka/India |

---

## 2. Visual Design

- **Hero & Nav:** Dark (`#0b1a0e`) with radial green glow + subtle grid texture
- **Body sections:** Alternate white (`#fff`) and slate (`#f8faf8`) backgrounds
- **Accent:** `#22c55e` (bright green) for CTAs, highlights, KPI numbers
- **Typography:** `'Segoe UI', system-ui, sans-serif` — no external fonts
- **Radius:** `12px` cards, `8px` buttons
- **Animations:** Scroll-triggered fade-in (`IntersectionObserver`), count-up on stats, pulse on phone FAB

---

## 3. Page Sections (top → bottom)

### 3.1 `<head>` — Meta + Schema

```
<meta charset="UTF-8">
<meta name="viewport" ...>
<title>SSV Infra — Wind & Hybrid Solar EPC Partner | India</title>
<meta name="description" content="SSV Infra delivers utility-scale Wind, Hybrid Solar+Wind EPC and O&M services across India. 300+ MW commissioned. MNRE compliant. Get a free feasibility report.">
<link rel="canonical" href="https://ssvinfra.in/">
```

**JSON-LD Schema blocks (4 total):**

1. **Organization** — name, url, logo, sameAs (social profiles), foundingDate, areaServed: India
2. **LocalBusiness** — name, address (Karnataka), telephone, geo coordinates, openingHours
3. **FAQPage** — 8 Q&A pairs (mirrors FAQ section content exactly)
4. **Service × 3** — Wind EPC / Hybrid Solar+Wind / O&M, each with provider, areaServed, description

### 3.2 Navigation

- Fixed, dark (`rgba(11,26,14,0.96)`), `backdrop-filter: blur(10px)`
- **Left:** SSV logo mark + wordmark
- **Centre:** Links — Why SSV · Services · Track Record · Sectors · FAQ
- **Right:** Phone number (click-to-call, green text) + "Free Assessment →" green pill CTA
- **Mobile:** Hamburger toggle collapses centre links; phone + CTA remain visible
- **Scroll behaviour:** Nav shrinks to `52px` height after `100px` scroll (CSS class toggle via JS)

### 3.3 Hero

- Full-viewport dark section, min-height `100vh`
- **Badge pill:** `● WIND EPC · HYBRID SOLAR · O&M` (animated pulse dot)
- **H1:** "India's Most Trusted Wind & Hybrid EPC Partner" (semantic, keyword-rich for GEO)
- **Sub-headline:** "Tired of EPC firms that disappear after commissioning? SSV Infra owns the full lifecycle — from site feasibility to 25-year O&M."
- **Dual CTA row:**
  - Primary: `Get Free Feasibility Report →` (green button, scrolls to `#contact`)
  - Secondary: `Chat on WhatsApp` (outline button, opens `wa.me` link)
- **KPI row (4 blocks, count-up animation):**
  - 300+ MW · 8+ Years · 25+ Projects · 97% SLA
- **Partner logos strip:** Suzlon · Inox Wind · Siemens Gamesa · Vestas · SECI · NTPC (chips, below KPIs)

### 3.4 Process Timeline — "How SSV Works"

- Light background, 3-column horizontal layout (stacks vertically on mobile)
- **Step 1 — Assess** (icon: 🔍)
  - Site survey, wind/solar resource mapping, feasibility report
  - *"Free for qualified projects"*
- **Step 2 — Build** (icon: 🏗️)
  - WTG/civil/electrical EPC, MNRE/CEIG approvals, milestone-tracked with penalties
  - *"Avg 12–18 months commissioning"*
- **Step 3 — Operate** (icon: ⚡)
  - In-house O&M, 24×7 SCADA remote monitoring, 97% plant availability SLA
  - *"25-year O&M capability"*
- Connector line between steps (hidden on mobile)
- **AEO value:** Directly answers "What does a wind EPC contractor do step by step?"

### 3.5 Services — 3 Cards

Grid `repeat(auto-fit, minmax(280px,1fr))`, white background.

Each card:
- 3D icon (colored background pill)
- Service name (`h3`)
- Description (2–3 sentences)
- Spec tags row
- **"Ideal for:"** row — names target sectors
- **"Learn more →"** anchor linking to the relevant FAQ Q&A

| Card | Icon bg | Specs | Ideal for |
|------|---------|-------|-----------|
| Wind Energy EPC | `#dcfce7` | On-shore WTG · 5+ MW · ISTS grid | Govt/PSU, IPPs |
| Hybrid Solar+Wind | `#fef9c3` | Optimised PLF · BESS-ready · Shared infra | Industrial, Real Estate |
| O&M Services | `#dbeafe` | AMC · 24×7 monitoring · Performance SLA | All sectors |

### 3.6 Why SSV — Competitive Comparison

- Slate background
- Existing "Typical EPC vs SSV Infra" two-column card layout — retained and copy sharpened
- **Mid-section CTA** added below cards: "Ready to see the SSV difference? → Book free assessment" (green outlined button, centred)

### 3.7 Track Record — Stats + Proof

- Dark background
- **Stats row (5 boxes, count-up on `IntersectionObserver`):**
  300+ MW · 25+ Projects · 97% Avg Availability · ₹500Cr+ · 12 States
- **India map graphic:** Simple SVG outline of India with green dots on active states (Rajasthan, Gujarat, Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Madhya Pradesh) — communicates geographic reach to GEO
- **Client/OEM chips:** Suzlon · Inox Wind · Siemens Gamesa · Vestas · ReNew Power · Adani Green · SECI · NTPC

### 3.8 Testimonials — 3 Cards (Placeholder)

- White background
- 3-card horizontal grid
- Each card: avatar initials circle + 5-star rating + quote + name + title + organisation
- Cards clearly commented `<!-- REPLACE with real testimonial -->`

| Card | Placeholder sector |
|------|--------------------|
| 1 | Government / PSU official |
| 2 | Hospital facility manager |
| 3 | Real estate developer |

### 3.9 Sectors — 4 Cards

- Slate background
- Existing 4 sectors retained: Govt & PSUs · Hospitals & Healthcare · Educational Institutions · Real Estate Developers
- **Upgrades:** 3D sector icons (SVG-based), **"Key benefit"** callout stat on each card
- GEO: each card body uses full entity names and benefit descriptions AI can cite

### 3.10 FAQ — AEO + GEO Engine (NEW)

- White background, accordion UI (click to expand/collapse)
- `FAQPage` JSON-LD schema mirrors this section exactly

**8 Q&As:**

1. *What does a Wind EPC contractor do in India?* — Full lifecycle answer: feasibility, civil, erection, commissioning, O&M
2. *How long does wind farm commissioning take?* — 12–18 months typically; SSV milestone-tracked
3. *What is RPO compliance and why does it matter?* — Renewable Purchase Obligation, MNRE mandate, penalties for non-compliance
4. *What is the approximate cost of a 1 MW wind project in India?* — ₹6–8 Cr per MW depending on site, turbine, grid distance
5. *What is the difference between RESCO, CAPEX, and PPA models?* — Definitions + SSV advisory for all three
6. *How does an O&M SLA work for wind farms?* — 97% availability guarantee, penalty clauses, response time SLAs
7. *Which states in India have the best wind energy potential?* — Rajasthan, Gujarat, Tamil Nadu, AP, Karnataka — with capacity factors
8. *What certifications should a Wind EPC contractor have?* — MNRE empanelment, CEIG liaison, ISO, nodal agency experience

### 3.11 Lead Form — Feasibility Report Request

- Dark background, split layout (left benefits / right form card)
- **Left:** "What you get" list (unchanged) + urgency note: "Our consultant responds within 48 business hours"
- **Right — form card upgrades:**
  - Progress indicator: "Step 1 of 1 · Takes 2 minutes"
  - Fields: First name · Last name · Organisation · Email (new) · Phone · Sector · Capacity needed · Project brief
  - Submit: "Request feasibility report →"
  - Privacy note: "🔒 Your details are confidential and never shared"
  - **WhatsApp fallback CTA** below form card: "Prefer to chat? → WhatsApp us now" (opens `wa.me`)
- Success state: checkmark + confirmation message (existing)

### 3.12 Footer

- Dark (`#060e08`), 3-column layout
- **Col 1:** Logo + tagline + full address (street, city, state, PIN, India) + Google Maps link
- **Col 2:** Quick links (Why SSV / Services / Track Record / Sectors / FAQ / Contact)
- **Col 3:** Phone · Email · WhatsApp · Social icon row (3D icons, horizontal)
- **Bottom bar:** Copyright · MNRE badge · ISO badge · Privacy link

---

## 4. Floating Widgets

### 4.1 Social Strip — Left Edge

- Fixed, vertically centred on left edge
- 5 icons stacked: LinkedIn · YouTube · Instagram · X · Facebook
- **Icon design:** Official brand SVG paths inside 3D pill containers (gradient bg + layered box-shadow + glossy highlight + perspective tilt)
- Hover: lifts, straightens, scales 1.1×
- Mobile: collapses to hidden (social links moved to footer)

### 4.2 Bottom-Right Widget Stack

All widgets fixed, bottom-right. Order bottom→top: Phone → WhatsApp → Chatbot → Voice AI.

#### Phone FAB
- Largest (44px), bright green (`#22c55e`), pulse ring animation
- `href="tel:+91XXXXXXXXXX"`, `aria-label="Call SSV Infra"`

#### WhatsApp FAB
- 40px, WhatsApp green (`#25d366`)
- `href="https://wa.me/91XXXXXXXXXX?text=Hi SSV Infra, I'd like to enquire about renewable energy EPC."` (pre-filled message)
- Label tooltip on hover

#### Chatbot Widget
- Toggle button: dark green pill with chat icon
- Expands to `320×420px` floating chat panel
- **Panel contents:**
  - Header: "SSV Infra Assistant" + status dot "Online"
  - Welcome message: "Hi! I'm the SSV Infra assistant. I can help you with questions about our Wind EPC, Hybrid Solar, and O&M services. What would you like to know?"
  - Quick-reply chips: "What services do you offer?" · "How much does a wind project cost?" · "Book a free assessment" · "Talk to a human"
  - Input field + send button
  - Simulated typing indicator (animated dots)
  - Pre-programmed responses for each quick-reply chip (placeholder logic in JS)
- Wire-up note: `<!-- CHATBOT: Replace JS handler with your API endpoint -->`

#### Voice AI Widget
- Toggle button: indigo (`#4f46e5`) pill with microphone icon
- Expands to `280×200px` floating panel
- **Panel contents:**
  - Header: "Talk to SSV AI"
  - Idle state: mic icon + "Tap to speak"
  - Listening state: animated waveform bars + "Listening…"
  - Processing state: spinner + "Thinking…"
  - Response state: speaker icon + simulated text response
  - Keyboard fallback: small text input below waveform
- Wire-up note: `<!-- VOICE AI: Replace handleVoiceInput() with ElevenLabs/Retell SDK -->`

---

## 5. Schema Markup Detail

### Organization
```json
{
  "@type": "Organization",
  "name": "SSV Infra",
  "url": "https://ssvinfra.in",
  "logo": "https://ssvinfra.in/logo.png",
  "foundingDate": "2016",
  "areaServed": "IN",
  "sameAs": ["LinkedIn URL", "YouTube URL", "Instagram URL", "X URL", "Facebook URL"]
}
```

### LocalBusiness
```json
{
  "@type": "LocalBusiness",
  "name": "SSV Infra",
  "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" },
  "telephone": "+91-XXXXXXXXXX",
  "openingHours": "Mo-Sa 09:00-18:00"
}
```

### FAQPage
All 8 Q&As from section 3.10 encoded as `mainEntity` array of `Question`/`acceptedAnswer` pairs.

### Service (×3)
Wind EPC · Hybrid Solar+Wind · O&M — each with `provider`, `areaServed: India`, `description`.

---

## 6. CRO Decisions

| Element | Decision | Reason |
|---------|----------|--------|
| Dual CTA in hero | Form + WhatsApp | India B2B buyers prefer WhatsApp for first contact |
| Phone in nav | Visible desktop | Instant trust signal for PSU procurement teams |
| Mid-page CTA | After Why SSV section | Captures convinced visitors before form section |
| WhatsApp fallback under form | Below submit button | Reduces form abandonment for mobile users |
| Progress indicator on form | "Step 1 of 1 · 2 min" | Reduces perceived effort |
| Count-up animations | Stats + KPI section | Draws eye, increases dwell time |
| Process timeline | New section | Builds trust, answers objections before form |
| Testimonials | New placeholder section | Social proof at high-intent scroll depth |

---

## 7. AEO / GEO Decisions

| Element | Signal | Target engine |
|---------|--------|--------------|
| FAQ accordion (8 Q&As) | Direct answer format | Google AI Overview, Perplexity |
| FAQPage JSON-LD | Structured data | All AI crawlers |
| H1 keyword: "India's Most Trusted Wind & Hybrid EPC Partner" | Entity definition | ChatGPT, Gemini, Claude |
| Process timeline headings | How-to content | SearchGPT, Perplexity |
| Organization + LocalBusiness schema | Entity anchoring | Google, Bing AI |
| Full address in footer | Geographic entity | LocalBusiness GEO signals |
| India state map | Visual + semantic geographic coverage | GEO crawlers |
| Service schema × 3 | Service entity definitions | All AI engines |
| "Ideal for:" on service cards | Customer segment signals | GEO audience matching |
| Meta description (keyword-rich) | Snippet + AI summary | All search engines |

---

## 8. Placeholders to Replace Before Launch

| Placeholder | Location | What to replace with |
|-------------|----------|---------------------|
| `+91-XXXXXXXXXX` | Nav, footer, FABs, wa.me links | Real SSV Infra phone number |
| `https://wa.me/91XXXXXXXXXX` | WhatsApp FAB + form fallback | Real WhatsApp business number |
| `"2016"` in schema | Organization JSON-LD | Actual founding year |
| `"Bengaluru, Karnataka"` | LocalBusiness schema + footer | Full registered address |
| `https://ssvinfra.in/logo.png` | Organization schema | Actual hosted logo URL |
| Social `sameAs` URLs | Organization schema | Real LinkedIn/YouTube/Instagram/X/Facebook profile URLs |
| Testimonial cards | Section 3.8 | Real quotes from clients |
| India map state dots | Section 3.7 | Adjust to actual states SSV operates in |
| Email address | Footer Col 3 | Real SSV Infra email |

> All placeholders are commented `<!-- REPLACE: ... -->` in the HTML for easy find-and-swap.

---

## 9. Technical Constraints

- **Single file:** All CSS, JS, SVG inline — no external dependencies except `wa.me` links
- **No frameworks:** Vanilla HTML/CSS/JS only
- **No build step:** Runs directly via `python -m http.server` or any static host
- **Estimated size:** ~1,800 lines
- **Browser support:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile breakpoint:** `760px` — full responsive
- **Performance:** No render-blocking resources; animations use `transform`/`opacity` only (GPU composited)
