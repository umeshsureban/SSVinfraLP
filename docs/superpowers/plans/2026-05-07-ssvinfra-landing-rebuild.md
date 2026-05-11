# SSV Infra Landing Page — CRO + AEO + GEO Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `ssvinfra.html` as a single self-contained file with full CRO, AEO, and GEO optimisation — 13 content sections, 4 JSON-LD schema blocks, floating widgets (Voice AI, Chatbot, WhatsApp, Phone, Social strip).

**Architecture:** One HTML file with all CSS in a `<style>` block, all JS in a `<script>` block at the bottom, and all SVGs inline. No external dependencies. Sections are built task-by-task; each task produces a browser-verifiable result.

**Tech Stack:** Vanilla HTML5 · CSS3 (custom properties, grid, flexbox, animations) · ES6 JS (IntersectionObserver, classList) · JSON-LD schema · Official brand SVGs

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `ssvinfra.html` | Rewrite | Entire page — all CSS, JS, SVG, schema inline |

---

### Task 1: Boilerplate, CSS foundations, Nav

**Files:** Rewrite `ssvinfra.html` from scratch

- [ ] **Step 1: Write the full HTML shell with CSS custom properties and nav**

Replace entire `ssvinfra.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SSV Infra — Wind &amp; Hybrid Solar EPC Partner | India</title>
<meta name="description" content="SSV Infra delivers utility-scale Wind, Hybrid Solar+Wind EPC and O&amp;M services across India. 300+ MW commissioned. MNRE compliant. Get a free feasibility report.">
<link rel="canonical" href="https://ssvinfra.in/">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --ink:#0b1a0e;--forest:#14532d;--mid:#1e7a42;--bright:#22c55e;
  --pale:#f0faf3;--slate:#f8faf8;--border:#d1e7d8;--muted:#4b6653;
  --white:#fff;--radius:12px;--wa:#25d366;--indigo:#4f46e5;
}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:'Segoe UI',system-ui,sans-serif;color:var(--ink);background:var(--white);overflow-x:hidden}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:200;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 5%;background:rgba(11,26,14,.97);backdrop-filter:blur(10px);border-bottom:1px solid rgba(34,197,94,.12);transition:height .3s}
nav.scrolled{height:52px}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none}
.logo-mark{width:32px;height:32px;background:var(--bright);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:var(--ink)}
.logo-text{font-size:17px;font-weight:700;color:#fff;letter-spacing:.5px}
.logo-text span{color:var(--bright)}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{font-size:13px;color:rgba(255,255,255,.65);text-decoration:none;transition:color .2s}
.nav-links a:hover{color:#fff}
.nav-right{display:flex;align-items:center;gap:14px}
.nav-phone{font-size:13px;font-weight:700;color:var(--bright);text-decoration:none;white-space:nowrap}
.nav-cta{background:var(--bright);color:var(--ink);padding:8px 20px;border-radius:7px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;transition:background .2s}
.nav-cta:hover{background:#16a34a;color:#fff}
.nav-burger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px}
.nav-burger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;transition:all .3s}
.nav-mobile{display:none;flex-direction:column;gap:0;background:rgba(11,26,14,.98);position:fixed;top:68px;left:0;right:0;z-index:199;border-bottom:1px solid rgba(34,197,94,.15)}
.nav-mobile a{padding:14px 5%;color:rgba(255,255,255,.75);text-decoration:none;font-size:14px;border-bottom:1px solid rgba(255,255,255,.06)}
.nav-mobile.open{display:flex}

/* SECTION COMMONS */
section{padding:88px 5%}
.sec-eyebrow{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--mid);margin-bottom:10px}
.sec-title{font-size:clamp(26px,3.5vw,40px);font-weight:800;letter-spacing:-1px;color:var(--ink);line-height:1.15;margin-bottom:14px}
.sec-sub{font-size:15px;color:var(--muted);line-height:1.75;max-width:520px}

/* FADE IN */
.fi{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}
.fi.on{opacity:1;transform:none}

/* RESPONSIVE */
@media(max-width:760px){
  .nav-links{display:none}
  .nav-burger{display:flex}
  section{padding:64px 5%}
}
</style>
</head>
<body>

<nav id="nav">
  <a href="#home" class="logo">
    <div class="logo-mark">SSV</div>
    <div class="logo-text">SSV<span>Infra</span></div>
  </a>
  <ul class="nav-links">
    <li><a href="#edge">Why SSV</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#proof">Track Record</a></li>
    <li><a href="#sectors">Sectors</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <div class="nav-right">
    <!-- REPLACE: update phone number -->
    <a href="tel:+919800000000" class="nav-phone">📞 +91 98000 00000</a>
    <a href="#contact" class="nav-cta">Free Assessment →</a>
    <div class="nav-burger" onclick="toggleMobileNav()" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a href="#edge" onclick="toggleMobileNav()">Why SSV</a>
  <a href="#services" onclick="toggleMobileNav()">Services</a>
  <a href="#proof" onclick="toggleMobileNav()">Track Record</a>
  <a href="#sectors" onclick="toggleMobileNav()">Sectors</a>
  <a href="#faq" onclick="toggleMobileNav()">FAQ</a>
  <a href="#contact" onclick="toggleMobileNav()">Free Assessment →</a>
</div>

<script>
function toggleMobileNav(){document.getElementById('nav-mobile').classList.toggle('open')}
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>100);
});
</script>
</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:8080/ssvinfra.html`. Check:
- Dark sticky nav visible
- Phone number and "Free Assessment →" button on right
- Hamburger appears on narrow window (<760px)
- Nav shrinks after scrolling 100px

---

### Task 2: JSON-LD Schema (4 blocks)

**Files:** Modify `ssvinfra.html` — insert before `</head>`

- [ ] **Step 1: Add all 4 schema blocks**

Insert before `</head>`:

```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","name":"SSV Infra","url":"https://ssvinfra.in","logo":"https://ssvinfra.in/logo.png","foundingDate":"2016","areaServed":"IN","description":"India's leading Wind and Hybrid Solar EPC contractor delivering utility-scale renewable energy projects with in-house O&M services.","sameAs":["<!-- REPLACE: LinkedIn URL -->","<!-- REPLACE: YouTube URL -->","<!-- REPLACE: Instagram URL -->","<!-- REPLACE: X URL -->","<!-- REPLACE: Facebook URL -->"]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"LocalBusiness","name":"SSV Infra","image":"https://ssvinfra.in/logo.png","telephone":"<!-- REPLACE: +91XXXXXXXXXX -->","address":{"@type":"PostalAddress","streetAddress":"<!-- REPLACE: Street Address -->","addressLocality":"Bengaluru","addressRegion":"Karnataka","postalCode":"<!-- REPLACE: PIN -->","addressCountry":"IN"},"geo":{"@type":"GeoCoordinates","latitude":"12.9716","longitude":"77.5946"},"openingHours":"Mo-Sa 09:00-18:00","priceRange":"₹₹₹"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What does a Wind EPC contractor do in India?","acceptedAnswer":{"@type":"Answer","text":"A Wind EPC (Engineering, Procurement and Construction) contractor manages the full lifecycle of a wind energy project — from site resource assessment and micrositing to WTG foundation construction, turbine erection, SCADA integration, grid commissioning, and long-term O&M. SSV Infra provides single-window accountability across all these phases."}},
{"@type":"Question","name":"How long does wind farm commissioning take in India?","acceptedAnswer":{"@type":"Answer","text":"A typical utility-scale wind farm in India takes 12–18 months from financial close to commissioning, depending on site conditions, grid connectivity, and regulatory approvals. SSV Infra uses milestone-tracked delivery with contractual penalties to ensure on-time completion."}},
{"@type":"Question","name":"What is RPO compliance and why does it matter?","acceptedAnswer":{"@type":"Answer","text":"RPO (Renewable Purchase Obligation) is a mandate by MNRE requiring electricity distribution companies, open access consumers, and captive users to source a specified percentage of their energy from renewable sources. Non-compliance attracts penalties. SSV Infra helps Government bodies, PSUs, and institutions meet their RPO targets end-to-end."}},
{"@type":"Question","name":"What is the approximate cost of a 1 MW wind project in India?","acceptedAnswer":{"@type":"Answer","text":"The cost of a 1 MW onshore wind project in India typically ranges from ₹6 crore to ₹8 crore per MW, depending on turbine type, site terrain, grid distance, and civil work complexity. SSV Infra provides detailed project-specific cost estimates as part of the free feasibility report."}},
{"@type":"Question","name":"What is the difference between RESCO, CAPEX, and PPA models for renewable energy?","acceptedAnswer":{"@type":"Answer","text":"CAPEX: the client owns and funds the plant outright. RESCO (Renewable Energy Service Company): a third party finances, builds, and operates the plant; the client pays for energy consumed. PPA (Power Purchase Agreement): the client agrees to buy power at a fixed rate for a defined period. SSV Infra provides advisory for all three models based on the client's financial objectives."}},
{"@type":"Question","name":"How does an O&M SLA work for wind farms?","acceptedAnswer":{"@type":"Answer","text":"An O&M (Operations and Maintenance) SLA defines guaranteed plant availability — typically 97% for modern wind farms — with financial penalties if the contractor fails to meet the target. SSV Infra's AMC contracts include 24×7 remote SCADA monitoring, preventive maintenance schedules, rapid spare parts response, and performance reporting."}},
{"@type":"Question","name":"Which states in India have the best wind energy potential?","acceptedAnswer":{"@type":"Answer","text":"The highest wind energy potential in India is found in Rajasthan, Gujarat, Tamil Nadu, Andhra Pradesh, Karnataka, Maharashtra, and Madhya Pradesh — with capacity factors ranging from 28% to 42% at good sites. SSV Infra has operational experience across all these states."}},
{"@type":"Question","name":"What certifications should a Wind EPC contractor have in India?","acceptedAnswer":{"@type":"Answer","text":"A credible Wind EPC contractor in India should hold MNRE empanelment, CEIG (Chief Electrical Inspector to Government) liaison experience, nodal agency registration in target states, ISO 9001 quality management certification, and OEM-authorised installation credentials from turbine manufacturers like Suzlon, Inox Wind, or Siemens Gamesa."}}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[
{"@type":"Service","name":"Wind Energy EPC","provider":{"@type":"Organization","name":"SSV Infra"},"areaServed":"India","description":"End-to-end onshore wind farm EPC — micrositing, WTG foundations, crane hardstands, turbine erection, SCADA integration, and grid commissioning for projects up to 5+ MW per turbine.","serviceType":"Renewable Energy Engineering Procurement Construction"},
{"@type":"Service","name":"Hybrid Solar and Wind EPC","provider":{"@type":"Organization","name":"SSV Infra"},"areaServed":"India","description":"Co-located solar PV and wind turbine plants sharing civil infrastructure to maximise Plant Load Factor, reduce per-unit cost, and smooth generation variability. BESS integration ready.","serviceType":"Renewable Energy Engineering Procurement Construction"},
{"@type":"Service","name":"Wind Farm Operations and Maintenance","provider":{"@type":"Organization","name":"SSV Infra"},"areaServed":"India","description":"Preventive and corrective maintenance, 24x7 remote SCADA monitoring, spare parts management, and SLA-backed 97% plant availability guarantee for wind and hybrid plants.","serviceType":"Renewable Energy Operations and Maintenance"}
]}
</script>
```

