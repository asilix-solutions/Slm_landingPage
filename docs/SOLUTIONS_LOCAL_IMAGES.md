# Solutions carousel — local-only photos (NOT in Git)

**Why:** this repository is public. The four photographs supplied for «حلول سلم تدعمك» (2026-11-13) have **unverified usage/redistribution rights**, and `02-fire-extinguisher-presentation` visibly shows third-party **SAFEQUEST** branding on the products. So no photo and no original SVG wrapper is tracked. A fresh clone renders neutral grey placeholders (`image: null` in `src/content/solutions.ts`); there are no broken image URLs.

**Git-ignored paths** (see `.gitignore`; the files stay on the developer's disk):
- `public/images/solutions-carousel/{01,02,03,05}-*.webp` (810×546 production images)
- `design-reference/assets/phase-03/solutions-carousel/source-exports/` (original SVG exports, 4 unique)
- `design-reference/notes/phase-03/solutions-carousel/four-unique-assets-contact-sheet.jpg`, `solutions-figma-capture-20261113.png`
- `docs/qa-screenshots/solutions-carousel/with-images-*.jpg`

Package hashes: `docs/PHASE03C_IMAGE_ASSET_MANIFEST.json` (SVG SHA-256 values; the package ZIP is `Amanix_Phase03C_Solutions_Images_Ready_2026-11-13.zip`).

## Restoring them locally (only after rights are confirmed, or for private local review)
1. Copy the four WebP files into `public/images/solutions-carousel/` (from the ZIP above).
2. In `src/content/solutions.ts` replace `image: null` with:

| Card (RTL order) | `image` value |
|---|---|
| تنفيذ ميداني موثّق | `{ src: "/images/solutions-carousel/01-field-hydrant-worker.webp", width: 810, height: 546, alt: "" }` |
| إغلاق لا يمكن العبث به | `{ src: "/images/solutions-carousel/02-fire-extinguisher-presentation.webp", width: 810, height: 546, alt: "" }` |
| فاتورة ضريبية متسلسلة | `{ src: "/images/solutions-carousel/03-abc-extinguisher-sign.webp", width: 810, height: 546, alt: "" }` |

`05-fire-extinguisher-gauge.webp` is unused (no approved fourth card). The mapping is visual and provisional; `alt=""` because the photos do not substantiate the captions. `SolutionCard` already renders them with `next/image` (`unoptimized`, lazy, 405:273 `object-fit: cover`); no overlay is needed (the red gradient is baked in).

## Before making them public
- Confirm licence/ownership for each photo and written permission (or removal) for the SAFEQUEST branding in image 02.
- Note: `design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png` (committed earlier in `46493fd`) is a low-resolution screenshot that already contains three of these photographs. It cannot be removed without rewriting history — an explicit decision for the repository owner.
