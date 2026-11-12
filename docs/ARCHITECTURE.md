# Amanix — Foundation architecture (Slice 01, 2026-11-12)

## Stack (retained from existing scaffold)
Next.js 16.4.6 App Router + React 19.3 + TypeScript strict + Tailwind 4.3 (Turbopack loader) + ESLint 9 (`eslint-config-next` core-web-vitals + typescript) + npm. `next.config.ts` keeps `cacheComponents: true` and `partialPrefetching: true` from the scaffold; the page prerenders as static (`○ /`). No dependencies added.

## Rendering model
- `src/app/page.tsx` is a Server Component that composes sections in order. Everything static stays server-rendered.
- Client Components only for real state (mobile menu, lead form, pricing toggle, FAQ if native `<details>` is insufficient). Each is a leaf `"use client"` file inside its section.
- No state manager, animation library, CSS-in-JS or UI kit. Hero float = CSS `@keyframes` (see `docs/HERO_SPEC.md`).

## Conventions
| Path | Purpose |
|---|---|
| `src/app/layout.tsx` | `<html lang="ar" dir="rtl">`, font CSS variables, skip link, baseline metadata/viewport |
| `src/app/globals.css` | Tailwind import, `:root` tokens, `@theme` mappings (`font-body`, `font-display`, `ink`/`accent`/`on-dark`/`surface` colors), base a11y + reduced-motion, `.container-page` |
| `src/lib/fonts.ts` | `next/font/google` definitions |
| `src/components/layout/` | `SiteHeader` (server), `HeaderScrollObserver` + `MobileMenu` (client leaves); `SiteFooter` later |
| `src/components/sections/` | `Hero`, `AuthorityRibbon`, `Workflow`, … one folder/file per section |
| `src/components/ui/` | only components reused by ≥2 sections |
| `src/content/` | typed `as const` arrays for repeated items (nav links, FAQ, features) |
| `public/images/` | optimized production rasters only — never `design-reference/` screens |
| `public/brand/` | logo SVGs, unmodified originals (`logo-on-dark` = Variant2, `logo-on-light` = Default) |

Empty folders are not pre-created; each appears with its first real file.

## Typography
- `--font-noto-arabic` (variable 100–900, Arabic subset preloaded) → `font-body`, applied on `<body>`.
- `--font-ibm-plex-arabic` (weight 700 only, provisional — A03) → `font-display`, applied per element by class. Never globally on `h1`/`h2`.
- Fallback stack: Tahoma, Segoe UI, Arial, sans-serif (all have Arabic glyphs on Windows; `adjustFontFallback` default reduces CLS).
- `:lang(ar) { letter-spacing: normal }` protects Arabic joining.

## RTL and layout rules
- Use logical properties / Tailwind logical utilities (`ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`, `text-start`) instead of left/right.
- Mixed-direction strings (Latin brand name, numerals, URLs, phone numbers): wrap in `<bdi>` or set `dir="ltr"` on the smallest element.
- `.container-page`: max 1440px, fluid gutter `clamp(1rem, 4vw, 5rem)` (provisional until spacing tokens).

## Accessibility baseline
Skip link → `#main-content`, `:focus-visible` outline in accent color, global `prefers-reduced-motion` safety net (sections still add explicit `animation: none`), single H1 (temporary brand H1 until Hero).

## Tests
No test runner added yet: the foundation has no interactive logic. Add a lightweight runner (e.g. Vitest + Testing Library) in the slice that introduces the first stateful component (menu/form), with user approval of the dependency.

## Header (2026-11-12)
Fixed `SiteHeader` in the root layout. `data-scrolled` is set by a single IntersectionObserver watching the `HeroBoundary` marker (see D19–D22; no 20px threshold) — no scroll listener, no state. All state styling is CSS (`.site-header[data-scrolled="true"]`, and `:has(.menu-toggle[aria-expanded="true"])` for the open menu). Content lives in `src/content/navigation.ts`. Shared UI: `components/ui/ArrowIcon.tsx`. Hero must render `<HeroBoundary />` inside its relative root and reserve `padding-top: var(--header-h)` (72px / 96px ≥1280px) because the header overlays it.

## Hero (2026-11-12)
Server Component `sections/Hero.tsx` + `sections/hero.css` (plain CSS; values interpolated with calc()/clamp() between the 390/744/1024/1440 reference measurements — see the CSS header and D23–D29). Structure: `.hero` (full-bleed background) > `.hero__stage` (max 1440, centred) > `.hero__media` (photo, two cards, two shades; clipped) + `.hero__content` (h1, description, actions) + `<HeroBoundary />`. Only `.hero-card__float` animates. No client JS in the Hero.
