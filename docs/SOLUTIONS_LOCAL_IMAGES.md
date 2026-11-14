# Solutions carousel — local-only photos (NOT in Git)

**Why:** this repository is public. The four photographs supplied for «حلول سلم تدعمك» (2026-11-13) have **unverified usage/redistribution rights**, and `02-fire-extinguisher-presentation` visibly shows third-party **SAFEQUEST** branding on the products. So no photo and no original SVG wrapper is tracked. A fresh clone renders neutral grey placeholders (the file-existence check in `SolutionsCarousel.tsx`); there are no broken image URLs.

**Git-ignored paths** (see `.gitignore`; the files stay on the developer's disk):
- `public/images/solutions-carousel/{01,02,03,05}-*.webp` (810×546 production images)
- `design-reference/assets/phase-03/solutions-carousel/source-exports/` (original SVG exports, 4 unique)
- `design-reference/notes/phase-03/solutions-carousel/four-unique-assets-contact-sheet.jpg`, `solutions-figma-capture-20261113.png`
- `docs/qa-screenshots/solutions-carousel/with-images-*.jpg`

Package hashes: `docs/PHASE03C_IMAGE_ASSET_MANIFEST.json` (SVG SHA-256 values; the package ZIP is `Amanix_Phase03C_Solutions_Images_Ready_2026-11-13.zip`).

## How they are wired now (Phase 09B)
`src/content/solutions.ts` declares the provisional mapping permanently (paths only, no longer `image: null`):

| Card (RTL order) | File (810x546, `alt=""`) |
|---|---|
| تنفيذ ميداني موثّق | `/images/solutions-carousel/01-field-hydrant-worker.webp` |
| إغلاق لا يمكن العبث به | `/images/solutions-carousel/02-fire-extinguisher-presentation.webp` |
| فاتورة ضريبية متسلسلة | `/images/solutions-carousel/03-abc-extinguisher-sign.webp` |

The three cards are shown twice (temporary repeat: order 01,02,03,01,02,03; same URLs, no extra downloads). `SolutionsCarousel` (Server Component) passes `image` to `SolutionCard` only if `public/<src>` exists **when the page is rendered**; otherwise `null` -> neutral placeholder. The page is statically prerendered, so the check happens at `next build`: build with the files = photos baked in; build without them (fresh clone, CI, deploy) = placeholders and no broken URL. In `next dev` it is evaluated per request. No client-side detection, so server HTML and hydration are identical. `05-fire-extinguisher-gauge.webp` stays unused.

Local preview vs release: the photos are for the owner's local preview only (git-ignored). A public build must not contain them until rights are confirmed.

## Before making them public
- Confirm licence/ownership for each photo and written permission (or removal) for the SAFEQUEST branding in image 02.
- Note: `design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png` (committed earlier in `46493fd`) is a low-resolution screenshot that already contains three of these photographs. It cannot be removed without rewriting history — an explicit decision for the repository owner.
