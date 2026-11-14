# AMANIX — Phase 05 Claude Code Prompts

## Preflight / Close Phase 04
**Model: Claude Sonnet 5.5 — Thinking Medium**

```text
Continue locally in D:\amanix-landing. Read CLAUDE.md, AGENTS.md, docs/DECISIONS_AND_OPEN_ITEMS.md, docs/RESPONSIVE_QA.md and all changed files for Phase 04. Verify current branch feat/project-control-scrollytelling, last committed checkpoint 082da12, git status and actual source. The user explicitly approved eight repeats of the ENTIRE first panel (image, caption and CTA), NOT image only. Confirm this is implemented, no broken images in a fresh clone, and preserve rights restrictions. Investigate/fix the observed item 8 active-state failure at 390px with geometry-based logic, not a document-bottom hardcode. Verify active item both ways and sticky release at 390,744,1024,1440. Run lint,typecheck,build; update QA. If safe and all checked, create a LOCAL checkpoint commit `feat: complete shared project-control story panels` (do not include unlicensed photo/source). Do not push, merge, deploy or touch other sections. Return SHA and blockers, clearly state that this is not production approval.
```

## Phase 05A — Implement the Metrics band ONLY
**Model: Claude Sonnet 5.5 — Thinking Medium**

```text
Act as Senior Next.js Engineer, Arabic RTL UI Specialist, Accessibility/Performance Reviewer. Work in Claude Code Desktop Local with D:\amanix-landing. First verify git branch and clean tree after Phase 04 checkpoint; read CLAUDE.md, AGENTS.md, docs/PHASE05_DESIGN_SPEC.md, docs/PHASE05_ASSET_MANIFEST.json, architecture and QA logs, then inspect existing container rules and components. Do not use Figma MCP.

Implement ONLY the dark metrics/assurance band directly after Project Control and BEFORE FAQ. Use the supplied 1440x474 design reference and separate original `design-reference/assets/phase-05/metrics/metrics-background-source.svg` plus local optimized WebP. Do NOT ship the full-page SVG or rasterize text. The background source already contains a 62% black overlay; do not double darken it. Use a responsibly positioned cover background, and full-width backdrop with the common 1280px RTL content grid. Visual right-to-left order: 8, 100%, SBC 801, ZATCA. Content is provisional and unverified; do not assert factual certifications or verified compliance. Source all copy from docs/PHASE05_DESIGN_SPEC.md and record its unapproved state. If rights are unverified, use a local-only production background excluded from Git with a visually coherent CSS fallback for clean clones. Never leave a broken URL. Avoid added animation unless justified.

Match desktop spacing/hierarchy/contrast as closely as source permits; use responsive 2-column or stacked grouping on narrow screens, avoid fixed-height clipping. Ensure header stays white throughout; do not interfere with HeroBoundary or previous sections. Test at 320,390,744,1024,1440,1920 and short-height desktop, no horizontal overflow, no CLS from backgrounds, readable Arabic. Run npm run lint, npm run typecheck, npm run build. Update project QA/decision docs with exact tested evidence and blockers. Do not implement FAQ yet. Do not commit/push/merge/deploy. Report changed files and whether the slice is checkpoint-ready.
```

## Phase 05B — Implement the FAQ ONLY (after Phase 05A acceptance)
**Model: Claude Sonnet 5.5 — Thinking Medium**

```text
Continue on the current approved feature branch. Verify latest commit and clean baseline, read CLAUDE.md, AGENTS.md, docs/PHASE05_DESIGN_SPEC.md, docs/PHASE05_ASSET_MANIFEST.json and existing architecture. Implement only FAQ immediately after Metrics. Match supplied 1440x580 reference: 1280px content width, light #FEFEFE field, three #F1F1F1 question rows around 76px high, 16px gap and 12px radii, matching typography, RTL and container alignment. Use real semantic DOM, never insert faq-layout-reference.svg as the section. Preserve all three questions as provisional copy, and document mismatch between `أمانكس` vs `سلم SLM`.

There are no approved answers. Do NOT invent answers, compliance assurances or security statements. In this slice use non-interactive informational question rows with no false interactive behavior; if the design's '+' icons suggest expandability, explicitly record this as a pending fidelity gap rather than making fake accordions. Provide a small data-based architecture so that once answers are supplied the rows can be upgraded to an accessible native details/disclosure component, including keyboard, focus, aria and expanded state tests. Never create a fake working accordion with placeholder answers.

Validate at 320,390,744,1024,1280,1440,1920: no horizontal overflow, proper full-width background, shared content grid alignment, text wraps, focus order. Run lint,typecheck,build, record NOT RUN where appropriate. Do not modify other sections, commit, push, merge or deploy. Return gaps and exact approved answers required.
```
