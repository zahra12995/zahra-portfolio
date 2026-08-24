# Zahra — GTM Engineer Portfolio

A colorful, animated portfolio site for Zahra, GTM Engineer at 7x GTM. Built with Next.js (App Router), Tailwind CSS, and Framer Motion, and ready to deploy on Vercel with zero extra configuration.

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Framer Motion** for animation
- **next-themes** for the light/dark toggle
- **lucide-react** for icons

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Editing content

All copy that's likely to change lives in `src/data/*.ts` — component code should never need to change for a content update.

| File | Controls |
| --- | --- |
| `src/data/portfolio.ts` | Hero copy & taglines, "What I Bring" cards, contact info, SEO metadata |
| `src/data/skills.ts` | Skills & Tools grid — categories, tools, one-line blurbs |
| `src/data/campaigns.ts` | The 6 campaign cards — type, tags, bullets, **results** |
| `src/data/automation.ts` | Automation showcase — flow steps, description, tech list |
| `src/data/story.ts` | "From Whiteboard to Clay" timeline |

Each file opens with a comment banner marking it as an edit point.

## Project structure

```
src/
├── app/               # Next.js App Router entry (layout, page, global styles)
├── components/
│   ├── layout/         # Header, Footer, SiteShell, ThemeProvider
│   ├── ui/              # Reusable primitives (Button, Badge, RevealOnScroll, ...)
│   ├── effects/        # Loading screen, custom cursor, gradient background, typewriter
│   └── sections/       # One component (or small group) per homepage section
├── data/               # Editable content — see table above
├── hooks/              # useTypewriter, useIsTouchDevice, usePrefersReducedMotion, useScrollTo
└── lib/                # Shared constants, Framer Motion variants, icon map
```

## Deploying to Vercel

1. Push this repo to GitHub (see below if it isn't already on a remote).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings need to change. Click **Deploy**.
4. Every subsequent push to `main` redeploys automatically; other branches get their own preview URL.

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Placeholders checklist

Before sharing the live link, replace:

- [ ] **Headshot** — `public/headshot.jpg` (already set from the uploaded photo; swap the file to update)
- [ ] **LinkedIn URL** — `linkedinUrl` in `src/data/portfolio.ts`
- [ ] **Email** — `email` in `src/data/portfolio.ts`
- [ ] **Campaign results** — `results` array for each campaign in `src/data/campaigns.ts`
- [ ] **Site URL** — `url` in `siteMeta` (`src/data/portfolio.ts`) once you know the final Vercel/custom domain
- [ ] **OG image** — add a real `public/og-image.png` (1200×630) for link previews; referenced in `siteMeta.ogImage`

## Accessibility & performance notes

- Respects `prefers-reduced-motion`: the custom cursor, loading screen, and scroll-reveal animations all fall back to static/instant states.
- The custom cursor is disabled entirely on touch devices.
- Campaign cards are real `<button aria-expanded>` elements — fully keyboard and screen-reader accessible.
- Fonts load via `next/font` (self-hosted, no runtime request, no layout shift).
