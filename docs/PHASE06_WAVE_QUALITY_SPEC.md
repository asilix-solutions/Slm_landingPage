# Phase 06 Pricing wave: quality audit and visual acceptance

## Source inspection

- `Background-updated 1.svg`: SVG 1440×756; contains a single embedded 1440×870 **RGB PNG**, not resolution-independent paths.
- `Vector (2).svg`: same embedded PNG byte-for-byte. Both wrappers repeat the same raster, so exporting either again as SVG cannot improve quality.
- New proposed asset: `pricing-wave-true-vector.svg` with **two actual filled SVG paths and two linear gradients**, no embedded image or external dependency. Artwork reconstructed from the supplied raster; deliberate approximation, not an official master vector.
- Original reference rendered at 1440×756, vector reconstruction also rendered at 1440×756. Mean absolute pixel difference on white background: 1.78 / 255 per RGB channel; fraction of pixels with any channel difference above 32: 1.51%. These are image comparisons, not evidence of perfect Figma fidelity.

## Recommended implementation

1. Keep the approved fixed sizing and location from Phase 06. On the 1440 reference, backdrop box is roughly 1440×756 with top at 93px in a roughly 931px section.
2. First compare the new real-vector SVG against the reference in actual page render at 1440, 1920 and DPR 2. Use it only if the shape and colors remain acceptable.
3. The new SVG can render sharply at any pixel density. Prefer it over raster WebP **when visual fidelity is accepted**.
4. An additional 2880×1512 WebP rendered directly from this new vector is provided as a fallback. It is not equivalent to an official source vector, but is crisper than enlarging the embedded 1440px PNG.
5. Preserve `aria-hidden="true"`, `pointer-events:none`, stable dimensions and clipping. No background animation, JS or unnecessary dependencies.
6. Do not accidentally duplicate or re-add the old `pricing-wave.svg` raster wrapper.
7. Respect the repository's public/rights restrictions. If production SVG is git-ignored, ensure a fresh clone has a functional CSS or non-image fallback without 404s.

## QA requirements

- Compare whole page screenshot at 1440×900, 1920×1080, mobile 390×844 and high-density DPR 2.
- Confirm no blurry/pixelated wave edges; crisp antialiasing, card readability, correct z-index, no overflow, no layout shifts.
- Confirm design composition, color gradient and upper/right/lower wave boundaries are sufficiently faithful.
- Run lint, typecheck and build. Explicitly label any unrun screenshot/device/Lighthouse tests as NOT RUN.
- Do NOT commit, push, merge or deploy until owner reviews.
