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

## Header slice log (2026-11-12)
- D13: `SiteHeader` (Server Component, `src/components/layout/`) is fixed-position with two states driven by `data-scrolled` on `<header id="site-header">`. Client code is limited to `HeaderScrollObserver` (one IntersectionObserver on a 20px sentinel at the top of the document; writes the attribute only when visibility flips; no scroll listener, no React state) and `MobileMenu` (disclosure: Escape closes + refocuses toggle, link click closes, closes when reaching the `xl` breakpoint).
- D14: Transparent (top) → white (scrolled > 20px). Foreground `#F3F7F8` → navy `#201F37`; border `rgb(32 31 55/.08)` + `0 1px 12px rgb(32 31 55/.06)` shadow; 220ms ease transitions on background, color, border, shadow, logo opacity. Header box is fixed (72px < 1280px, 96px ≥ 1280px; +1px border always reserved) so no height change/CLS.
- D15: Logos are the unmodified supplied originals copied to `public/brand/` (`logo-on-dark.svg` = Variant3, `logo-on-light.svg` = Default); both rendered and cross-faded via opacity. `Variant2` stored in `design-reference/assets/` only (not shipped).
- D16: Mobile/tablet menu is used below 1280px (hamburger), matching the 744/1024 references; desktop nav/CTAs from 1280px. While the menu is open the header uses the light state (white + Default logo) so the white panel is coherent at the top of the page.
- D17: A `.site-header::before` navy→transparent scrim (alpha .6 at top, fades out when scrolled) guarantees light foreground contrast independent of the final Hero photo/overlay.
- D18: `src/app/page.tsx` now has a TEMPORARY dark navy block standing in for the Hero so the transparent header has a dark surface. The Hero slice replaces it.

### New assumptions / open items
- A07: Nav/CTA labels (الخدمات، الاسعار، سجل شركتك، تجربة المنصة) were read from the rendered 1440 reference (text is outlined) — **not confirmed copy**. Hrefs (`#services`, `#pricing`, `#register`, `#platform-demo`) are placeholders (B02). The "الخدمات" chevron implies a dropdown whose items are not supplied; it is currently a plain link with a decorative chevron.
- A08: Brand shown in the logo reads **"سلم / SLM"** while the project/H1 say "Amanix". Confirm the public brand name; logo link `aria-label` is "الصفحة الرئيسية" (neutral).
- A09: The reference screens appear to use the logo with **orange symbol + light lettering (= Variant2)** over the Hero. Per the latest instruction the initial state uses Variant3 (fully light). To follow the reference instead, change `logo-on-dark.svg` source to Variant2 (one-file swap, no code change). Please decide.
- A10: Header heights (72/96px), logo size (48/56px) and button size are measured approximately from the screenshot references — no design tokens supplied.
- A11: White on `#FD4006` is **3.55:1** — below WCAG AA 4.5:1 for 16px/600 text. The design color is unchanged; needs a designer decision (darker orange or larger/bolder label).
- A12: Accessibility strings written by us (not marketing copy): "فتح القائمة"/"إغلاق القائمة", "التنقل الرئيسي", "القائمة الرئيسية", "الصفحة الرئيسية".
- A13: Mobile menu panel design is not in the references; implemented as a simple white disclosure panel (links + the two CTAs stacked).

## Header correction — Hero-boundary-aware transition (2026-11-12) — SUPERSEDES D13 (20px threshold), D15, A09
- D19: The 20px threshold is removed. The header stays transparent throughout the Hero and turns white only when the Hero's bottom edge is ~80px below the header's bottom edge; it stays white afterwards and returns to transparent (Variant2 logo) when scrolling back into the Hero.
- D20: Mechanism: `<HeroBoundary />` (`src/components/layout/HeroBoundary.tsx`) is a 1px invisible marker rendered inside the Hero's `position: relative` root, positioned `bottom: calc(var(--header-h) + var(--header-transition-zone))` (zone = 5rem). Because the offset is CSS, it follows every breakpoint and Hero height with no JS measuring. `HeaderScrollObserver` runs one IntersectionObserver on the marker: leaves through the TOP of the viewport ⇒ `data-scrolled="true"`; otherwise `false`. No scroll listener, no React state, one DOM write per flip. A page with no marker keeps the header white.
- D21: Dark-state logo is now **Variant2** (orange symbol + light lettering) per the correction; `public/brand/logo-on-dark.svg` = unmodified `Property 1=Variant2.svg`. Variant3 is no longer shipped (kept in `design-reference/assets/`). A09 resolved.
- D22: Mobile menu unchanged: opening forces the white presentation via `:has([aria-expanded="true"])` without touching `data-scrolled`, so the Hero-boundary state is preserved on close.
- **Hero slice requirement:** render `<HeroBoundary />` as a direct child of the Hero's relative root; reserve `padding-top: var(--header-h)`. The current dark block in `src/app/page.tsx` is a temporary stand-in that already includes it. If the Hero uses an internal sticky/overflow-hidden wrapper, keep the marker outside the clipped box.
- Note: the observer attaches once on mount (single route). Re-run it on pathname change if more routes with Heroes are added.

