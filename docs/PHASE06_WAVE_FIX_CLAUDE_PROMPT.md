# AMANIX — Phase 06: Pricing Decorative Wave Resolution/Fidelity Fix

**Model: Claude Sonnet 5.5 — Thinking High**

Repository: `D:\amanix-landing`, local Claude Code Desktop.

## Mission

The current Pricing background looks low-resolution. The original files labelled SVG embed a 1440×870 PNG, which cannot be made truly vector by changing its extension or converting it to WebP. This package provides a newly reconstructed true-vector SVG and a 2x WebP alternative. Fix image quality **without breaking the approved pricing composition or layout**.

## 1 — Preflight

- Verify current Git branch, HEAD and working-tree status; expected branch `feat/pricing-plans` but verify rather than assume.
- Read `CLAUDE.md`, `AGENTS.md`, relevant rules, `src/components/sections/pricing/pricing.css`, `PricingPlans.tsx`, `src/content/pricing.ts`, existing QA/architecture decisions.
- Protect all uncommitted Pricing work. Do not reset or change branches.

## 2 — Package processing

- Find `Amanix_Phase06_Wave_Quality_Fix_2026-11-14.zip` under the Windows user's Downloads folder.
- Validate ZIP, inspect internal paths and file hashes, and extract to an OUTSIDE-REPO staging area.
- Safely merge `public/`, `design-reference/` and `docs/` into the project. Never silently overwrite different files.
- Read `README_START_HERE_AR.md` and `docs/PHASE06_WAVE_QUALITY_SPEC.md`.
- Inspect all alternatives. Confirm `pricing-wave-true-vector.svg` has actual paths/gradients and **no embedded PNG/JPEG/WebP `<image>` tag**.

## 3 — Targeted implementation

- First compare the newly reconstructed SVG against the supplied Figma/reference design. It is visually close but is a reconstruction, NOT a perfect official source.
- If the design differences are acceptable, use `public/images/pricing/pricing-wave-true-vector.svg` as the **one** decorative image source. Direct SVG is usually best for scalable crisp edges; converting it to WebP is not necessarily better.
- If its appearance differs materially, test the 2880×1512 `pricing-wave-vector-2x.webp` version. If neither matches accurately, retain the previous behavior and report the need for a proper original Figma path-vector export instead of secretly substituting a different shape.
- Keep section, heading, 4 cards, prices, text, paddings and grid EXACTLY as before. Background reference box ≈1440×756 and top ≈93px at 1440 wide. Do not enlarge the wave aggressively on 1920 screens or introduce CSS blur/fuzzy masks to hide poor resolution.
- Avoid `unoptimized` being used as a blanket quality solution; choose rendering based on actual asset and how it is displayed.
- Use `pointer-events:none`, `aria-hidden` and preserve section clipping. No extra overlays or CSS gradients replacing the art.
- Respect the local-only media-rights policy and ensure fresh clones do not refer to git-ignored assets with broken URLs.

## 4 — Visual QA

- Test actual browser rendering at 390, 744, 1024, 1440 and 1920 widths, including a DPR 2 test if possible.
- Capture 1440 and 1920 full section screenshots or explain exact limitations. Compare the new wave with source at equivalent dimensions, noting any curve/color differences.
- Verify cards remain legible, wave edges remain crisp, wave positioning and cropping stay appropriate, no overlap, no horizontal document overflow or CLS.
- Run `npm run lint`, `npm run typecheck`, `npm run build` and preserve passing results.
- Update decisions, asset and responsive QA docs with precise changes and open licensing/content issues.

## 5 — Delivery

Return: selected asset and why, measured sizes/weights, any deviations vs Figma, changed files, QA outcomes and blockers. Do not commit, push, merge, deploy or implement later sections.
