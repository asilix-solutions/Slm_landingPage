# AMANIX — Phase 07C: Q&A Dashboard Image Alignment Fix

Model: Claude Sonnet 5.5 | Thinking: Medium
Repository: D:\amanix-landing

## Mission
Correct ONLY the dashboard screenshot position inside the gray media frame of the Q&A Center section. The owner supplied an updated Figma prototype screenshot and the same original 369×209 SVG to demonstrate the intended appearance.

## Package handling
Locate `Amanix_Phase07C_QnA_Image_Centering_Fix_2026-11-14.zip` in the Windows Downloads folder. Validate archive integrity and safe paths, extract into temporary staging outside the repository, and read `docs/PHASE07C_IMAGE_CENTERING_SPEC.md`. Compare the supplied source SVG to the existing `dashboard-frame-reference-369x209.svg` using SHA256 before copying. If identical, skip overwriting. Merge only the new reference screenshot and spec as needed, without clobbering existing docs.

## Preflight
- Verify current branch, HEAD, working tree and applicable `CLAUDE.md`/`AGENTS.md`.
- Inspect `QnaCenter.tsx`, `qna.css`, actual media frame DOM and existing production dashboard WebP.
- Preserve unrelated changes and all previous section work.

## Fix
- At the 1440px reference, the gray frame is approximately 406×325px; the centered screenshot is approximately 369×209px. Target 18.5px left/right and 58px top/bottom margins, allowing browser rounding.
- Center the screenshot precisely on **both axes relative to the frame**, not to decorative diamonds or any overlaid elements.
- Prefer a full-frame inner CSS grid (`display:grid; place-items:center`) or equivalently reliable flex centering. Keep the four diamonds absolutely anchored to the four frame corners and independent of image layout.
- Keep intrinsic aspect ratio 369:209 and show the screenshot fully; `object-fit:contain` rather than `cover`, no transforms or unnecessary crop.
- On mobile shrink only as required by actual frame inner space and maintain centering.
- Do not replace the approved WebP if it already uses the same source image; the attached SVG is a reference, not necessarily a new production asset.
- If media is missing because of the project's local-only rights policy, preserve an intentional fallback and do not fake successful image rendering.

## Verify
- Compare screenshot and frame rectangles using `getBoundingClientRect()` at 390, 744, 1024, 1440 and 1920px. Log left-right and top-bottom offsets; on the 1440px desktop reference, symmetry errors should be <=2px.
- Verify the four diamonds, correct RTL positioning, no clipping, no image stretching, no horizontal page overflow, no regression in Q&A text or preceding sections.
- Run `npm run lint`, `npm run typecheck` and `npm run build`.
- Update QA/decision documents with actual evidence.

Do not commit, push, merge, deploy or implement other sections. Report the root cause, exact changes, measurements, screenshots if possible, and any remaining blockers.

Implement this targeted centering correction now.
