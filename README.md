# SSVInfra Landing Page

Marketing landing page for **SSVInfra** — India's Wind & Hybrid Solar EPC partner. Built as a self-contained static HTML page, bundled through Next.js static export and auto-deployed to Hostinger VPS via GitHub Actions.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript 5 |
| Page Content | `ssvinfra.html` (self-contained HTML/CSS/JS) |
| Deployment | GitHub Actions → rsync → Hostinger VPS |

---

## Project Structure

```
SSVinfraLP/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Minimal page (build placeholder)
├── public/               # Static assets
├── ssvinfra.html         # Main landing page (deployed as index.html)
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
├── next.config.ts        # output: "export" (static site)
└── tsconfig.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: The dev server serves a blank page. Open [http://localhost:3000/ssvinfra.html](http://localhost:3000/ssvinfra.html) or open `ssvinfra.html` directly in a browser to preview the landing page.

---

## Deployment

Push to `master` — GitHub Actions handles everything automatically:

1. Builds Next.js static export → `out/`
2. Copies `ssvinfra.html` → `out/index.html`
3. rsyncs `out/` to VPS at `/var/www/ssvinfra.aitomate.cloud`

See [DEPLOYMENT_SETUP.md](DEPLOYMENT_SETUP.md) for full infrastructure details.

---

## Live URL

[https://ssvinfra.aitomate.cloud](https://ssvinfra.aitomate.cloud)

---

## License

Private — All rights reserved © SSVInfra
