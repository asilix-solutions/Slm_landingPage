# Amanix decision log / open items (V3)

## Confirmed engineering decisions
- D01: Next.js App Router + TypeScript strict + Tailwind + ESLint + npm; keep dependencies lean.
- D02: Claude Code Desktop → Code → Local; user controls Git push/merge/deploy.
- D03: Manual visual handoff, no Figma MCP.
- D04: Source snapshots 390, 744, 1024, 1440; one fluid responsive implementation. Old 1280 Figma reference is historical.
- D05: Noto Sans Arabic all standard text/UI/ordinary headings; IBM Plex Sans Arabic for large display headlines only.
- D06: Only the two UI cards in the photo-based Hero have subtle floating CSS animation; static photo; reduced-motion support.
- D07: Opus 5.5 foundation/audit, Sonnet 5.5 section implementation.
- D08: No invented backend/API, prices, reviews, compliance, customer records or links.

## Unresolved (do not block foundation unnecessarily)
- O01: Final approval that the four supplied page SVGs represent the same current release. Design differences from older Figma acknowledged.
- O02: Design System tokens/colors/shadows/typography scale and final original copy.
- O03: Optimized photo originals beyond SVG wrappers; logo variant intended context.
- O04: Header/menu behavior, exact target links, form field validation and API contract, confirmation/error states.
- O05: Pricing source, billing terms, real trial terms, ratings, SBC/ZATCA assertions approvals.
- O06: Hosting target, SEO metadata and domain, analytics consent requirements.

Track owners and resolution dates as actual answers arrive. Do not fabricate answers to silence blockers.

## Foundation slice log (2026-11-12, Opus 5.5)
- D09: Kept existing create-next-app scaffold (Next 16.4.6, React 19.3, Tailwind 4.3.3 via `@tailwindcss/turbopack`, `cacheComponents` + `partialPrefetching`). No dependency changes. Added `typecheck` and `check` scripts and `engines.node >=20.9.0`.
- D10: Fonts via `next/font/google` in `src/lib/fonts.ts`; CSS vars `--font-noto-arabic` / `--font-ibm-plex-arabic`; Tailwind utilities `font-body` (default on body) / `font-display` (opt-in). Only Arabic subsets preloaded.
- D11: Tokens defined only where observed in supplied assets (logo colors `#201F37`, `#FD4006`, `#F3F7F8`). Container width/gutter provisional. Removed scaffold dark-mode color switching (not in design).
- D12: No test runner yet (no interactive logic). Add with first stateful component, pending approval of the dev dependency.

### Assumptions (confirm or correct)
- A01: Temporary H1 "Amanix" (`dir="ltr"`) on the skeletal page; replaced by the approved Hero headline in Slice 02.
- A02: Skip-link label "تخطَّ إلى المحتوى الرئيسي" is accessibility UI text, not marketing copy; replace if the designer supplies wording.
- A03: IBM Plex Sans Arabic loaded at weight 700 only. Confirm the Hero headline weight (and whether any other heading is display) — adjust `weight` in `src/lib/fonts.ts`.
- A04: Hero card SVGs contain outlined text → decide `alt` text vs. decorative + DOM equivalent in Slice 02.
- A05: Annotated Hero reference shows the photo mirrored horizontally vs. the supplied source. Confirm mirroring intent.
- A06: `Property 1=Default` = logo on light backgrounds, `Variant3` = logo on dark backgrounds (inferred from fills).

### Blockers for Slice 02 (Header + Hero)
- B01: Exact Arabic copy for header nav, Hero headline, sub-copy, CTA labels (outlined in SVGs; not guessable).
- B02: Nav/CTA destinations and mobile menu behavior.
- B03: Whether the Hero contains a lead form; if yes, fields, validation messages, consent copy and API contract (otherwise UI only, submission disabled/unavailable).
- B04: Hero headline font weight/size per breakpoint (or a design-system type ramp).
- Non-blocking: the photo can be extracted from its SVG wrapper and optimized locally; a separate original is welcome but not required.

### Exact Slice 02 scope (next)
1. `src/components/layout/SiteHeader.tsx` (server) + leaf client `MobileMenu` if the design has a toggle; logo from approved variant.
2. `src/components/sections/Hero/` — server `Hero.tsx`; photo extracted to `public/images/hero/` (AVIF/WebP, `next/image` with `priority`, explicit `sizes`, no lazy); two card SVGs in static absolutely-positioned wrappers with animated inner wrappers per `docs/HERO_SPEC.md`; `font-display` H1; reduced-motion `animation: none`.
3. Visual QA at 390/744/1024/1440 + 320/375/768/1280/1920; update `docs/RESPONSIVE_QA.md`.
