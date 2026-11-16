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

## Hero height/width model (correction, 2026-11-12)
See D30–D34. `.hero` min-height = `100svh`; photo + shades are full-bleed; text column and cards are anchored to a centred 1440px canvas (`--canvas-pad`); stacked layout is a flex column whose photo band absorbs spare height; side-by-side layout shares spare height between text, cards and photo scale (`--extra-h`).

## Dark intro region (Phase 03A, 2026-11-13)
`.dark-intro` (src/app/page.tsx) wraps Hero + TrustStrip and owns `<HeroBoundary />`; the header turns white only near the end of that combined region. TrustStrip is a CSS-only marquee (5 identical groups, translate by one group) with a reduced-motion fallback of one wrapped group. See T01-T06 in DECISIONS_AND_OPEN_ITEMS.md.

## Safety needs section (Phase 03B, 2026-11-13)
sections/safety-needs/: SafetyNeeds.tsx (section + decorative mark), FeatureCard.tsx (reusable card, inert action, always-present icon slot), safety-needs.css; data in src/content/safety-needs.ts (typed, `as const satisfies`). Server Components only. See S01-S07 in DECISIONS_AND_OPEN_ITEMS.md.

## Project Control scrollytelling
Server component ProjectControl renders heading + story panels from src/content/project-control.ts; the only client leaf is ProjectControlSteps (one IntersectionObserver, aria-current, no live region). Sticky is plain CSS on .pc__aside. Add a panel by giving a step a panel object.

## Metrics band (Phase 05A)
Server component src/components/sections/metrics/MetricsBand.tsx + metrics.css, content in src/content/metrics.ts (unverified claims). Placed after ProjectControl. Full-bleed background with the shared 1280px content column; background is optional local media (existsSync at build, CSS gradient fallback). FAQ (Phase 05B) not implemented.

### Metrics pinned layer (Phase 05A refinement)
metrics.css: static mode by default; `@media (min-width:21.25rem) and (min-height:30rem) and (prefers-reduced-motion:no-preference)` switches the section to a one-cell grid where `.metrics__pin` is sticky and `.metrics__inner` provides the height (H + runway). Do not add `overflow: hidden/auto` to the section or any ancestor (would break sticky).

## FAQ (Phase 05B)
Server component src/components/sections/faq/Faq.tsx + faq.css, content in src/content/faq.ts (typed `FaqContent`/`FaqItem`, `answer: string | null`, every answer `null`). Placed after MetricsBand in src/app/page.tsx. No client JS, no dependencies. Markup: `<section aria-labelledby>` → `<h2>` → `<ul>` of `<li>` each holding an `<h3>` question (so a future disclosure button can live inside the h3 without changing the outline). Rows are static text: no button, no hover/pointer affordance, no fake expansion. Each row also holds a decorative inline-SVG "+" (14x14, `aria-hidden`, `pointer-events:none`, #6C5B55, glyph taken from the reference SVG) after the question in DOM order, so it sits at the visual left in RTL. Layout uses the shared 1280px content grid and the same gutter formula as SafetyNeeds (`clamp(1rem, 5.6vw, 5rem)`); verified identical left/right edges to the SafetyNeeds grid at 768/1024/1280/1920. Opaque #FEFEFE background in normal flow, so it sits above the Metrics section's clipped fixed layer.

## Pricing plans (Phase 06)
Server component src/components/sections/pricing/PricingPlans.tsx + pricing.css, content in src/content/pricing.ts (typed `PricingContent`/`PricingPlan`; provisional, transcribed from artwork). Placed after Faq in src/app/page.tsx. No client JS, no dependencies. Markup: `<section aria-labelledby>` → h2, subtitle, `<ul>` of 4 `<li><article aria-labelledby>` (h3 name, description, price paragraph, feature `<ul>`, CTA presentation) → comparison label. CTAs and the comparison label have no approved destination, so they are non-interactive `<p>` text (no button/link/cursor/hover/focus). Check and arrow icons are inline decorative SVG (aria-hidden). Same 1280px grid and gutter formula as other sections. Grid: 1 column <48rem, 2 columns 48–75rem, 4 columns >=75rem.
### Pricing wave
One decorative layer `.pricing__wave` (aria-hidden, pointer-events none) holding next/image of `/images/pricing/pricing-wave-true-vector.svg` (unoptimized, lazy, 1440x756 box; pure vector, 2 paths + 2 linear gradients, 15.6 KB; replaced the original raster-in-SVG wrapper on 2026-11-14, see DECISIONS). Placement copies the reference: native size, top 93px of the section (the full-section SVG places the background at translate(0, 92.97)), centred horizontally (left 50%, margin-left -720px), z-index 0 behind the content; the section uses `overflow: clip` so it cannot create scroll. Not stretched: above 1440px it stays 1440 wide and its two cut edges fade via a CSS mask (>=90.0625rem); below 1440px it is centre-cropped. Rendered only if the file exists at build/render time (git-ignored, rights unverified): clean clones get a plain white section and no broken URL.

## Q&A Center (Phase 07C)
Server component src/components/sections/qna/QnaCenter.tsx + qna.css, content in src/content/qna.ts (typed `QnaContent`/`QnaItem`, `answer: string | null`, all four answers `null`). Placed after PricingPlans in src/app/page.tsx; separate from the 3-row FAQ (faq.ts), which is untouched. No client JS, no dependencies. Markup: `<section aria-labelledby>` → header (eyebrow `<p>`, `<h2>`, subtitle) → body grid: `<ul>` of `<li>` rows (`<h3>` question + decorative aria-hidden chevron; answer `<p>` and an up chevron only when an approved answer exists) FIRST in DOM (right in RTL), then the decorative media frame (aria-hidden: `#F5F5F5`, 1px `#E5E5E5`, 14px radius, four inline vector diamonds, lossless-WebP screenshot via next/image `unoptimized` + lazy, centred at 91.34% of the frame padding box: the frame is a CSS grid with place-items:center, the image is a normal grid item, the diamonds are absolutely positioned and out of flow). Rows are static: no button, hover or pointer state. Grid: 1 column (list, then media) <64rem; 840fr/407fr from 64rem; same 1280px container/gutter as other sections. The image renders only if the file exists (git-ignored, rights unverified); a clean clone shows the empty frame with diamonds, no broken URL.

## Site footer (Phase 08)
- `src/components/layout/SiteFooter.tsx` (Server Component) + `site-footer.css`, rendered once in `src/app/layout.tsx` after `{children}` (so it is outside `<main>`; Q&A is the last section above it). Content in `src/content/footer.ts`.
- Two layout levels: a full-width white shell (margin 12px <48rem, 16px <64rem, 24px >=64rem) and a dark `#181818` radius-8 card (`overflow:hidden`) with a centred inner lane (max 1232px). The card is NOT inside the 1280px container.
- >=90rem uses the exact reference grid (312px logo track, 312px column pitch); 64-90rem is fluid; below 64rem the card grows with its content and the decoration is hidden.
- No destinations are approved: all footer items are plain text (no `<a>`), social icons are `aria-hidden`.

## Phase 09A — Hero image delivery
The Hero photo is a single pre-encoded WebP served `unoptimized` (see ASSET_MANIFEST). Reason: the default `next/image` optimizer only offers q75 (Next 16 `images.qualities` default `[75]`) and cannot exceed the 1824px source, so it only added a lossy pass. The `sizes` prop and the optimizer preload link were removed; the `<img>` keeps `loading="eager"` + `fetchPriority="high"` and is discovered directly from the HTML.
