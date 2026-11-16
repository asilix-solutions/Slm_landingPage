# AMANIX — Phase 07C | Targeted dashboard image centering correction

## Exact source evidence
- User-supplied new SVG: `Screenshot 2026-10-29 105409 1(1).svg`; intrinsic box `369 × 209`, viewBox `0 0 369 209`.
- SHA256: `b48118ba78c69ebe738170ab260d7d297ab63dea55bd824c91b856f3cc42d1d5`. This matches byte-for-byte the `dashboard-frame-reference-369x209.svg` shipped in the original Phase 07C handoff ZIP, so DO NOT treat it as new artwork or replace production image unless necessary.
- The SVG embeds a `1352 × 768` PNG screenshot. The existing production `dashboard-screenshot-lossless.webp` was derived from these original pixels. Keep it if it already matches and is loaded correctly.
- Reference browser screenshot: `design-reference/notes/phase-07c/qna/centering-fix/qna-image-centering-figma-prototype.png` (design reference ONLY, do not ship).

## Design geometry at 1440px reference
- Outer light-gray media shell: approximately `406 × 325` px, rounded corners.
- Dashboard screenshot: approximately `369 × 209` px, aspect ratio `369 / 209` (`1.76555`).
- Centered offsets: `(406 − 369)/2 = 18.5px` horizontally and `(325 − 209)/2 = 58px` vertically.
- Center screenshot in both axes, including with the four corner diamonds visible at the shell's corners. Do not center it *relative to a diamond row* or make diamonds take space in normal layout.
- Image must be fully visible (`object-fit: contain` or plain width/auto height), never `cover`, no arbitrary transform or negative margins. Preserve original intrinsic aspect and avoid scaling blur.
- On narrow screens, constrain screenshot to available inner space and preserve proportional margins. CSS grid centering or flex centering is preferred.

## Scope/quality
- Target only `src/components/sections/qna/QnaCenter.tsx` and `qna.css`, plus directly related QA docs if needed. Existing file names may vary; inspect actual files.
- Do not change the overall Q&A section dimensions, heading, list, answers, copy, typography, or FAQ/Pricing.
- Ensure the screenshot is loaded on the current local machine and its visibility/fallback are not confused with alignment.
- Test computed bounding boxes (parent and image) and compare left/right/top/bottom margins at 1440. At reference, margin errors should be ≤2px subject to browser rounding.
- Test 390, 744, 1024, 1440, 1920 widths and optional short-height; no clipping, no document horizontal overflow, diamonds remain pinned to frame.
- Run npm run lint/typecheck/build. Don't claim screenshots unless actually captured.
- No commit/push/merge/deploy.
