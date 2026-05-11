# Flip Cards — Design Spec

**Date:** 2026-05-11  
**Scope:** V0 (ssvinfra.html), V1 (v1-page.tsx), V2 (v2-page.tsx)  
**Sections affected:** How it Works (process steps), Services, Why SSV grid

---

## What we're building

Replace the current hover-lift animation on three card groups across all three page versions with a CSS 3D flip interaction. On hover the card rotates 180° on the Y-axis to reveal a back face with the full description. The front face keeps the current at-a-glance info (icon, title, tags/chip); the back face shows the prose detail that is currently visible on the front.

---

## FlipCard component (V1 & V2)

**File:** `components/ui/flip-card.tsx`

```
Props:
  front: ReactNode
  back: ReactNode
  className?: string
```

**Technique:** CSS `perspective` + `transform-style: preserve-3d` + `backface-visibility: hidden`.  
Both faces are placed in the same CSS grid cell (`grid-area: card`) so the container's intrinsic height is the maximum of the two faces — no fixed height needed.

```
.outer   [perspective:900px]  group
.inner   [transform-style:preserve-3d]  transition-transform 0.55s cubic-bezier(.4,0,.2,1)
         on group-hover: [transform:rotateY(180deg)]
.front   [backface-visibility:hidden]  grid-area:card
.back    [backface-visibility:hidden]  [transform:rotateY(180deg)]  grid-area:card
```

The `whileHover` Framer Motion lift (`y: -6, scale: 1.02`) is **removed** from wrapped cards — the flip replaces it. Scroll entrance `fadeUp` animations are kept.

**Nesting pattern:** the existing `motion.div` with scroll-entrance props wraps `FlipCard` as a child. `FlipCard` is the CSS hover target (via `group` class). `whileHover` is stripped from the `motion.div`.

```tsx
<motion.div key={...} {...fadeUp(i)}>          {/* scroll entrance — kept */}
  <FlipCard front={<.../>} back={<.../>} />   {/* hover flip — CSS group */}
</motion.div>
```

---

## Card faces — content mapping

### Process steps (How it works)

| Face  | Content |
|-------|---------|
| Front | Large translucent step number · emoji icon in circle · title · chip (Free / 12–18 months / 97% SLA) |
| Back  | Small "Step 0X" label · full description paragraph · chip repeated · dark forest-green gradient background |

### Services cards

| Face  | Content |
|-------|---------|
| Front | Gradient icon square · service name · tag pills |
| Back  | Small service label · full description paragraph · dark slate background |

### Why SSV grid (V2 only — 6-card grid)

| Face  | Content |
|-------|---------|
| Front | Emoji icon · title |
| Back  | Description paragraph · teal-tinted dark background |

> **Why SSV in V1** is a two-column comparison panel (Others vs SSV Infra), not a card grid. It is **not** converted to flip cards — it stays as-is.

---

## V0 implementation (ssvinfra.html)

V0 is a self-contained HTML file served as an iframe. It gets plain CSS flip cards with no React dependency.

**Technique:** Add flip CSS to the `<style>` block. Wrap existing card inner content with `.flip-inner`, `.flip-front`, `.flip-back` divs.

Cards to convert:
- `.process-step` × 3 (Assess, Build, Operate)
- `.svc-card` × 3 (Wind, Hybrid, O&M)

`.compare-card` (the Others vs SSV comparison) is **not** converted — same reason as V1.

### CSS additions

```css
.flip-card { perspective: 900px; cursor: default; }
.flip-inner {
  display: grid; grid-template-areas: 'card';
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(.4,0,.2,1);
}
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  grid-area: card;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.flip-back { transform: rotateY(180deg); }
```

---

## Scope boundaries

| Item | Included |
|------|----------|
| Process cards (V0, V1, V2) | Yes |
| Services cards (V0, V1, V2) | Yes |
| Why SSV 6-card grid (V2) | Yes |
| Why SSV comparison panel (V0, V1) | No — stays as-is |
| Sector cards (V0) | No |
| Testimonial cards (V0) | No |
| Stats strip | No |

---

## Files changed

| File | Change |
|------|--------|
| `components/ui/flip-card.tsx` | New component |
| `components/versions/v1-page.tsx` | Wrap process + services cards with FlipCard |
| `components/versions/v2-page.tsx` | Wrap process + services + why-SSV grid with FlipCard |
| `public/ssvinfra.html` | Add flip CSS + restructure process-step and svc-card HTML |
