# AMANIX — Phase 08 / Footer — Verified Design Specification

## 1. Source of truth and scope

Provided files (inspect rather than assuming that a filename implies content):
- `design-reference/assets/phase-08/footer/source-exports/footer-full-reference-1440x540.svg`: complete footer reference, not a production UI element. The text is outlined to paths and MUST be rendered as real HTML text in the page.
- `design-reference/assets/phase-08/footer/source-exports/slm-decorative-mark-209x423.svg`: pure vector outline used at the far left of the dark panel.
- `design-reference/assets/phase-08/footer/source-exports/slm-logo-white-594x229.svg`: white SLM logo for dark backgrounds.
- `design-reference/notes/phase-08/footer/figma-footer-screenshot.png`: Figma panel screenshot; inspect as supporting design evidence, NOT a webpage bitmap.
- The full SVG reference itself is more geometrically precise than the screenshot's zoomed UI.

NO Figma MCP is required. Do not redraw the complete footer as a single SVG image; implement semantic React/HTML.

## 2. Geometry established directly from supplied Footer.svg

**At 1440px page width:**

| Element | Source coordinates | Implementation requirement |
|---|---|---|
| Design frame | x=0, y=0, 1440×540 | White / off-white surrounding canvas |
| **Dark footer card** | **x=24, y=24, w=1392, h=492, rx=8** | **24px visible outer margin at LEFT, RIGHT, TOP, BOTTOM; never stretch the dark card flush to screen edges at desktop** |
| Dark card fill | `#181818` | Actual container background |
| Inner content lane | x=104..1336 (1232px wide) | 80px inside each dark-card edge; use centered max-width 1232px at 1440 |
| White brand logo | x=1172, y=100, w≈164, h≈63.2 | Top right, reuse white `Variant3` asset when appropriate |
| Decorative orange SLM mark | leftmost visible x≈24..233, y≈58..480 | Anchor to left panel edge at top≈34px; clip decoration to rounded card; do not pull outside outer white margin |
| Social icons | five 24×24 vector icons, x=1059,1107,1155,1203,1251; y≈365.16 | Between icons 24px gap; label «تابعنا» at their right, no fake links |
| Lower separator | near y≈418 | Very subtle line across inner lane |
| Legal baseline | near y≈442 | Bottom line within panel, not on white page margin |

The full reference contains NO embedded bitmap images; ornament and logo source SVGs are also real vector paths. The social icons extracted into `public/images/footer/` are precise vector groups from Footer.svg, not approximate replacements.

**Important shell rule:** Footer uses a full-viewport-width *outer shell* with 24px padding at the 1440px reference, and a dark rounded *inner card*; it is NOT a full-bleed black page end and is NOT constrained to 1280px outer width. The inner text/layout lane is separately constrained. Do not place the dark container inside a `max-width:1280px` page container, as doing so would produce enormous incorrect side margins.

Safe responsive starting point (derive from design and test; NOT blindly hardcode for all widths):
- Desktop ≥1024px: outer 24px, dark panel radius 8px; content max-width 1232px.
- Narrow tablet/mobile: adapt outer margins to ~12–16px, increase dark-card height as much as content needs, stack link columns and legal/social rows logically, preserve clip and avoid horizontal scrolling.
- 492px dark panel height is an **exact desktop reference**, not an all-device fixed height. On smaller screens, allow content-driven expansion.

## 3. Structure and type

