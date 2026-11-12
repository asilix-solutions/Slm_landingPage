# Amanix — Arabic RTL landing page

Next.js App Router marketing landing page for Amanix (Arabic, right-to-left).
Project rules: `CLAUDE.md`, `AGENTS.md`, `.claude/rules/`. Planning and handoff: `docs/`.

## Toolchain

| Tool | Version |
|---|---|
| Node.js | ≥ 20.9 (developed on 24.16.0) |
| npm | 11.x (lockfile: `package-lock.json`) |
| Next.js | 16.4.6 (App Router, Turbopack, Cache Components) |
| React | 19.3.0 |
| Tailwind CSS | 4.3.3 (via `@tailwindcss/turbopack`) |
| TypeScript | 5.9 (strict) |

## Scripts

```bash
npm install          # install from lockfile
npm run dev          # local dev server
npm run lint         # ESLint (next core-web-vitals + typescript)
npm run typecheck    # tsc --noEmit
npm run build        # production build
npm run check        # lint + typecheck + build
```

## Structure

```
src/
  app/            route entry, root layout (lang="ar" dir="rtl"), metadata, globals.css (tokens)
  lib/fonts.ts    next/font definitions (Noto Sans Arabic body, IBM Plex Sans Arabic display)
  components/
    layout/       site shell (header/footer) — created in the Header/Hero slice
    sections/     one component per landing section — created per slice
    ui/           only genuinely shared UI
  content/        typed immutable content arrays, when a section needs them
design-reference/ manual design handoff (reference only — never served)
docs/             handoff, decisions, QA logs
```

Folders are created when the first real component needs them; see `docs/ARCHITECTURE.md`.

## Typography

- `font-body` → Noto Sans Arabic (default on `<body>`).
- `font-display` → IBM Plex Sans Arabic, only for explicitly designated display headings (Hero H1).

Fonts are self-hosted by `next/font` at build time (no browser requests to Google).
