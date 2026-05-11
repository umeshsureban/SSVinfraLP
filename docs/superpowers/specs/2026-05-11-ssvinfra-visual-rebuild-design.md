# SSV Infra — Full Visual Rebuild Design Spec
**Date:** 2026-05-11
**Reference:** https://dribbble.com/shots/25651436-Solar-Energy-Landing-Page (Wolfpixel Agency)
**Deliverable:** Updated `ssvinfra.html` — single self-contained file, all CSS/JS inline
**Status:** Approved

---

## 1. Goals

Rebuild the visual design of `ssvinfra.html` to match the editorial, nature-inspired aesthetic of the Dribbble reference while keeping 100% of existing SSVInfra content (copy, FAQ, schema, form fields, floating widgets).

---

## 2. Design System

### 2.1 Color Palette

| Token         | Hex       | Usage                                        |
|---------------|-----------|----------------------------------------------|
| `--dark`      | `#0B1609` | Nav (scrolled), hero overlay, dark sections  |
| `--light`     | `#FCFCFA` | Body section backgrounds (alternating)       |
| `--white`     | `#FFFFFF` | Cards, form background                       |
| `--forest`    | `#2E510F` | Primary CTA buttons, strong headings         |
| `--mid`       | `#698B57` | Secondary accents, card borders, open states |
| `--sage`      | `#526B58` | Body text, muted labels                      |
| `--pale`      | `#B4BCA0` | Dividers, subtle text, eyebrow border        |
| `--olive`     | `#909163` | Tag badges, spec chips                       |
| `--wa`        | `#25D366` | WhatsApp FAB only                            |
| `--indigo`    | `#4F46E5` | Voice AI panel and FAB only                  |

### 2.2 Typography

- **Font:** Inter, loaded via Google Fonts (`<link>` in `<head>`)
  - `<link rel="preconnect" href="https://fonts.googleapis.com">`
  - `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">`
- **Body:** `font-family: 'Inter', system-ui, sans-serif`

| Role          | Size         | Weight | Notes                          |
|---------------|--------------|--------|--------------------------------|
| Hero H1       | clamp(44px, 6vw, 80px) | 800 | Tight letter-spacing -2px |
| Section H2    | clamp(32px, 4vw, 52px) | 700 | Letter-spacing -1px           |
| Card H3       | 20px         | 700    |                                |
| Step number   | 64px         | 900    | Light forest green, decorative |
| Body          | 16px         | 400    | Line-height 1.75, sage color   |
| Eyebrow badge | 11px         | 600    | Uppercase, letter-spacing 2px  |
| Stat number   | clamp(48px, 6vw, 80px) | 800 | White, dark sections         |
| Stat label    | 13px         | 400    | Pale/sage                      |

### 2.3 Shape & Spacing

- **Card radius:** `16px`
- **Button radius:** `100px` (full pill)
- **Section padding:** `100px 6%` desktop, `64px 5%` mobile
- **Card padding:** `32px 28px`
- **Grid gap:** `24px`

### 2.4 Textures & Effects

- **Hero overlay:** `linear-gradient(to bottom, rgba(11,26,9,.45) 0%, rgba(11,26,9,.82) 100%)` over Unsplash photo
- **Body hex texture:** SVG hexagonal repeat tile at `4% opacity` on `#FCFCFA` sections
  ```css
  background-image: url("data:image/svg+xml,..."); /* inline SVG hex pattern */
  background-size: 60px 52px;
  opacity: 0.04;
  ```
- **Glass card on hero stats:** `background: rgba(255,255,255,0.92)`, `backdrop-filter: blur(12px)`, `border-radius: 20px`

### 2.5 Motion

| Effect               | Trigger                | Implementation                              |
|----------------------|------------------------|---------------------------------------------|
| Scroll fade-in       | IntersectionObserver   | `opacity:0 + translateY(24px)` → `on` class |
| Count-up animation   | IntersectionObserver   | `data-target` attribute, cubic ease         |
| Nav background       | `window.scroll`        | Class toggle at 80px                        |
| Card hover lift      | CSS `:hover`           | `translateY(-4px)`, `box-shadow` deepens    |
| FAQ accordion        | Click                  | `max-height` transition, chevron rotate     |
| Phone FAB pulse      | CSS animation          | Ring pulse, 2.2s infinite                   |

---

## 3. Hero Image

- **Source:** Unsplash (free, no attribution required for commercial use)
- **URL:** `https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1920&q=85`
- **Description:** Aerial view of wind turbines on lush green rolling hills — directly relevant to SSVInfra's Wind EPC business
- **CSS:** `background-image: url(...)`, `background-size: cover`, `background-position: center`

---

## 4. Page Sections

### 4.1 `<head>`

Unchanged from current `ssvinfra.html`:
- All 4 JSON-LD schema blocks (Organization, LocalBusiness, FAQPage, Service×3)
- Meta charset, viewport, title, description, canonical
- **Add:** Inter Google Fonts `<link>` tags

### 4.2 Navigation

