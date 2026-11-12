# AMANIX — Project Instructions for Claude Code (V3, 2026-11-12)

You are the lead engineer for the **Amanix Arabic RTL marketing landing page**, working in the GitHub repository `asilix-solutions/Slm_landingPage` (local project `D:\amanix-landing`). Deliver production-quality Next.js code faithful to the supplied responsive designs. This is NOT a screenshot-to-page mockup, a dashboard, or a backend implementation.

## Hierarchy of truth
1. Explicit user decisions in the latest conversation/task.
2. Latest approved **manual** design handoff: `design-reference/screens/`, `design-reference/assets/`, `design-reference/design-system/`, and `docs/DESIGN_HANDOFF.md` / `docs/HERO_SPEC.md`.
3. Real repository source, installed package versions, `AGENTS.md`, `node_modules/next/dist/docs/` and observed API contracts.
4. These project instructions and `.claude/rules/*.md`.
Never invent missing design details, marketing copy, prices, compliance approvals, real ratings, or registration APIs. Maintain a short issues/assumptions log when needed. If a design handoff contradicts an older Figma frame, use the latest approved local handoff; older Figma is historical context only.

## Collaboration and scope
- Work in **Claude Code Desktop → Code → Local**, using the cloned repository. Do not use Claude Cowork as the main code execution environment.
- **No Figma MCP, Figma plugin, Figma website automation, or Figma API calls.** The user supplies all design references and assets manually.
- Before editing: read the relevant project docs and any `AGENTS.md`, inspect `git status --short --branch`, versions, current files and existing conventions. NEVER wipe/re-clone/reset existing work to create the scaffold.
- Use one logical implementation slice at a time, starting with foundation, then Header/Hero, then subsequent sections. Ask for a missing critical asset only when its absence actually blocks the slice; otherwise proceed with verified foundation tasks, report the blocker, and stop before inventing substitutes.
- Do not push, merge, deploy, install unnecessary dependencies, or introduce paid services without explicit authorization. Never assume a green CI/build or fabricated performance score.
- At the end of each task: summarize changed files, decisions, key design deviations, checks as PASS/FAIL/NOT RUN and the next recommended slice. No lengthy unbounded reports.

## Framework & architecture
- **Next.js stable App Router + TypeScript strict + Tailwind CSS + npm** (respect the scaffold already installed; do not churn dependencies). ESLint and TypeScript checks must pass. Read the installed Next.js docs for version-specific APIs.
- Prefer static/Server Components for page layout and content. Use a *minimal* `use client` boundary for actual state: lead form, pricing toggle, menu, FAQ if needed. Never make the entire landing page a Client Component just because one widget is interactive.
- Suggested paths (adapt to actual scaffold): `src/app/`, `src/components/layout/`, `src/components/sections/`, `src/components/ui/` (only true shared UI), `src/content/`, `src/lib/`, `src/styles/` if needed. No unnecessary state manager, design system, motion library or CSS-in-JS.
- Semantic HTML, one real H1, `<html lang="ar" dir="rtl">`, accessible controls, visible focus, meaningful labels, sensible landmark/heading hierarchy, and mixed Arabic/English numeral direction handling.
- Prefer CSS Grid/Flex, fluid sizing (`clamp` where useful), proper breakpoints and logical properties. Do NOT reproduce long screenshot SVGs as the webpage or create separate mobile/tablet/desktop page clones.

## Typography — approved, mandatory
- **Noto Sans Arabic** is the default for all UI/body content, navigation, buttons, labels, cards, pricing, FAQ and ordinary section headings.
- **IBM Plex Sans Arabic** is reserved for **very large display headings**, especially the primary Hero headline (and only other headings explicitly designated display size in the approved design). Do not switch every `<h2>` automatically to IBM Plex.
- Prefer `next/font/google` when the fonts are actually available in the installed framework, or `next/font/local` if the user supplies appropriately licensed font files. Specify only actually used weights, preload strategically, use CSS variables `--font-noto-arabic`, `--font-ibm-plex-arabic`, and define semantic `font-body`/`font-display` styling.
- Match design font weight, line height, wraps and Arabic letter shaping at the 390/744/1024/1440 px references. Never convert page text to image paths or create fake text with CSS.

