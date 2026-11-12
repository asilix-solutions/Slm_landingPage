# Responsive design matrix / living QA log

## Reference widths (approved SVGs supplied)
- 390 px — mobile reference, 8147 px SVG height.
- 744 px — tablet reference, 7794 px height.
- 1024 px — iPad Pro reference, 9406 px height.
- 1440 px — desktop reference, 12334 px height.

The different heights alone DO NOT establish a bug: content, stacking and type may differ. Compare actual section ordering and visibility.

## Additional fluid layout QA widths
- 320 and 375 px: narrow phones, keyboard and clipping.
- 768 px: intermediate tablet, hierarchy and form widths.
- 1280 px: desktop transition, plus conflict with older Figma frame.
- 1920 px: max container and background behavior.

## Acceptance per section
| Section | 320 | 390 | 744 | 1024 | 1440 | Interaction / keyboard | Evidence / deviation |
|---|---|---|---|---|---|---|---|
| Header/nav | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | |
| Hero/form | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | |
| Trust ribbon | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | N/A | |
| Workflow | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | N/A | |
| Features | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | N/A | |
| Showcase/story | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | N/A | |
| Pricing | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | |
| FAQ | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | |
| Final CTA/footer | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | NOT RUN | |

For each actual verification, record browser, viewport width and height, screenshot path, zoom/font load, failures and measured layout shifts. Do not mark PASS from inspecting the reference export alone.

## Foundation slice (2026-11-12)
- Prerendered HTML verified: `<html lang="ar" dir="rtl">`, both font variables on `<html>`, two Arabic-subset woff2 font preload hints emitted, single H1.
- Browser rendering at reference widths: **NOT RUN** (skeletal page only; first visual QA in Slice 02).
- Lighthouse / CWV: **NOT RUN**.

## Header slice (2026-11-12) — Chromium in the Claude desktop Browser pane, dev server, temporary tall test page (removed)
Method: viewport emulation + DOM/computed-style assertions + screenshots at 1440 (both states) and 390 (menu open). Screenshots were not archived to the repo.

| Width | Overflow | Header h | Layout | Result |
|---|---|---|---|---|
| 320 | none | 73 | hamburger left, logo right (179–304px) | PASS (metrics) |
| 375 | none | 73 | same | PASS (metrics) |
| 390 | none | 73 | menu open/close, both states, visual check | PASS |
| 744 | none | 73 | hamburger, nav hidden | PASS (metrics) |
| 768 | none | 73 | same | PASS (metrics) |
| 1024 | none | 73 | hamburger, nav hidden | PASS (metrics) |
| 1280 | none | 97 | nav + CTAs visible, no collisions | PASS (metrics) |
| 1440 | none | 97 | initial + scrolled screenshots match reference layout | PASS (visual, approximate) |
| 1920 | none | 97 | contained in 1440 max container | PASS (metrics) |

- State switch: `data-scrolled` stays `false` at scrollY 0/10/20 and flips to `true` at 21; flips back at 0. Computed values scrolled: bg `#fff`, nav `#201F37`, border `.08` navy, shadow `.06`, logo cross-fade (Default 1 / Variant3 0). Header height identical in both states (97px desktop, 73px mobile) → no layout shift from the header. **PASS**
- Mid-transition sample (scroll back to top) showed intermediate opacity/colors → smooth, no jump. **PASS**
- Mobile menu: opens at top (header turns white, Default logo, X icon), opens while scrolled, closes on Escape (focus returns to toggle — verified in a prior run; last Escape run was a no-op because the menu was already closed), closes on link click. **PASS (script-driven)**
- Contrast: navy on white 16.0:1; `#F3F7F8` on navy 14.8:1. Against the photo (unmirrored source, no overlay): logo area (dark side) mean ≥ 8:1; the nav area (brightest band) mean 2.4:1 raw → ~4.8:1 with the header scrim; p95 highlights lower. Final value depends on the Hero overlay — **re-check in the Hero slice**. White on `#FD4006` 3.55:1 (A11).
- Note: a hidden Browser pane throttles IntersectionObserver/transitions; checks above ran with the pane visible.
- Reduced motion: CSS sets `transition: none` for header/logo/buttons (+ global rule). Emulated `prefers-reduced-motion`: **NOT RUN**.
- Keyboard: native links/buttons, global `:focus-visible` accent outline; full Tab-walk, keyboard-only menu use and focus-outline contrast on both states: **NOT RUN**.
- Hard reload mid-page (restored scroll) flash, real device touch, Safari/Firefox: **NOT RUN**.
- RTL alignment: logo at inline-start (right), CTAs at inline-end (left), hamburger at left on mobile — matches the references. **PASS (visual)**

## Header correction — Hero-boundary transition (2026-11-12)
Method: production build (`next start`, port 3101) in the Claude desktop Browser pane (pane visible), temporary test page (removed) with a Hero of `min(85svh,760px)` (min 520) followed by 1500px of content. `window.scrollTo` instant jumps + computed-style assertions. (The dev server on :3000 served stale CSS for the newly appended block, so the production build was used; dev-server staleness is unrelated to the code.)

| Viewport | Hero h | Header h | Expected flip (Hero bottom from viewport top) | Observed flip | Mid-Hero | After Hero | Back into Hero |
|---|---|---|---|---|---|---|---|
| 390×844 | 717 | 72 | 152 | between 155 (transparent) and 149 (white) | transparent | white (also at −400) | transparent |
| 744×1024 | 760 | 72 | 152 | between 155 and 149 | transparent | white | transparent |
| 1024×768 | 653 | 72 | 152 | between 155 and 149 | transparent | white | transparent |
| 1440×800 | 680 | 96 | 176 | between 179 and 173 | transparent | white | transparent |
| 1440×560 (short) | 520 | 96 | 176 | between 179 and 173 | transparent | white | transparent |

