# SSVInfra Landing Page

A high-performance marketing landing page for **SSVInfra**, built with Next.js 15 and Tailwind CSS 4. Features a nature-inspired, editorial design with smooth scroll animations and an integrated WhatsApp / Voice AI contact flow.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Motion (Framer Motion v11) |
| Icons | Lucide React |
| UI Primitives | shadcn/ui (via `components.json`) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
SSVinfraLP/
├── app/
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with metadata
│   └── route.ts          # API route (if any)
├── components/
│   ├── blocks/           # Page-level section components
│   └── ui/               # Reusable UI primitives
├── lib/
│   └── utils.ts          # cn() utility (clsx + tailwind-merge)
├── public/
│   └── ssvinfra.html     # Static HTML reference / prototype
├── ssvinfra.html         # Design reference (self-contained)
├── components.json       # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Design System

| Token | Color | Usage |
|---|---|---|
| `--dark` | `#0B1609` | Nav, hero overlay |
| `--forest` | `#2E510F` | Primary CTA buttons |
| `--mid` | `#698B57` | Accents, card borders |
| `--sage` | `#526B58` | Body text |
| `--wa` | `#25D366` | WhatsApp FAB |
| `--indigo` | `#4F46E5` | Voice AI panel |

**Font:** Inter (Google Fonts) — weights 300–900

---

## License

Private — All rights reserved © SSVInfra
