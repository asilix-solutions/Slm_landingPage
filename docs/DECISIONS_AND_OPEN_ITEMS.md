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

## Phase 03B — Safety Needs section (2026-11-13, branch `feat/trust-strip`)
- S01: `SafetyNeeds` (Server Component, `sections/safety-needs/SafetyNeeds.tsx` + `FeatureCard.tsx` + `safety-needs.css`, data in `src/content/safety-needs.ts`) follows `.dark-intro`. No client JS. The header turns white at the end of the dark intro and stays white over this white section (verified).
- S02: **Reference conflict.** The section is built from the Figma captures (`design-reference/assets/phase-03/safety-needs-*.png`, the latest handoff): frame 1440×1515.94, white, 3×400px cards. The older full-page SVG screens (`design-reference/screens/`) show a *different, earlier* version of this section (image cards ~296×199 on `#F5F5F7`, ~1076px tall), so they were not used for it. Also, the pack says the captures live in `design-reference/notes/phase-03/`; they are actually in `design-reference/assets/phase-03/`.
- S03: Measurements (from the capture, checked in the browser at 1440): section 1516px (ref 1515.94); card rows start at 250/630/1010, gap 40, cards 400×340 (border 1px `#E9E9E9`, radius 16, padding 32, inner gap 16); heading 32.6px/700 `#2E3338` (388px wide, ref 389); inside a card the icon slot is 71px (55px icon + 8px), title box 120–152, description lines 24px apart (15px Noto, `#4B5056`), action glued to the bottom. Font sizes were fitted to the reference text widths (title 24px/700 → 244px vs 242; description 15px).
- S04: Decorative mark = the original `public/images/safety-needs/background-mark.svg` (607×1260, unmodified), `position:absolute` at `left:0; top:128px`, native size from 1280px up (matches the capture: its open ends sit on the frame's left edge, last cap ends ≈1388px), `z-index:0` behind the opaque white cards, `aria-hidden`, empty alt, `pointer-events:none`, explicit width/height (no layout shift). It scales to `47.4vw` at 1024–1279, 364px at 640–1023, 273px below (placed lower so it clears the heading). **Placement below 1440 is an assumption** — no reference exists for 744/390/1024.
- S05: Grid: 3 columns ≥1024 (row 3 has two cards, lower-left corner free for the mark, as in the reference), 2 columns ≥640, 1 column below; card `min-height: 340px` only on desktop, otherwise content-driven; row gap 16/24/40.
- S06: Accessibility: `<section aria-labelledby>`, one `<h2>`, `<ul>` of `<li>` cards each with an `<h3>`; DOM order = RTL reading order; no focusable elements; no links.
- S07: The action text is inert (`<span>`, not a link, not focusable, `cursor: default`) because no destination is approved; it keeps the design's red underline, which may read as a link to sighted users until destinations exist. The capture's action text is «تجربة المنصة» whereas the spec calls it «تعرف أكثر» — the visible capture text is used; it is a single field (`actionLabel`) to change.

### Missing assets / copy / links (BLOCKS PUBLIC RELEASE)
- **Icons:** only `icon-document-search.svg` was supplied; it is used on card 8 «نماذج طلبات ديناميكية» (visually the same glyph as the capture). **Missing:** the "note-edit" icon shown on cards 1–6 and the "shield-lock" icon on card 7 «بوابة بعلامتك التجارية». Those cards render an empty 71px icon slot (nothing substituted), so they look emptier than the design.
- **Copy:** all eight titles and descriptions and the action label were transcribed by eye from the low-resolution capture (text is a raster there, not outlined paths). Reading errors are possible (tashkeel, e.g. تُحسب / مبرّرًا / موثّق), and several lines make regulatory/compliance claims (هيئة الزكاة والضريبة والجمارك with QR invoices, SBC 801, السجل التجاري والرقم الموحد 700, "إغلاق لا يمكن العبث به"). They need business and legal approval and the original text file before release.
- **Links:** none approved; none created.
- **Contrast:** the action text `#EF2D28` at 11px on white is ≈4.1:1 (below AA 4.5:1 for small text) — design colour kept; needs a designer decision. Title `#2E3338` ≈12:1, description `#4B5056` ≈8:1.
- Not built: any section after this one.

## Phase 03C — «حلول سلم تدعمك» solutions carousel (2026-11-13, branch `feat/trust-strip`, HEAD 91b580e)
- C01: The pack `Amanix_Phase03C_Solutions_Handoff_2026-11-13.zip` was in Downloads but not in the repo; its 4 files were merged without overwriting: `docs/PHASE03C_SOLUTIONS_SPEC.md`, `docs/PHASE03C_PROMPTS.md`, `design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png`, `design-reference/assets/phase-03/solutions-carousel/README_ASSETS.md`. **No card images are in the pack** (README says so).
- C02: `SolutionsCarousel` (Server Component, `sections/solutions/`) + `SolutionCard` (server) + `SolutionsCarouselControls` (the only client code, ~100 lines) + `solutions.css`; data in `src/content/solutions.ts`. Placed after `SafetyNeeds`; light `#F5F5F7` section, header white.
- C03: Carousel = native `overflow-x` + `scroll-snap-type: x mandatory` (`start` alignment, `scroll-padding` = gutter), RTL (first card at the right), no autoplay, no duplication, no dependency. Scroller is `role="region"` labelled by the heading and `tabIndex=0` (arrow keys scroll it; verified 8×Left → next card). Mouse users get previous/next buttons (not in the reference — my addition, 44px, `aria-label` «السابق»/«التالي», disabled at the ends, hidden when nothing overflows) because the native scrollbar is hidden; touch/trackpad/wheel/keyboard work without JS. No mouse-drag.
- C04: The progress bar follows the reference (10px `#F0F0F0` track bleeding to the left edge, `#D7D7D7` thumb starting at the right) and is **functional**: thumb width = visible/total, position = scroll progress, written through CSS variables from a passive scroll listener in `requestAnimationFrame` (no React state per scroll; state flips only at start/end/overflow). It is `aria-hidden` (the scroller itself is the accessible control).
- C05: Reduced motion: smooth scrolling is requested only if `prefers-reduced-motion: no-preference` (buttons use `behavior: "auto"` otherwise); CSS sets `scroll-behavior: auto`. No animation exists in the section.
- C06: Geometry from the reference (capture scale ≈ 0.7125): section 827px (ref 826.78), heading 40px/500 (glyph ≈170px from the top, 291px wide vs ref ≈288), progress bar at 290px, cards 405×273 (≈3:2, radius 16, gap 32), captions 24px/400 (≈32px under the cards, ≈217px wide). Verified in the browser: cards 405×273 at y 316–589; bar y 290–300. Below 1280 the gap and card width shrink (`clamp(260px, 78vw, 405px)`) so a next card always peeks.
- C07: Phone heading reserves space for the buttons (wraps to two lines at 320px).

### Media / content blockers (BLOCK ACCEPTANCE — visual fidelity is NOT claimed)
- **Images:** none supplied. Cards render a neutral `#E4E4E8` placeholder (aria-hidden, no text), never a cropped screenshot or stock photo. `SolutionCard` already supports `image` (next/image, `sizes`, lazy) so approved originals drop in via `src/content/solutions.ts` and `public/images/solutions-carousel/`.
- **Mapping uncertain:** the reference pairs a pipe photo with «تنفيذ ميداني موثّق», a smoke detector with «إغلاق لا يمكن العبث به», a hose-reel cabinet with «فاتورة ضريبية متسلسلة» — subjects and captions do not match; unresolved, not "fixed". Captions are the three visible strings only; the title «فاتورة ضريبية متسلسلة» differs from the Safety Needs card «فوترة ضريبية متسلسلة» (also unresolved).
- **Missing cards:** at least a 4th card is partly visible in the reference but unknown; only 3 cards exist, so at 1440 they fit without overflow (buttons hidden; the progress thumb is full width). The overflow state was verified only with 5 temporary dummy cards on a throw-away page (never shipped).
- **Links:** none approved; cards are not links. Brand name SLM vs Amanix still unsettled.

## Phase 03C/03B corrections (2026-11-13)
- C08: **Carousel now genuinely overflows with three cards.** The track gets trailing inline-end padding `max(edge, 100% − edge − card width)` so the LAST card can also snap to the start edge. Scroll range = `scrollWidth − clientWidth`: 1920 → 874px, 1440 → 873px, 1024 → 855px, 744 → 843px, 390 → 640px (before: 0 at ≥1280). Heading, background and the progress bar stay full-width; only the scroller changes. No extra cards, captions or images were added.
- C09: Interim composition: with three cards the viewport shows all three fully at 1440/1920 (a partial next card exists naturally only below ~1280px, where 2–3 cards don't fit); after the last card the remaining space is empty until a fourth card exists. **The reference's partial 4th card at 1440 needs approved content (title + image) for a fourth card** — still a blocker. Buttons/thumb now show at every width because overflow is real.
- C10: Progress indicator = actual progress: thumb width = clientWidth/scrollWidth (measured 0.62 @1440, 0.685 @1920, 0.469 @744, 0.379 @390 — equal to the expected ratio), position = scrollLeft/range; RTL: starts at the right, ends at the left.
- S08: **Provisional design decision (owner):** `icon-document-search.svg` is reused on all eight Safety Needs cards via the existing `FeatureCard` (data field `icon: "document-search"`), 55×55 at the unchanged 71px slot. This **supersedes** the earlier "empty icon slot" behaviour; the per-feature icons (note-edit ×6, shield-lock) are still missing and the repeated icon must be replaced when they arrive. No layout, copy or mark change.

## Phase 03C final carousel UX correction (2026-11-13) — SUPERSEDES C08/C09
- C11: The artificial trailing spacer (C08) is **removed**. The track now has only the normal inline padding (the section edge) — no padding that exists just to force scrolling.
- C12: At ≥1280px the scroller (carousel viewport) is inset: width `--sol-view` = 2.45 cards + 2 gaps (=1056px at full size), starting at the right gutter/canvas edge (RTL start), so two cards are fully visible and the third peeks (≈45%). The remaining content (`scrollWidth 1279` vs `clientWidth 1056`) is **real overflow**: range 222–223px. The progress bar and the previous/next buttons are aligned to this viewport (bar width = viewport, buttons at its left end). Below 1280px the scroller stays full-bleed (cards 405px/78vw) and overflows naturally with the section-edge padding.
- C13: Measured (production build, instant-scroll path): 
  - 1440: viewport 1056px (left 289, right gap 95), visible cards 1 / 1 / 0.45 (2.45), range 222, last card ends flush with the viewport's left edge (offset +1px), thumb 0.826 = clientW/scrollW.
  - 1920: viewport 1056px (left 536, right gap 328 = canvas edge), same card visibility, range 223, last card flush (+1px).
  - 1024: viewport 1009px, visible 1 / 1 / 0.24, range 366, last card 57px inside the left edge (= section-edge padding), thumb 0.734.
  - 744: viewport 744px, visible 1 / 0.69, range 587, last card 42px inside, thumb 0.559.
  - 390: viewport 390px, visible 1 / 0.16, range 598, last card 22px inside, thumb 0.395.
  Controls: next moves to the end (clamped by the range; next disabled), prev returns to 0 (prev disabled); RTL confirmed (first card on the right, scrollLeft negative).
- C14: Documented deviation: the reference shows three complete cards plus part of a fourth across a full-bleed 1360px strip; with three cards that exact composition is impossible. The interim inset viewport keeps card size (405×273), gap (32), radius, type and background; it leaves the area left of the viewport empty on desktop (289px @1440, 536px @1920). **A fourth approved card (title + image) is required** to restore the full-bleed reference layout, at which point the inset (`--sol-view` rule in `solutions.css` under `min-width: 80rem`) should be removed. Safety Needs repeated icons (S08) are unchanged.
