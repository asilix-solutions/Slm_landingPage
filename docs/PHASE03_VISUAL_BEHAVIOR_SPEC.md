# Amanix — Phase 03 Visual / Motion Spec

## A) Black trust-logo strip

Source: `design-reference/notes/phase-03/trust-strip-full-figma-capture.png`, original Figma screenshot. Panel indicates **1440 × 431 px** for selected black area (desktop design reference, not mandatory runtime fixed height). The screenshot shows title «مصمم لشركات السلامة في السعودية» and eight visual marks in one horizontal row with captions; dark black background and muted/white rounded logo backplates. Logo/caption contrast should be measured on the actual implementation.

- Place **immediately after Hero photo**, with no intervening white background. Treat it as a visual continuation of the dark intro.
- **Do not shrink** the photographic Hero's independently approved min-height (`100svh`) to make room for the strip. The combined dark visual area may exceed one viewport height.
- Before changing `HeroBoundary`, inspect current DOM and CSS to preserve the transparent→white transition **near the end of the combined dark area**, not immediately after the photo. Ensure it stays stable with static/no-logo content and at variable viewport heights.
- Marquee: calm linear continuous movement with seamless group duplication. No carousel dependency, no state or scroll-event-driven animation. Duplicates must have `aria-hidden=true`, not duplicate announcements. Use CSS group length measured from actual content (do not assume `translateX(-50%)` is seamless without verifying matching halves and gaps). In RTL confirm visual direction from reference or choose unobtrusive RTL-appropriate movement and document the choice.
- For `prefers-reduced-motion: reduce`, turn off automatic movement and provide an accessible, horizontally scrollable / static row. Keep visible original group; avoid hiding essential content with overflow clipping.
- Pause on keyboard focus if logos are interactive; no fabricated links. Pause on hover if helpful and not detrimental to UX; do not depend on hover for access.
- **Do not manufacture accreditation**. For local design verification, placeholder space/labels may be shown only as clearly unapproved demo material, never represented as real official logos or shipped on public deployment without source approval. Prefer keeping an incomplete strip out of production until the approved assets arrive.

## B) White Safety Needs feature section

Sources: `safety-needs-full-figma-capture.png` and `safety-needs-card-measurements.png`. Selected desktop frame panel shows **1440 × 1515.94 px**. Individual selected card panel: **400 × 339.98 px**, auto-layout vertical, 16px gap, **32px padding** (as visible), 16px corner radius, 1px inside border `#E9E9E9`, white fill. These numbers are desktop-specific reference evidence, not arbitrary CSS constants for every viewport.

- Heading: «كل ما تحتاجه شركة السلامة» in Noto Sans Arabic (unless the approved design explicitly designates it display heading).
- Cards: **8 total**, visible as 3 + 3 + 2 on desktop, with the lower-left space accommodating the large orange/red decorative mark. Do not force a uniformly full 3×3 grid or stretch the last two cards into a new layout contrary to reference.
- Main decorative source: `public/images/safety-needs/background-mark.svg` (original dimensions **607×1260**). It is a large, left-side, partially cropped outline; NOT the foreground brand lockup. Use absolute decorative positioning inside an appropriate relative container, `pointer-events:none`, `aria-hidden:true`, behind content and clipped **only as intended by design**. Respect 607:1260 proportions. Do not place a generic enormous background image repeating everywhere.
- Section layout: white background, near-black text (#2E3338 / #181818 shown in inspector), orange/red accent outlines and links. Use RTL grid with deliberate reading order. Original icon `vector-1-document-search.svg` may correspond to a card about dynamic requests; confirm before binding. Do not duplicate that icon eight times.
- The reference screenshots contain **outlines** for text. Do not infer precise multi-line copy by OCR or use outlined text as runtime UI. Approved original text needed for full production fidelity.
- Responsive: 390, 744, 1024, 1440 reference snapshots under existing `design-reference/screens/`; also validate 320, 375, 768, 1280, 1920. Let row/column count adapt; keep original titles, independent cards, no overlap with art, no horizontal overflow.
- Card CTA «تعرف أكثر» is a design indicator and must not become a dead clickable link. Until approved destinations exist, use non-interactive text treatment or a clearly disabled control with explanation, and document missing routing. Never link every CTA to `#` pretending it works.

## Open verification gates

1. Eight **original authority logo assets** and their approval/rights / accurate captions.
2. Seven or more remaining individual feature icons or an explicitly approved icon policy.
3. Final readable Arabic card copy, CTA destinations and marketing claims.
4. Exact intended stroke crop/placement on 744/390 breakpoints (should be checked against full screen designs).
5. Whether header boundary extends to end of trust strip (recommended due to user's description as part of Hero) — validate visual behavior and document decision.
