# portfolio

Deon Hiu's personal portfolio — a warm, soulful take on the usual
"stale industrial" portfolio, with coffee, volleyball, and R&B woven
through the design. Built with [Astro](https://astro.build).

## Stack

- **Astro 7** — static site, fast by default
- **React island** — only the theme toggle (Day Roast ↔ Late Night)
- **Content collections** — projects are markdown files, type-checked with Zod
- **Self-hosted fonts** — Fraunces + Inter + JetBrains Mono via Fontsource (no external requests)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the production build locally
```

## Editing content

Almost everything you'll want to change lives in **`src/data/site.ts`** —
your name, role, bio, links, skills menu, and the editable
`nowBrewing` / `onTheRecord` strings.

### Adding a project

Drop a markdown file into `src/content/projects/` (copy
`_template.md` as a starting point — files beginning with `_` are
ignored). Each project becomes a card in the **Work** section and gets
its own page at `/projects/<filename>`.

```md
---
title: "Solar Forecaster"
summary: "Predicts daily generation from weather + telemetry."
status: "shipped"        # shipped | brewing | idea
role: "Backend & data"
tech: ["Python", "FastAPI", "Postgres"]
repo: "https://github.com/Donkhyu/..."
order: 1
featured: true
date: 2026-05-01
---

The story of the project in markdown...
```

Until you add real projects, the Work grid shows deliberate
"brewing" placeholder cards. They disappear automatically as you add
projects (the grid keeps at least three cards filled).

### Résumé

Put your PDF at `public/resume/Deon-Hiu-Resume.pdf`, then set
`resumeUrl` in `src/data/site.ts`. While it's empty, the Résumé
button is hidden (so there's never a broken link).

## Deploy

### Vercel (primary, free)

1. Push to GitHub.
2. On [vercel.com](https://vercel.com) → **New Project** → import this repo.
3. Vercel auto-detects Astro (build `npm run build`, output `dist`). No config needed.
4. Every push to `main` deploys; PRs get preview URLs.

Update `site` in `astro.config.mjs` to your final Vercel/custom domain.

### GitHub Pages (free fallback)

Pages serves this repo at `donkhyu.github.io/portfolio`, so it needs a
base path. In `astro.config.mjs` set `base: '/portfolio'` (and
`site: 'https://donkhyu.github.io'`), then add a workflow at
`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then enable Pages (Settings → Pages → Source: GitHub Actions).

> This workflow isn't committed by default — Vercel is the primary
> target, and an active Pages workflow would fail in Actions until
> Pages is enabled. Add it only if you choose the Pages route.