- Semantic `<footer>` (only one site-footer landmark), RTL, Noto Sans Arabic for general copy.
- Top row: brand logo at far right, plus three columns from right to left: **للعملاء** / **موارد** / **شركة**.
- Column «للعملاء»: «خدماتنا», «الاسعار» (reference spelling; designer approval needed for «الأسعار»).
- Column «موارد»: «المساعدة والدعم», «قسم المعرفة».
- Column «شركة»: «معلومات عنا», «اتصل بنا», «الثقة والأمن والأمان».
- In the lower-right/social area label «تابعنا» and the five icons Instagram, YouTube, X, LinkedIn, Facebook (visually right-to-left) as extracted from original footer artwork. The reference displays the corresponding icons spatially from left-to-right Facebook, LinkedIn, X, YouTube, Instagram.
- Legal row shows: «جميع الحقوق محفوظة لشركة أمانكس © 2026», and «شروط الخدمة», «سياسة الخصوصية», «إمكانية الوصول».
- Reference footer has brand inconsistency: white logo says **SLM / سلم**, while copyright says **أمانكس**. Do not silently normalize or invent company naming; preserve and flag it for owner approval.
- Font pixel metrics in the outlined SVG are not reliably transferable as editable text metrics. Match rendered type visually using Noto Sans Arabic and project conventions; avoid claiming pixel-perfect typography where no live text layer exists.

## 4. Asset placement

Production-oriented copies (reusable, vector, no raster conversion):
- `public/brand/footer-logo-white.svg` — white SLM logo (provided source, path vector).
- `public/images/footer/footer-decorative-slm.svg` — orange left decorative mark, 209×423.
- `public/images/footer/social-facebook.svg`
- `public/images/footer/social-linkedin.svg`
- `public/images/footer/social-x.svg`
- `public/images/footer/social-youtube.svg`
- `public/images/footer/social-instagram.svg`

Compare the white logo with the repository's existing dark-background logo before using; reuse an existing byte-identical or visually equivalent logo if it avoids unnecessary production duplication. Preserve original source files in design-reference regardless.

Use SVG for logos/ornament/social icons; DO NOT convert to PNG or WebP (this would reduce sharpness). The decorative ornament should be `aria-hidden`, with `pointer-events:none`, appropriately clipped by the inner dark card. Social icons must not become counterfeit social links.

## 5. Link integrity and accessibility

- Reuse VERIFIED internal anchors only when a semantically correct section target already exists; e.g. a real pricing section ID can be linked from the prices item if implemented and tested. Do not make guessed service/legal/contact/support URLs.
- Unapproved URLs: show textual items without link affordances, disabled fake buttons, hover styling, or href="#". If decorative social icons are displayed before their URLs are known, they must be visually noninteractive, not focusable, and documented as pending release approval.
- Supply meaningful navigation labels, do not announce decorative vectors, ensure contrast and 44×44 touch hit areas for links once enabled.
- Do not place navigation to unknown pages. Confirm footer and header link behavior in a future shared navigation slice, not as a side effect of this phase.

## 6. QA targets

- At 1440 width, document rects of dark card x≈24,y≈24,w≈1392,h≈492 and inner content x≈104..1336.
- Screenshot comparison to the provided full-reference SVG at 1440×540 with overlay/diff where possible.
- Ensure decorative logo anchored inside black card; rounded corners and all four outer white gutters visible.
- Test 320, 375, 390, 744, 768, 1024, 1280, 1440, 1920px; also short viewport and reduced motion (no special animation intended).
- Check RTL column order, branding, legal row, social icons, links, focus, color contrast, no document overflow.
- Actual browser tests + lint + typecheck + production build. Record NOT RUN honestly.
- The supplied Figma frame is desktop-only. Do not claim exact mobile parity; adapt deliberately and describe assumptions.

## 7. Boundary and checkpoints

- Expected repository HEAD (from latest user-provided Claude report): `e7441fb` on `feat/qna-center`. VERIFY live state instead of assuming.
- Create `feat/footer` only if branch is clean enough and preserving the existing local-only/untracked Phase 05 files is safe. Never reset/rebase or overwrite an unrelated change.
- Implement only Phase 08 footer; no push, merge, deploy, or commit until user accepts outcome.
- Final production is blocked by brand naming, unapproved destinations and copyright/legal text, plus other previously logged project-wide issues.
