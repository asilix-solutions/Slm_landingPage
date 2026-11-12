# Amanix — Claude Code prompts for Phase 03

**Mode:** Claude Desktop → Code → Local, local repo `D:\amanix-landing`.
**Choose model for each:** **Claude Sonnet 5.5**. Escalate to **Opus 5.5** only for a documented architectural issue or final audit requiring deeper reasoning. Check `/model` for current plan availability.
**Execution:** two separate tasks, not a single entire-page build.

## Preparation — Git (run manually before prompting)

- Confirm current branch/status: `git status --short --branch`.
- The Header+Hero commits currently live on `feat/header-hero`, whereas `main` may still be at foundation. **Do NOT create Phase03 from old main** before Header+Hero is merged. Either (A) merge accepted Header+Hero via PR into main, then create `feat/trust-strip` from latest main; or (B) if you want to continue before merge, branch from the latest `feat/header-hero` and note this is stacked, with later PR targeting its parent branch. Do not reset/rebase existing work automatically.
- Extract the overlay pack into repository root, merging only new files. Verify paths.

## PROMPT 03A — Trust-logo marquee + dark intro integration

**Model: Sonnet 5.5**

```text
AMANIX — Phase 03A / Trust Strip (Model: Sonnet 5.5)

Act as Senior Next.js/TypeScript Engineer, Arabic RTL UX Specialist, Accessibility Engineer and Performance Reviewer. Work in the current LOCAL repository. Read CLAUDE.md, AGENTS.md, docs/PHASE03_START_HERE_AR.md, docs/PHASE03_ASSET_MANIFEST.md, docs/PHASE03_VISUAL_BEHAVIOR_SPEC.md, existing architecture/QA logs and latest relevant source.

PRE-FLIGHT: Confirm branch, clean/dirty Git status, upstream base and latest Hero+Header commits. This task depends on the existing `feat/header-hero` implementation; never build from foundation-only main or silently reset/merge. Do not use Figma MCP.

SCOPE: Implement only the dark Trust Logo Strip immediately after Hero, titled "مصمم لشركات السلامة في السعودية". It is a visual extension of the dark Hero intro; following section is white. Use the screenshots in design-reference/notes/phase-03/ and approved existing responsive reference SVGs. Prefer actual measurements from supplied files. Do not use screenshots as production UI.

ASSET GATE: First inventory design-reference/assets/phase-03/trust-strip/logos/. This pack currently does NOT contain individual certification logos. Do not invent/trace/downloader-source substitute official logos. Do not claim certifications, affiliations, legal approvals, or membership as facts. If approved assets are absent, implement a robust reusable structural component and motion behavior with clearly non-production placeholder data only for LOCAL QA or stop before exposing unverified claims; state exactly what remains blocked. Ask for originals/rights and final captions for production acceptance.

MOTION: Implement a smooth subtle accessible CSS-only horizontal looping marquee with duplicated visual groups for continuity (no heavyweight dependencies or client state). Calibrate duration by actual track length for calm perceived speed; verify no seam jump, glyph distortion or RTL inversion. Duplicates are aria-hidden. Reduced-motion must disable automatic movement and allow non-animated scroll/access. Do not hide meaningful content from screen readers. Prefer no fake links.

HEADER BOUNDARY: Preserve approved 100svh photographic Hero and its scroll behavior. Because the new strip is part of the dark introduction, ensure the Header stays transparent over it and transitions white only near its END, before the white Safety Needs section. Inspect the current HeroBoundary architecture first; move or restructure the boundary minimally and test up/down navigation with short/tall viewports. Do not restore a 20px fixed scroll threshold.

QA: Execute lint, typecheck, build, and actual browser checks at 390,744,1024,1440 plus 320,375,768,1280,1920 where available. Verify RTL, headline visibility, no overlap, marquee continuity and reduced-motion, dark/white header transition. Use PASS/FAIL/NOT RUN truthfully.

DELIVER: Changed files, asset/claim status, motion mechanics, boundary behavior, responsive results, remaining blockers and exact acceptance recommendation. Update docs. Do not commit, push, merge, deploy, or start next section.
```

## PROMPT 03B — Safety Needs section with background mark

**Model: Sonnet 5.5**

```text
AMANIX — Phase 03B / Safety Needs Cards (Model: Sonnet 5.5)

Continue in the LOCAL repository after 03A is reviewed. Read CLAUDE.md, relevant AGENTS.md, docs/PHASE03_VISUAL_BEHAVIOR_SPEC.md, docs/PHASE03_ASSET_MANIFEST.md, QA log, current source and supplied screenshot references.

PRE-FLIGHT: inspect Git status, branch and actual source. Preserve Hero, Header, Trust Strip and dark/white header boundary logic. No Figma MCP. Do not build later sections.

IMPLEMENT ONLY "كل ما تحتاجه شركة السلامة" directly after the dark trust strip. Use semantic RTL Server Components by default, scoped CSS/Tailwind per project conventions, and a data-driven eight-card layout. Desktop reference shows 3+3+2, card 400×339.98px, 16px radius, 32px padding, 1px #E9E9E9 inside border; translate proportions responsively without rigid screenshot positioning. Actual reference is supplied at design-reference/notes/phase-03/. Compare to four existing full-screen local design SVGs when useful.

CRITICAL: Use the ORIGINAL public/images/safety-needs/background-mark.svg. Precisely reproduce its left-side partial crop, vertical position, outline scale and overlap/layering behind the card grid. The large decorative mark is not the foreground Header logo. Maintain proportional size and responsive placement, and don't let it obscure text or create horizontal overflow. Use the provided public/images/safety-needs/icon-document-search.svg only for the card it actually represents; do not duplicate it as every other card icon. Check whether missing icons/copy prevent full fidelity and document them, without drawing invented assets.

Do not invent card copy, compliance assertions, CTA routes or backend functionality. If the final text or icons are missing, implement verified layout/data architecture and flag placeholders clearly as not ready for release. CTA "تعرف أكثر" must not behave like a link if the destination is unconfirmed.

RUN lint, typecheck, build and visually compare 390,744,1024,1440 plus intermediate sizes. Verify keyboard focus and reading order, no overflow, feature grid layering and cropped mark at all widths. Update QA/decision docs. Return changed files, screenshots/differences, blockers and readiness recommendation. No commit, push, merge, deploy or subsequent section.
```
