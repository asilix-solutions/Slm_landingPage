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

## Hero correction — full-viewport height & full-bleed photo (2026-11-12)
Method: production build (`next start`) in the Claude desktop Browser pane; DOM/geometry assertions + `scrollTo` for header state on a temporary Hero + filler page (removed). Screenshots (pane-scaled): `docs/qa-screenshots/hero-viewport-fix/{before,after}-{1440x900,1920x1080,390x844}.jpg`.

| Viewport | Hero h | Fills viewport | White gap below | Photo box (left, w×h) | Overflow | Card/text overlap | Header flips to white at Hero-bottom-from-top |
|---|---|---|---|---|---|---|---|
| 320×640 | 797 | content taller (OK) | none | 0, 320×402 | none | none | 160 |
| 390×844 | 844 | yes (=844) | none | 0, 390×472 | none | none | 160 |
| 390×667 | 773 | content taller (OK) | none | 0, 390×400 | none | none | 160 |
| 744×1024 | 1024 | yes | none | 0, 744×661 | none | none | 160 |
| 1024×768 | 768 | yes | none | 0, 1009×768 | none | none | 160 |
| 1280×720 | 720 | yes | none | 0, 1265×719 | none | none | 168 |
| 1366×768 | 768 | yes | none | 0, 1351×768 | none | none | 168 |
| 1440×900 | 900 | yes | none | 0, 1425×900 | none | none | 168 |
| 1440×560 | 680 | content/reference taller (OK) | none | 0, 1425×679 | none | none | 168 |
| 1920×1080 | 1080 | yes | none | 0, 1905×1079 (full width) | none | none | 168 |
| 1920×700 | 760 | reference minimum (OK) | none | 0, 1905×759 | none | none | 168 |

(Photo/box widths are 15px below the viewport where the pane shows a vertical scrollbar.) All rows: title on 2 rows, description 2 rows (3 at 390, 4 at 320), no clipped text, card B inside the viewport, header transparent at top and mid-Hero, white just past the boundary and 300px beyond, transparent again at the top — **PASS**.
- Before/after (1920×1080): mean luminance of the 30px left/right strips 3.0/3.0 → 57.3/81.2 (photo now continues to the edges); bottom 12px row of the 1440×900 capture 255 (white page exposed) → 10 (dark fade).
- Before/after (1440×900, 390×844): white area below the Hero removed; Hero fills the viewport.
- Fixed a faint 1px line above the bottom shade on fractional heights (photo trimmed 1px).
- Reduced motion: CSS for the two floats is unchanged (only `no-preference`, explicit `reduce` override). Emulated reduce, Lighthouse/CLS, Safari/Firefox, real devices, iOS Safari `svh` behaviour: **NOT RUN**. Layout is static (no JS-driven sizing), photo has fixed intrinsic size, so no layout shift is expected, but it was not measured.

## Phase 03A — Trust strip (2026-11-13) — production build (`next start`) in the Claude desktop Browser pane
Method: DOM geometry vs reference SVG geometry; `scrollTo` + `data-scrolled` for the header; Web Animations API for the marquee; a temporary page (dark intro + 1500px light filler) was used for header tests and removed. Screenshots (pane-scaled): `docs/qa-screenshots/trust-strip/`.

| Viewport | Hero h (fills?) | Strip h (ref) | Overflow | Header: top / mid-Hero / Hero end / mid-strip | Flip (−6 / +6 px around the boundary) | After | Back up |
|---|---|---|---|---|---|---|---|
| 320×640 | 797 (content) | 241 (—) | none | T T T W* | T / W | W | T |
| 390×844 | 844 ✓ | 239 (238.7) | none | T T T W* | T / W | W | T |
| 390×667 | 773 (content) | 239 | none | T T T W* | T / W | W | T |
| 744×1024 | 1024 ✓ | 278 (277.9) | none | T T T W* | T / W | W | T |
| 1024×768 | 768 ✓ | 329 (328.3) | none | T T T T | T / W | W | T |
| 1440×900 | 900 ✓ | 431 (431) | none | T T T T | T / W | W | T |
| 1440×560 | 680 (reference min) | 431 | none | T T T T | T / W | W | T |
| 1920×1080 | 1080 ✓ | 431 | none | T T T T | T / W | W | T |