All rows: **PASS**. Top of page transparent with Variant2 logo (opacity 1/0); header height unchanged between states (73px < 1280px, 97px ≥ 1280px incl. border). Visual check at 1440 mid-Hero: transparent, light nav, orange-symbol logo — PASS.
- Mobile menu at 390: open mid-Hero → white + Default logo, `data-scrolled` stays `false`; close → transparent again. Open after Hero → white; Escape closes, focus returns to toggle (`true`); scrolling back to the Hero → transparent. **PASS (script-driven)**
- Not re-run for this correction: widths 320/375/768/1280/1920 (the offset is CSS-only; the same header metrics held in the earlier pass), reduced-motion emulation, full keyboard Tab walk, Safari/Firefox, real devices, hard reload at a mid-page restored scroll position — **NOT RUN**.
- Contrast vs the real Hero overlay still to be re-checked in the Hero slice.

## Hero slice (2026-11-12) — production build (`next start`) in the Claude desktop Browser pane
Method: viewport emulation; layout/geometry asserted from the DOM (`Range` / `getBoundingClientRect`); header state via `scrollTo` + `data-scrolled`; screenshots compared with the reference SVGs rendered at the same viewport (pane screenshots are downscaled ~0.37–0.53×, so visual comparison is coarse; pixel statistics were also compared with `sharp`). A temporary page (Hero + 1500px filler) was used for scrolling checks and removed.

| Viewport | Overflow | Hero h (ref) | Title rows | Sub rows (ref) | Buttons | Header flips to white when Hero bottom is at | Result |
|---|---|---|---|---|---|---|---|
| 320 | none | 797 (—) | 1+1 (27.7px) | 4 | full width 16–304 | 160px | PASS |
| 375 | none | 773 (—) | 1+1 | 3 | full width | 160px | PASS |
| 390 | none | 772 (772) | 1+1 (32px) | 3 (3) | y596/660 (596/660.5) | 160px | PASS |
| 744 | none | 749 (749) | 1+1 (38px) | 2 (2) | y573/637 (573/637) | 160px | PASS |
| 768 | none | 762 (—) | 1+1 | 2 | full width | 160px | PASS |
| 1024 | none | 569 (569) | 1+1 (41px) | 2 (2) | y352 (352.7), primary right edge 992 | 160px | PASS |
| 1280 | none | 637 (—) | 1+1 (45.3px) | 2 | y384 | 168px | PASS |
| 1440 | none | 680 (680) | 1+1 (48px) | 2 (2) | y404 (404.1), 1206–1360 | 168px (T@172, W@164) | PASS |
| 1440×560 | none | 680 | same | same | same | 168px | PASS |
| 1920 | none | 760 | 1+1 | 2 | stage centred | 168px | PASS (no reference) |

- Header (transparent in Hero / white after / transparent again when scrolling back) verified at every width above: transparent at top and mid-Hero, white just past the boundary and 300px beyond, transparent again at top. Header height constant per breakpoint (80/88 + 1px border).
- Card/title/button geometry vs reference: cards 40/160 (ref 39.7/159.8) and 471/450 @1440; 42/143 @1024; 15/113 @744; −23/110 @390; card B right edge inside the viewport at 320 (318px).
- Visual comparison: 1440 — mean luminance of the Hero band 83.0 (mine) vs 83.8 (reference), quadrants within 3 levels. 1024, 744, 390 compared side by side: composition, crop, card positions, text placement and shading match; remaining differences are body-font glyph widths, header-button label weight, and slightly different tonal rendering (JPEG vs the SVG's PNG). A screenshot taken before the photo finished loading looks dark — not a defect.
- Keyboard: Tab order (RTL visual order) = skip link → logo → الخدمات → الاسعار → سجل شركتك → تجربة المنصة → Hero primary → Hero outline; focus ring = 2px accent outline, offset 3px (`:focus-visible` true). PASS (desktop nav). Mobile-menu keyboard operation verified in the Header slice.
- Motion: `getAnimations()` shows exactly two animations — `hero-float-a` 7000ms, 0→-8px, alternate, infinite, no delay; `hero-float-b` 8500ms, 0→+6px, alternate, infinite, delay 800ms — both on `.hero-card__float`; none on the photo or the outer wrappers. Reduced motion: stylesheet inspection shows animations only inside `no-preference` plus an explicit `reduce` override → structural PASS; **emulated `prefers-reduced-motion: reduce` NOT RUN** (the pane has no media emulation).
- Contrast (estimated from screenshots): sub-copy `#BDBDBF` over the photo — median background 5.9:1 @1440, 8.5:1 @1024, ≥10:1 on the solid area below the photo (<1024); title white ≥12:1 (median). The brightest 5% of background pixels fall lower (≈3:1), as in the approved design. CTA white-on-orange 3.55:1 (A11/O08).
- NOT RUN: Lighthouse / Core Web Vitals (LCP, CLS, INP), emulated reduced motion, Safari/Firefox, real devices, hard reload at a restored mid-page scroll, browser zoom / larger default font size. The pane shows a 15px scrollbar, so `100vw`-based interpolation is up to 15px off against the layout width at the breakpoints.
