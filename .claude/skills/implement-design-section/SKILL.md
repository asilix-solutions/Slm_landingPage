---
description: Implement one approved Amanix responsive section from local visual references and asset handoff, without Figma MCP.
---

# Implement one section from manual handoff

1. Read `CLAUDE.md`, `.claude/rules/design-evidence.md`, `docs/DESIGN_HANDOFF.md`, `docs/ASSET_MANIFEST.md`, `docs/RESPONSIVE_QA.md`.
2. Verify branch, project state, relevant assets and approved typography/content. Identify the exact section across 390/744/1024/1440 exports.
3. Report evidence gaps and any frame-to-frame hierarchy conflict before editing. No Figma MCP calls.
4. Implement only this section and required shared styles/components using Next.js Server Components by default.
5. Use original approved media, never a whole-screen SVG as a page image. Implement real controls and RTL/keyboard correctness.
6. Compare actual local rendered screenshots at reference widths; run lint/typecheck/build/tests (where defined). Write evidence and deviations.
7. Return concise diff, PASS/FAIL/NOT RUN, discrepancies, decisions and blocker list. No push/merge without permission.