(*) the strip is shorter than header + 80px at these widths, so the header is already white at the strip's midpoint — expected. No gap between Hero and strip (0px) at any size.
- 1440 geometry: title 262.1px wide (ref 261.5), tiles 87×60 at 134px from the strip top, pitch 177, captions 98/58/85 (2 rows)/87/88/86px (ref 96.6/59.2/85.3/88.6/90.8/86.0). 1024/744/390: cards 96×113, 86.4×101.5, 66.9×79 exactly; pitch 125.9/113.3/87.7.
- Marquee: animation `trust-marquee`, 30s @1440, keyframes `translate(0)` → `translateX(1062px)`; seam delta 0px; the track covers the viewport at max shift (left edge −2823px). Mid-animation screenshots at 1440/1024/390 show the cards with the edge fade and no distortion.
- Reduced motion: **simulated** by injecting the stylesheet's `prefers-reduced-motion: reduce` rules as unconditional CSS (the pane has no media emulation): animation none, transform none, 1 group visible, wrapped/centred (1425px wide row @1440; 4+2 cards @390), no overflow. **Real emulated reduce: NOT RUN.**
- Accessibility (DOM): 1 `<h2>`, 5 lists of which 4 `aria-hidden`, 6 exposed items, 0 images with alt text (decorative), 0 focusable elements in the strip, `direction: rtl`. Contrast (computed): heading `#9E9EA0` on `#030304` 7.6:1; captions ≈9:1 at 70% opacity. Screen-reader pass (NVDA/VoiceOver): **NOT RUN**.
- NOT RUN: Lighthouse/CLS/LCP for the new section, Safari/Firefox (mask-image), real devices, hover-pause on touch, 375/768/1280 widths, browser zoom. Duplicated groups use lazy-loaded images (not measured).

## Phase 03B — Safety Needs (2026-11-13) — production build (`next start`) in the Claude desktop Browser pane
Method: DOM geometry vs the Figma-capture measurements; screenshots (pane-scaled) in `docs/qa-screenshots/safety-needs/`; side-by-side visual comparison with `safety-needs-full-figma-capture.png`.

