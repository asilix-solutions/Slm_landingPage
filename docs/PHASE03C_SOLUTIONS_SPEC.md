# AMANIX — Phase 03C: «حلول سلم تدعمك» — Source-grounded specification

## Status
Design handoff / implementation brief only; not final content or production approval. This follows Phase 03B (Safety Needs) and should not alter Header, Hero, Trust Strip or Safety Needs. No Figma MCP.

## What the user's attached image actually shows
- An Arabic RTL section titled **«حلول سلم تدعمك»**.
- Figma frame at 1440px wide and ~826.78px tall, background **#F5F5F7**.
- Auto-layout screenshot suggests vertical padding around **128px** and section spacing **48px**. Verify actual implementation against the screenshot rather than hard-coding a fixed height.
- A horizontal row of landscape photo cards with softly rounded corners. Three cards are clearly visible, a fourth is partially visible at the left. Titles sit below the pictures.
- A slim light-grey horizontal bar above the image cards near the right side, visually resembling scroll progress. Whether it is interactive/progress is not confirmed from a static picture.
- Right-to-left visible order, with captions as seen in screenshot: «تنفيذ ميداني موثّق», «إغلاق لا يمكن العبث به», «فاتورة ضريبية متسلسلة». These strings are tentative, not business-approved.
- The source images are NOT supplied as separate original files in this handoff. Avoid using screenshots as production assets.

## Important source ambiguity
The visible subjects and captions do not perfectly match (e.g. a fire hose cabinet image paired with a tax-invoicing caption). Treat as unresolved content/image mapping. Do NOT correct, invent, or silently ratify them. Obtain approved original images and captions before claiming final visual fidelity. Brand naming SLM vs repository codename Amanix is also not yet formally settled.

## Recommended interaction (proposal, not proven by static screenshot)
Implement a **user-controlled horizontal carousel**, NOT an infinite auto-scrolling trust-logo marquee. Native overflow-x / CSS scroll-snap preferred, no carousel dependency. Direction/layout must feel natural in RTL and show the partial next card. Small, functional, accessible scroll control(s) and real progress indicator only if supported by design evidence / approved interaction. No automatic motion by default. Avoid duplicated semantic items. Provide keyboard, touch and pointer usability and visible focus. Reduced-motion must remove smooth/animated scrolling.

## Architecture
- Prefer `src/components/sections/SolutionsCarousel.tsx` (Server) with a narrowly scoped client `SolutionsCarouselControls.tsx` **only if** controls/progress require JS.
- Data: `src/content/solutions.ts` with typed items, image paths and confirmed captions. No bogus links or misleading interactive actions.
- Production photos: `public/images/solutions-carousel/` after verifying approved originals; originals: `design-reference/assets/phase-03/solutions-carousel/`.
- Reference: `design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png`.
- Preserve existing Noto Sans Arabic for normal text; use IBM Plex only for explicitly large display headings. Follow existing design tokens and RTL behavior.
- Optimize actual originals using `next/image`, `sizes`, dimensions / aspect ratio and correct lazy loading for below-the-fold images. Avoid static screenshot, blobs, fake cards or dependencies.

## Responsive acceptance
- Fidelity at 1440 based on provided screenshot; fluid behaviour at 320, 375, 390, 744, 768, 1024, 1280, 1440, 1920. No fixed section height forcing clipping.
- No document-level horizontal overflow; carousel can overflow *inside its own viewport*.
- Partial-next-card affordance where practical, cards preserve sensible ratio and captions stay legible.
- Correct starting edge, dragging/touch scroll, keyboard navigation, no scroll-trap, functional progress if shown, no fake animation claims.
- Contrast and focus visibility; no motion if `prefers-reduced-motion` is enabled.
- Lint, typecheck, build. Browser testing and screenshots when available; mark missing checks NOT RUN.

## Existing unresolved release issues (do not erase)
- Trust logos/authorization and claims; Safety Needs missing card icons, copy and contrast; Header/Hero CTA and accessibility blockers. These are separate from this implementation, but must remain documented.

## Git/process
1. Commit Phase 03B locally as a development checkpoint after reviewing the diff, testing and documenting blockers; do not push/merge.
2. Implement only Phase 03C. Keep existing branch if continuing the same stacked implementation series, separate commit later after review.
3. Do not force-push, amend an already-pushed commit, or deploy.
