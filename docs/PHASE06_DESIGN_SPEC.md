# Phase 06 — Pricing Plans | Design and Architecture Specification

## Source evidence

- `pricing-section-full-1440x931.svg` is the exact section export, 1440 × 931. Its visible text is drawn as paths and is NOT editable text.
- `pricing-background-updated-1440x756.svg` and `pricing-background-vector-export-1440x756.svg` each embed exactly the same **1440 × 870 RGB PNG**, so neither is a pure vector illustration. Both render the same red/pink wave on white.
- `figma-pricing-screenshot.png` is a Figma editor screenshot with pink/red layout-column overlays. Those overlays **must not be recreated**.
- `public/images/pricing/pricing-wave.svg` is the original unmodified Background-updated SVG. Keep this as the preferred production decorative layer initially. Do not use the entire pricing section SVG in the page.

## Screen-visible structure (1440px reference)

- White section background, substantial top and bottom breathing room, shared main page grid (inspect the existing actual `.page-container` or equivalent).
- Centered heading: **«خطط تناسب حجم شركتك»** and supporting copy visible in reference.
- Four cards in a single desktop RTL row, right to left: **تجريبية، الأساسية، الاحترافية، المؤسسية**.
- Trial plan marked **مجانا**, Basic **499 ر.س/شهر**, Professional **1,499 ر.س/شهر**, Enterprise **3,999 ر.س/شهر** in the visible reference. These values are transcriptions from artwork and **must be approved** before public release.
- The Professional card has a **«شائع»** badge and stronger orange-red CTA. Buttons visually say **«اختر الخطة»**.
- A centered underlined comparison label **«قارن المميزات بين الخطط»** below the four cards.
- Major red/coral wave extends horizontally behind the cards; do not cover card foreground, headings or button hit targets. Wave layer must not alter layout or keyboard focus (`aria-hidden`, `pointer-events:none`).

## Typography / layout conventions

- Noto Sans Arabic for standard text and cards; IBM Plex Sans Arabic only for extremely large display headings if existing project rules designate it.
- Use real DOM Arabic text for every card, not the outlined paths from Section.svg.
- Preserve dark text, subtle card borders, ~16px corner radius when matches source, white/very light card surfaces, and consistent padding and feature-row checks based on source.
- Ensure the standard 1280px shared content container and RTL order from the current codebase; derive precise sizing from the actual reference and existing components, not arbitrary magic numbers.

## Asset quality and fidelity

1. Treat source SVG as a rendering *container*, not genuine resolution-independent paths: underlying wave is a 1440×870 PNG; scaling above intrinsic pixels will soften it.
2. Preferred first pass: render the unmodified `public/images/pricing/pricing-wave.svg` as an absolutely positioned decorative artwork within the pricing section, with correct intrinsic aspect ratio 1440:756, behind cards. Do not use it as a full-window photo (`cover`) if cropping or zoom harms the wave.
3. At 1920 and high-DPI verify crispness honestly; favour a content-contained artwork (~1440px-wide) rather than forcing >1.5× enlargement. If user later supplies a true path-based vector, swap it without restructuring the section.
4. The SVG's embedded image is 112,567 bytes; the wrapper is about 150 KB. Do not convert to WebP by default: that will not increase sharpness, and may degrade gradients.
5. Do not set `image-rendering: pixelated`, strong sharpening, animated expensive CSS filters, or duplicate decorative images.
6. White fill in the export is intentional; test actual layer stacking and background matching to avoid seams.

## Responsive decisions

- Desktop >=1024px: four cards if actual available width allows reference dimensions; otherwise adapt without squashing.
- Tablet: responsive 2×2 if appropriate. Mobile: one column with no overflow and readable prices.
- No horizontal card carousel unless there is an actual mobile reference requiring it.
- Let cards grow for Arabic content; avoid clipping, fixed height for all devices, or absolute positioning of text.
- Decorative wave may be repositioned, faded or hidden on narrow widths if necessary to maintain readability and avoid arbitrary cropped fragments.

## Functionality and content status

- Pricing tiers, limits, labels, CTA destinations, and comparison link destination need business confirmation.
- Preserve their presentation without inventing purchase endpoints, checkout routes or fake success states. Never use `href="#"` or clickable controls without real actions.
- A badge is informational, not an independent button. Feature descriptions should be transcribed from source where confidently legible; flag anything ambiguous rather than guessing.
- All supplied artwork and screenshots should be reviewed for usage rights before public Git pushes or deployment.

## Quality gates

- Browser visual review at 320, 390, 744, 768, 1024, 1280, 1440, 1920 and 1440×560.
- Compare heading location, cards, badge, wave extent/position, CTA heights and comparison label to 1440 × 931.
- No document overflow, overlap, clipping, missing assets, broken keyboard behavior, or unexpected layout shifts.
- Run lint / typecheck / build, document PASS / FAIL / NOT RUN separately.
- Do NOT alter previous FAQ, Metrics or Header implementations.
