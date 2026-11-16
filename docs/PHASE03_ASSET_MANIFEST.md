# Amanix — Phase 03 Asset Manifest

**Verified in the supplied files, not via Figma MCP.** The ZIP is an incremental overlay designed not to overwrite prior project artifacts.

| Input originally supplied | Exact location in overlay | Role | Production use |
|---|---|---|---|
| `image(20261112-203942).png` | `design-reference/notes/phase-03/trust-strip-full-figma-capture.png` | Trust strip screenshot, Figma inspector included | Reference ONLY |
| `image(20261112-203107).png` | `design-reference/notes/phase-03/safety-needs-full-figma-capture.png` | Features/mark layout screenshot | Reference ONLY |
| `image(20261112-203402).png` | `design-reference/notes/phase-03/safety-needs-card-measurements.png` | Card measures in Figma inspector | Reference ONLY |
| `slm-logo 2.svg` | `design-reference/assets/phase-03/safety-needs/originals/slm-logo-2.svg` | Large decorative stroked background mark, 607×1260 | Original approved candidate |
| `slm-logo 2 - Copy.svg` | `design-reference/assets/phase-03/safety-needs/duplicates/slm-logo-2-copy-identical.svg` | Byte-identical duplicate of above | Do NOT render twice |
| `Vector (1).svg` | `design-reference/assets/phase-03/safety-needs/originals/vector-1-document-search.svg` | 55×55 document/search icon; possible feature icon | Confirm which card it belongs to |
| `slm-logo 2.svg` (copied) | `public/images/safety-needs/background-mark.svg` | Direct, unmodified SVG for CSS/HTML art placement | Ready to use; decorative and `aria-hidden` |
| `Vector (1).svg` (copied) | `public/images/safety-needs/icon-document-search.svg` | Direct, unmodified SVG icon | Confirm meaning before attaching it to a card |
| Two focused crops | `design-reference/notes/phase-03/*-visual-crop.png` | Convenient views of screenshots without Figma inspector | Reference ONLY; not pixel-perfect originals |

## Missing original logo assets (NOT in this ZIP)

Place supplied and legally approved assets in `design-reference/assets/phase-03/trust-strip/logos/`. Suggested stable *filenames only* (do not use placeholders as final logos):

- `civil-defense.svg` — defense logo (requires verification of actual approval and permitted usage)
- `gcc-lab.svg`
- `iso-9001.svg` — standards/accreditation representations require extra caution
- `saso.svg`
- `industrial-security.svg`
- `nfpa.svg`
- `ul-listed.svg`
- `fm-approved.svg`

PNG/WebP originals are also acceptable if that is what the owner provides. **Never invent, generate, trace or extract these as official production marks from the screenshot.** Confirm the textual descriptions before publication; terms such as «معتمد», «عضو», «مطابق» and «منتجات معتمدة» are business/legal claims, not neutral decoration.

When originals arrive and usage is approved, prepare correctly sized, optimized files in `public/images/trust-strip/`. Keep the source file intact.

## Missing feature icons (only one icon was supplied)

Provide remaining independent icons under `design-reference/assets/phase-03/safety-needs/feature-icons/`. Do not reuse `vector-1-document-search.svg` on every card just to fill gaps. Claude should first inspect whether the supplied separate icon matches any original card and request the others if essential.

## Existing files that must remain untouched

- Four large full-page SVGs already under `design-reference/screens/` (still ignored by Git).
- Existing Hero image and card assets in `public/images/hero/`.
- Brand Header SVGs in `public/brand/`.
- Existing `CLAUDE.md`, `.claude/`, `AGENTS.md`, and foundation code.

## Git hygiene

- Only stage small original assets truly used for the site, approved claims, code and relevant docs.
- Reference screenshots and unused raw assets should not be committed automatically. Verify existing `.gitignore` behavior: `design-reference/screens/` is ignored, but other `design-reference/` subfolders may be tracked.
- Use `git status` and `git diff --cached --stat` before any commit; no push/merge/deploy without approval.
