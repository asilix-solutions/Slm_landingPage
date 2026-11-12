# Amanix — copy/paste prompts for Claude Code Desktop (local repository)

**IMPORTANT:** Select the specified model using `/model` before each prompt. Use Code → Local and open `D:\amanix-landing`. Keep each task within the repository. You can give Claude access to existing manual asset files only, NOT Figma MCP. Model availability depends on your subscription. The prompts are ordered; don't run Step 2 before Step 1 passes.

## PROMPT 01 — Bootstrap + engineering foundation
**Model: Opus 5.5 | Mode: Code → Local | Permission: normal/manual (not bypass permissions)**

```text
Act as Principal Frontend Architect + Senior Next.js/React/TypeScript Engineer for Amanix. Work in the currently open LOCAL Git repository only.

Read CLAUDE.md, AGENTS.md (if any), .claude/rules/, docs/HERO_SPEC.md, docs/DESIGN_HANDOFF.md, and docs/ACCEPTANCE_CRITERIA.md. Never call or configure Figma MCP. The approved design handoff is local under design-reference/ and will be supplemented manually. Use Sonnet later for implementation; this task is initial architecture/foundation.

First inspect the current git branch, status, files, package.json, lockfile, node/npm versions and Next.js-generated agent docs. Do not re-clone, reset, delete existing handoff files, or overwrite anything blindly. If no Next.js project exists and create-next-app conflicts with CLAUDE.md, preserve and move conflicting instructions temporarily, scaffold the existing repository safely, and restore/merge CLAUDE.md while retaining official AGENTS.md guidance. Use Next.js stable App Router + TypeScript strict + Tailwind CSS + ESLint + npm. Avoid optional dependencies unless justified.

Do the following in one controlled FOUNDATION slice:
1. Establish a clean working Next.js app in this existing repository (or retain the correct scaffold if it already exists).
2. Implement `<html lang="ar" dir="rtl">`, minimal global layout, correctly scoped Noto Sans Arabic body font and IBM Plex Sans Arabic display font via next/font; use fallbacks and no unlicensed font binaries. No unnecessary UI framework.
3. Set up a minimal maintainable directories/components convention based on the actual project, not speculative layers; accessible semantic shell and baseline metadata. Keep the landing body intentionally skeletal for now—NO full-page design generation, NO fake form backend.
4. Inventory provided images, standalone SVGs, responsive reference screens, remaining missing sources. Document which are visual references versus usable production assets; never embed the full-page SVG screenshot.
5. Add/check the smallest set of scripts needed for lint, type-check, build and relevant basic tests. Run npm run lint, npx tsc --noEmit, npm run build (or state why any command couldn't run). Do NOT claim visual or Lighthouse PASS without actual validation.
6. Record the architectural choices, missing assets/integrations and the exact next Hero implementation scope in docs. Do not rewrite approved marketing content or invent compliance/pricing claims.

You may modify local project files for this FOUNDATION slice. Do not git push, open/merge PRs, deploy or commit without explicit authorization. At the end, provide: branch/status, changed files, chosen architecture (short), PASS/FAIL/NOT RUN checks, blockers, and precisely what I need to supply for Hero. STOP at foundation; do not implement Hero yet.
```

## PROMPT 02 — Header + Hero implementation
**Model: Sonnet 5.5 | Mode: Code → Local | Run only after foundation succeeds**

```text
Implement ONLY the approved responsive Header and Hero for the Amanix Landing Page in this existing Next.js repository. Read CLAUDE.md, .claude/rules/typography.md, .claude/rules/hero-motion.md, docs/HERO_SPEC.md, docs/DESIGN_HANDOFF.md and current code. No Figma MCP; use design-reference/screens/ snapshots and separate originals in design-reference/assets/. Preserve all earlier foundation work.

Fidelity: reproduce the approved composition, spacing, typography, colors, image crops, content and navigation behavior from the 390/744/1024/1440 designs. Use Noto Sans Arabic for everything except the very large display Hero heading which uses IBM Plex Sans Arabic. Real semantic DOM, no whole-page SVG insertion, no screenshot-based layout. Keep responsive layout fluid and accessible in RTL. Compare reference order of overlay cards and text at small widths.

Hero asset mapping: photograph `Fire Safety Office Professional 1.svg`, floating upper-left matching-candidates card `Main - MatchedTalentWidget.svg`, floating lower-right contractor card `Outer Card Shell.svg`; see annotated screenshot `design-reference/notes/hero-cards-highlight.png`. Use production-appropriate versions of the supplied assets without changing their visual identity; if superior originals aren't available, document how the assets were optimized and why. Make sure cards are not duplicated inside image itself.

Motion: ONLY two overlay UI cards, subtle CSS transforms—A 0 to -8px, 7s ease-in-out alternate infinite; B 0 to +6px, 8.5s ease-in-out alternate infinite, delay .8s. Keep photo stationary; position via outer wrappers, animate only inner wrappers. No external animation library or bounce/pulse/parallax. Disable continuous and entry movement under prefers-reduced-motion: reduce.

If Hero includes a lead form, build accessible client UI / validation ONLY when source copy and expected fields are documented. Never report successful registration or send data to an unknown endpoint. If essential information is missing, implement only verified parts and state blockers rather than inventing details.

Run lint/typecheck/build and compare actual rendered screenshots at 390/744/1024/1440 (and 320/375/768/1280/1920 for reflow) if browser tooling is available. Record NOT RUN when unavailable. Return changed files, screenshot deviations, keyboard/reduced-motion outcomes and exact next section. No push, merge or deploy.
```

## PROMPT 03 — Reusable section-by-section implementation template
**Model: Sonnet 5.5 | Mode: Code → Local**

```text
Implement ONLY the next approved section: [SECTION NAME]. Existing work is the baseline; do not rebuild it. Read CLAUDE.md and the relevant docs plus the manual design snapshots at 390/744/1024/1440 and original assets for this section. No Figma MCP.

Before coding, identify the exact section boundaries, responsive behavior, copy, assets, interactions, design tokens and any missing requirement. Then implement clean semantic RTL Next.js/Tailwind, Server Component by default, and a small Client Component only if interactivity truly requires it. Reuse existing components and tokens; avoid unnecessary dependencies. Preserve precise design and original imagery; never paste a whole reference screenshot into the UI.

Verify lint/typecheck/build, responsive layout/no horizontal overflow, keyboard/reduced motion as applicable, reference comparisons if tooling exists; mark unrun checks NOT RUN. Update the QA/decision logs and report exactly changed files, outstanding issues, and the next section. Do not touch other sections or push/merge/deploy.
```

## PROMPT 04 — Final architecture/performance/accessibility audit
**Model: Opus 5.5 | Mode: Code → Local | Only after all sections and approved integrations are implemented**

```text
Act as independent Principal Frontend Architect, Performance Engineer, Accessibility Auditor and Security Reviewer. Audit the existing Amanix implementation against CLAUDE.md, approved responsive visual references, actual source assets and documented business contracts. Inspect code and tests, but do NOT perform broad rewrites initially.

Evaluate architecture, unnecessary client bundles, fonts, images/LCP, CLS, motion and reduced-motion, semantic HTML and RTL, WCAG 2.2 AA issues, forms/integration claims, SEO metadata, mobile UX, caching assumptions and regressions across 320/375/390/744/768/1024/1280/1440/1920. Run actual lint, typecheck, production build, tests and Lighthouse/visual checks only if tools/environment allow; never invent results. Group issues by P0/P1/P2 with exact file/line evidence and minimal recommended fixes. Stop with a review report and recommended repair plan; do not rewrite the full app or deploy without approval.
```
