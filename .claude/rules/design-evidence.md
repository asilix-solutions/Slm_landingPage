# Manual design evidence and fidelity rules

- The designer supplies responsive, full-page SVG exports and separate originals. Reference snapshots: 390, 744, 1024, 1440 px. Do not use Figma MCP unless scope explicitly changes.
- The older 1280 Figma frame differs from manual 1440 desktop handoff; treat old Figma as historical, use current local snapshots for initial development, and flag final version approval before visual QA signoff.
- Screenshots may be composed from shapes/path outlines and base64 imagery. Reconstruct semantic DOM, not SVG rectangles or absolute text paths. Only **individual approved SVG assets** should be used as SVG files.
- Request typography family/files or licensed source, exact font weights, section copy, spacing/color/radius tokens, photos/illustrations as separate files, icons, header/CTA behavior and states.
- Preserve content hierarchy and approved mobile/tablet ordering; use container max-width, fluid type/spacing and CSS Grid/Flex instead of independent page clones.
- Test 320, 375, 390, 744, 768, 1024, 1280, 1440 and a wide desktop (e.g. 1920) for graceful fluid behavior; reference designs exist at 390, 744, 1024, 1440, not all tested sizes.
- Compare at screenshot-matched viewport and account for browser font rendering. Log differences, acceptances and blockers explicitly.
- Accessibility and true behavior outweigh impossible pixel-perfect reproduction when the design itself causes clipping or inaccessible controls; propose smallest fix and note trade-off.
