# Amanix — Manual design handoff (V3)

## Confirmed approved engineering decisions
- No Figma MCP; user manually provides design reference exports, original photos, SVG cards, iconography, logo and design tokens.
- Fonts: **Noto Sans Arabic** for body / ordinary headings / UI. **IBM Plex Sans Arabic** for very large display headlines only.
- Hero motion: two calm floating overlay cards specified in `docs/HERO_SPEC.md`; static photo; reduced-motion support.
- User wants a responsive, visually faithful, SEO-ready, performance-minded Next.js landing page—not a flat SVG page.

## Reference designs received
| File | SVG root size | Status |
|---|---:|---|
| `Desktop 1441.svg` | 1440×12334 | Current handoff candidate; confirm final revision |
| `iPad Pro 1025.svg` | 1024×9406 | Current handoff candidate |
| `iPad mini 8.3 - 3.svg` | 744×7794 | Current handoff candidate |
| `iPhone 13 & 14 - 3.svg` | 390×8147 | Current handoff candidate |

These full-page SVGs contain embedded bitmap content and text converted to paths; they are visual evidence, NOT final page production assets. Don't ship them in public/ or take text from outlines by guessing. Difference in page height alone isn't a defect. A previously inspected Figma frame was 1280×8231 and could be an older revision; treat it only as historical and never mix conflicting versions.

## Separate original assets received
- `Property 1=Default.svg` and `Property 1=Variant3.svg`: 594×229 vectors; probable brand variants. Confirm which usage/background applies.
- `Fire Safety Office Professional 1.svg`: 1440×680 office photograph wrapped as SVG. Used in selected photo Hero.
- `Main - MatchedTalentWidget.svg`: 283×231; top-left candidate matching-candidates card (approved for subtle animation).
- `Outer Card Shell.svg`: 329×170; bottom-right candidate contractor info card (approved for subtle animation).
- `FAQ.svg`: 1440×474; source visual likely relevant to FAQ (confirm).
- `Pay when work is done.svg`: 405×273; source section illustration (confirm exact section).
- `3wme9Iq3yBiqF5kNhDWBTGE9k4.png (1).svg`: 832×623; exported illustration/image of unknown exact section. Do not invent meaning.
- Annotated screenshot `design-reference/notes/hero-cards-highlight.png` marks the two cards with red pen; it is NOT a production asset.

## Still pending from designer
- Approved Design System/variables (colors/spacing/radii/shadows/type ramp), exact content and CTA destinations, separate optimized photo originals, original icons/illustrations not yet included, font files only if locally licensed, intended logo variants, mobile menu/FAQ/pricing behavior, lead form API contract and consent/privacy copy.
- Need explicit confirmation that four SVG designs belong to same final design version before calling visual fidelity final; initial setup can proceed before this.

## Design fidelity workflow
1. Map each planned section to all four supplied screenshots. 2. Identify exact standalone assets and crop. 3. Implement semantic RTL DOM and responsive CSS. 4. Visual QA at reference widths plus intermediate breakpoints. 5. Record deviations and unanswered contracts; never pretend unknown states are implemented.