- **Position:** Fixed, `top: 0`, `z-index: 200`
- **Height:** `72px` default → `56px` on scroll (class toggle)
- **Background:** `transparent` on load → `rgba(11,26,9,.94) + backdrop-filter:blur(12px)` after 80px scroll
- **Layout:** flex, space-between
  - **Left:** Logo mark (dark `#0B1609` circle, white "SSV" text, `border-radius:10px`) + wordmark `SSV Infra` white
  - **Centre:** `Why SSV · Services · Track Record · Sectors · FAQ` — 13px Inter, `rgba(255,255,255,.6)`, hover `rgba(255,255,255,1)`
  - **Right:** `📞 +91 80887 44581` (sage color, `font-weight:600`) + `Contact Us ↗` pill button (`background:#FCFCFA`, `color:#0B1609`, `font-weight:700`, `border-radius:100px`, `padding: 9px 22px`)
- **Mobile:** Burger icon → full-screen dark drawer overlay

### 4.3 Hero

- **Height:** `min-height: 100vh`
- **Background:** Unsplash photo + dark gradient overlay (see §3)
- **Content:** Left-aligned, `max-width: 680px`, `padding-top: 140px`

**Structure (top → bottom):**
1. **Badge pill:** `border: 1px solid rgba(180,188,160,.45)`, `background: rgba(11,26,9,.35)`, `border-radius:100px` — text: `⚡ Wind EPC · Hybrid Solar · O&M`, `color: #B4BCA0`, 11px/600
2. **H1:** `India's Most Trusted` (white) + line break + `Wind & Hybrid EPC` (color: `#B4BCA0`) + line break + `Partner` (white) — 800 weight, tight spacing
3. **Sub-headline:** `"Tired of EPC firms that disappear after commissioning? SSV Infra owns the full lifecycle — from site feasibility to 25-year O&M."` — 16px, `rgba(255,255,255,.6)`, max-width 540px
4. **CTA row:**
   - Primary: `Get Free Feasibility Report ↗` — pill, `background:#FCFCFA`, `color:#0B1609`, `font-weight:700`, `border-radius:100px`
   - Secondary: `Chat on WhatsApp` — pill, `border: 1.5px solid #25D366`, `color:#25D366`
5. **Floating stats card** (bottom of hero, `position: absolute; bottom: -48px`):
   - White glass card, `border-radius:20px`, `backdrop-filter:blur(12px)`
   - 4 KPI blocks separated by `1px` vertical dividers: `300+ MW | 8+ Years | 25+ Projects | 97% SLA`
   - Each: large bold number (dark), small pale label beneath
   - Count-up animation via `data-target`

### 4.4 Ticker Bar

- `margin-top: 48px` (to clear the floating stats card)
- Background: `#2E510F`, text `rgba(255,255,255,.7)`
- Same scrolling marquee content as current

### 4.5 Process — "How it Works"

- **Background:** `#FCFCFA` + hex texture
- **Eyebrow pill:** `How it works`
- **H2:** `From site to power — three steps`
- **Layout:** 3-column grid, dashed connector line between step numbers
- **Each step:**
  - Step number `01` / `02` / `03` — 64px / 900 weight / `rgba(46,81,15,.15)` (ghost green, decorative)
  - Icon: 40px emoji in `48px` circle, `background:#E8F0E3`
  - Bold title (20px/700)
  - Description paragraph
  - Stat chip: `border-radius:100px`, `background:#E8F0E3`, `color:#2E510F`, `font-size:12px`

### 4.6 Services

- **Background:** `#FFFFFF`
- **Eyebrow pill:** `Our services`
- **H2:** `Full-spectrum renewable EPC`
- **Sub:** unchanged
- **3-column card grid**

**Each service card:**
- Colored dot indicator (12px circle): Wind=`#4CAF50`, Hybrid=`#F9A825`, O&M=`#1E88E5`
- Service name H3 (20px/700)
- Description (14px/sage)
- "Ideal for:" line
- Spec tag chips (`background:#F2F5EE`, `color:#526B58`, `border-radius:100px`)
- `Learn more →` text link (`color:#2E510F`, `font-weight:600`)
- Hover: `translateY(-4px)`, border becomes `#698B57`

### 4.7 Why SSV — Comparison

- **Background:** `#FCFCFA` + hex texture
- **Eyebrow pill:** `Why SSV Infra`
- **H2:** `We go further than the competition`
- **2 cards side by side:**
  - Left "Typical EPC": white bg, `#E8EDE3` border, muted — ✗ list items in `#B4BCA0`
  - Right "SSV Infra": `background:#0B1609`, white text, `border: 1.5px solid #698B57`, top accent bar `4px solid #698B57` — ✅ list items
  - "SSV Advantage" badge: top-right of dark card, `background:#698B57`, white text, pill
- **Below cards:** Centered `Book free assessment →` pill CTA (`border: 2px solid #2E510F`, `color:#2E510F`)

### 4.8 Track Record

