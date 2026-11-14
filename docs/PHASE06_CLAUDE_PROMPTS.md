# Phase 06 — Claude Code prompts

## Prompt A — FAQ checkpoint

Model: Claude Sonnet 5.5 | Thinking Medium

Verify repo `D:\amanix-landing`, branch, HEAD, and dirty state. Review all uncommitted FAQ changes and prior Metrics. Read `CLAUDE.md`, `AGENTS.md`, and existing decision/QA docs. Re-run `npm run lint`, `npm run typecheck`, `npm run build`, and inspect FAQ plus-icon placement at reference sizes. If acceptable, stage only FAQ implementation and directly relevant QA/docs, keep unapproved FAQ answers and branding conflict documented, and create a LOCAL checkpoint commit `feat: implement responsive faq section`. No push, merge, deploy or unrelated changes. Report SHA, files, status and blockers. If preflight detects unexpected changes, do not destructively alter them.

## Prompt B — Pricing asset integration + implementation

Model: Claude Sonnet 5.5 | Thinking High

You own the entire local workflow. Inspect `D:\amanix-landing`, branch/HEAD/worktree, current `CLAUDE.md`, `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/DECISIONS_AND_OPEN_ITEMS.md`, `docs/RESPONSIVE_QA.md` and actual CSS/page components. Verify FAQ local checkpoint is complete. Prefer a dedicated local `feat/pricing-plans` branch from the verified current HEAD when the worktree is clean; do not branch from outdated main.

Find `Amanix_Phase06_Pricing_Handoff_2026-11-14.zip` inside the current Windows user's Downloads folder. Test archive integrity and reject unsafe or traversal entries. Extract into a temporary folder outside the repo. Inspect files/hashes; merge only `design-reference/`, `public/`, `docs/` into the repo with no silent overwrite. Read `docs/PHASE06_DESIGN_SPEC.md` and `docs/PHASE06_ASSET_MANIFEST.json` completely.

Implement ONLY Pricing Plans after FAQ. Reference: `design-reference/assets/phase-06/pricing/original-exports/pricing-section-full-1440x931.svg` and Figma screenshot in `design-reference/notes/phase-06/pricing/`. These are design evidence, not rendered page markup. Recreate proper semantic DOM and responsive cards for the four plans, with typed content separated from UI, following the existing project architecture. Do not use Figma MCP.

**Wave fidelity:** use only one production wave `public/images/pricing/pricing-wave.svg` and keep it as a decorative background. The original `Background-updated 1.svg` and `Vector (2).svg` embed the identical 1440×870 PNG—these are NOT true infinitely scalable vector artwork. Do not claim they're pure paths or promise unlimited quality at 1920 or high DPI. Position and size the wave based on 1440×931 reference; do not stretch to viewport edge if that destroys sharpness. No re-rasterization, arbitrary gradients, or stock replacements without explicit need. Background must not obscure text, prevent focus, or cause layout shift.

Preserve RTL card ordering (rightmost trial → basic → professional → enterprise), professional «شائع» badge, accurate Arabic fonts, plan prices and comparison label from visible source. Transcribe marketing/business content only when legible, recording unconfirmed details. Do not invent pricing limits, registration URLs, checkout behavior, claims or interactions. If CTA links are unknown, use non-interactive text presentation and document the blocker rather than dummy clickable buttons.

Test 320/375/390/744/768/1024/1280/1440/1920 and short-height desktop, including screenshots against the Figma reference at 1440. Verify shared content grid, card heights and whitespace, wave quality and clipping, tablet/mobile stacking, no document overflow, high DPI if possible, keyboard accessibility, and unchanged Metrics/FAQ. Run `npm run lint`, `npm run typecheck`, `npm run build`. Update QA/decisions/asset docs and identify actual PASS, FAIL, NOT RUN. Do not commit Pricing, push, merge, deploy, or start another section. Report precise changed files, implementation status, unresolved links/pricing/rights, and whether a checkpoint is appropriate.
