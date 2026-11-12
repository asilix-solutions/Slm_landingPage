# Amanix Hero — visual and motion acceptance specification

## Confirmed source assets from user attachments (12 Nov 2026)
- Photo: `Fire Safety Office Professional 1.svg` (1440×680); SVG wraps raster content. Prefer a separate optimized original photo for production if supplied; otherwise inspect/optimize without changing visual appearance.
- Upper-left card: `Main - MatchedTalentWidget.svg` (283×231), matching-candidates UI.
- Lower-right card: `Outer Card Shell.svg` (329×170), contractor/status UI.
- Annotated image: `design-reference/notes/hero-cards-highlight.png` showing the two intended moving elements (red marks are designer annotations; never ship with them).

## Animation
- **Only the two overlay cards** float; image, page layout and headline remain stationary.
- Upper-left: `0 → -8px`, `7s ease-in-out infinite alternate`.
- Lower-right: `0 → +6px`, `8.5s ease-in-out infinite alternate`, `animation-delay: .8s`.
- Keep overlays placed accurately at reference widths and adjust stacking/crop responsively. Animate inner wrappers, not absolute-positioned outer wrappers.
- CSS `@keyframes` is enough. Do not add an animation dependency. No bounce/pulse/scale/parallax, no rotation unless separately requested.
- Reduced motion: no movement; both cards fully visible at their normal positions.

## Typography and content
- Noto Sans Arabic: all body/UI text and standard headings.
- IBM Plex Sans Arabic: very large display heading only.
- Keep brand text/copy accurate from designer's manual files. No invented business claims or submission success.

## Acceptance
1. Photo and cards reflect approved assets (no duplicates). 2. Hero matches responsive references at 390, 744, 1024, 1440. 3. No overflow/clipping at 320 and 375. 4. Both floats are very subtle and do not affect reading or keyboard. 5. Reduced motion stops floats. 6. LCP optimized, CLS prevented; compare screenshots and report PASS/FAIL/NOT RUN.
