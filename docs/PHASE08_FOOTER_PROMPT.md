# AMANIX — Phase 08: Footer — Source-Grounded Pixel-Fidelity Implementation

**Choose Claude Sonnet 5.5 — Thinking: High**
**Environment:** Claude Code Desktop (Local)
**Repository:** `D:\amanix-landing`

## Mission

Implement the final Footer immediately after the existing Q&A Center, **faithfully matching the owner-supplied Figma footer reference**. The highest-priority detail is that the black rounded footer is **NOT edge-to-edge**: a small white outer margin surrounds it on all four sides. Preserve all existing page sections and navigation behavior.

## A. Repository preflight and branch safety

1. Verify repository path, branch, HEAD, actual Git status and untracked/ignored files before touching anything. The last reported checkpoint is `feat/qna-center` at `e7441fb`, but the live tree takes precedence.
2. Read `CLAUDE.md`, `AGENTS.md`, relevant `.claude/rules/`, architecture/QA/decisions docs and Footer-relevant reusable components/tokens.
3. Do not reset, stash, discard, rebase, amend, or blindly switch branches while untracked changes exist.
4. If appropriate and safe, create `feat/footer` from the existing approved HEAD while preserving all current local-only references.

## B. Locate and merge the supplied ZIP yourself

Locate `Amanix_Phase08_Footer_Handoff_2026-11-14.zip` under the current Windows user's Downloads folder (`$env:USERPROFILE\Downloads`). Do not ask the user to unpack anything.

- Inspect archive entries and validate ZIP integrity, safe relative paths, sizes and the asset hashes in `docs/PHASE08_FOOTER_ASSET_MANIFEST.json`.
- Extract into a temporary staging folder OUTSIDE the repository first.
- Merge the `design-reference/`, `public/` and `docs/` subtrees carefully; inspect destination file conflicts and compare hashes before any replacement. Never overwrite unrelated files silently.
- Read `README_START_HERE_AR.md`, `docs/PHASE08_FOOTER_DESIGN_SPEC.md`, `docs/PHASE08_FOOTER_COPY_AND_LINKS.md`, and the acceptance checklist in full.
- Inspect the full Footer SVG AND the screenshot; use them as evidence, not as a single giant production image. Do not use Figma MCP.

## C. Non-negotiable geometry, verified from Footer.svg

Original Figma design frame is 1440×540 (white surround). Exact dark-card coordinates inside it:

- **x=24px, y=24px, width=1392px, height=492px, border-radius=8px**, background **#181818**.
- Thus **24px white OUTER margins left/right/top/bottom** at the 1440 reference. Never remove the margin or create a full-bleed dark background.
- Footer's dark-card **OUTER** width must respond to viewport width minus small gutters; do NOT constrain the entire black card to the shared 1280px page content grid.
- Distinguish the **INNER content lane** separately: Figma shows approximately x104..1336, a centered 1232px content width at 1440; the dark card has about 80px inset per side.
- Decorative orange outline mark: left-side clipped within the dark card; the supplied `209×423` vector matches the visible design ornament. At the 1440 reference, its visible top is around y58, i.e. 34px down from the card top.
- White SLM logo about 164×63px, at x1172/y100 in the original frame.
- Five social icons at 24×24px in the lower-right, with 24px gaps; fine divider and legal bottom row.

At smaller sizes adapt thoughtfully (e.g. 12–16px outer gutter, stacked columns and legal content), keeping the card rounded, the inset clear and all copy legible. Do not force 492px height on mobile; allow natural growth. Do not invent mobile pixel references.

## D. Assets and fidelity

Use the already-supplied, pure-vector assets:
- `public/brand/footer-logo-white.svg`
- `public/images/footer/footer-decorative-slm.svg`
- `public/images/footer/social-facebook.svg`, `social-linkedin.svg`, `social-x.svg`, `social-youtube.svg`, `social-instagram.svg`

The 5 social SVGs are exact extracted icon groups from Footer.svg and have been preview-rendered; prefer them to approximate icons or a new icon library. Inspect whether existing public brand logos already match the new logo and avoid runtime duplicates if possible. Ensure vector ornament remains crisp and decorative (`aria-hidden`, pointer-events none). The complete Figma SVG contains outlined text; build the footer using **real HTML headings, labels and copy**.

## E. Layout and content

Build a semantic `<footer>` in Arabic RTL with:
- White SLM branding on the RIGHT.
- Three columns (RTL from right to left): **للعملاء** («خدماتنا», «الاسعار»), **موارد** («المساعدة والدعم», «قسم المعرفة»), **شركة** («معلومات عنا», «اتصل بنا», «الثقة والأمن والأمان»).
- Lower right: «تابعنا» and icons Instagram, YouTube, X, LinkedIn, Facebook in correct visual order.
- Legal line under a subtle divider: «جميع الحقوق محفوظة لشركة أمانكس © 2026» and «شروط الخدمة», «سياسة الخصوصية», «إمكانية الوصول».
- Use existing Noto Sans Arabic fonts, tokens and semantic data conventions. Reuse components; default to Server Components; no unnecessary client JS or new dependencies.
- IMPORTANT: logo shows «سلم SLM» while copyright says «أمانكس». Preserve verified design copy and explicitly flag brand approval instead of silently harmonizing.

Link rules:
- Make a footer entry interactive ONLY if its URL/anchor is verified and exists. Test fixed-header anchor offsets.
- Never invent URLs, social handles, privacy/legal pages or support/contact details. Never use `href="#"` as a fake link.
- With unavailable URLs, use clearly noninteractive text in the interim; do not simulate success, add fake hover/cursor behavior, or claim complete navigation.
- The five social icons are decorative only until real social URLs are supplied; avoid false accessible links.

## F. QA — need actual evidence, not just build success

Browser test at **320, 375, 390, 744, 768, 1024, 1280, 1440, 1920**. At 1440, use `getBoundingClientRect()` to measure card bounds and actual white gutters. The key acceptance is **x≈24,y≈24,w≈1392,h≈492** relative to the Footer design shell and x≈104..1336 for inner content. Note that section start on the full page is not necessarily viewport y=0; measure RELATIVE rects.

Also verify:
- At 1440 the logo, ornament, columns, socials, copyright and divider closely match the original SVG.
- White outer gaps on all four sides; no accidental black full-bleed background, no incorrect `max-width:1280px` around the black card.
- Correct RTL order, responsive wrapping and stacking on mobile, no clipping or document overflow.
- Contrast, keyboard/tab focus if working links exist, no inert buttons, no broken image URLs.
- No regressions in Q&A / Pricing / Metrics, and Footer follows Q&A immediately with appropriate spacing.
- Run `npm run lint`, `npm run typecheck`, `npm run build`.
- Capture screenshots at 1440 and 390 if possible and compare against the reference. When tools cannot provide screenshots, say NOT RUN rather than claiming pixel-perfect.

Document the exact files changed, DOM/CSS structure, outer and inner measured rects, browser test results, design differences, unverified brand/copyright/URLs, asset status, and production blockers. Update `docs/ARCHITECTURE.md`, `docs/RESPONSIVE_QA.md`, `docs/DECISIONS_AND_OPEN_ITEMS.md`, `docs/ASSET_MANIFEST.md` as relevant.

**Do not commit, push, merge, deploy, or implement any later sections.**

Proceed now with safe extraction, high-fidelity Footer implementation and QA.
