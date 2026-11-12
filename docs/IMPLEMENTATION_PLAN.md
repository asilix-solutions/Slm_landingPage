# Amanix — Implementation plan with gates (V3)

## Slice 01 — FOUNDATION, execute immediately (Opus 5.5)
Inspect current repo / initial scaffold. Safely initialize Next.js if still missing, preserve agent docs, set RTL root, Next/font Noto Sans Arabic + IBM Plex Sans Arabic display, minimal folder conventions and SEO metadata, first asset inventory, script baselines. Do not build Hero or entire landing page yet. Run lint/typecheck/build. Record risks. **Prompt 01 in docs/EXECUTION_PROMPTS.md**.

## Slice 02 — Header + Hero (Sonnet 5.5)
Reconstruct approved responsive Header/Hero from local snapshots and originals. Photo + two distinct overlay UI cards with subtle CSS float, reduced-motion behavior, fonts and semantic copy. Form must not pretend backend submission. Full viewport visual QA where tool permits. **Prompt 02**.

## Slices 03 onward — Section-by-section (Sonnet 5.5)
Section order inferred from prior Figma audit (validate with current desktop handoff): trust/metrics, workflow, features, immersive showcase, storytelling, pricing, FAQ, final CTA, and footer. Re-group only when shared content/layout warrants, not as a giant generation. Each slice has local design evidence, exact assets, standalone implementation, lint/typecheck/build and responsive keyboard QA. **Prompt 03** (set exact section title).

## Integrations gate (Sonnet 5.5 implementation; Opus 5.5 design if complex)
Approved lead form API only after endpoint/method/schema/auth/error/privacy contract. Price toggle uses approved source data and terms only. No imaginary activation or review claims.

## Final QA and merge-readiness (Opus 5.5)
Verify production build, lint, TS, core accessibility, real asset sizes, responsive screenshot comparisons, motion and CWV targets where measurable. Report blockers, P0/P1/P2. Do not push/merge/deploy without authorization. **Prompt 04**.

## Engineering North Star
A single fluent responsive Next.js codebase faithfully reflecting original assets. Simple component boundaries and clean semantics outperform speculative modularity and dependencies.
