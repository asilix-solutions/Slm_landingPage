# AMANIX — Phase 07C | Q&A Center — design & implementation specification

## Scope and order
Implement the **SECOND** question-and-answer section after Pricing:  
**Hero → Trust Strip → Safety Needs → Solutions → Project Control → Metrics → FAQ (3 rows) → Pricing → Q&A Center (4 rows + dashboard screenshot) → Footer (if present)**.

**Do not replace or merge** the existing earlier FAQ with this section. No footer should be invented or redesigned in this slice.

## Source evidence and hierarchy
- `design-reference/assets/phase-07c/qna/source-exports/faq-qna-section-reference-1440x1019.svg` — exported complete design; use ONLY as reference, not as production component.
- `design-reference/notes/phase-07c/qna/figma-qna-screenshot.png` — user-supplied contextual screenshot showing the same section in Figma.
- `design-reference/notes/phase-07c/qna/qna-section-rendered-1440x1019.png` — full-size rendering of supplied SVG for geometry comparison.
- `design-reference/assets/phase-07c/qna/source-exports/dashboard-frame-reference-369x209.svg` — Figma's decorative dashboard crop reference; embeds a PNG.
- `design-reference/assets/phase-07c/qna/source-exports/qna-diamond-icon-10x12.svg` — genuine path-based tiny black diamond.

## Verified geometry from exported SVG (desktop)
- Frame: **1440 × 1019px**; background `#FEFEFE`.
- Wide inner surface: x=80, y=112, width=1280, height=795, white.
- Dashboard media shell: x≈80, y≈452, width≈407, height≈326, radius≈14; fill `#F5F5F5`, stroke `#E5E5E5`.
- Main content: centred intro near top, then two visual columns: media **left**, four-item Q&A list **right** in RTL.
- Image includes four tiny diamond corner markers; design export includes a miniature dashboard screenshot.
- Four questions; second item **visually expanded** in the screenshot (with a gray response text area); other three collapsed.
- Typography: Noto Sans Arabic for body; existing project display font conventions. Prefer actual component measurements over arbitrary values.
- Header and preceding Pricing should remain unchanged. Shared page gutter/container must match existing sections; do not assume arbitrary fixed x coordinates below desktop.

## Copy visible in source (provisional, not approved for publication)
Eyebrow: `مركز الأسئلة والأجوبة`  
Headline: `أسئلة شائعة؟ لدينا جميع الإجابات.`  
Subheading: `كل ما تود معرفته حول اعتماد منصة أمانكس في عمليات السلامة والامتثال الزكوي والهندسي.`

Questions in source order:
1. `هل بياناتي آمنة مع أمانكس؟`
2. `كيف تضمن أمانكس عزل بيانات كل شركة مقاولات؟`
3. `هل فواتير أمانكس متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)؟`
4. `كيف يتم حظر التلاعب في إغلاق المشاريع وهوامش الأرباح؟`

### Critical answer caveat
The screenshot shows text under question 2 referring to **Flow, SaaS, analytics and a dashboard**, which is a visibly generic, off-topic draft; **it is NOT approved as a factual answer about Amanix's tenant isolation or security**. Answers 1, 3 and 4 are not provided. Do **not** invent technical, privacy, ZATCA or accounting guarantees.

**Implementation recommendation:** Build a reusable typed `QuestionAnswer` structure with `answer: null` for all four. Match the visible panel geometry and chevrons in non-interactive visual mode while answers are pending; do not present dead buttons or a pretend functional accordion. If the project later gets approved answers, upgrade to an accessible functioning accordion with actual answers, keyboard support, expanded state and appropriate heading/button markup. A design-only open-state placeholder may be used *only for local visual QA* and must be documented as not production copy.

## Assets and quality
- Source `dashboard-original-1352x768.png` is the PNG embedded identically in both supplied screenshot SVGs (no original pixels fabricated).
- `public/images/qna/dashboard-screenshot-lossless.webp` is **lossless WebP 1352×768**, for crisp text and efficient delivery; use responsive containment/cropping thoughtfully, not stretching. Verify actual appearance against source. The illustration shows a separate entity's dashboard/brand; do not claim it is a verified Amanix product screenshot.
- `public/images/qna/qna-diamond.svg` is a true vector 10×12. Use as a decorative corner marker if the reference calls for it.
- **Rights are not verified.** On the public repository do not stage rights-pending media unless the owner confirms authorization; preserve a local-only copy and show a fallback in a clean clone. Check current project policies before adding ignore rules.

## Engineering & interactions
- Responsive RTL layout; left media, right list at desktop; stack logically on tablet/mobile with reference-driven order.
- Server Components by default. If approved answers arrive, use semantic native `<details>` or a narrowly scoped Client Component for accessible single-open accordion; choose based on actual project convention.
- No custom scroll hijacking, no new packages, no Figma MCP, no fabricated FAQ copy, no fake CTA destinations.
- Preserve existing earlier three-row FAQ and Pricing, and leave Footer untouched if already implemented.

## Acceptance tests
Measure and compare against 1440×1019 reference; check 320,375,390,744,768,1024,1280,1440,1920 widths. Check no horizontal overflow; no image distortion; source copy and typography; correct second-item visual layout; keyboard/focus (when interactive); no broken images on fresh clone; `npm run lint`, `npm run typecheck`, `npm run build`.

Record real PASS/FAIL/NOT RUN honestly. Do not commit, push, merge, deploy without user approval.