| Viewport | Cols × rows | Section h | Card w × h | Overflow | Clipped text | Card overlap | Mark (left,top w×h) |
|---|---|---|---|---|---|---|---|
| 1920×1080 | 3×3 | 1516 | 400×340 | none | 0 | 0 | 0,128 607×1260 |
| 1440×900 | 3×3 | 1516 (ref 1515.94) | 400×340 (395 with the pane's 15px scrollbar) | none | 0 | 0 | 0,128 607×1260 |
| 1280×720 | 3×3 | 1516 | 347×340 | none | 0 | 0 | 0,128 607×1259 |
| 1024×768 | 3×3 | 1511 | 282×349 | none | 0 | 0 | 0,128 485×1008 |
| 768×1024 | 2×4 | 1587 | 322×317 | none | 0 | 0 | 0,120 364×756 |
| 744×1024 | 2×4 | 1587 | 318×317 | none | 0 | 0 | 0,120 364×756 |
| 390×844 | 1×8 | 2554 | 346×277–301 | none | 0 | 0 | 0,144 273×567 |
| 375×667 | 1×8 | 2554 | 333×277–301 | none | 0 | 0 | same |
| 320×640 | 1×8 | 2731 | 284×277–301 | none | 0 | 0 | same (mark no longer overlaps the heading after the top offset change) |

All rows PASS for: no horizontal overflow, cards inside the viewport, no card overlap, no clipped card text, titles on one line (two lines at 1024 for some cards, no clipping), mark behind the cards and clipped by the section, no layout shift from the mark (fixed dimensions).
- **Desktop fidelity (1440):** card rows at 250/630/1010 (ref 250/630/1010), card 340px, title box 120–152 (ref glyph 123–148), description 168–216 (ref glyphs 172–207), action box 279–307 (ref glyph 293–300), mark top 128 and last cap ≈1388 (ref ≈1381–1388). Headline 388px wide (ref 389). Visual comparison: layout, heading, card order, mark crop and layering match the capture; differences = copy accuracy risk, six empty icon slots, scrollbar-width effects.
- **Header:** transparent over Hero + strip, white over this section (verified at 1440 and 390).
- **Reading order / keyboard:** DOM order equals the RTL visual order (cards 1–8); the section has no focusable elements (nothing to tab to) — PASS by DOM inspection.
- NOT RUN: screen-reader pass, Lighthouse/CLS/LCP, Safari/Firefox, real devices, browser zoom, emulated reduced motion (this section has no motion), comparison at 744/390/1024 with design references (none exist for the new version — see S02).

## Phase 03C — solutions carousel (2026-11-13) — production build (`next start`) in the Claude desktop Browser pane
Method: DOM geometry vs reference measurements; Web API checks; a throw-away page with 8 cards (3 real + 5 dummy) to exercise overflow/scrolling (deleted). Screenshots (pane-scaled): `docs/qa-screenshots/solutions-carousel/` (both are the 8-card simulation, labelled as such).

| Viewport | Doc overflow | Card w×h | Gap | Full + partial cards (8-card test) | Result |
|---|---|---|---|---|---|
| 1920×1080 | none | 405×273 | 32 | 3 + 1 | PASS |
| 1440×900 | none | 405×273 | 32 | 3 + 1 | PASS (3 real cards: section 827px, ref 826.78) |
| 1280×720 | none | 405×273 | 28 | 2 + 1 | PASS |
| 1024×768 | none | 405×273 | 23 | 2 + 1 | PASS |
| 768×1024 | none | 405×273 | 17 | 1 + 1 | PASS |
| 744×1024 | none | 405×273 | 16 | 1 + 1 | PASS |
| 390×844 | none | 304×205 | 16 | 1 + 1 | PASS |
| 375×667 | none | 293×197 | 16 | 1 + 1 | PASS |
| 320×640 | none | 260×175 | 16 | 1 + 1 (heading wraps clear of the buttons) | PASS |

- **Interaction (1440, 8 cards):** next button → scrollLeft −437 (card 405 + gap 32), second click −873, previous back to −437, end −2196 with the next button disabled, start 0 with previous disabled; the thumb moves from the right end to the left end (thumb left 816 → 0, width constant 529); items snap to the start edge. Keyboard: scroller focusable (`tabindex=0`, role region); 8× ArrowLeft moved it to the next snap point (−437). Direction is RTL (first card at the right).
- **Real data (3 cards):** 1440 and 1920 fit without overflow (buttons hidden at 1920; at 1440 the pane's 15px scrollbar makes it overflow by ≈14px so buttons show); ≤1024 overflow with a peeking third card.
- **Header:** `data-scrolled` is `true` over this section (checked once the pane rendered); header text/logo contrast on the light section was verified visually earlier for the white state. The pane frequently reports `visibilityState: hidden`, which freezes IntersectionObserver/transition rendering — screenshots taken then show a stale transparent header (not a defect).
- NOT RUN: touch swipe on a real device, mouse-drag (not implemented), screen-reader pass, emulated reduced motion (code path inspected only), Lighthouse/CLS (cards have fixed aspect ratios, no images yet), Safari/Firefox (`scroll-snap` + hidden scrollbar), browser zoom, comparison with real photos (not supplied).

## Corrections QA (2026-11-13) — production build in the Browser pane (pane often `visibilityState: hidden`, which stalls smooth scrolling and rAF-driven thumb updates; steps were therefore also checked on the `behavior:"auto"` path)
| Viewport | Doc overflow | Scroller scrollW / clientW | Overflow px | Thumb ratio (expected) | Cards fully visible at start | Last card right gap at end | Safety icons |
|---|---|---|---|---|---|---|---|
| 1920×1080 | none | 2779 / 1905 | 874 | 0.685 (0.685) | 3 | 328 (canvas edge) | 8/8 same, 55×55 |
| 1440×900 | none | 2298 / 1425 | 873 | 0.62 (0.62) | 3 | 95 | 8/8 same |
| 1024×768 | none | 1864 / 1009 | 855 | 0.541 (0.541) | 2 | 72 | 8/8 same |
| 744×1024 | none | 1587 / 744 | 843 | 0.469 (0.469) | 1 | 42 | 8/8 same |
| 390×844 | none | 1030 / 390 | 640 | 0.379 (0.379) | 1 | 22 | 8/8 same |
- **Controls (1920, visible pane, smooth):** start sl 0 (prev disabled) → next −437 → next −874 (next disabled) with the thumb 501 → 250 → 0. **1440 (auto path):** 0 → −437 → −873 (end, next disabled; a further click stays) → prev −437, thumb 255. 390: 0 → −320 → −640 → back −320. RTL confirmed (`direction: rtl`, first card on the right, scrollLeft negative).
- **Reduced motion:** the `no-preference` query was stubbed to false: buttons scrolled with `behavior:"auto"` (verified at 744 and 1440). Real OS-level emulation: NOT RUN.
- Safety Needs: all 8 cards render `/images/safety-needs/icon-document-search.svg`, loaded; the section has no horizontal overflow.
- NOT RUN: touch swipe on device, screen reader, Safari/Firefox, Lighthouse.

## Final carousel UX correction QA (2026-11-13)
See C11-C14 in DECISIONS_AND_OPEN_ITEMS.md for the measured table (1440/1920 inset 1056px viewport, range 222/223, last card flush; 1024/744/390 full-bleed with natural overflow 366/587/598). Screenshot: docs/qa-screenshots/solutions-carousel/interim-3-cards-inset-viewport-1440x900.jpg. Reduced-motion path checked by stubbing the no-preference query (buttons use behavior:auto); real OS emulation, touch on device, screen reader, Safari/Firefox, Lighthouse: NOT RUN.

## Carousel images QA (2026-11-13)
See I01-I06 in DECISIONS_AND_OPEN_ITEMS.md: 6 widths (1920/1440/1024/744/390/320) PASS for image load, ratio, overflow, RTL, progress; screenshot with-images-1440x900.jpg. Emulated reduced motion, device touch, screen reader, Safari/Firefox, Lighthouse: NOT RUN.

## Carousel grid alignment QA (2026-11-14)
See A01-A05 in DECISIONS_AND_OPEN_ITEMS.md: Safety Needs vs Solutions boundaries are identical (0px left/right difference for scroller and progress bar) at 1920/1440/1280/1024/744/390; no document overflow; thumb = clientW/scrollW. Screenshots at 1440/1920 NOT captured (Browser pane too small). Touch on device, screen reader, Safari/Firefox, Lighthouse: NOT RUN.

## Repeated-cards QA (2026-11-14)
See R01-R03 in DECISIONS_AND_OPEN_ITEMS.md: 6 cards (3 repeated, aria-hidden), real overflow at 1920/1440/1024/744/390 (ranges 1310/1323/1649/1851/1559), last card fully visible at the end, thumb equals clientW/scrollW, keyboard and buttons verified, no document overflow.

## Project Control section (Phase 04)

- Grid edges align with Safety Needs at all tested widths (0px delta); no horizontal overflow measured by DOM.
- Sticky list verified with 8 dummy panels (temporary route, removed): sticks at header+24px, active item follows panels up/down, releases at section end.
- Header flip re-verified at 1440 after tall-marker fix: jump down -> scrolled, jump up -> transparent.
- Reduced motion: transitions removed in CSS (inspected); OS-level emulation NOT RUN.
- Start/middle/end screenshots: NOT RUN (browser pane too small/hidden).
- lint PASS, tsc PASS, build PASS.

### Header regression after tall HeroBoundary marker (Phase 04 review, production build, Claude browser pane)
Widths 390/744/1024/1440/1920: header transparent at top and inside the dark Hero+Trust region, white after leaving it (flip within ~15-25px of the computed threshold darkBottom - header - 80px; stepwise scroll in 97px increments), restored on upward scroll, exactly one flip each way (no flicker), direct instant jumps (into dark, past it, far below, back) all correct, no horizontal overflow. 1440: End key and Home key and a #pc-panel hash jump correct (panel clears the 89px header). 390: mobile menu opens white and closes back to the correct state both at top and when scrolled. NOT RUN: visual screenshots/pixel check of the transition, real touch fling, other browsers.

### Project Control as committed (one real panel)
Panel 1 renders a decorative placeholder (aria-hidden, 0 broken images) with real caption/CTA text; list has 1 link + 7 plain-text items. Sticky/active/release were verified earlier with temporary dummy panels only, not with production content. NOT RUN: reduced-motion OS emulation, screen reader pass, screenshots.

### Project Control — eight panels, shared image (production build, Claude browser pane)
Per width: all 8 panels render (8 imgs, 0 broken), no horizontal overflow, story left of list (RTL), page end reachable.
- 1440 / 1920 / 1024x768: sticky list (top = header + 24px) stays visible at panel 5; active index follows panels 1->8 down and 8->1 up exactly; list releases at the story end (aside bottom <= story bottom); 1920 media capped at 832px.
- 390 / 744: single column, list static; active state tracked 1->7 down / 7->1 up (panel 8 not reachable by the band at page end; list not visible there). No overflow.
- Panel/media geometry: 1440 media 817x440, 1920 832x448, 1024 529x285, 744 661x356, 390 346x186.
- Fresh-clone fallback: building without request-intake.webp -> 0 image references, 8 aria-hidden placeholders.
- NOT RUN: screenshots, OS reduced-motion emulation, screen-reader pass, 320/375/768/1280 re-run, Lighthouse.

### Project Control — eight identical StoryPanels (production build, Claude browser pane)
Per width 390/744/1024/1440/1920: 8 panels, 8 unique panel ids and no duplicate ids on the page; markup identical across panels after stripping ids/labels; measured geometry (media/caption/CTA offsets, sizes, panel height) identical for all eight; caption and CTA visible and not clipped; CTA is a SPAN everywhere (no href); no horizontal overflow; page end reachable after the section.
- Panel geometry (media / caption / CTA / panel height): 1440 817x440 / 272x48... CTA 144x48 / 601; 1920 832x448, 609; 1024 529x285, 437; 744 661x356, 508; 390 346x186, 338.
- 1024x768, 1440, 1920: list sticky (header+24px) at panel 5; active 1->8 down and 8->1 up exact; released at story end.
- 390 / 744: single column, list static (not visible); 744 tracks 1->8 both ways; 390 reaches 1->7 (panel 8 not reachable by the band at page end; invisible there).
- NOT RUN: screenshots/pixel diff of first-middle-last, OS reduced-motion emulation, screen-reader pass, 320/375/768/1280, Lighthouse, CLS measurement.

### Project Control — panel 8 activation fix (supersedes the "390: reaches 1->7" notes above)
ProjectControlSteps now also observes the last panel with threshold 1: when the final panel is completely on screen it is the active step (geometry-based, no document-bottom hardcode); otherwise the middle-band logic applies. Verified in the production build at 390, 744, 1024x768 and 1440x900 (+532 pane width): centre-each-panel down "01234567", up "76543210", jump to page end -> 7, and 60px gradual scroll down "01234567" / up "76543210" (monotonic, no flicker); sticky list at >=1024 unchanged; no overflow. 1920 not re-run after this change.

### Metrics band (Phase 05A) — production build, Claude browser pane
Widths 320/390/744/1024/1440/1920 (+532 pane): order right-to-left 8, 100%, SBC 801, ZATCA at >=1024 (centres 1154/875/573/270 at 1440, one row, 3 dividers); 2x2 at 390/744 (row count 2), 1 column at 320 (row count 4, section 618px); section height 474px at >=1024 (matches the 1440x474 frame), 475 at 744, 372 at 390; value type 64px at 1440/1920/744, 53px at 1024, 39px at 390, 36px at 320; no clipped text, no item outside the section, no horizontal overflow, background image loaded, header `data-scrolled=true` (white) over the band, Noto Sans Arabic applied.
- Fresh-clone fallback verified (no image file -> no image refs, gradient band).
- NOT RUN: screenshot/pixel comparison with the Figma frame (pane too small), measured contrast ratios over the photo (white text on baked 62% overlay / dark gradient; not measured), 1280 and short-viewport checks, CLS measurement, reduced-motion (no motion added), Lighthouse.

### Metrics background hi-res swap (production build, Claude browser pane, DPR 1)
Per width (box / source scale = rendered px per source px; <1 means downscaled, no upscaling): 1920 1905x474 / 0.79 (old 1440 file: 1.32); 1440 1425x474 / 0.60 (old 1.00); 1024 1009x474 / 0.60; 744 744x475 / 0.60; 390 390x372 / 0.47 (old 0.79). filter none, object-fit cover, centre, image-rendering auto, no overflow, band heights unchanged (474/475/372), no image-loading errors, no layout shift (absolute image in fixed-height band). NOT RUN: real DPR 2 device, captured before/after screenshots (pane limited to ~532px; swapped src live for the measurements instead), LCP/Lighthouse.

### Metrics pinned background (production build, Claude browser pane, DPR 1)
Per width (section height / pin height / runway; text top at pin start -> at runway end; pin top stays 0 during the runway): 1440x900 1170/900/270, text 495->225; 1920x1080 1404/1080/324, 594->270; 1024x768 998/768/230, 422->192; 744x1024 1331/1024/307, 564->256; 390x844 1097/844/253, 464->211; 1440x560 728/560/168, 308->140. Pin top = 0 and sticky for the whole runway at every width; scrolling back up reproduces the same positions; image 2400x1200 loaded, object-fit cover; no horizontal overflow at any width incl. 320 (static fallback, 618px, no pin).
- Release (1440x900 with a temporary 1500px element injected after the section, removed afterwards): pin bottom == section bottom, pin scrolls away with the section (-100, -400, -840...), the following element is hit-testable (not covered).
- Because Metrics is currently the last section, the page's maximum scroll equals the runway end; FAQ is not implemented yet.
- NOT RUN: actual reduced-motion emulation (CSS media query inspected only), real touch/iOS toolbar resize (svh), start/middle/end screenshots at all widths (pane limited to ~532px; one 1440 mid-runway capture only was viewed), DPR 2, Lighthouse/CLS, keyboard-focus (section has no focusable elements).

### Metrics compact + fixed-window background (CORRECTION; supersedes the pinned-runway results above) — production build, Claude browser pane, temporary 1200px element injected after the section (runtime only, not in source)
Section height / mode / space above & below metrics / centre offset: 1920x1080 474 fixed 172/172 0; 1440x900 474 fixed 172/172 0; 1440x560 474 fixed 172/172 0; 1024x768 474 fixed 178/178 0; 744x1024 475 static(absolute) 80/80 0; 390x844 372 static 64/64 0; 320x640 618 static (single column). Fixed modes: layer top = 0 at section enter/mid/leave; image shifts relative to the section 962-1274px (parallax) ; the next element touches the section bottom (gap 0) and is hit-testable (not covered); no horizontal overflow, no clipped text at any width; header data-scrolled=true; mid-scroll 1440 screenshot viewed (photo visible only inside the section).
- 744/390/320 emulation reports a coarse pointer, so those ran the static fallback (verified: same compact heights as the first implementation, 475/372/618).
- NOT RUN: reduced-motion emulation (media query inspected), real Safari/Firefox/iOS/Android, DPR 2, 390px with a fine pointer, Lighthouse/CLS.

### FAQ (Phase 05B) — production build, Claude browser pane
Reference (1440x580 Figma/SVG): rows 1280x76 at y 208/300/392, gap 16, radius 12, #F1F1F1 on #FEFEFE.
Measured at 1440 (viewport incl. scrollbar): section 580px; rows 76px at y 208/300/392; heading 48px line at y 96; bg rgb(254,254,254); row bg rgb(241,241,241); radius 12px; direction rtl; Noto Sans Arabic 18px; gap Metrics→FAQ 0px.
Section height / row heights / overflow: 1920x1080 580 / 76,76,76 / none; 1280x800 580 / 76,76,76 / none; 1024x768 516 / 76,76,76 / none; 768x1024 513 / 76,76,76 / none; 744x1024 456 / 76,76,76 / none; 390x844 462 / 76,83,83 / none; 375x667 462 / 76,83,83 / none; 320x640 462 / 76,83,83 / none. No clipped question (scrollWidth <= clientWidth) at any width.
- Shared grid: FAQ list edges equal the SafetyNeeds grid edges at 768 (43–710), 1024 (57–952), 1280 (72–1193), 1920 (313–1593).
- Metrics regression: 474px at >=1024 (475 at 744/768, 372 at 390/375, 618 at 320); fixed-layer top stays 0 on a fine pointer; Metrics→FAQ gap is 0px; no overlap.
- Header: still data-scrolled="true" (white) over the FAQ; one h1; headings h2 "الأسئلة الشائعة" then three h3. FAQ has 0 focusable elements, so keyboard order is unchanged.
- Visual differences from the reference: "+" icons intentionally omitted (pending decision); rows are 76px min-height (grow to 83px when a question wraps at <=390px); mobile/tablet padding and heading size are fluid (no mobile reference exists for the FAQ); text colour reuses the SafetyNeeds ink #2E3338 (Figma colour not measured); question size 16px mobile / 18px >=768 is an estimate from the screenshot.
- NOT RUN: reduced-motion emulation (section has no motion), real Safari/Firefox/iOS/Android, DPR 2, screen reader, Lighthouse/CLS, pixel overlay against the SVG, 1440 screenshot at full scale (pane is small; geometry measured via getBoundingClientRect).

### FAQ "+" icon correction — production build, Claude browser pane
At 1920/1440/1024/744/390 (+320): all three icons present, 14px wide, 24px from the row's left edge, centre Y == row middle (38px in 76px rows, 42px in 83px rows), 16px gap to the question box, no overlap, aria-hidden="true", colour rgb(108,91,85), cursor auto, no horizontal overflow. Section heights unchanged from the previous FAQ run (580/580/516/456/462/462); row heights unchanged (76; 76/83/83 at <=390). Metrics/Header untouched.
- Visual check: zoomed screenshot at 1440 shows the "+" at the left of every row, question right-aligned, matching the reference placement. NOT RUN: pixel overlay vs SVG, real Safari/Firefox/mobile, screen reader.

### Pricing plans (Phase 06) — production build, Claude browser pane (viewport = width + 15px scrollbar where noted)
Reference 1440x931: cards 295x490 at y272, x 84/411/738/1065 (gap 32), CTA 47-48px, comparison label ~y795, wave 1440x756 at y93.
Measured at 1440 content width: section 930px; cards 296x490 at y272, x 80/408/736/1064 (shared 1280 grid, gap 32); CTAs 47px (professional 48px); compare label y794; wave box 0,93,1440x756 (naturalWidth 1440x756 loaded); title 36px, text width 408px (ref ~405).
Section height / layout: 1920 930 (4 cols; wave 240–1680 with faded edges); 1295 930 (4 cols, cards 260px); 1024 1194 (2x2); 768 1211 (2x2); 744 1914 (1 col); 390 1931; 375 1954; 320 2012 (1 col). No horizontal overflow at any width; prices fit; no feature text clipped; plan order RTL trial→basic→professional→enterprise; badge «شائع» only on the professional card; wave aria-hidden, pointer-events none; 0 focusable elements in the section; CTA cursor auto.
- Regression: Metrics 474px with fixed layer top 0; FAQ 580px with 3 plus icons; one h1; Header data-scrolled true; FAQ→Pricing gap 0.
- Fresh-clone fallback (wave file moved out, rebuilt): HTML has no wave element or URL, section renders white; file restored (sha256 verified) and rebuilt.
- Visual differences: cards use equal heights (the design's trial card is 5px shorter); trial divider is full width (the design shows a short one, likely an artefact); price/divider vertical rhythm within ~3px; 2×2/1-column layouts have no reference; feature check icons are a redrawn 16px check (design icon not extracted); badge gradient taken from the SVG (#FFAEA7→#FFC2BD).
- Wave quality: source is a 1440x870 PNG squeezed to 756px high by the design itself (non-uniform scale in the SVG pattern); displayed at 1x CSS px so no upscaling at 1440/1920; on a 2x display it is upscaled 2x (soft gradients, no visible detail loss expected but NOT visually verified). Narrow screens show a centre crop of the wave.
- NOT RUN: pixel-overlay against the Figma SVG, full-resolution screenshots at desktop widths (the browser pane is ~532px wide so desktop screenshots were downscaled; geometry was measured numerically), high-DPI, real Safari/Firefox/mobile, screen reader, reduced motion (no motion in the section), Lighthouse/CLS, 1440x560 short viewport.

### Pricing wave quality fix — production build, Claude browser pane
Asset chosen: pricing-wave-true-vector.svg. Placement unchanged: wave box 0,93,1440x756 at 1440; 240,93 at 1920 (not enlarged, edge fade unchanged); -215/-348/-525 (centre crop) at 1024/744/390. Section heights unchanged (930/930/1194/1914/1931), cards unchanged (296x490 at y272 at 1440), no overflow, pointer-events none, aria-hidden true, naturalSize 1440x756 loaded at every width.
Evidence (side-by-side and difference-blend renders of old vs new at 0.36x, plus 2x transform crops of the same regions): geometry matches closely (difference image almost black; thin fringes only along the upper edge of the main band); original edges are soft/blocky at 2x, vector edges are crisp.
Deviations of the reconstructed vector (it is a re-trace, not the official master): (1) the band is flatter in colour: it lacks the deeper red (#FF3B2F-like) shading at the lower-left and the soft internal shading of the raster; (2) the pale ribbon and the band's right end are cleaner/more defined where the raster feathers into white; (3) outlines are polylines (6px segments), so a few long diagonal edges show slight faceting at 2x; (4) the upper-right ribbon/band overlap differs slightly in shape. Package-reported mean abs difference 1.78/255 per channel (1.51% pixels differ by >32), not verified independently.
- Fresh clone (vector file moved out, rebuilt): no wave element/URL, section renders white; file restored (sha256 verified) and rebuilt.
- DPR: the browser pane reports devicePixelRatio 2 at 744/390 but screenshots were captured at 1x; true on-screen DPR 2 inspection NOT RUN. A 2x rasterisation was approximated with CSS transform:scale(2) on the img (vector re-rasterised crisply; raster upscaled soft).
- NOT RUN: pixel overlay against the Figma frame, desktop screenshots at full resolution (pane ~532px wide), real Safari/Firefox, Lighthouse/CLS.
