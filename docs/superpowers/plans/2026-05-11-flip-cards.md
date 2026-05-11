# Flip Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add CSS 3D flip-card hover interaction to the How-it-Works, Services, and Why-SSV card sections across V0 (plain HTML), V1, and V2 (React + Framer Motion).

**Architecture:** A shared `FlipCard` React component uses CSS `perspective` + `transform-style:preserve-3d` + `backface-visibility:hidden` with a CSS-grid trick (both faces share the same grid area) for automatic height sizing. V1 and V2 wrap existing card content with this component. V0 gets equivalent CSS injected into its `<style>` block and its card markup restructured in place.

**Tech Stack:** Next.js 14, React, Tailwind CSS (arbitrary value syntax), Framer Motion (`motion/react`), plain HTML/CSS for V0.

---

## File Map

| Action | File |
|--------|------|
| Create | `components/ui/flip-card.tsx` |
| Modify | `components/versions/v2-page.tsx` |
| Modify | `components/versions/v1-page.tsx` |
| Modify | `public/ssvinfra.html` |

---

## Task 1: Create FlipCard component

**Files:**
- Create: `components/ui/flip-card.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div className={cn("group [perspective:900px]", className)}>
      <div className="grid [grid-template-areas:'card'] [transform-style:preserve-3d] transition-[transform] duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:[transform:rotateY(180deg)]">
        <div className="[grid-area:card] [backface-visibility:hidden]">
          {front}
        </div>
        <div className="[grid-area:card] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/ui/flip-card.tsx
git commit -m "feat: add FlipCard component"
```

---

## Task 2: V2 — flip the Process (How it Works) cards

**Files:**
- Modify: `components/versions/v2-page.tsx` (the PROCESS section, lines ~138–154)

The current cards are `motion.div` with `whileHover={{ y: -6, scale: 1.02 }}`. Remove `whileHover` and wrap content with `FlipCard`. The front shows the at-a-glance info; the back shows the description prose.

- [ ] **Step 1: Add FlipCard import at the top of v2-page.tsx**

Add this import after the existing imports:
```tsx
import { FlipCard } from "@/components/ui/flip-card";
```

- [ ] **Step 2: Replace the process cards map**

Find and replace the entire `.map((s, i) =>` block inside the PROCESS section (`<div className="grid md:grid-cols-3 gap-8">`):