- [ ] **Step 2: Verify schema**

Open [https://validator.schema.org](https://validator.schema.org), paste the page HTML. Confirm 0 errors on all 4 blocks. Alternatively check Chrome DevTools → Application → Structured Data.

---

### Task 3: Hero Section

**Files:** Modify `ssvinfra.html` — add after `<nav>` block, before first `<script>`

- [ ] **Step 1: Add hero CSS to `<style>` block**

Append inside `<style>`:

```css
/* HERO */
.hero{min-height:100vh;background:var(--ink);position:relative;display:flex;flex-direction:column;justify-content:center;padding:120px 5% 70px;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 70% 40%,rgba(34,197,94,.12) 0%,transparent 70%)}
.hero-grid{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(34,197,94,.05) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(34,197,94,.05) 60px)}
.hero-inner{position:relative;z-index:2;max-width:700px}
.hero-pill{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(34,197,94,.3);border-radius:100px;padding:5px 16px 5px 8px;margin-bottom:28px}
.pill-dot{width:8px;height:8px;border-radius:50%;background:var(--bright);animation:blink 1.8s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
.pill-text{font-size:11px;font-weight:700;color:var(--bright);letter-spacing:.5px;text-transform:uppercase}
.hero h1{font-size:clamp(34px,5.5vw,64px);font-weight:800;color:#fff;line-height:1.05;letter-spacing:-1.5px;margin-bottom:16px}
.hero h1 .accent{color:var(--bright)}
.hero-sub{font-size:15px;color:rgba(255,255,255,.5);line-height:1.8;max-width:560px;margin-bottom:16px}
.hero-sub strong{color:rgba(255,255,255,.75)}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:48px}
.btn-primary{background:var(--bright);color:var(--ink);padding:14px 28px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:8px;border:none;cursor:pointer;font-family:inherit}
.btn-primary:hover{background:#16a34a;color:#fff;transform:translateY(-2px)}
.btn-wa{background:transparent;border:1.5px solid var(--wa);color:var(--wa);padding:14px 28px;border-radius:8px;font-size:15px;font-weight:600;text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:8px}
.btn-wa:hover{background:var(--wa);color:#fff}
.btn-ghost{border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.8);padding:14px 28px;border-radius:8px;font-size:15px;text-decoration:none;transition:all .2s}
.btn-ghost:hover{border-color:rgba(255,255,255,.5);color:#fff}
.hero-kpis{display:flex;gap:36px;flex-wrap:wrap;margin-bottom:40px}
.kpi-block{border-left:2px solid rgba(34,197,94,.35);padding-left:14px}
.kpi-num{font-size:26px;font-weight:800;color:#fff}
.kpi-num span{color:var(--bright)}
.kpi-label{font-size:11px;color:rgba(255,255,255,.38);margin-top:2px;text-transform:uppercase;letter-spacing:.5px}
.partner-strip{display:flex;flex-wrap:wrap;gap:8px}
.partner-chip{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:6px 14px;font-size:12px;font-weight:600;color:rgba(255,255,255,.45)}

/* TICKER */
.ticker-bar{background:var(--forest);padding:13px 0;overflow:hidden;border-bottom:1px solid rgba(34,197,94,.15)}
.ticker-inner{display:flex;gap:48px;animation:ticker 28s linear infinite;white-space:nowrap}
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.ticker-item{font-size:12.5px;color:rgba(255,255,255,.65);display:flex;align-items:center;gap:10px;flex-shrink:0}
.ticker-item::before{content:'⚡';font-size:11px}

@media(max-width:760px){
  .hero-kpis{gap:18px}
  .hero-actions{flex-direction:column}
  .btn-primary,.btn-wa,.btn-ghost{text-align:center;justify-content:center}
}
```

- [ ] **Step 2: Add hero HTML** — insert after closing `</nav>` and mobile nav div:

```html
<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-grid"></div>
  <div class="hero-inner">
    <div class="hero-pill fi">
      <div class="pill-dot"></div>
      <div class="pill-text">Wind EPC · Hybrid Solar · O&amp;M</div>
    </div>
    <h1 class="fi">India's Most Trusted<br><span class="accent">Wind &amp; Hybrid EPC</span><br>Partner</h1>
    <p class="hero-sub fi"><strong>Tired of EPC firms that disappear after commissioning?</strong><br>SSV Infra owns the full lifecycle — from site feasibility to 25-year O&amp;M. Single-window accountability, zero gaps.</p>
    <div class="hero-actions fi">
      <a href="#contact" class="btn-primary">Get Free Feasibility Report →</a>
      <!-- REPLACE: update WhatsApp number -->
      <a href="https://wa.me/919800000000?text=Hi%20SSV%20Infra%2C%20I%27d%20like%20to%20enquire%20about%20renewable%20EPC." class="btn-wa" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 360 362" fill="none"><path fill="#fff" fill-rule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Z" clip-rule="evenodd"/></svg>
        Chat on WhatsApp
      </a>
    </div>
    <div class="hero-kpis fi">
      <div class="kpi-block"><div class="kpi-num" data-target="300">0<span>+ MW</span></div><div class="kpi-label">Capacity commissioned</div></div>
      <div class="kpi-block"><div class="kpi-num" data-target="8">0<span>+ years</span></div><div class="kpi-label">EPC expertise</div></div>
      <div class="kpi-block"><div class="kpi-num" data-target="25">0<span>+ projects</span></div><div class="kpi-label">Pan-India</div></div>
      <div class="kpi-block"><div class="kpi-num" data-target="97">0<span>%</span></div><div class="kpi-label">Plant availability SLA</div></div>
    </div>
    <div class="partner-strip fi">
      <div class="partner-chip">Suzlon</div>
      <div class="partner-chip">Inox Wind</div>
      <div class="partner-chip">Siemens Gamesa</div>
      <div class="partner-chip">Vestas</div>
      <div class="partner-chip">SECI</div>
      <div class="partner-chip">NTPC</div>
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-bar">
  <div class="ticker-inner">
    <span class="ticker-item">Wind Energy EPC</span><span class="ticker-item">Hybrid Solar + Wind</span><span class="ticker-item">O&amp;M Services</span><span class="ticker-item">MNRE Compliant</span><span class="ticker-item">Performance-Guaranteed</span><span class="ticker-item">Pan-India Operations</span><span class="ticker-item">Government &amp; PSU Projects</span><span class="ticker-item">Hospitals &amp; Institutions</span><span class="ticker-item">Real Estate Developers</span><span class="ticker-item">Wind Energy EPC</span><span class="ticker-item">Hybrid Solar + Wind</span><span class="ticker-item">O&amp;M Services</span><span class="ticker-item">MNRE Compliant</span><span class="ticker-item">Performance-Guaranteed</span><span class="ticker-item">Pan-India Operations</span><span class="ticker-item">Government &amp; PSU Projects</span><span class="ticker-item">Hospitals &amp; Institutions</span><span class="ticker-item">Real Estate Developers</span>
  </div>
</div>
```

- [ ] **Step 3: Verify**

Browser: hero fills viewport, KPI numbers show "0+ MW" etc (count-up wired in Task 14), ticker scrolls, WhatsApp button is green-outlined.

---

### Task 4: Process Timeline Section

**Files:** Modify `ssvinfra.html`

- [ ] **Step 1: Add CSS** inside `<style>`:

```css
/* PROCESS TIMELINE */
.process{background:var(--white)}
.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:52px;position:relative}
.process-grid::before{content:'';position:absolute;top:40px;left:calc(16.66% + 20px);right:calc(16.66% + 20px);height:2px;background:linear-gradient(90deg,var(--bright),var(--mid));z-index:0}
.process-step{text-align:center;padding:0 24px;position:relative;z-index:1}
.step-icon-wrap{width:80px;height:80px;border-radius:50%;background:var(--pale);border:3px solid var(--bright);display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 20px;background:#fff;box-shadow:0 0 0 6px var(--pale)}
.step-num{position:absolute;top:-8px;right:calc(50% - 48px);width:22px;height:22px;background:var(--bright);border-radius:50%;font-size:11px;font-weight:800;color:var(--ink);display:flex;align-items:center;justify-content:center}
.step-title{font-size:17px;font-weight:800;color:var(--ink);margin-bottom:8px}
.step-desc{font-size:13.5px;color:var(--muted);line-height:1.65;margin-bottom:10px}
.step-meta{font-size:12px;font-weight:700;color:var(--mid);background:var(--pale);border-radius:20px;padding:4px 12px;display:inline-block}
@media(max-width:760px){
  .process-grid{grid-template-columns:1fr;gap:32px}
  .process-grid::before{display:none}
  .step-icon-wrap{width:60px;height:60px;font-size:24px}
}
```

- [ ] **Step 2: Add HTML** after the ticker bar div:

```html
<!-- PROCESS TIMELINE -->
<section class="process" id="process">
  <div class="sec-eyebrow fi">How it works</div>
  <div class="sec-title fi">From site to power — three steps</div>
  <p class="sec-sub fi">Every SSV Infra engagement follows a proven, milestone-tracked process with contractual accountability at every stage.</p>
  <div class="process-grid">
    <div class="process-step fi">
      <div class="step-icon-wrap">
        <span class="step-num">1</span>
        🔍
      </div>
      <div class="step-title">Assess</div>
      <p class="step-desc">Wind &amp; solar resource mapping, micrositing, grid feasibility, regulatory landscape review, and detailed project cost estimate.</p>
      <span class="step-meta">Free for qualified projects</span>
    </div>
    <div class="process-step fi">
      <div class="step-icon-wrap">
        <span class="step-num">2</span>
        🏗️
      </div>
      <div class="step-title">Build</div>
      <p class="step-desc">End-to-end EPC — civil works, WTG foundations, turbine erection, electrical systems, SCADA, MNRE &amp; CEIG approvals, grid commissioning.</p>
      <span class="step-meta">Avg 12–18 months</span>
    </div>
    <div class="process-step fi">
      <div class="step-icon-wrap">
        <span class="step-num">3</span>
        ⚡
      </div>
      <div class="step-title">Operate</div>
      <p class="step-desc">In-house O&amp;M team, 24×7 remote SCADA monitoring, preventive maintenance, spare parts management, and SLA-backed performance reporting.</p>
      <span class="step-meta">97% availability guarantee</span>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify**

Browser: 3 steps in a row on desktop with connecting line, stack vertically on mobile.

---

### Task 5: Services Section

**Files:** Modify `ssvinfra.html`

- [ ] **Step 1: Add CSS**:

```css
/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:52px}
.svc-card{border-radius:var(--radius);border:1px solid var(--border);padding:28px 24px;background:#fff;transition:all .25s}
.svc-card:hover{border-color:var(--mid);box-shadow:0 8px 28px rgba(20,83,45,.1);transform:translateY(-3px)}
.svc-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px}
.i-wind{background:#dcfce7}.i-hybrid{background:#fef9c3}.i-om{background:#dbeafe}
.svc-name{font-size:18px;font-weight:700;color:var(--ink);margin-bottom:10px}
.svc-desc{font-size:13.5px;color:var(--muted);line-height:1.7;margin-bottom:12px}
.svc-ideal{font-size:12px;color:var(--mid);font-weight:600;margin-bottom:14px}
.svc-ideal span{color:var(--muted);font-weight:400}
.svc-specs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
.spec{font-size:11px;padding:4px 10px;border-radius:100px;font-weight:600}
.sp-g{background:#dcfce7;color:#14532d}.sp-y{background:#fef9c3;color:#854d0e}.sp-b{background:#dbeafe;color:#1e40af}
.svc-more{font-size:13px;font-weight:700;color:var(--mid);text-decoration:none;display:inline-flex;align-items:center;gap:4px}
.svc-more:hover{color:var(--forest)}
```

- [ ] **Step 2: Add HTML** after process section:

```html
<!-- SERVICES -->
<section id="services" style="background:var(--slate)">
  <div class="sec-eyebrow fi">Our services</div>
  <div class="sec-title fi">Full-spectrum renewable EPC</div>
  <p class="sec-sub fi">From site resource assessment to long-term O&amp;M — one partner, complete accountability.</p>
  <div class="services-grid">
    <div class="svc-card fi">
      <div class="svc-icon i-wind">🌬️</div>
      <div class="svc-name">Wind Energy EPC</div>
      <p class="svc-desc">End-to-end wind farm development — micrositing, WTG foundations, crane hardstands, erection, SCADA integration, and grid commissioning.</p>
      <div class="svc-ideal">Ideal for: <span>Government / PSU, IPPs, Industrial</span></div>
      <div class="svc-specs">
        <span class="spec sp-g">On-shore WTG</span>
        <span class="spec sp-g">Up to 5+ MW turbines</span>
        <span class="spec sp-g">ISTS grid tie</span>
      </div>
      <a href="#faq-wind" class="svc-more">Learn more →</a>
    </div>
    <div class="svc-card fi">
      <div class="svc-icon i-hybrid">⚡</div>
      <div class="svc-name">Hybrid Solar + Wind</div>
      <p class="svc-desc">Co-located solar PV and wind turbine plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth generation variability.</p>
      <div class="svc-ideal">Ideal for: <span>Industrial, Real Estate, C&amp;I</span></div>
      <div class="svc-specs">
        <span class="spec sp-y">Optimised PLF</span>
        <span class="spec sp-y">BESS ready</span>
        <span class="spec sp-y">Shared infra savings</span>
      </div>
      <a href="#faq-hybrid" class="svc-more">Learn more →</a>
    </div>
    <div class="svc-card fi">
      <div class="svc-icon i-om">🔧</div>
      <div class="svc-name">O&amp;M Services</div>
      <p class="svc-desc">Preventive and corrective maintenance, 24×7 remote monitoring, spare parts management, and SLA-backed availability guarantees.</p>
      <div class="svc-ideal">Ideal for: <span>All sectors — existing wind &amp; hybrid plants</span></div>
      <div class="svc-specs">
        <span class="spec sp-b">AMC contracts</span>
        <span class="spec sp-b">24×7 monitoring</span>
        <span class="spec sp-b">Performance SLA</span>
      </div>
      <a href="#faq-om" class="svc-more">Learn more →</a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify** — 3 cards on desktop, 1 column on mobile, hover lifts card.

---

### Task 6: Why SSV + Stats + Testimonials

**Files:** Modify `ssvinfra.html`

- [ ] **Step 1: Add CSS**:

```css
/* WHY SSV */
.compare-wrap{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:52px}
.compare-card{border-radius:var(--radius);padding:28px;border:1.5px solid}
.compare-them{border-color:var(--border);background:#fff}
.compare-us{border-color:var(--bright);background:#fff;position:relative;overflow:hidden}
.compare-us::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--mid),var(--bright))}
.compare-badge{position:absolute;top:12px;right:12px;background:var(--bright);color:var(--ink);font-size:10px;font-weight:800;padding:4px 10px;border-radius:100px;letter-spacing:.5px;text-transform:uppercase}
.compare-label{font-size:10px;font-weight:700;color:var(--muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.compare-name{font-size:18px;font-weight:800;color:var(--ink);margin-bottom:18px}
.diff-list{list-style:none}
.diff-list li{font-size:13.5px;color:var(--muted);padding:8px 0;display:flex;align-items:flex-start;gap:10px;border-bottom:1px solid rgba(0,0,0,.05)}
.diff-list li:last-child{border:none}
.diff-list li .ico{flex-shrink:0;font-size:15px;margin-top:1px}
.mid-cta{text-align:center;margin-top:40px}
.btn-outline-green{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--bright);color:var(--forest);padding:12px 28px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;transition:all .2s}
.btn-outline-green:hover{background:var(--bright);color:var(--ink)}

/* PROOF */
.proof{background:var(--ink)}
.proof .sec-title{color:#fff}
.proof .sec-sub{color:rgba(255,255,255,.5)}
.proof .sec-eyebrow{color:var(--bright)}
.stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:rgba(255,255,255,.08);border-radius:var(--radius);overflow:hidden;margin:48px 0 40px}
.stat-box{background:rgba(255,255,255,.03);padding:26px 20px;text-align:center}
.stat-box .n{font-size:30px;font-weight:800;color:#fff}
.stat-box .n em{color:var(--bright);font-style:normal}
.stat-box .l{font-size:11px;color:rgba(255,255,255,.38);margin-top:4px;text-transform:uppercase;letter-spacing:.5px}
/* India map */
.india-map-wrap{margin:32px 0;text-align:center}
.india-map-wrap svg{max-width:320px;width:100%}
.client-logos{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
.client-chip{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:7px;padding:8px 16px;font-size:12.5px;font-weight:600;color:rgba(255,255,255,.55)}

/* TESTIMONIALS */
.testimonials{background:var(--white)}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px}
.testi-card{border:1px solid var(--border);border-radius:var(--radius);padding:24px;background:#fff;position:relative}
.testi-stars{color:#f59e0b;font-size:14px;margin-bottom:12px;letter-spacing:2px}
.testi-quote{font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:20px;font-style:italic}
.testi-author{display:flex;align-items:center;gap:12px}
.testi-avatar{width:40px;height:40px;border-radius:50%;background:var(--forest);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;flex-shrink:0}
.testi-name{font-size:14px;font-weight:700;color:var(--ink)}
.testi-role{font-size:12px;color:var(--muted)}

@media(max-width:760px){
  .compare-wrap{grid-template-columns:1fr}
}
```

- [ ] **Step 2: Add HTML** after services section:

```html
<!-- WHY SSV -->
<section id="edge" style="background:var(--slate)">
  <div class="sec-eyebrow fi">Why SSV Infra</div>
  <div class="sec-title fi">We go further than the competition</div>
  <p class="sec-sub fi">Most EPC firms stop at installation. SSV Infra owns the full lifecycle — design, build, and guaranteed performance.</p>
  <div class="compare-wrap">
    <div class="compare-card compare-them fi">
      <div class="compare-label">Typical EPC contractors</div>
      <div class="compare-name">Standard market offering</div>
      <ul class="diff-list">
        <li><span class="ico">✗</span>Wind or solar — rarely hybrid</li>
        <li><span class="ico">✗</span>O&amp;M handed off post-commissioning</li>
        <li><span class="ico">✗</span>No sector-specific financing advisory</li>
        <li><span class="ico">✗</span>Generic project timelines</li>
        <li><span class="ico">✗</span>Regulatory approvals left to client</li>
        <li><span class="ico">✗</span>No SLA on plant availability</li>
      </ul>
    </div>
    <div class="compare-card compare-us fi">
      <div class="compare-badge">SSV Advantage</div>
      <div class="compare-label">What SSV Infra delivers</div>
      <div class="compare-name" style="color:var(--forest)">SSV Infra difference</div>
      <ul class="diff-list">
        <li><span class="ico">✅</span>Wind + Hybrid Solar+Wind — maximised PLF</li>
        <li><span class="ico">✅</span>In-house O&amp;M with 24×7 remote monitoring</li>
        <li><span class="ico">✅</span>RESCO / CAPEX / PPA advisory included</li>
        <li><span class="ico">✅</span>Milestone-tracked delivery with penalties</li>
        <li><span class="ico">✅</span>MNRE, CEIG, nodal agency liaison — handled</li>
        <li><span class="ico">✅</span>97% availability guarantee in AMC contracts</li>
      </ul>
    </div>
  </div>
  <div class="mid-cta fi">
    <a href="#contact" class="btn-outline-green">Ready to see the SSV difference? Book free assessment →</a>
  </div>
</section>

<!-- PROOF -->
<section id="proof" class="proof">
  <div class="sec-eyebrow fi">Track record</div>
  <div class="sec-title fi">Numbers that speak</div>
  <p class="sec-sub fi">Proven delivery across wind, hybrid, and long-term O&amp;M contracts across India.</p>
  <div class="stats-row fi">
    <div class="stat-box"><div class="n" data-target="300">0<em>+ MW</em></div><div class="l">Capacity commissioned</div></div>
    <div class="stat-box"><div class="n" data-target="25">0<em>+</em></div><div class="l">Projects delivered</div></div>
    <div class="stat-box"><div class="n" data-target="97">0<em>%</em></div><div class="l">Avg plant availability</div></div>
    <div class="stat-box"><div class="n">₹500<em>Cr+</em></div><div class="l">Projects executed</div></div>
    <div class="stat-box"><div class="n" data-target="12">0<em> states</em></div><div class="l">Pan-India footprint</div></div>
  </div>
  <!-- India map - simplified SVG representation -->
  <div class="india-map-wrap fi">
    <svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg" aria-label="India map showing SSV Infra operational states">
      <!-- Simplified India outline -->
      <path d="M200,20 L260,30 L310,60 L340,100 L360,150 L370,200 L360,240 L340,270 L310,290 L290,330 L270,370 L250,400 L230,430 L215,450 L200,440 L185,420 L170,390 L150,360 L130,320 L110,280 L90,250 L70,210 L60,170 L70,120 L100,80 L140,50 L180,28 Z" fill="none" stroke="rgba(34,197,94,0.3)" stroke-width="2"/>
      <!-- State dots - operational states -->
      <circle cx="180" cy="120" r="8" fill="var(--bright)" opacity=".9"><title>Rajasthan</title></circle>
      <circle cx="140" cy="160" r="8" fill="var(--bright)" opacity=".9"><title>Gujarat</title></circle>
      <circle cx="270" cy="260" r="8" fill="var(--bright)" opacity=".9"><title>Andhra Pradesh</title></circle>
      <circle cx="220" cy="300" r="8" fill="var(--bright)" opacity=".9"><title>Tamil Nadu</title></circle>
      <circle cx="190" cy="270" r="8" fill="var(--bright)" opacity=".9"><title>Karnataka</title></circle>
      <circle cx="190" cy="190" r="8" fill="var(--bright)" opacity=".9"><title>Maharashtra</title></circle>
      <circle cx="220" cy="150" r="8" fill="var(--bright)" opacity=".9"><title>Madhya Pradesh</title></circle>
      <!-- Legend -->
      <circle cx="60" cy="420" r="6" fill="var(--bright)"/>
      <text x="74" y="425" fill="rgba(255,255,255,0.5)" font-size="12" font-family="system-ui">Active states</text>
    </svg>
  </div>
  <div class="fi">
    <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:12px">OEM partners &amp; clients</div>
    <div class="client-logos">
      <div class="client-chip">Suzlon</div><div class="client-chip">Inox Wind</div>
      <div class="client-chip">Siemens Gamesa</div><div class="client-chip">Vestas</div>
      <div class="client-chip">ReNew Power</div><div class="client-chip">Adani Green</div>
      <div class="client-chip">SECI</div><div class="client-chip">NTPC</div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials">
  <div class="sec-eyebrow fi">What clients say</div>
  <div class="sec-title fi">Trusted by organisations across India</div>
  <p class="sec-sub fi">Real outcomes from clients who chose SSV Infra for their renewable energy journey.</p>
  <div class="testi-grid">
    <!-- REPLACE: real testimonial 1 — Government/PSU client -->
    <div class="testi-card fi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-quote">"SSV Infra handled every regulatory approval end-to-end — from MNRE empanelment to state nodal agency liaison. Our 24 MW wind project was commissioned two weeks ahead of schedule."</p>
      <div class="testi-author">
        <div class="testi-avatar">RK</div>
        <div>
          <div class="testi-name">R. Kumar</div>
          <div class="testi-role">Chief Engineer, State PSU · Rajasthan</div>
        </div>
      </div>
    </div>
    <!-- REPLACE: real testimonial 2 — Hospital client -->
    <div class="testi-card fi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-quote">"Our energy costs dropped by 52% in the first year. The 24×7 monitoring means we have never experienced an unplanned outage affecting critical care. The O&M SLA gives us complete peace of mind."</p>
      <div class="testi-author">
        <div class="testi-avatar">SP</div>
        <div>
          <div class="testi-name">S. Patel</div>
          <div class="testi-role">Facility Director, Multi-specialty Hospital · Gujarat</div>
        </div>
      </div>
    </div>
    <!-- REPLACE: real testimonial 3 — Real Estate client -->
    <div class="testi-card fi">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-quote">"The hybrid solar+wind system SSV designed for our township gave us a 5-star green rating and a strong selling point for buyers. The RESCO model meant zero upfront capital outlay for us."</p>
      <div class="testi-author">
        <div class="testi-avatar">AM</div>
        <div>
          <div class="testi-name">A. Mehta</div>
          <div class="testi-role">MD, Real Estate Developer · Karnataka</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify** — comparison cards, stats row, India SVG map with green dots, 3 testimonial cards visible.

---

### Task 7: Sectors + FAQ Sections

**Files:** Modify `ssvinfra.html`

- [ ] **Step 1: Add CSS**:

```css
/* SECTORS */
.sectors-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:48px}
.sector-card{border-radius:var(--radius);border:1px solid var(--border);padding:24px 20px;text-align:center;background:#fff;transition:all .2s}
.sector-card:hover{border-color:var(--mid);box-shadow:0 6px 20px rgba(20,83,45,.08);transform:translateY(-2px)}
.sector-icon{font-size:36px;margin-bottom:12px}
.sector-name{font-size:15px;font-weight:700;color:var(--ink);margin-bottom:6px}
.sector-desc{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:10px}
.sector-stat{font-size:12px;font-weight:700;color:var(--mid);background:var(--pale);border-radius:20px;padding:3px 12px;display:inline-block}

/* FAQ */
.faq-section{background:var(--white)}
.faq-list{margin-top:48px;display:flex;flex-direction:column;gap:0;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}
.faq-item{border-bottom:1px solid var(--border)}
.faq-item:last-child{border-bottom:none}
.faq-q{width:100%;text-align:left;background:#fff;border:none;padding:20px 24px;font-size:15px;font-weight:600;color:var(--ink);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;font-family:inherit;transition:background .15s}
.faq-q:hover{background:var(--pale)}
.faq-q.open{background:var(--pale);color:var(--forest)}
.faq-chevron{font-size:18px;flex-shrink:0;transition:transform .25s;color:var(--mid)}
.faq-q.open .faq-chevron{transform:rotate(180deg)}
.faq-a{display:none;padding:0 24px 20px;font-size:14px;color:var(--muted);line-height:1.75}
.faq-a.open{display:block}
```

- [ ] **Step 2: Add HTML** after testimonials section:

```html
<!-- SECTORS -->
<section id="sectors" style="background:var(--slate)">
  <div class="sec-eyebrow fi">Who we serve</div>
  <div class="sec-title fi">Built for high-impact sectors</div>
  <p class="sec-sub fi">We specialise in clients with large energy footprints where renewable transition delivers the highest ROI and compliance value.</p>
  <div class="sectors-grid">
    <div class="sector-card fi">
      <div class="sector-icon">🏛️</div>
      <div class="sector-name">Government &amp; PSUs</div>
      <p class="sector-desc">RPO compliance, CPSU solar mandates, state DISCOM tenders. We handle MNRE approvals end-to-end.</p>
      <span class="sector-stat">RPO mandate compliance</span>
    </div>
    <div class="sector-card fi">
      <div class="sector-icon">🏥</div>
      <div class="sector-name">Hospitals &amp; Healthcare</div>
      <p class="sector-desc">24×7 reliable green power for critical infrastructure. Reduce EB dependency and energy costs.</p>
      <span class="sector-stat">40–60% cost reduction</span>
    </div>
    <div class="sector-card fi">
      <div class="sector-icon">🎓</div>
      <div class="sector-name">Educational Institutions</div>
      <p class="sector-desc">IITs, universities, and school chains meeting NAAC green campus norms with captive renewable power.</p>
      <span class="sector-stat">NAAC green campus ready</span>
    </div>
    <div class="sector-card fi">
      <div class="sector-icon">🏢</div>
      <div class="sector-name">Real Estate Developers</div>
      <p class="sector-desc">Green-certified townships, commercial complexes, and SEZs with embedded renewable infra and EV readiness.</p>
      <span class="sector-stat">5-star green rating support</span>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq" class="faq-section">
  <div class="sec-eyebrow fi">FAQ</div>
  <div class="sec-title fi">Questions we hear most</div>
  <p class="sec-sub fi">Straightforward answers to what decision-makers ask before starting a renewable energy project.</p>
  <div class="faq-list fi">
    <div class="faq-item" id="faq-wind">
      <button class="faq-q" onclick="toggleFaq(this)">What does a Wind EPC contractor do in India? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">A Wind EPC (Engineering, Procurement and Construction) contractor manages the complete lifecycle of a wind energy project — site resource assessment, micrositing, WTG foundation design and construction, crane hardstand preparation, turbine erection, SCADA integration, grid commissioning, and handover. SSV Infra also provides in-house O&amp;M after commissioning, giving clients single-window accountability from feasibility to long-term performance.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">How long does wind farm commissioning take in India? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">A typical utility-scale wind farm takes 12–18 months from financial close to commissioning, depending on site terrain, grid connectivity distance, and state regulatory timelines. SSV Infra uses milestone-tracked delivery with contractual penalties at each phase gate to ensure on-time completion.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">What is RPO compliance and why does it matter? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">RPO (Renewable Purchase Obligation) is an MNRE mandate requiring electricity distribution companies, open access consumers, and captive users to source a specified percentage of their power from renewable sources. Non-compliance attracts financial penalties and reputational risk. SSV Infra helps Government bodies, PSUs, and large institutions meet their RPO targets with end-to-end project execution and regulatory coordination.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">What is the approximate cost of a 1 MW wind project in India? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">The installed cost of a 1 MW onshore wind project in India typically ranges from ₹6 crore to ₹8 crore per MW, depending on turbine type and capacity, site terrain and access road requirements, grid distance and substation upgrade needs, and state-specific civil work costs. SSV Infra provides a detailed, site-specific cost estimate as part of the free feasibility report.</div>
    </div>
    <div class="faq-item" id="faq-hybrid">
      <button class="faq-q" onclick="toggleFaq(this)">What is the difference between RESCO, CAPEX, and PPA models? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a"><strong>CAPEX:</strong> The client owns and finances the plant outright — highest long-term returns, requires capital. <strong>RESCO:</strong> A third party (like SSV Infra's financing partners) funds, builds, and operates the plant; the client pays only for energy consumed — zero upfront capital. <strong>PPA (Power Purchase Agreement):</strong> The client agrees to buy power at a fixed rate per unit for a defined period, typically 15–25 years. SSV Infra provides advisory for all three models based on the client's financial objectives and risk appetite.</div>
    </div>
    <div class="faq-item" id="faq-om">
      <button class="faq-q" onclick="toggleFaq(this)">How does an O&amp;M SLA work for wind farms? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">An O&amp;M (Operations &amp; Maintenance) SLA defines the guaranteed plant availability percentage — typically 97% for modern wind farms — with financial penalties payable to the plant owner if the contractor falls short. SSV Infra's AMC contracts include 24×7 remote SCADA monitoring, scheduled preventive maintenance, rapid spare parts response (critical spares within 24 hours), and monthly performance reporting against SLA targets.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Which states in India have the best wind energy potential? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">The highest onshore wind energy potential in India is concentrated in Rajasthan (Jaisalmer, Barmer), Gujarat (Kutch, Saurashtra), Tamil Nadu (Tirunelveli, Coimbatore), Andhra Pradesh (Kurnool, Anantapur), Karnataka (Chitradurga, Gadag), Maharashtra (Sangli, Dhule), and Madhya Pradesh (Neemuch, Shajapur) — with gross capacity factors ranging from 28% to 42% at premium sites. SSV Infra has project execution experience in all these states.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">What certifications should a Wind EPC contractor have in India? <span class="faq-chevron">⌄</span></button>
      <div class="faq-a">A credible Wind EPC contractor in India should hold: MNRE empanelment as a channel partner, CEIG (Chief Electrical Inspector to Government) liaison experience for HT/EHT commissioning, nodal agency registration in target states, ISO 9001 quality management certification, and OEM-authorised installation credentials from turbine manufacturers. SSV Infra holds all relevant credentials and has CEIG commissioning experience across multiple states.</div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify** — 4 sector cards, 8 FAQ accordion items (click to expand/collapse — wired in Task 14).

---

### Task 8: Lead Form + Footer

**Files:** Modify `ssvinfra.html`

- [ ] **Step 1: Add CSS**:

```css
/* FORM */
.form-section{background:var(--ink);position:relative;overflow:hidden}
.form-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 10% 80%,rgba(34,197,94,.09) 0%,transparent 70%)}
.form-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:start;position:relative;z-index:1}
.form-left .sec-title{color:#fff}
.form-left .sec-eyebrow{color:var(--bright)}
.form-left p{font-size:14.5px;color:rgba(255,255,255,.5);line-height:1.8;margin:14px 0 24px}
.deliver-list{list-style:none}
.deliver-list li{display:flex;align-items:flex-start;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.07);font-size:13.5px;color:rgba(255,255,255,.6)}
.deliver-list li:last-child{border:none}
.deliver-list li .ck{width:20px;height:20px;border-radius:50%;background:rgba(34,197,94,.2);color:var(--bright);font-size:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;font-weight:700}
.form-card{background:#fff;border-radius:16px;padding:30px}
.form-progress{font-size:11px;font-weight:600;color:var(--muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:.5px}
.form-card h3{font-size:18px;font-weight:800;color:var(--ink);margin-bottom:4px}
.form-card>p{font-size:12.5px;color:var(--muted);margin-bottom:22px}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.f-group{margin-bottom:14px}
.f-group label{display:block;font-size:12px;font-weight:600;color:var(--ink);margin-bottom:4px;letter-spacing:.2px}
.f-group input,.f-group select,.f-group textarea{width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;font-family:inherit;color:var(--ink);background:#fff;outline:none;transition:border .2s}
.f-group input:focus,.f-group select:focus,.f-group textarea:focus{border-color:var(--mid)}
.f-group textarea{height:68px;resize:none}
.f-group select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%234b6653' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}
.f-submit{width:100%;padding:13px;background:var(--forest);color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;font-family:inherit;margin-top:2px}
.f-submit:hover{background:var(--mid)}
.f-note{font-size:11px;color:var(--muted);text-align:center;margin-top:8px}
.f-wa-alt{display:block;text-align:center;margin-top:16px;font-size:13px;color:var(--muted)}
.f-wa-alt a{color:var(--wa);font-weight:700;text-decoration:none}
.f-wa-alt a:hover{text-decoration:underline}
.f-success{display:none;text-align:center;padding:32px 20px;background:#fff;border-radius:16px}
.f-success .checkmark{width:56px;height:56px;border-radius:50%;background:#dcfce7;display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 16px}
.f-success h3{font-size:18px;font-weight:700;color:var(--ink);margin-bottom:8px}
.f-success p{font-size:13.5px;color:var(--muted);line-height:1.6}
.urgency-note{font-size:12.5px;color:rgba(255,255,255,.45);margin-top:16px;display:flex;align-items:center;gap:6px}

/* FOOTER */
footer{background:#060e08;padding:48px 5% 24px}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px;margin-bottom:40px}
.foot-brand .logo-text{font-size:18px;font-weight:700;color:#fff}
.foot-brand .logo-text span{color:var(--bright)}
.foot-tagline{font-size:13px;color:rgba(255,255,255,.35);margin:8px 0 16px;line-height:1.6}
.foot-address{font-size:12.5px;color:rgba(255,255,255,.3);line-height:1.8}
.foot-address a{color:rgba(255,255,255,.4);text-decoration:none}
.foot-address a:hover{color:rgba(255,255,255,.7)}
.foot-heading{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:14px}
.foot-links{list-style:none;display:flex;flex-direction:column;gap:8px}
.foot-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;transition:color .2s}
.foot-links a:hover{color:rgba(255,255,255,.7)}
.foot-contact-item{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.4);margin-bottom:8px;text-decoration:none}
.foot-contact-item:hover{color:rgba(255,255,255,.7)}
.foot-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}
.foot-copy{font-size:12px;color:rgba(255,255,255,.25)}
.foot-badges{display:flex;gap:8px}
.foot-badge{font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;background:rgba(255,255,255,.06);color:rgba(255,255,255,.35);border:1px solid rgba(255,255,255,.1);letter-spacing:.5px}

@media(max-width:760px){
  .form-grid,.footer-grid{grid-template-columns:1fr}
  .f-row{grid-template-columns:1fr}
}
```

- [ ] **Step 2: Add HTML** after FAQ section:

```html
<!-- LEAD FORM -->
<section id="contact" class="form-section">
  <div class="form-grid">
    <div class="form-left fi">
      <div class="sec-eyebrow">Free assessment</div>
      <div class="sec-title">Get your project feasibility report — free</div>
      <p>Share your site details and energy goals. Our consultants prepare a detailed feasibility report with no cost and no commitment.</p>
      <ul class="deliver-list">
        <li><div class="ck">✓</div>Wind &amp; solar resource assessment for your site</li>
        <li><div class="ck">✓</div>Estimated annual generation, units saved &amp; payback period</li>
        <li><div class="ck">✓</div>Indicative project capex &amp; financing options</li>
        <li><div class="ck">✓</div>MNRE incentives &amp; RPO compliance roadmap</li>
        <li><div class="ck">✓</div>Response within 48 business hours</li>
      </ul>
      <p class="urgency-note">⏱ Our consultants respond within 48 business hours</p>
    </div>
    <div class="fi">
      <div class="form-card" id="form-card">
        <div class="form-progress">Step 1 of 1 &nbsp;·&nbsp; Takes 2 minutes</div>
        <h3>Request free feasibility report</h3>
        <p>No spam · No obligation · Confidential</p>
        <div class="f-row">
          <div class="f-group"><label>First name *</label><input type="text" id="fn" placeholder="Rajesh" autocomplete="given-name"></div>
          <div class="f-group"><label>Last name *</label><input type="text" id="ln" placeholder="Sharma" autocomplete="family-name"></div>
        </div>
        <div class="f-group"><label>Organisation *</label><input type="text" id="org" placeholder="Ministry / Hospital / University" autocomplete="organization"></div>
        <div class="f-group"><label>Email *</label><input type="email" id="em" placeholder="rajesh@organisation.in" autocomplete="email"></div>
        <div class="f-group"><label>Sector *</label>
          <select id="sect">
            <option value="">Select sector</option>
            <option>Government / PSU</option><option>Hospital / Healthcare</option>
            <option>Educational Institution</option><option>Real Estate Developer</option>
            <option>Industrial / Commercial</option>
          </select>
        </div>
        <div class="f-row">
          <div class="f-group"><label>Phone *</label><input type="tel" id="ph" placeholder="+91 98XXX XXXXX" autocomplete="tel"></div>
          <div class="f-group"><label>Capacity needed</label>
            <select id="cap">
              <option value="">Select range</option>
              <option>Under 1 MW</option><option>1 – 5 MW</option>
              <option>5 – 20 MW</option><option>20 – 100 MW</option><option>100 MW+</option>
            </select>
          </div>
        </div>
        <div class="f-group"><label>Project brief (optional)</label><textarea id="brief" placeholder="Site location, timeline, energy goals…"></textarea></div>
        <button class="f-submit" onclick="submitForm()">Request feasibility report →</button>
        <div class="f-note">🔒 Your details are confidential and never shared</div>
        <!-- REPLACE: update WhatsApp number -->
        <p class="f-wa-alt">Prefer to chat? <a href="https://wa.me/919800000000?text=Hi%20SSV%20Infra%2C%20I%27d%20like%20a%20feasibility%20report." target="_blank" rel="noopener">WhatsApp us now →</a></p>
      </div>
      <div class="f-success" id="f-success">
        <div class="checkmark">✅</div>
        <h3>Request received!</h3>
        <p>Thank you. Our consultant will prepare your site feasibility report and reach out within 48 business hours.</p>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-grid">
    <div class="foot-brand">
      <div class="logo-text">SSV<span>Infra</span> — Renewable EPC</div>
      <p class="foot-tagline">India's trusted Wind, Hybrid Solar+Wind, and O&amp;M EPC partner. Single-window accountability from feasibility to long-term performance.</p>
      <!-- REPLACE: full registered address -->
      <div class="foot-address">
        <!-- REPLACE: Street address --><br>
        Bengaluru, Karnataka — 560 001<br>
        India<br>
        <a href="https://maps.google.com" target="_blank" rel="noopener">View on Google Maps →</a>
      </div>
    </div>
    <div>
      <div class="foot-heading">Quick links</div>
      <ul class="foot-links">
        <li><a href="#edge">Why SSV Infra</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#proof">Track Record</a></li>
        <li><a href="#sectors">Sectors</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Free Assessment</a></li>
      </ul>
    </div>
    <div>
      <div class="foot-heading">Contact</div>
      <!-- REPLACE: all contact details -->
      <a href="tel:+919800000000" class="foot-contact-item">📞 +91 98000 00000</a>
      <a href="mailto:info@ssvinfra.in" class="foot-contact-item">✉️ info@ssvinfra.in</a>
      <a href="https://wa.me/919800000000" class="foot-contact-item" target="_blank" rel="noopener">💬 WhatsApp</a>
    </div>
  </div>
  <div class="foot-bottom">
    <div class="foot-copy">© 2026 SSV Infra. All rights reserved.</div>
    <div class="foot-badges">
      <span class="foot-badge">MNRE Empanelled</span>
      <span class="foot-badge">ISO 9001</span>
      <span class="foot-badge">CEIG Experienced</span>
    </div>
  </div>
</footer>
```

- [ ] **Step 3: Verify** — dark form section splits correctly, form fields visible, footer 3-column on desktop, 1-column on mobile.

---

### Task 9: Floating Widgets — Social Strip + Bottom-Right Stack

**Files:** Modify `ssvinfra.html` — add CSS and HTML for all floating elements

- [ ] **Step 1: Add CSS**:

```css
/* SOCIAL STRIP — LEFT */
.social-strip{position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:150;display:flex;flex-direction:column;gap:8px;padding:10px 6px;background:rgba(11,26,14,.7);border-radius:0 12px 12px 0;backdrop-filter:blur(8px);border:1px solid rgba(34,197,94,.15);border-left:none}
.social-strip a{display:block;text-decoration:none}
.s-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;position:relative;transition:transform .2s ease,box-shadow .2s ease;transform:perspective(200px) rotateX(6deg) rotateY(-3deg)}
.s-icon:hover{transform:perspective(200px) rotateX(0) rotateY(0) translateY(-4px) scale(1.12)}
.s-icon::before{content:'';position:absolute;top:3px;left:5px;right:35%;height:32%;background:linear-gradient(135deg,rgba(255,255,255,.5) 0%,rgba(255,255,255,.04) 100%);border-radius:6px 6px 60% 20%;z-index:2;pointer-events:none}
.s-icon::after{content:'';position:absolute;bottom:-7px;left:10%;right:10%;height:7px;background:rgba(0,0,0,.25);border-radius:50%;filter:blur(4px);z-index:-1}
.s-icon svg{width:20px;height:20px;position:relative;z-index:1}
.si-li{background:linear-gradient(145deg,#1a8adb,#0a66c2,#064f9a);box-shadow:0 2px 0 #053d78,0 4px 0 #042e5a,0 6px 10px rgba(10,102,194,.5),inset 0 1px 0 rgba(255,255,255,.25)}
.si-yt{background:linear-gradient(145deg,#ff3333,#ff0000,#cc0000);box-shadow:0 2px 0 #990000,0 4px 0 #660000,0 6px 10px rgba(255,0,0,.5),inset 0 1px 0 rgba(255,255,255,.25)}
.si-ig{background:linear-gradient(145deg,#f5c444,#e1306c,#c13584,#833ab4);box-shadow:0 2px 0 #8e2090,0 4px 0 #6b1870,0 6px 10px rgba(193,53,132,.5),inset 0 1px 0 rgba(255,255,255,.25)}
.si-x{background:linear-gradient(145deg,#333,#111,#000);box-shadow:0 2px 0 #000,0 4px 0 #000,0 6px 10px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.12)}
.si-fb{background:linear-gradient(145deg,#4a8dff,#1877f2,#0e5ec7);box-shadow:0 2px 0 #0a4aa0,0 4px 0 #083880,0 6px 10px rgba(24,119,242,.5),inset 0 1px 0 rgba(255,255,255,.25)}

/* BOTTOM-RIGHT WIDGET STACK */
.widget-stack{position:fixed;bottom:24px;right:20px;z-index:300;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
/* Phone FAB */
.fab-phone{width:52px;height:52px;border-radius:50%;background:var(--bright);display:flex;align-items:center;justify-content:center;font-size:22px;text-decoration:none;box-shadow:0 4px 14px rgba(34,197,94,.5);animation:fabPulse 2.2s ease-in-out infinite;transition:transform .2s}
.fab-phone:hover{transform:scale(1.1)}
@keyframes fabPulse{0%,100%{box-shadow:0 4px 14px rgba(34,197,94,.5)}50%{box-shadow:0 4px 20px rgba(34,197,94,.8),0 0 0 8px rgba(34,197,94,.15)}}
/* WhatsApp FAB */
.fab-wa{width:46px;height:46px;border-radius:50%;background:var(--wa);display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 4px 12px rgba(37,211,102,.45);transition:transform .2s}
.fab-wa:hover{transform:scale(1.1)}
.fab-wa svg{width:22px;height:22px}
/* Chatbot toggle */
.fab-chat{display:flex;align-items:center;gap:8px;background:var(--forest);color:#fff;border:none;border-radius:24px;padding:10px 16px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(20,83,45,.4);transition:all .2s;font-family:inherit}
.fab-chat:hover{background:var(--mid)}
/* Voice AI toggle */
.fab-voice{display:flex;align-items:center;gap:8px;background:var(--indigo);color:#fff;border:none;border-radius:24px;padding:10px 16px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(79,70,229,.4);transition:all .2s;font-family:inherit}
.fab-voice:hover{background:#4338ca}

/* CHATBOT PANEL */
.chat-panel{display:none;width:320px;height:430px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);flex-direction:column;overflow:hidden;border:1px solid var(--border)}
.chat-panel.open{display:flex}
.chat-header{background:var(--forest);padding:14px 16px;display:flex;align-items:center;justify-content:space-between}
.chat-header-info{display:flex;align-items:center;gap:10px}
.chat-avatar{width:32px;height:32px;border-radius:50%;background:var(--bright);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--ink)}
.chat-title{font-size:14px;font-weight:700;color:#fff}
.chat-status{font-size:11px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:4px}
.chat-status::before{content:'';width:6px;height:6px;border-radius:50%;background:#4ade80;display:inline-block}
.chat-close{background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1}
.chat-close:hover{color:#fff}
.chat-messages{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
.chat-msg{max-width:80%;padding:10px 13px;border-radius:12px;font-size:13px;line-height:1.5}
.chat-msg.bot{background:var(--pale);color:var(--ink);border-bottom-left-radius:4px;align-self:flex-start}
.chat-msg.user{background:var(--forest);color:#fff;border-bottom-right-radius:4px;align-self:flex-end}
.chat-typing{display:flex;gap:4px;padding:10px 13px;background:var(--pale);border-radius:12px;border-bottom-left-radius:4px;align-self:flex-start;width:fit-content}
.chat-typing span{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:typingDot .9s ease-in-out infinite}
.chat-typing span:nth-child(2){animation-delay:.2s}
.chat-typing span:nth-child(3){animation-delay:.4s}
@keyframes typingDot{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
.chat-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px;border-top:1px solid var(--border)}
.chat-chip{background:var(--pale);border:1px solid var(--border);border-radius:20px;padding:5px 12px;font-size:12px;cursor:pointer;color:var(--ink);transition:all .15s;font-family:inherit}
.chat-chip:hover{background:var(--bright);border-color:var(--bright);color:var(--ink)}
.chat-input-row{display:flex;gap:8px;padding:10px 14px;border-top:1px solid var(--border)}
.chat-input{flex:1;border:1.5px solid var(--border);border-radius:8px;padding:8px 12px;font-size:13px;font-family:inherit;outline:none;color:var(--ink)}
.chat-input:focus{border-color:var(--mid)}
.chat-send{background:var(--forest);color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;font-family:inherit;transition:background .2s}
.chat-send:hover{background:var(--mid)}

/* VOICE AI PANEL */
.voice-panel{display:none;width:280px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);overflow:hidden;border:1px solid var(--border)}
.voice-panel.open{display:block}
.voice-header{background:var(--indigo);padding:14px 16px;display:flex;align-items:center;justify-content:space-between}
.voice-title{font-size:14px;font-weight:700;color:#fff}
.voice-close{background:none;border:none;color:rgba(255,255,255,.6);font-size:18px;cursor:pointer;padding:0;line-height:1}
.voice-close:hover{color:#fff}
.voice-body{padding:24px 20px;text-align:center}
.voice-orb{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--indigo),#7c3aed);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:32px;cursor:pointer;transition:all .2s;box-shadow:0 4px 20px rgba(79,70,229,.4)}
.voice-orb:hover{transform:scale(1.05)}
.voice-orb.listening{animation:voicePulse 1s ease-in-out infinite;background:linear-gradient(135deg,#ef4444,#dc2626)}
.voice-orb.processing{animation:voiceSpin 1s linear infinite}
@keyframes voicePulse{0%,100%{box-shadow:0 4px 20px rgba(239,68,68,.4)}50%{box-shadow:0 4px 30px rgba(239,68,68,.7),0 0 0 12px rgba(239,68,68,.15)}}
@keyframes voiceSpin{to{transform:rotate(360deg)}}
.voice-waveform{display:flex;align-items:center;justify-content:center;gap:3px;height:32px;margin-bottom:12px}
.voice-bar{width:3px;background:var(--indigo);border-radius:3px;animation:waveAnim .6s ease-in-out infinite}
.voice-bar:nth-child(1){height:8px;animation-delay:0s}
.voice-bar:nth-child(2){height:18px;animation-delay:.1s}
.voice-bar:nth-child(3){height:26px;animation-delay:.2s}
.voice-bar:nth-child(4){height:18px;animation-delay:.3s}
.voice-bar:nth-child(5){height:8px;animation-delay:.4s}
@keyframes waveAnim{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.8)}}
.voice-waveform.idle .voice-bar{animation:none;height:4px;background:var(--border)}
.voice-state{font-size:13px;color:var(--muted);margin-bottom:8px;min-height:20px}
.voice-response{font-size:13px;color:var(--ink);background:var(--pale);border-radius:8px;padding:10px 12px;text-align:left;display:none;margin-bottom:12px;line-height:1.6}
.voice-response.show{display:block}
.voice-text-input{width:100%;border:1.5px solid var(--border);border-radius:8px;padding:8px 12px;font-size:13px;font-family:inherit;outline:none;color:var(--ink);margin-top:4px}
.voice-text-input:focus{border-color:var(--indigo)}
.voice-wire-note{font-size:10px;color:rgba(0,0,0,.25);margin-top:12px}

@media(max-width:760px){
  .social-strip{display:none}
  .chat-panel{width:calc(100vw - 40px)}
}
```

- [ ] **Step 2: Add HTML** just before `<script>` tag at bottom:

```html
<!-- SOCIAL STRIP — LEFT EDGE -->
<div class="social-strip" aria-label="Social media links">
  <!-- REPLACE: update all href URLs to real SSV Infra social profiles -->
  <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
    <div class="s-icon si-li">
      <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#fff"/></svg>
    </div>
  </a>
  <a href="#" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
    <div class="s-icon si-yt">
      <svg viewBox="0 0 256 180" xmlns="http://www.w3.org/2000/svg"><polygon points="102,45 168,90 102,135" fill="#fff"/></svg>
    </div>
  </a>
  <a href="#" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
    <div class="s-icon si-ig">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="white" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg>
    </div>
  </a>
  <a href="#" target="_blank" rel="noopener" aria-label="X / Twitter" title="X">
    <div class="s-icon si-x">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/></svg>
    </div>
  </a>
  <a href="#" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook">
    <div class="s-icon si-fb">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </a>
</div>

<!-- BOTTOM-RIGHT WIDGET STACK -->
<div class="widget-stack">

  <!-- VOICE AI PANEL -->
  <div class="voice-panel" id="voice-panel">
    <div class="voice-header">
      <span class="voice-title">🎙️ Talk to SSV AI</span>
      <button class="voice-close" onclick="toggleVoice()" aria-label="Close">✕</button>
    </div>
    <div class="voice-body">
      <div class="voice-orb" id="voice-orb" onclick="handleVoiceTap()" title="Tap to speak">🎙️</div>
      <div class="voice-waveform idle" id="voice-waveform">
        <div class="voice-bar"></div><div class="voice-bar"></div><div class="voice-bar"></div>
        <div class="voice-bar"></div><div class="voice-bar"></div>
      </div>
      <div class="voice-state" id="voice-state">Tap the mic to speak</div>
      <div class="voice-response" id="voice-response"></div>
      <input type="text" class="voice-text-input" id="voice-text" placeholder="Or type your question…" onkeydown="if(event.key==='Enter')handleVoiceText()">
      <!-- VOICE AI: Replace handleVoiceInput() with ElevenLabs/Retell SDK -->
      <div class="voice-wire-note">🔌 Wire-up: replace handleVoiceInput() with your Voice AI SDK</div>
    </div>
  </div>

  <!-- CHATBOT PANEL -->
  <div class="chat-panel" id="chat-panel">
    <div class="chat-header">
      <div class="chat-header-info">
        <div class="chat-avatar">S</div>
        <div>
          <div class="chat-title">SSV Infra Assistant</div>
          <div class="chat-status">Online</div>
        </div>
      </div>
      <button class="chat-close" onclick="toggleChat()" aria-label="Close chat">✕</button>
    </div>
    <div class="chat-messages" id="chat-messages">
      <div class="chat-msg bot">Hi! I'm the SSV Infra assistant. I can help you with questions about our Wind EPC, Hybrid Solar, and O&amp;M services. What would you like to know?</div>
    </div>
    <div class="chat-chips" id="chat-chips">
      <button class="chat-chip" onclick="sendChip(this)">What services do you offer?</button>
      <button class="chat-chip" onclick="sendChip(this)">How much does a wind project cost?</button>
      <button class="chat-chip" onclick="sendChip(this)">Book a free assessment</button>
      <button class="chat-chip" onclick="sendChip(this)">Talk to a human</button>
    </div>
    <div class="chat-input-row">
      <input type="text" class="chat-input" id="chat-input" placeholder="Type a message…" onkeydown="if(event.key==='Enter')sendMessage()">
      <!-- CHATBOT: Replace sendToBackend() with your API endpoint -->
      <button class="chat-send" onclick="sendMessage()">Send</button>
    </div>
  </div>

  <!-- FAB BUTTONS -->
  <button class="fab-voice" onclick="toggleVoice()" aria-label="Talk to AI">🎙️ Talk to AI</button>
  <button class="fab-chat" onclick="toggleChat()" aria-label="Chat with us">💬 Chat with us</button>
  <!-- REPLACE: WhatsApp number -->
  <a href="https://wa.me/919800000000?text=Hi%20SSV%20Infra%2C%20I%27d%20like%20to%20enquire." class="fab-wa" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 360 362" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clip-rule="evenodd"/></svg>
  </a>
  <!-- REPLACE: phone number -->
  <a href="tel:+919800000000" class="fab-phone" aria-label="Call SSV Infra">📞</a>
</div>
```

- [ ] **Step 3: Verify** — social strip visible on left at vertical centre, 4 FABs in bottom-right, clicking chat/voice buttons shows panels (JS wired in next task).

---

### Task 10: JavaScript — All Interactions

**Files:** Modify `ssvinfra.html` — replace the existing `<script>` block with the full JS

- [ ] **Step 1: Replace `<script>` block**:

```html
<script>
/* ── SCROLL FADE-IN ── */
const obs = new IntersectionObserver(els => els.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(el => obs.observe(el));

/* ── NAV SCROLL SHRINK ── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 100);
});

/* ── MOBILE NAV ── */
function toggleMobileNav() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

/* ── COUNT-UP ANIMATION ── */
function countUp(el, target, duration) {
  const start = Date.now();
  const step = () => {
    const progress = Math.min((Date.now() - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    const suffix = el.querySelector('em') ? el.querySelector('em').outerHTML : '';
    el.innerHTML = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      if (!isNaN(target)) countUp(el, target, 1800);
      countObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => countObs.observe(el));

/* ── FAQ ACCORDION ── */
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

/* ── LEAD FORM ── */
function submitForm() {
  const fn = document.getElementById('fn').value.trim();
  const org = document.getElementById('org').value.trim();
  const em = document.getElementById('em').value.trim();
  const sect = document.getElementById('sect').value;
  const ph = document.getElementById('ph').value.trim();
  if (!fn || !org || !em || !sect || !ph) {
    alert('Please fill in all required fields (Name, Organisation, Email, Sector, Phone).');
    return;
  }
  document.getElementById('form-card').style.display = 'none';
  document.getElementById('f-success').style.display = 'block';
}

/* ── CHATBOT ── */
const chatResponses = {
  'what services do you offer?': 'SSV Infra offers three core services:\n\n1. Wind Energy EPC — end-to-end wind farm development\n2. Hybrid Solar+Wind EPC — co-located systems for maximum PLF\n3. O&M Services — 24×7 monitoring with 97% SLA\n\nWould you like details on any of these?',
  'how much does a wind project cost?': 'The cost of a wind project in India typically ranges from ₹6–8 crore per MW, depending on site terrain, turbine type, and grid connectivity. SSV Infra provides a free, site-specific feasibility report with detailed cost estimates. Would you like to request one?',
  'book a free assessment': 'I\'ll take you to our free assessment form right now!',
  'talk to a human': 'You can reach our team directly:\n📞 Call: +91 98000 00000\n💬 WhatsApp: wa.me/919800000000\n\nOr fill our contact form and we\'ll respond within 48 hours.',
};

function toggleChat() {
  document.getElementById('chat-panel').classList.toggle('open');
  document.getElementById('voice-panel').classList.remove('open');
}

function sendChip(btn) {
  const text = btn.textContent;
  addChatMsg(text, 'user');
  document.getElementById('chat-chips').style.display = 'none';
  showTyping().then(() => {
    const reply = chatResponses[text.toLowerCase()] || 'Thanks for your question. Our team will get back to you shortly. You can also call us at +91 98000 00000 or WhatsApp us.';
    addChatMsg(reply, 'bot');
    if (text.toLowerCase() === 'book a free assessment') {
      setTimeout(() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); toggleChat(); }, 800);
    }
  });
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  addChatMsg(text, 'user');
  input.value = '';
  /* CHATBOT: Replace with your API endpoint call — sendToBackend(text).then(reply => addChatMsg(reply, 'bot')) */
  showTyping().then(() => addChatMsg('Thanks for your message! Our team will respond shortly. For immediate help, call +91 98000 00000 or WhatsApp us.', 'bot'));
}

function addChatMsg(text, role) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  return new Promise(resolve => {
    const msgs = document.getElementById('chat-messages');
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;
    setTimeout(() => { typing.remove(); resolve(); }, 1200);
  });
}

/* ── VOICE AI ── */
let voiceState = 'idle';
const voiceSimResponses = [
  'SSV Infra specialises in Wind EPC, Hybrid Solar+Wind, and O&M services across India.',
  'Our wind projects typically take 12 to 18 months from financial close to commissioning.',
  'We offer a free feasibility report for qualified projects. Scroll to the contact form to request one.',
  'SSV Infra has commissioned over 300 megawatts across 12 states in India.',
];

function toggleVoice() {
  document.getElementById('voice-panel').classList.toggle('open');
  document.getElementById('chat-panel').classList.remove('open');
}

function handleVoiceTap() {
  /* VOICE AI: Replace this function body with ElevenLabs/Retell SDK call */
  if (voiceState === 'idle') {
    voiceState = 'listening';
    document.getElementById('voice-orb').classList.add('listening');
    document.getElementById('voice-orb').textContent = '🔴';
    document.getElementById('voice-waveform').classList.remove('idle');
    document.getElementById('voice-state').textContent = 'Listening…';
    setTimeout(() => {
      voiceState = 'processing';
      document.getElementById('voice-orb').classList.remove('listening');
      document.getElementById('voice-orb').classList.add('processing');
      document.getElementById('voice-orb').textContent = '⏳';
      document.getElementById('voice-state').textContent = 'Thinking…';
      setTimeout(() => {
        voiceState = 'idle';
        document.getElementById('voice-orb').classList.remove('processing');
        document.getElementById('voice-orb').textContent = '🎙️';
        document.getElementById('voice-waveform').classList.add('idle');
        const resp = voiceSimResponses[Math.floor(Math.random() * voiceSimResponses.length)];
        document.getElementById('voice-state').textContent = '🔊 Response:';
        const respEl = document.getElementById('voice-response');
        respEl.textContent = resp;
        respEl.classList.add('show');
        setTimeout(() => { respEl.classList.remove('show'); document.getElementById('voice-state').textContent = 'Tap the mic to speak'; }, 6000);
      }, 1500);
    }, 3000);
  }
}

function handleVoiceText() {
  /* VOICE AI: Replace with your text-to-voice API call */
  const text = document.getElementById('voice-text').value.trim();
  if (!text) return;
  document.getElementById('voice-text').value = '';
  document.getElementById('voice-state').textContent = 'Thinking…';
  setTimeout(() => {
    const resp = voiceSimResponses[Math.floor(Math.random() * voiceSimResponses.length)];
    document.getElementById('voice-state').textContent = '🔊 Response:';
    const respEl = document.getElementById('voice-response');
    respEl.textContent = resp;
    respEl.classList.add('show');
    setTimeout(() => { respEl.classList.remove('show'); document.getElementById('voice-state').textContent = 'Tap the mic to speak'; }, 6000);
  }, 1000);
}
</script>
```

- [ ] **Step 2: Verify all interactions**

Open browser and test each:
- Scroll down → elements fade in ✓
- Nav shrinks at 100px scroll ✓
- KPI numbers count up when scrolled into view ✓
- Stats section numbers count up ✓
- FAQ items expand/collapse on click, only one open at a time ✓
- Form validation fires on empty required fields ✓
- Form submit shows success state ✓
- Chat button opens panel, chips send messages, typing indicator shows ✓
- Voice button opens panel, tap orb cycles idle→listening→processing→response ✓
- Mobile nav hamburger toggles ✓

---

### Task 11: Final checks + placeholder audit

**Files:** Review `ssvinfra.html`

- [ ] **Step 1: Search for all placeholders**

Run in terminal:
```bash
grep -n "REPLACE\|98000 00000\|ssvinfra.in\|info@ssvinfra" "e:/AI/AItomate Systems-AIM/SSVInfra/landingpage/ssvinfra.html"
```

Expected: lists every location that needs a real value before launch. Confirm all are present and clearly marked.

- [ ] **Step 2: Validate HTML**

Open [https://validator.w3.org/nu/](https://validator.w3.org/nu/), paste HTML. Fix any errors (warnings for `data-target` are acceptable).

- [ ] **Step 3: Check mobile layout**

Open DevTools → toggle device toolbar → iPhone 12 (390px). Verify:
- Nav shows hamburger only ✓
- Hero CTA buttons stack vertically ✓
- All sections single-column ✓
- Social strip hidden ✓
- FABs visible and not overlapping content ✓
- Chat panel fills screen width ✓

- [ ] **Step 4: Verify schema in Google Rich Results Test**

Go to [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results) → paste URL or HTML. Confirm FAQPage schema detected with 8 questions.

- [ ] **Step 5: Commit**

```bash
cd "e:/AI/AItomate Systems-AIM/SSVInfra/landingpage"
git init
git add ssvinfra.html docs/
git commit -m "feat: SSV Infra landing page — CRO+AEO+GEO rebuild with floating widgets, schema markup, FAQ, Voice AI and Chatbot placeholders"
```

---

## Self-Review Against Spec

| Spec requirement | Task |
|-----------------|------|
| Organization + LocalBusiness + FAQPage + Service×3 schema | Task 2 |
| Dark hero + dual CTA + count-up KPIs + partner logos | Task 3 |
| Process timeline (Assess→Build→Operate) | Task 4 |
| Services with "Ideal for:" and FAQ anchors | Task 5 |
| Why SSV comparison + mid-page CTA | Task 6 |
| Stats + India map + client chips | Task 6 |
| 3 testimonial cards (placeholder) | Task 6 |
| 4 sector cards with key benefit stats | Task 7 |
| 8 FAQ Q&As with accordion UI | Task 7 |
| Lead form + email + progress + WhatsApp fallback | Task 8 |
| Footer 3-col + full address + badges | Task 8 |
| 3D social strip (5 platforms, left edge) | Task 9 |
| Voice AI panel (mic + waveform + simulated response) | Task 9 + 10 |
| Chatbot panel (chips + typing indicator + pre-wired responses) | Task 9 + 10 |
| WhatsApp FAB + Phone FAB | Task 9 |
| Scroll fade-in, count-up, FAQ accordion, form validation | Task 10 |
| Mobile responsive | Tasks 1–9 (per-section breakpoints) |
| All placeholders marked `<!-- REPLACE -->` | Throughout |
