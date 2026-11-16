# AMANIX — Phase 07C: Q&A Center — Asset Intake + High-Fidelity Implementation

**Recommended model:** Claude Sonnet 5.5 — Thinking High  
**Environment:** Claude Code Desktop (local Windows)  
**Repository:** `D:\amanix-landing`

## Mission
Implement the separate second FAQ / Q&A center section immediately after Pricing and before Footer (if Footer already exists). This must NOT replace the existing three-question FAQ above Pricing. The owner has supplied a full 1440×1019 design export, a Figma screenshot, a dashboard image and a decorative diamond icon.

## A. Preflight and archive intake
1. Confirm current repository path, branch, HEAD, and exact Git working-tree status; do not assume any pending commits. Expected recent baseline is `feat/pricing-plans` at `dedd5d8`, but verify and respect any newer user work.
2. Read `CLAUDE.md`, `AGENTS.md`, relevant `.claude/rules`, current `page.tsx`, architecture, asset policies, and QA/decisions docs.
3. Locate in `$env:USERPROFILE\Downloads` the file `Amanix_Phase07C_QnA_Handoff_2026-11-14.zip`.
4. Inspect the ZIP, list entries and validate integrity, hashes, path safety and unexpected scripts. Extract into a temp staging directory OUTSIDE the repo.
5. Read `README_START_HERE_AR.md`, `docs/PHASE07C_QNA_DESIGN_SPEC.md`, `docs/PHASE07C_QNA_COPY_REVIEW.md`, and `docs/PHASE07C_ASSET_MANIFEST.json`.
6. Merge the included `design-reference/`, `public/`, `docs/` directories into their identical relative repo paths. Never silently replace a different file. Do not delete existing local-only reference assets. Keep unverified third-party media out of public Git unless rights are confirmed.

## B. Design audit BEFORE coding
- Render / visually inspect the full design SVG at 1440×1019 and compare with the accompanying Figma screenshot and the `qna-section-rendered-1440x1019.png` evidence.
- Identify exact title, subtitle, media frame, four question rows, chevron positions, default expanded second-item visual state, icon placement, font styles, spacing and alignment.
- The SVG text is mostly converted to paths, not editable text. Use real accessible HTML text in implementation, with copy from the provisional source-copy document; flag ambiguities.
- The exported dashboard screenshot is a **bitmap embedded inside SVG**. Use `dashboard-screenshot-lossless.webp` instead of rendering the entire section SVG as a background or UI.
- The diamond icon IS a genuine tiny SVG vector.
- Do not use Figma MCP, recreate the screenshot as interactive app UI, invent answers, modify existing FAQ or add a new design system.

## C. Implementation
- Build `QnaCenter` as a Server Component by default, with typed data separated from presentation and modular CSS matching established conventions. Reuse the current Noto Sans Arabic / IBM Plex rules appropriately.
- Position it directly after Pricing and before Footer if present. If Footer does not yet exist, this will be the last section until the next slice.
- Match the reference: centered introductory heading and subtitle; within a unified 1280px content grid, dashboard artwork on the **left** and four right-aligned Arabic questions on the **right**. The second item has a visually expanded state in Figma. Build the image frame with the same rounded light background and the diamond markers, and preserve the original screenshot's pixels; avoid blur/upscaling.
- Preserve the old three-row FAQ before Pricing exactly as it is.
- Make the media truly responsive and avoid horizontal overflow. Respect semantic headings, RTL DOM order and the fixed Header offset.

## D. Missing-answer policy — mandatory
- The screenshot includes generic off-topic draft language in question 2 about Flow/SaaS. It does **not** establish real product security capabilities. Don't reproduce it as an approved answer.
- There are no approved answers for questions 1–4. Don't invent privacy, ZATCA, tenant isolation or accounting claims.
- Build a future-ready typed FAQ structure (`answer: null` initially) and a visually faithful non-interactive presentation. Decorative chevrons may be shown, but do not create dead buttons or fake working expansion. A neutral internal-only visual placeholder may be used for expanded-row QA; it must not masquerade as an approved answer or be presented as ready to publish.
- Document precise content requirements for making the accordion genuinely interactive in a later approved slice. If existing project documentation actually contains owner-approved answers, only use those after verifying their exact provenance and scope; do not infer from similar answers.

## E. Rights and reproducibility
- Verify the dashboard screenshot is from the supplied SVG (1352×768 original). Keep it local-only / ignored if redistribution rights are not confirmed, and provide intentional visual fallback for a fresh clone. Avoid broken URLs, including in Next production builds.
- Keep the original SVG sources as design evidence, not as the page UI. Compare screenshot quality at 1440 and 1920.
- Inspect current Gitignore policy before changing it; don't ignore necessary implementation code or docs.

## F. QA
- Browser test 320, 375, 390, 744, 768, 1024, 1280, 1440, 1920px, including a short viewport.
- Measure actual section bounding rectangles, gutter agreement with Pricing, image aspect ratio, question alignment, panel spacing, responsive stacking, empty answers states, no clipped text or horizontal overflow.
- Verify the section does not disturb Metrics pinned background, Pricing, earlier FAQ, Header or Footer. On actual interactive items (if any), test keyboard and focus; otherwise explicitly report NO INTERACTIVE CONTROLS rather than a keyboard PASS.
- Capture reference comparison screenshots wherever possible and report unavailable checks as NOT RUN.
- Run `npm run lint`, `npm run typecheck`, `npm run build`.
- Update `docs/ARCHITECTURE.md`, `docs/ASSET_MANIFEST.md`, `docs/RESPONSIVE_QA.md`, `docs/DECISIONS_AND_OPEN_ITEMS.md`.

## G. Delivery and constraints
- Report archive location/extraction/hash verification, actual assets used, changed files, design measurements, QA results, unresolved answers/rights/copy, fallback behavior, and recommendation for checkpoint readiness.
- Do **not** commit, push, merge, deploy, rewrite history, add unrelated sections or implement Footer.

**Proceed with this scope now.**
