# AMANIX — Phase 03C: Replace Carousel Image Placeholders

**Model: Claude Sonnet 5.5 | Thinking: Medium | Code → Local**

Continue the existing local Amanix Next.js project. The user has now supplied six source SVG exports for the “حلول سلم تدعمك” carousel and explicitly permits **reusing the same images across existing cards** when needed. The six files represent only **four unique visuals** (3=4 and 5=6 exact duplicates); four optimized production WebP versions have been prepared.

**First:** Read `CLAUDE.md`, `AGENTS.md`, `docs/PHASE03C_IMAGE_HANDOFF_AR.md`, `docs/PHASE03C_IMAGE_ASSET_MANIFEST.json`, current `src/content/solutions.ts`, the SolutionsCarousel/SolutionCard components and CSS, plus current decisions/QA docs. Inspect the actual Git branch, HEAD and working-tree status. Expected context from user: `feat/trust-strip`, most recent local checkpoint `46493fd`, but verify rather than assuming. Preserve all prior work, especially the RTL native carousel, scroll snap, progress, controls, Hero and Header. No Figma MCP.

**Task:**
1. Replace the neutral grey placeholders in the EXISTING Solutions cards with the supplied production images from `/public/images/solutions-carousel/`.
2. Proposed initial visual order in RTL: `01-field-hydrant-worker.webp`, `02-fire-extinguisher-presentation.webp`, `03-abc-extinguisher-sign.webp`; `05-fire-extinguisher-gauge.webp` is a reusable fourth visual if an existing approved slot needs one. You may reuse images across existing slots as explicitly authorized.
3. Preserve the actual approved card titles/data. DO NOT invent a fourth feature/title, duplicate card content just to force scrolling, add unsupported claims, or infer image–caption equivalence. Record that the mapping is provisional. A fourth card requires real approved content if absent from `solutions.ts`.
4. Preserve the source photograph compositions and reddish gradients that are already baked into each supplied SVG/WebP. Do not add a duplicate red overlay. Render at the approved card aspect ratio 405:273, with proper responsive sizing and no distortion or layout shift.
5. Use `next/image` when appropriate, and keep correct `sizes` and intrinsic dimensions; do not eagerly load all below-the-fold cards or add an image-processing dependency. Ensure missing/unavailable assets fail visibly in QA rather than being silently represented as complete.
6. Preserve the existing carousel design and behavior; do not rework its architecture or invent content to make a partial fourth card. At desktop widths where only three cards exist, retain the documented interim viewport behavior rather than fake extra data.
7. Test in a real browser at 390, 744, 1024, 1440 and 1920px. Verify each of the three cards actually shows its intended asset, images are crisp, colors match SVG reference, keyboard and RTL scrolling still work, progress reflects the true range, and no document overflow. Re-test hover/controls and reduced-motion behavior when possible; mark unrun checks NOT RUN.
8. Run `npm run lint`, `npm run typecheck` and `npm run build`. Update decision/QA docs with exact mapping, reused images, known mismatches and remaining title/claim approvals.

**Deliver:** changed files, exact image-to-card mapping, measured rendered results, test outcomes, and outstanding blockers. **Do not commit, push, merge, deploy, or start another section.**
