# Claude Code prompts — Phase 03C

**MODEL for both prompts: Claude Sonnet 5.5.** Claude Desktop → Code → Local → `D:\amanix-landing`. No Figma MCP.

## Prompt A — Phase 03B checkpoint commit (run first)

```text
AMANIX — Phase 03B local checkpoint commit. Model: Sonnet 5.5.
Verify current branch feat/trust-strip, HEAD 56be43e as the expected starting point, and inspect Git status and diff. Preserve all original files. Ensure changes belong to Safety Needs only, including the required docs/QA. Confirm missing icons, unverified copy/action links and insufficient text contrast are clearly documented as unresolved blockers. Verify no secrets, build artifacts, or unrelated large reference assets are staged. Run npm run lint, npm run typecheck, npm run build. If clean and appropriate, stage ONLY Phase 03B and create a local commit: `feat: implement responsive safety needs section`. Do not push, merge, deploy or start Phase 03C in this command. Return SHA, status, committed files and blockers.
```

## Prompt B — Phase 03C implementation (run after A)

```text
# AMANIX — Phase 03C: «حلول سلم تدعمك»
Model: Claude Sonnet 5.5. Work LOCAL only. Do not commit/push/merge/deploy.

Act as a Senior Next.js/TypeScript Engineer, Arabic RTL Product UI Engineer, Responsive UX and Accessibility/Performance Reviewer.

1. Inspect actual branch/status, package conventions and current code. Read CLAUDE.md, AGENTS.md, docs/PHASE03C_SOLUTIONS_SPEC.md, docs/DESIGN_HANDOFF.md, docs/DECISIONS_AND_OPEN_ITEMS.md, docs/RESPONSIVE_QA.md, and the reference image `design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png`. No Figma MCP. Preserve every implemented section.
2. Implement ONLY the next section directly after Safety Needs: «حلول سلم تدعمك». Reference: 1440px-wide, ~827px-tall Figma frame with #F5F5F7 section background, right-aligned heading, thin horizontal track/progress-like detail and a horizontal strip of landscape image cards with one partially visible next card. Derive exact spacing, crop, radius and proportions from the screenshot; do not impose a rigid fixed section height.
3. IMPORTANT: This is a user-controlled carousel, not an endlessly animated trust-marquee. Use native horizontal overflow and CSS scroll-snap with RTL-aware behavior, touch/swipe and keyboard access. Add only the smallest Client Component needed for genuinely functional buttons/progress (if appropriate). Do not invent auto-scroll, fake progress, duplication, or heavy slider dependencies. Respect prefers-reduced-motion.
4. Carefully inventory existing locally supplied media first. The screenshot visibly shows fire-safety pipe, smoke detector, and hose-reel imagery, but their original isolated images have NOT been delivered in this handoff. Do not crop screenshots or use guessed stock photos. If exact, approved sources are unavailable, build only the verifiable layout/interaction shell and clearly report the media blocker. Do not present an incomplete image/card layout as final visual fidelity.
5. Copy/content are tentative. Screenshot-visible captions include «تنفيذ ميداني موثّق», «إغلاق لا يمكن العبث به», «فاتورة ضريبية متسلسلة», but visual subjects may be mismatched. Record the source mapping as uncertain. Never invent more solutions or destinations, claims, or links. Use approved typed data only; if missing, label the demo state clearly in project documentation and report before accepting production.
6. Use semantic heading/card structure, Noto Sans Arabic, accurate RTL, next/image with original optimized images only when available, correct responsive sizes and aspect ratios, visible focus and accessible controls. Test 320/375/390/744/768/1024/1280/1440/1920 with no document horizontal overflow. Preserve header-boundary behavior: Header white in this light section.
7. Run lint, typecheck and build. Browser-test real horizontal navigation, keyboard and pointer/touch if available, reduced-motion if possible; report PASS/FAIL/NOT RUN accurately. Update docs/RESPONSIVE_QA.md and docs/DECISIONS_AND_OPEN_ITEMS.md and specify missing source assets/copy and any visual deviations. Do NOT implement any later section.
```