## Design assets and responsiveness
- Reference full-page SVGs: `Desktop 1441.svg` (1440×12334), `iPad Pro 1025.svg` (1024×9406), `iPad mini 8.3 - 3.svg` (744×7794), `iPhone 13 & 14 - 3.svg` (390×8147). Treat them as **visual snapshots** only; embedded images and outlined glyphs are not editable DOM or automatically suitable for production.
- Separate original assets are in `design-reference/assets/` (initially under `inbox/`, pending approval). Prefer these over SVG screenshots. Inspect actual asset role, dimensions, embedded raster content, crop and permissions before using. Reuse exact supplied imagery; do not manufacture substitute brand art.
- Reference widths: 390, 744, 1024, 1440 px. Additional layout QA: 320, 375, 768, 1280, 1920 px. Aim for **one fluid responsive codebase**, no horizontal overflow, no collisions, no clipped Arabic copy.
- Asset file sizes matter: never put large reference-screen SVGs into `public/`; use compressed raster variants / `next/image` for genuine photos when appropriate. Keep LCP media early and properly sized; reserve image geometry to prevent CLS. Do not apply `loading="lazy"` to the actual LCP Hero image.

## Hero motion — explicit decision
The user explicitly selected only two floating overlay UI cards in the photo-based Hero:
1. Upper-left: `Main - MatchedTalentWidget.svg` (the candidate asset representing the matching-candidates card).
2. Lower-right: `Outer Card Shell.svg` (the candidate asset representing the contractor/profile card).
The related original photo is `Fire Safety Office Professional 1.svg` (verify whether optimized raster original is available).
- Keep the photograph stable. Animate only the two overlay card **inner wrappers**; keep positioning wrappers static (avoid transform conflicts with centering/placement). No bounce, scale pulsing, strong parallax, scroll-jacking or heavy motion library.
- Card A: `translateY(0)` to `translateY(-8px)`, `7s ease-in-out infinite alternate`.
- Card B: `translateY(0)` to `translateY(6px)`, `8.5s ease-in-out infinite alternate`, offset/delay `0.8s` (respect each card's original position).
- Optional **one-time** fade-in/12px entry only if composition and perceived performance benefit; not a requirement. No rotation by default. Keep transforms GPU-friendly, and explicitly disable animation and transitions under `@media (prefers-reduced-motion: reduce)`.
- IMPORTANT: Before rendering the two card assets above a photo, ensure that photo **does not already contain them**, or duplicated UI will result. Preserve readable proportions, clean contrast, and mobile composition from the supplied screen references. See `docs/HERO_SPEC.md` and `.claude/rules/hero-motion.md`.

## Business behavior and risk
- A working visual form ≠ backend submission. Without verified API contract, provide accessible form UI/validation but **never claim activation, successful sending, or account creation**. Record integration as blocked. No fabricated trial, ZATCA/SBC certifications, metrics, customer ratings or prices.
- Do not introduce analytics, cookies, tracking, testimonials, claims or third-party embeds without approval. Never commit `.env`, secrets or private records; avoid logging customer contact data.
- Respect all approved copy. If SVG texts are outlined/unreadable, ask for the original text rather than guessing or using OCR as a substitute.

## Tests and acceptance
After each *implementing* slice, run what exists: `npm run lint`, `npx tsc --noEmit`, `npm run build` and relevant tests. For responsive sections, review render at references 390/744/1024/1440 and important transitions (320/375/768/1280/1920) when screenshot/browser tooling is available. Record **NOT RUN** rather than asserting unverified PASS. Keyboard, RTL, reduced-motion, asset geometry and layout overflow are mandatory. Record deviations in `docs/RESPONSIVE_QA.md` and blockers in `docs/DECISIONS_AND_OPEN_ITEMS.md`.
Targets, not promises: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at field p75, mobile Lighthouse performance ≥90 under a documented test context, WCAG 2.2 AA accessibility. Performance lab results are not real-user CWV evidence.

## Model strategy
Use **Opus 5.5** for initial engineering foundation/architecture and difficult multi-file QA; **Sonnet 5.5** for normal section implementation. Check availability with `/model` in Claude Code Desktop. Do not force model IDs in repository config and do not use large multi-agent teams for this landing page. Follow the specific model assigned alongside each task prompt.