- **Background:** `#0B1609`
- **Eyebrow pill:** `Track record` (pale border on dark bg)
- **H2:** `Numbers that speak` (white)
- **Stats:** Pure typography, no boxes — 5 stats in a row with thin `1px rgba(255,255,255,.12)` vertical dividers
  - Numbers: `clamp(48px,6vw,80px)` / 800 / white
  - Labels: 13px / `#B4BCA0`
  - Count-up on scroll
- **India SVG map:** unchanged from current, dots in `#698B57`
- **OEM/client chips:** `background: rgba(255,255,255,.06)`, pale border, 13px white text

### 4.9 Testimonials

- **Background:** `#FCFCFA`
- **3 cards**, white bg, `16px` radius
- **Each card:**
  - `3px` left border in `#698B57`
  - `★★★★★` in `#F59E0B` amber
  - Italic quote, 14px/sage
  - Author avatar: initials circle `background:#2E510F`, white text
  - Name (14px/700/dark) + role (12px/sage)

### 4.10 Sectors

- **Background:** `#FFFFFF`
- **4-column grid**
- **Each sector card:**
  - 40px emoji icon
  - Sector name (16px/700)
  - 2-line description
  - Stat badge (`background:#F2F5EE`, `color:#2E510F`, pill)
  - Hover: `translateY(-4px)`, `border-color: #698B57`

### 4.11 FAQ

- **Background:** `#FCFCFA` + hex texture
- **Accordion:**
  - Closed: `background:#FFFFFF`, `border-bottom: 1px solid #E8EDE3`
  - Open: `background:#F2F5EE`, `border-left: 3px solid #698B57`
  - Chevron rotates 180° on open
- **8 Q&As:** unchanged from current

### 4.12 Lead Form

- **Background:** `#0B1609`
- **Radial glow:** `rgba(46,81,15,.12)` at bottom-left
- **Left column:**
  - Eyebrow pill (pale border), white H2, paragraph, benefit list
  - Benefit list: `✓` in `20px` circle `background:rgba(104,139,87,.2)`, `color:#698B57` — item text `rgba(255,255,255,.65)`
  - Urgency note: `rgba(255,255,255,.4)`
- **Right column — form card:**
  - White bg, `border-radius:20px`, `padding:36px`
  - Step indicator: `Step 1 of 1 · Takes 2 minutes`
  - H3: `Request free feasibility report` (dark, 20px/800)
  - All existing fields unchanged
  - Submit button: `background:#2E510F`, white text, `border-radius:100px`, full-width
  - Privacy note + WhatsApp fallback link

### 4.13 Footer

- **Background:** `#060E08`
- **3-column grid:** Brand+address | Quick links | Contact
- **Bottom bar:** Copyright | MNRE · ISO · CEIG badges | social icons row
- Unchanged structure, updated colors to match new palette

---

## 5. Floating Widgets

### 5.1 Left Social Strip
- `background: rgba(11,26,9,.8)`, `border: 1px solid rgba(104,139,87,.2)` (left edge only)
- Icons: same 3D brand SVG icons, updated shadow colors to forest green tones
- Unchanged functionality

### 5.2 Bottom-Right Widget Stack (bottom → top)
1. **Phone FAB:** `background:#2E510F`, pulse ring in `rgba(46,81,15,.25)`
2. **WhatsApp FAB:** `background:#25D366` — unchanged
3. **Chat panel:** header `background:#2E510F`
4. **Voice AI panel:** header `background:#4F46E5` — unchanged

All chat/voice JS logic unchanged.

---

## 6. Schema & SEO

All 4 JSON-LD blocks carried over verbatim from current `ssvinfra.html`. No changes to meta tags, canonical, or structured data.

---

## 7. Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| `≤ 768px` | Nav links hidden → burger drawer; hero H1 clamps down; hero stats card stacks 2×2; process grid → 1 col; services grid → 1 col; compare cards → 1 col; form grid → 1 col; footer → 1 col; left social strip hidden |
| `≤ 480px` | Stat numbers smaller clamp; hero padding-top 100px; section padding 48px 5% |

---

## 8. Technical Constraints

- **Single file:** All CSS, JS, SVG inline — no external dependencies except Google Fonts + Unsplash image URL + `wa.me` links
- **No frameworks:** Vanilla HTML/CSS/JS
- **No build step:** Served directly via `app/route.ts` (Next.js reads and serves the file)
- **Browser support:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Estimated lines:** ~1,900

---

## 9. Content Preserved Verbatim

The following content is carried over 100% unchanged:
- All hero copy and KPI numbers
- All process step descriptions
- All service card copy and spec tags
- All comparison list items (Why SSV)
- All track record stats and OEM chip names
- All 3 testimonial placeholder quotes, names, and roles
- All 4 sector card descriptions and stat badges
- All 8 FAQ questions and answers
- All lead form field labels, placeholder text, and success state
- Footer address, phone numbers, email
- All chatbot quick-reply chips and pre-programmed responses
- All voice AI simulation responses
- All JSON-LD schema content