## Hero slice log (2026-11-12)
- D23: Real Hero (`src/components/sections/Hero.tsx` + `hero.css`, copy in `src/content/hero.ts`) replaces the placeholder. Geometry (hero height, photo crop, gradients, card positions/sizes, text positions, font sizes, line heights, button sizes) was **read from the element geometry of the four reference SVGs** (bounding boxes / gradient definitions via the DOM), not eyeballed. Between references values are interpolated with `calc()`/`clamp()` on `100vw`.
- D24: Layout regimes: ≥1024 side-by-side (hero 569px@1024 → 680px@1440, cap 760px); 744–1023 and <744 stacked (photo band on top, full-width stacked buttons, hero ends 64px below the last button).
- D25: **Photo orientation confirmed mirrored**: all four reference screens draw the photo with `matrix(-1 0 0 1 …)`. The flip is baked into `public/images/hero/hero-office.jpg` (JPEG q84 mozjpeg, 1824×862, 165 KB, from the 1.8 MB PNG inside the SVG wrapper); no CSS mirroring. Served through `next/image` (responsive srcset, `loading="eager"`, `fetchPriority="high"`, per-layout `sizes`). The source SVG wrapper stays in `design-reference/assets/inbox/`.
- D26: Verified the photo contains no UI cards. Cards are the unmodified supplied SVGs (`card-matched-candidates.svg` 283×231, `card-contractor-profile.svg` 329×170) in `public/images/hero/`, positioned in outer wrappers; **only the inner `.hero-card__float` wrappers animate** (A: 0→-8px, 7s; B: 0→+6px, 8.5s, 0.8s delay; `ease-in-out infinite alternate`). Animations exist only inside `prefers-reduced-motion: no-preference`; an explicit `reduce` rule forces `animation: none`.
- D27: Layer order copies the reference exactly: photo → card A → side shade → card B → bottom shade → text (so card B is dimmed by the bottom shade as in the design). Shade gradients per breakpoint are the reference gradients converted to CSS (`to right` ≥1280, 47° 1024–1279, 28° 744–1023, 333° <744).
- D28: Above 1440px the hero "stage" stays 1440px wide and centred; its outer 6% edges fade into `#030304` (no reference exists for 1920 — see O07).
- D29: Header dimensions now follow the references (measured): height 88px ≥1280 / 80px below, logo 56px tall, 80px gutters on desktop (24px otherwise), desktop nav centred (grid 1fr/auto/1fr), action gap 16px, outline button 15px/500, chevron 24px. Header behaviour (HeroBoundary observer, Variant2/Default logos, mobile menu) unchanged. `priority` removed from the header logos (deprecated in Next 16) → `loading="eager"`.
- A14: Hero copy transcribed from the rendered 1440 reference (outlined text): title "ادارة السلامة من الحرائق.. / أصبحت سهلة" and the description exactly as drawn (including its spelling/spacing, e.g. "لانظمة", "لايحتاج"). **Not confirmed copy.** CTAs reuse the header labels; destinations remain placeholders (B02). No form appears in the Hero references; none was built.
- A15: Hero photo and cards are `alt=""` / `aria-hidden` (decorative: the headline carries the message; card text is outlined in the SVG).
- A16: Body text sizes (19/17/16px Noto) and title sizes (48/41/38/32px IBM Plex 700) were fitted so rendered line widths match the reference paths (title line 1: 491 vs 487.8px @1440; 420 vs 418 @1024; 389 vs 387 @744; 328 vs 327.9 @390). The reference body font looks like a different family than Noto Sans Arabic, so sub-copy widths differ by ≤6px. IBM Plex weight assumed 700 (A03 still open).
- O07: No reference for 320, 375, 768, 1280, 1920 — interpolated/clamped.
- O08: White text on the `#FF2613`/`#FD4006` CTA (3.5–3.8:1) is still below WCAG AA for 16px text (A11).

