# Claude Desktop Code — Amanix manual handoff workflow

## Before each session
1. Open Claude Desktop **Code → Local** and select `D:\amanix-landing`.
2. Verify the repository branch/status and read `CLAUDE.md`, `.claude/rules/`, `AGENTS.md` if generated, and relevant `docs/` files.
3. Use `/model` to select Opus 5.5 for major architectural choices or Sonnet 5.5 for routine implementation as available on the account.
4. Use **only** the manually provided design references in `design-reference/`; NO Figma MCP or external design integration in this project unless the user changes scope explicitly.
5. Give one specific task and one acceptance gate per session; avoid loading all huge SVG exports or generating the entire landing page at once.

## Phase 0 — evidence gathering, read-only
- Inspect four responsive SVG screen designs (390/744/1024/1440), the approved standalone assets, token references and content files.
- Establish design revision. Older Figma 1280x8231 is historical, while new desktop export is 1440x12334, so don't mix them without approval.
- Prepare section inventory, responsive layout behavior, unknown fonts/copy, asset inventory, interaction states, and missing API/business decisions.
- Report findings and STOP. No code modification.

## Phase 1 — scaffold/foundation
- Read the Next.js-generated `AGENTS.md` and version-matched Next docs.
- Establish clean app structure, site shell, RTL, design tokens grounded in the handoff, font pipeline and quality scripts.
- Confirm lint/typecheck/build, and record exact versions/commands.

## Phase 2 — slices
- Use `/implement-design-section` for a single section across four supplied reference widths.
- Include responsive reflow, semantics, keyboard, reduced motion and actual approved images/icons/text.
- Compare local production-rendered screenshots against source at the supplied widths; check interpolated widths and record deviations.
- No fake form success, unauthorized CTA destination, speculative package installs or unrelated refactors.

## Phase 3 — audit/release
- Use `/audit-landing-page` for prioritized visual, accessibility, technical, performance, integration and marketing-content review.
- Document real commands and pass/fail. Only claim a Lighthouse/CWV score if measured.
- Produce a reviewable PR; no push, merge or deploy without explicit approval.
