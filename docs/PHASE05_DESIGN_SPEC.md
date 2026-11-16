# AMANIX — Phase 05 visual handoff: Metrics band, then FAQ

## Hierarchy and order
Immediately after `ProjectControl` Scrollytelling (Phase 04), implement:
1. **Metrics / assurance band** (Phase 05A): dark full-width media section.
2. **FAQ** (Phase 05B): light section containing three question rows.
Preserve the following sections/footer if any. Do **not** add an invented footer or change earlier sections.

## Grounded source observations
- Desktop metrics design frame is **1440 × 474px**, visible in `figma-metrics-and-faq-overview.png`.
- Background source: `design-reference/assets/phase-05/metrics/metrics-background-source.svg` (1440 × 474); it is a raster photograph inside an SVG with a **0.62-opacity black overlay already part of the SVG**. A visually equivalent optimized WebP `metrics-background-local-preview.webp` is provided (1440 × 474); **do not apply a second 62% overlay automatically**.
- Four columns, visual order **right to left**: **8**, **100%**, **SBC 801**, **ZATCA**. Corresponding visible source descriptions, approximate transcription pending owner confirmation:
  * `8` — `مراحل موثقة لكل مشروع من الاستشارة للتسليم`
  * `100%` — `بيئة سحابية محلية آمنة ومشفرة`
  * `SBC 801` — `مراجعة معايير الحريق وفق الأكواد الوطنية`
  * `ZATCA` — `توليد الفواتير المشفرة بختم وتشفير متسلسل`
- Metric panel text is **real DOM text**, not baked into a screenshot. Keep 1280px common content container, desktop order and centered metric items. Let mobile rearrange to 2×2 or 1 column based on measured fit, rather than forcing 474px fixed height.
- Claims are **not verified**: especially `100%`, `SBC 801`, `ZATCA` and compliance/security statements. This is a visual design reference only; **no claim may be described as confirmed or released** without owner approval/documentation.
- FAQ source `faq-layout-reference.svg` is **1440 × 580px**, with a light background `#FEFEFE` and three `#F1F1F1` question rows of **1280 × 76px**, corner radius about **12px**, x≈80px; rows y≈208, 300 and 392, gap≈16px. The SVG contains outlined text; **DO NOT ship it as the FAQ UI**.
- Questions visible in screenshot (transcription requiring approval):
  1. `كيف تحمي أمانكس البيانات؟`
  2. `هل الفواتير متوافقة مع هيئة الزكاة والضريبة والجمارك؟`
  3. `كيف يتم حظر التلاعب في إغلاق المشاريع وهوامش الأرباح؟`
- Brand mismatch: screenshot question says **أمانكس** while header/logo show **سلم SLM**. Do not silently replace brand copy; record open decision.
- **FAQ answers were NOT provided.** Do not invent security, financial or regulatory explanations. Until approved answers arrive, render clearly non-interactive question rows, not a misleading working accordion. The three rows can be wired to native `<details>`/accessible accordion controls **only when validated answer copy exists**.
- Pink design layout columns/grid in Figma screenshots are UI overlays and **must NOT render on the website**.
- `fullpage-end-of-body-reference.svg` is a **13MB full-page export** for local context, NOT a production image. It must remain ignored from Git.

## Architecture
- Next.js App Router + TypeScript strict + Tailwind 4; Server Components default.
- Keep metric and FAQ content in typed `src/content/...` files, presentation in separate section components if appropriate.
- Do not add dependencies or a carousel. These sections are static unless approved FAQ answers justify an accessible disclosure UI.
- Uniform horizontal content grid aligned with `SafetyNeeds` and `Solutions`; backgrounds may extend full bleed.
- Media optimization: no oversized page SVG in `public`. Respect source licensing; retain local-only media if rights unconfirmed, and render a safe CSS fallback on fresh clones without broken asset URLs.

## Verification
- Test 320, 390, 744, 1024, 1280, 1440, 1920 widths plus short viewport.
- Validate media legibility, metric spacing/order/overflow, FAQ row behavior, browser keyboard focus, RTL, contrast, reduced motion, header white over these sections, layout shift, `npm run lint`, `npm run typecheck`, `npm run build`.
- Keep QA/results clearly separated as PASS/FAIL/NOT RUN; no unmeasured Lighthouse claims.

## Output boundaries
Phase 05A metrics **only**, review/commit checkpoint (with approval), then Phase 05B FAQ **only**. Never claim final production readiness without validated claims, approved FAQ answers, media rights and full regression checks.