### Remaining blockers / not built
- B01–B04 (confirmed copy, destinations, form contract, type ramp) as before. Lead form/registration: **not built** (no contract; no Hero form in the designs).
- Next slice: the authority ribbon ("مُصمّم لشركات السلامة في السعودية" + certification logos). Its logo files are not in `design-reference/assets` — confirm/supply before starting.

## Unresolved acceptance items — Header + Hero checkpoint (2026-11-12)
This slice is committed as a **development checkpoint**, not as production-ready or finally approved.
1. **CTA contrast (WCAG 2.2 AA, 1.4.3):** white label on `#FF2613`/`#FD4006` is ≈3.5–3.8:1 (<4.5:1 for 16px text). Design colour untouched; needs a designer decision (darker orange, larger/bolder label, or accepted exception). (A11/O08)
2. **Decorative Hero cards may be informative:** both cards (`alt=""`, `aria-hidden`) show product UI whose text is outlined in the SVG (e.g. matched-candidates list, a contractor profile/status). If the designer considers them informative, they need real text alternatives or DOM text; the choice is not yet confirmed. (A04/A15)
3. **CTA destinations are placeholders** (`#register`, `#platform-demo`, `#services`, `#pricing`) — they navigate nowhere meaningful; no registration/lead form, no endpoint, no success/failure states exist, and none is simulated. (B02/B03)
4. **Copy is unconfirmed** (header labels, Hero title/description read from the rendered reference, including its spelling). (A07/A14)
5. **Not verified:** Lighthouse/Core Web Vitals, emulated `prefers-reduced-motion: reduce`, Safari/Firefox/real devices, browser zoom, hard reload at a restored scroll position; widths with no reference (320/375/768/1280/1920) are interpolated.
6. Open design questions: brand name in the logo ("سلم / SLM") vs "Amanix" (A08), IBM Plex weight (A03), "الخدمات" dropdown contents, mobile-menu design (A13), 1920px composition (O07).

