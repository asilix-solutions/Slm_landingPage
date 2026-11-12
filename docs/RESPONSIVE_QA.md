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