```tsx
{[
  { step: "01", emoji: "🔍", title: "Assess", desc: "Wind & solar resource mapping, micrositing, grid feasibility, regulatory review, and detailed project cost estimate.", note: "Free for qualified projects" },
  { step: "02", emoji: "🏗️", title: "Build",  desc: "End-to-end EPC — civil works, foundations, turbine erection, electrical systems, SCADA, MNRE & CEIG approvals, grid commissioning.", note: "Avg 12–18 months" },
  { step: "03", emoji: "⚡", title: "Operate", desc: "In-house O&M, 24×7 SCADA monitoring, preventive maintenance, spare parts management, SLA-backed performance reporting.", note: "97% availability guarantee" },
].map((s, i) => (
  <motion.div key={s.step} {...fadeUp(i)}>
    <FlipCard
      front={
        <div className="relative rounded-2xl p-8 bg-slate-50/72 backdrop-blur-xl border border-teal-100/60 shadow-sm cursor-default text-center">
          <div className="absolute -top-4 left-8 text-white text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/90 to-blue-600/90 backdrop-blur-md border border-white/20">{s.step}</div>
          <div className="text-4xl mb-4 mt-2">{s.emoji}</div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
          <span className="inline-block text-[11px] font-bold text-teal-700 rounded-full px-3 py-1 bg-teal-50/90 border border-teal-200/40">{s.note}</span>
        </div>
      }
      back={
        <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-600 to-blue-700 flex flex-col items-center justify-center text-center gap-3 cursor-default">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-teal-200">Step {s.step}</span>
          <p className="text-[14px] text-white/85 leading-relaxed">{s.desc}</p>
          <span className="inline-block text-[11px] font-bold text-teal-700 rounded-full px-3 py-1 bg-teal-50/90">{s.note}</span>
        </div>
      }
    />
  </motion.div>
))}
```

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:3000`, switch to **V2**, scroll to "Three steps to power". Hover each card — it should flip to reveal the description on a teal-blue gradient back. No layout shift.

- [ ] **Step 4: Commit**

```bash
git add components/versions/v2-page.tsx
git commit -m "feat: flip cards on V2 process steps"
```

---

## Task 3: V2 — flip the Services cards

**Files:**
- Modify: `components/versions/v2-page.tsx` (SERVICES section, lines ~108–128)

- [ ] **Step 1: Replace the services cards map**

Find the services `.map((svc, i) =>` block and replace it:

```tsx
{[
  { iconBg: "from-emerald-400/85 to-teal-500/85",  Icon: Wind,   name: "Wind Energy EPC",      desc: "End-to-end onshore wind farm development — micrositing, WTG foundations, crane hardstands, turbine erection, SCADA integration, and grid commissioning.", tags: ["On-shore WTG","Up to 5+ MW","ISTS grid tie"] },
  { iconBg: "from-amber-400/85 to-orange-500/85",  Icon: Sun,    name: "Hybrid Solar + Wind",  desc: "Co-located solar PV and wind plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth variability. BESS integration ready.", tags: ["Optimised PLF","BESS ready","Shared infra"] },
  { iconBg: "from-blue-400/85 to-violet-500/85",   Icon: Wrench, name: "O&M Services",          desc: "In-house O&M division with 24×7 remote SCADA monitoring, preventive maintenance schedules, spare parts management, and SLA-backed performance.", tags: ["97% availability","24×7 SCADA","AMC contracts"] },
].map((svc, i) => (
  <motion.div key={svc.name} {...fadeUp(i)}>
    <FlipCard
      front={
        <div className="rounded-2xl p-8 bg-white/75 backdrop-blur-xl border border-slate-200/70 shadow-sm cursor-default">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${svc.iconBg} backdrop-blur-md border border-white/20`}>
            <svc.Icon size={22} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.name}</h3>
          <div className="flex flex-wrap gap-2">
            {svc.tags.map(t => (
              <span key={t} className="text-[11px] px-3 py-1 rounded-full font-semibold bg-teal-50/90 border border-teal-200/40 text-teal-700">{t}</span>
            ))}
          </div>
        </div>
      }
      back={
        <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center gap-3 cursor-default">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-teal-400">{svc.name}</span>
          <p className="text-[14px] text-slate-300 leading-relaxed">{svc.desc}</p>
        </div>
      }
    />
  </motion.div>
))}
```

- [ ] **Step 2: Verify visually**

In the running dev server, scroll to "Full-spectrum renewable EPC" on V2. Hover each card — front shows icon + name + tag pills, back shows description on dark slate.

- [ ] **Step 3: Commit**

```bash
git add components/versions/v2-page.tsx
git commit -m "feat: flip cards on V2 services"
```

---

## Task 4: V2 — flip the Why SSV grid cards

**Files:**
- Modify: `components/versions/v2-page.tsx` (WHY SSV section, lines ~162–177)

- [ ] **Step 1: Replace the Why SSV grid map**

Find the why-SSV `.map((item, i) =>` block and replace it:

```tsx
{[
  { icon: "🏆", title: "In-house certified teams",   desc: "No sub-contracting. Full accountability across civil, electrical, and SCADA work." },
  { icon: "📡", title: "24×7 SCADA monitoring",      desc: "Real-time plant monitoring with instant alerts and remote diagnostics." },
  { icon: "📋", title: "97% availability SLA",       desc: "Financial penalties if we miss — our SLA has teeth, not just words." },
  { icon: "⚡", title: "Pre-qualified supply chain", desc: "Pre-negotiated OEM agreements enabling 12–18 month delivery timelines." },
  { icon: "🌏", title: "Pan-India operations",       desc: "Active in Rajasthan, Gujarat, Karnataka, TN, AP, Maharashtra, MP." },
  { icon: "💼", title: "CAPEX / RESCO advisory",     desc: "Independent financing model advisory — we recommend what's best for your ROI." },
].map((item, i) => (
  <motion.div key={item.title} {...fadeIn(i)}>
    <FlipCard
      front={
        <div className="rounded-2xl p-6 bg-white/[0.05] backdrop-blur-xl border border-white/10 cursor-default">
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="text-base font-bold text-white">{item.title}</h3>
        </div>
      }
      back={
        <div className="rounded-2xl p-6 bg-teal-500/[0.15] backdrop-blur-xl border border-teal-500/30 flex items-center cursor-default">
          <p className="text-[13px] text-slate-300 leading-relaxed">{item.desc}</p>
        </div>
      }
    />
  </motion.div>
))}
```

- [ ] **Step 2: Verify visually**

Scroll to "Why leading developers choose SSV" on V2. Hover each of the 6 grid cards — front shows emoji + title, back shows description on teal-tinted background.

- [ ] **Step 3: Commit**

```bash
git add components/versions/v2-page.tsx
git commit -m "feat: flip cards on V2 why-SSV grid"
```

---

## Task 5: V1 — flip the Process (How it Works) cards

**Files:**
- Modify: `components/versions/v1-page.tsx` (PROCESS section, lines ~119–134)

- [ ] **Step 1: Add FlipCard import at the top of v1-page.tsx**

```tsx
import { FlipCard } from "@/components/ui/flip-card";
```

- [ ] **Step 2: Replace the process cards map**

Find the process `.map((step, i) =>` block and replace it:

```tsx
{[
  { num: "01", icon: "🔍", title: "Assess", desc: "Wind & solar resource mapping, micrositing, grid feasibility, regulatory review, and detailed cost estimate.", chip: "Free for qualified projects" },
  { num: "02", icon: "🏗️", title: "Build", desc: "End-to-end EPC — civil works, WTG foundations, turbine erection, SCADA, MNRE & CEIG approvals, grid commissioning.", chip: "Avg 12–18 months" },
  { num: "03", icon: "⚡", title: "Operate", desc: "In-house O&M team, 24×7 remote SCADA, preventive maintenance, spare parts management, SLA-backed performance reporting.", chip: "97% availability guarantee" },
].map((step, i) => (
  <motion.div key={step.num} {...fadeUp(i)}>
    <FlipCard
      front={
        <div className="text-center p-8 rounded-2xl bg-white/65 backdrop-blur-xl border border-[#B4BCA0]/30 shadow-md cursor-default">
          <div className="text-6xl font-black text-[#2E510F]/10 leading-none mb-[-8px]">{step.num}</div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 bg-[rgba(232,240,227,0.8)] backdrop-blur-sm border border-[#698B57]/20">{step.icon}</div>
          <h3 className="text-xl font-bold text-[#0B1609] mb-3">{step.title}</h3>
          <span className="text-[11px] font-bold text-[#2E510F] bg-[#E8F0E3] rounded-full px-4 py-1">{step.chip}</span>
        </div>
      }
      back={
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2e510f] to-[#4a7c20] flex flex-col items-center justify-center gap-3 cursor-default">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#b4bca0]">Step {step.num}</span>
          <p className="text-[14px] text-white/85 leading-relaxed">{step.desc}</p>
          <span className="text-[11px] font-bold text-[#2E510F] bg-[#E8F0E3] rounded-full px-4 py-1">{step.chip}</span>
        </div>
      }
    />
  </motion.div>
))}
```

- [ ] **Step 3: Verify visually**

Switch to **V1**, scroll to "From site to power — three steps". Hover each card — dark forest-green back with description should appear.

- [ ] **Step 4: Commit**

```bash
git add components/versions/v1-page.tsx
git commit -m "feat: flip cards on V1 process steps"
```

---

## Task 6: V1 — flip the Services cards

**Files:**
- Modify: `components/versions/v1-page.tsx` (SERVICES section, lines ~145–164)

- [ ] **Step 1: Replace the services cards map**

Find the services `.map((svc, i) =>` block and replace it:

```tsx
{[
  { dot: "bg-[#4CAF50]", iconColor: "text-[#4CAF50]", Icon: Wind, name: "Wind Energy EPC", desc: "End-to-end wind farm development — micrositing, WTG foundations, crane hardstands, erection, SCADA integration, and grid commissioning.", specs: ["On-shore WTG","Up to 5+ MW turbines","ISTS grid tie"] },
  { dot: "bg-[#F9A825]", iconColor: "text-[#F9A825]", Icon: Sun, name: "Hybrid Solar + Wind", desc: "Co-located solar PV and wind turbine plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth generation variability.", specs: ["Optimised PLF","BESS ready","Shared infra savings"] },
  { dot: "bg-[#1E88E5]", iconColor: "text-[#1E88E5]", Icon: Wrench, name: "O&M Services", desc: "Preventive & corrective maintenance, 24×7 remote SCADA, spare parts management, and SLA-backed 97% plant availability guarantee.", specs: ["97% availability SLA","24×7 SCADA","AMC contracts"] },
].map((svc, i) => (
  <motion.div key={svc.name} {...fadeUp(i)}>
    <FlipCard
      front={
        <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-xl border border-[#E8EDE3]/80 shadow-sm cursor-default">
          <div className={`w-3 h-3 rounded-full mb-5 ${svc.dot}`} />
          <svc.Icon size={28} className={`mb-3 ${svc.iconColor}`} />
          <h3 className="text-xl font-bold text-[#0B1609] mb-3">{svc.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {svc.specs.map(s => (
              <span key={s} className="text-[11px] px-3 py-1 rounded-full font-semibold bg-[#F2F5EE]/90 border border-[#B4BCA0]/25 text-[#698B57]">{s}</span>
            ))}
          </div>
        </div>
      }
      back={
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#0b1609] to-[#1a2e16] flex flex-col justify-center gap-3 cursor-default">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#698b57]">{svc.name}</span>
          <p className="text-[14px] text-white/80 leading-relaxed">{svc.desc}</p>
        </div>
      }
    />
  </motion.div>
))}
```

- [ ] **Step 2: Verify visually**

Scroll to "Full-spectrum renewable EPC" on V1. Hover each card — front shows dot + icon + name + spec pills, back shows description on dark background.

- [ ] **Step 3: Commit**

```bash
git add components/versions/v1-page.tsx
git commit -m "feat: flip cards on V1 services"
```

---

## Task 7: V0 — add flip CSS and restructure process steps

**Files:**
- Modify: `public/ssvinfra.html`

V0 is plain HTML. We add CSS classes and restructure the card markup. The existing `.fi` (fade-in) class stays on the outer `.flip-card` wrapper.

- [ ] **Step 1: Add flip CSS to the `<style>` block**

Find the line `.svc-card:hover{...}` in the `<style>` block and add the following CSS **after** it:

```css
/* ── FLIP CARDS ── */
.flip-card{perspective:900px;cursor:default}
.flip-inner{display:grid;grid-template-areas:'card';transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.flip-card:hover .flip-inner{transform:rotateY(180deg)}
.flip-front,.flip-back{grid-area:card;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:var(--radius-card)}
.flip-back{transform:rotateY(180deg)}
.flip-back-inner{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:32px 28px;text-align:center;border-radius:var(--radius-card)}
.flip-step-label{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--pale)}
.flip-step-desc{font-size:14px;color:rgba(255,255,255,.85);line-height:1.7}
```

Also find `.svc-card:hover` and **remove** `transform:translateY(-4px)` from it (the flip replaces the lift):

Before:
```css
.svc-card:hover{border-color:var(--mid);box-shadow:0 10px 32px rgba(46,81,15,.1);transform:translateY(-4px)}
```

After:
```css
.svc-card:hover{border-color:var(--mid);box-shadow:0 10px 32px rgba(46,81,15,.1)}
```

- [ ] **Step 2: Restructure the three `.process-step` cards**

Find the `<div class="process-grid">` block and replace its contents with:

```html
<div class="process-grid">
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front process-step">
        <div class="step-num">01</div>
        <div class="step-icon">🔍</div>
        <div class="step-title">Assess</div>
        <span class="step-chip">Free for qualified projects</span>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#2e510f,#4a7c20)">
        <div class="flip-back-inner">
          <span class="flip-step-label">Step 01</span>
          <p class="flip-step-desc">Wind &amp; solar resource mapping, micrositing, grid feasibility, regulatory landscape review, and detailed project cost estimate.</p>
          <span class="step-chip">Free for qualified projects</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front process-step">
        <div class="step-num">02</div>
        <div class="step-icon">🏗️</div>
        <div class="step-title">Build</div>
        <span class="step-chip">Avg 12–18 months</span>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#2e510f,#4a7c20)">
        <div class="flip-back-inner">
          <span class="flip-step-label">Step 02</span>
          <p class="flip-step-desc">End-to-end EPC — civil works, WTG foundations, turbine erection, electrical systems, SCADA, MNRE &amp; CEIG approvals, grid commissioning.</p>
          <span class="step-chip">Avg 12–18 months</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front process-step">
        <div class="step-num">03</div>
        <div class="step-icon">⚡</div>
        <div class="step-title">Operate</div>
        <span class="step-chip">97% availability guarantee</span>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#2e510f,#4a7c20)">
        <div class="flip-back-inner">
          <span class="flip-step-label">Step 03</span>
          <p class="flip-step-desc">In-house O&amp;M team, 24×7 remote SCADA monitoring, preventive maintenance, spare parts management, and SLA-backed performance reporting.</p>
          <span class="step-chip">97% availability guarantee</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:3000`, switch to **V0**. Scroll to "How it works". Hover each step card — should flip to dark green back with description.

- [ ] **Step 4: Commit**

```bash
git add public/ssvinfra.html
git commit -m "feat: flip cards on V0 process steps"
```

---

## Task 8: V0 — restructure services cards

**Files:**
- Modify: `public/ssvinfra.html`

- [ ] **Step 1: Restructure the three `.svc-card` elements**

Find the `<div class="services-grid">` block and replace its contents with:

```html
<div class="services-grid">
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front svc-card" style="cursor:default">
        <div class="svc-dot dot-wind"></div>
        <div class="svc-name">Wind Energy EPC</div>
        <div class="svc-specs">
          <span class="spec">On-shore WTG</span>
          <span class="spec">Up to 5+ MW turbines</span>
          <span class="spec">ISTS grid tie</span>
        </div>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#0b1609,#1a2e16)">
        <div class="flip-back-inner" style="align-items:flex-start;text-align:left">
          <span class="flip-step-label">Wind EPC</span>
          <p class="flip-step-desc">End-to-end wind farm development — micrositing, WTG foundations, crane hardstands, erection, SCADA integration, and grid commissioning.</p>
          <div class="svc-ideal" style="color:var(--pale)">Ideal for: <span style="color:rgba(255,255,255,.55)">Government / PSU, IPPs, Industrial</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front svc-card" style="cursor:default">
        <div class="svc-dot dot-hybrid"></div>
        <div class="svc-name">Hybrid Solar + Wind</div>
        <div class="svc-specs">
          <span class="spec">Optimised PLF</span>
          <span class="spec">BESS ready</span>
          <span class="spec">Shared infra savings</span>
        </div>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#0b1609,#1a2e16)">
        <div class="flip-back-inner" style="align-items:flex-start;text-align:left">
          <span class="flip-step-label">Hybrid</span>
          <p class="flip-step-desc">Co-located solar PV and wind turbine plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth generation variability.</p>
          <div class="svc-ideal" style="color:var(--pale)">Ideal for: <span style="color:rgba(255,255,255,.55)">Industrial, Real Estate, C&amp;I</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flip-card fi">
    <div class="flip-inner">
      <div class="flip-front svc-card" style="cursor:default">
        <div class="svc-dot dot-om"></div>
        <div class="svc-name">O&amp;M Services</div>
        <div class="svc-specs">
          <span class="spec">AMC contracts</span>
          <span class="spec">24×7 monitoring</span>
          <span class="spec">Performance SLA</span>
        </div>
      </div>
      <div class="flip-back" style="background:linear-gradient(135deg,#0b1609,#1a2e16)">
        <div class="flip-back-inner" style="align-items:flex-start;text-align:left">
          <span class="flip-step-label">O&amp;M</span>
          <p class="flip-step-desc">Preventive and corrective maintenance, 24×7 remote monitoring, spare parts management, and SLA-backed availability guarantees.</p>
          <div class="svc-ideal" style="color:var(--pale)">Ideal for: <span style="color:rgba(255,255,255,.55)">All sectors — existing wind &amp; hybrid plants</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Verify in browser**

Scroll to "Full-spectrum renewable EPC" on V0. Hover each service card — front shows dot + name + specs, back shows description on dark background with "Ideal for" info.

- [ ] **Step 3: Final cross-version smoke test**

Check all three versions in sequence:
- V0: process steps flip ✓, services flip ✓
- V1: process steps flip ✓, services flip ✓
- V2: process steps flip ✓, services flip ✓, Why SSV grid flips ✓

- [ ] **Step 4: Final commit**

```bash
git add public/ssvinfra.html
git commit -m "feat: flip cards on V0 services — all versions complete"
```