## Hero correction — full-viewport height + full-bleed photo (2026-11-12) — SUPERSEDES D24 (fixed heights) and D28 (1440 stage with edge fade)
Root causes of the two defects:
1. **Height:** `.hero__stage` had a fixed height (`clamp(569px, 295.8px + 26.68vw, 760px)`) on ≥1024 and a content-sized height below 1024 — both independent of the viewport height, so on 1440×900, 1920×1080 or 390×844 the Hero ended early and the white page background showed below it.
2. **Side fades:** the photo lived inside a `max-width: 1440px` stage, and above 1440px a `mask-image` faded its outer 6% to transparent on both sides (reading as heavy black edges); the horizontal shade was also applied across the full width at 70% opacity.
- D30: Hero `min-height` = `100svh` (fallback `100vh` via `@supports`), never a fixed height; ≥1024 it is `max(100svh, reference height)`. If content needs more space it grows. `svh` avoids resizing when mobile browser chrome shows/hides. The fixed Header overlays the Hero (which starts at y=0), so no spacer is needed.
- D31: Stacked layout (<1024) is a flex column: the photo band is `flex: 1 0 auto` with the measured reference height as `min-height`, so spare viewport height goes to the **photo band** (cover-scaled, never stretched) while the text keeps its reference spacing and the Hero ends 64px below the last button.
- D32: Side-by-side layout (≥1024): spare height (`--extra-h`) is shared out — text moves down by 45%, card A by 23.5%, card B by 66.2% (their reference relative heights), and the photo cover-scales.
- D33: Photo is full-bleed: `.hero__stage` has no max-width; only `.hero__content` and the two cards are anchored to a centred 1440px canvas (`--canvas-pad`). `object-fit: cover` with a computed `object-position` pins the photographed subject to its reference x on the canvas (411px @1024 → 519px @1440), nudged right by 12.5% of any zoom beyond 1440px so card A never lands on the subject; stacked layouts use 10% / 20% / 28% focal x. Orientation unchanged (mirrored file). The edge `mask-image` was removed.
- D34: Gradients: left edge has no mask; the right shade keeps the reference 0.7 (anchored to the 1440 canvas) and, beyond 1440px, eases to 0.55 at the canvas edge and 0.2 at the viewport edge; the bottom fade now covers the last ~30% (transparent 70% → 0.72 @92% → solid #030304) instead of ~38%, so it is softer than the reference. The photo is 1px shorter than its box so the anti-aliased last row cannot show as a faint line above the solid bottom.
- Deviations from the references (taller/wider than any reference): photo is more zoomed on tall viewports (e.g. 1440×900 shows the subject ~1.32× larger than the 1440×680 design); on short wide viewports above 1440 the subject sits ≤62px left of its canvas anchor. No reference exists for these sizes (O07).

## Phase 03A — Trust strip (2026-11-13, branch `feat/trust-strip`, stacked on `feat/header-hero` @6838319)
- T01: `TrustStrip` (Server Component, `sections/TrustStrip.tsx` + `trust-strip.css`, content in `src/content/trust.ts`) sits directly after the Hero inside `.dark-intro` (src/app/page.tsx). Hero min-height (`100svh`) is untouched; the strip background `#030304` equals the Hero's bottom colour (no seam).
- T02: Geometry measured from the four reference SVGs + the Figma capture. 1440: band 431px, title glyph 55px from the top, 87×60 r14 logo **tiles** with the caption **below**, pitch 177, edge fade 160px. ≤1279: white **cards** (logo + caption inside) 96×113 @1024 → 86.4×101.5 @744 → 66.9×79 @390, pitch 125.9/113.3/87.7, fade 113.8/102.4/79.3, band 328/278/239px. The whole row is at 70% opacity (as in the design). Measured results match (band 431/329/278/239, group 1062px = 6×177, title 262.1 vs 261.5px).
- T03: Marquee is CSS-only (no JS/state): 5 identical groups, the track translates by exactly one group width (`--n × --pitch`). Verified seamless (group 2 at the loop end sits exactly where group 1 started, delta 0px) and fully covering the viewport (needs 4 groups ≥ viewport width). Duration ≈ group width ÷ 35px/s (15s <744, 19.5s, 21.5s, 30s ≥1280); `transform` only; pauses on hover. **Direction: toward inline-start (rightwards in RTL)** — new content arrives from the end side, the mirror of an LTR marquee. No reference shows motion, so this is a choice to confirm.
- T04: Accessibility: `<section aria-labelledby>` + `<h2>`; only group 1 is exposed (`<ul>`/`<li>`, 6 items), groups 2–5 are `aria-hidden`; logos are `alt=""` because every caption names the mark (nothing is announced twice); no links or focusable elements, nothing fabricated. Reduced motion (`prefers-reduced-motion: reduce`): no animation, only group 1, wrapped and centred, mask removed — nothing clipped, no scrolling needed.
- T05: Header boundary: `HeroBoundary` moved from the Hero to the end of `.dark-intro` (Hero + strip). Observer logic unchanged. Verified: transparent at top, mid-Hero, Hero end and mid-strip (≥1024); turns white when the dark region's end is 80px below the header (flip between −6/+6px at every size); white after; transparent again scrolling up. At ≤744 widths the strip is shorter than header+80, so the header is already white at its midpoint — a consequence of the rule.
- T06: Caption text below 10px is not used: the reference scales captions to ≈6–9px on small screens; they are clamped to **10px** (cards grow in height if a caption needs a 3rd line). Documented deviation.
- A17: The heading uses the diacritics visible in the reference ("مُصمّم لشركات السلامة في السعودية"); the spec text omits them.

### Asset and claim status (BLOCKS PUBLIC RELEASE)
- Supplied and used (originals untouched in `design-reference/assets/phase-03/trust-strip/logos/`): GCC Lab Tested, ISO 9001 Certified, Industrial Security (SAIS), NFPA Member, SASO Compliance, UL Listed Products. Each is a raster wrapped in an SVG; re-exported unchanged as lossless WebP (≤144px, 0.6–17 KB) in `public/images/trust-strip/`. The embedded NFPA raster is only 58×61px — soft on high-DPI screens.
- **Missing, NOT drawn or traced:** «FM Approved» (مكونات معتمدة FM) and «الدفاع المدني» (معتمد الدفاع المدني). The strip therefore shows 6 of the 8 reference items.
- **Unapproved claims:** the captions («منتجات معتمدة UL», «عضو NFPA», «متوافق مع SASO», «معتمد ISO 9001», «مختبر دول الخليج», «الهيئة العليا للأمن الصناعي») were read from the Figma capture; wording such as معتمد/عضو/متوافق is a legal/business claim. Usage rights and truthfulness of every mark are unverified. Do not publish until the business confirms.
- The following section's background in the references is `#F5F5F7` (not white) — relevant to 03B.
- Not built: Safety Needs section (03B). The three `ChatGPT Image …png` files in `design-reference/assets/phase-03/` are duplicates of the Figma captures (same dimensions) — not used.
