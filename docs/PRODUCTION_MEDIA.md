# Production media tracked in Git

Added 2026-11-16 after the first Render deployment showed grey placeholders. These seven files are required by the page
and are now tracked, so a normal GitHub checkout and `npm run build` render the complete page. No manual media copying is needed.

The app checks each file with `existsSync` while the page is prerendered at build time (`SolutionsCarousel`, `ProjectControl`,
`MetricsBand`, `PricingPlans`, `QnaCenter`). The guards stay in place as a safe fallback if a file is ever removed.

| Path | SHA-256 |
|---|---|
| `public/images/solutions-carousel/01-field-hydrant-worker.webp` | `f9a17b008bc23e82521a7066e1fe028a438068391701535b85f559fbf8899449` |
| `public/images/solutions-carousel/02-fire-extinguisher-presentation.webp` | `0b0d034680a36f07d6dab95fe8773b691cfc8f7cba444e93d627f5ce9ffaa4de` |
| `public/images/solutions-carousel/03-abc-extinguisher-sign.webp` | `200ffb594f1449a2def5cea4fac9ea5c651688f28fd9d2d71319d68aebb7cc97` |
| `public/images/project-control/request-intake.webp` | `28dd3aa64c27e583b36fb03aeac4ec30fd47ce3f8b2c2953532329d41f0f046f` |
| `public/images/metrics/metrics-full-dark-2400x1200.webp` | `d830715f08b3d0248521f07bcb4135226c527174c6afef785a3bae271f0cea08` |
| `public/images/pricing/pricing-wave-true-vector.svg` | `a1d035b16e28725ee127442b3db90ed518b9b6ace0073fd46fafa9f571b3480f` |
| `public/images/qna/dashboard-screenshot-lossless.webp` | `6ac1106cc2af226f7b7428fd585035795b9cedd0ef5dedeb67f8cdf58681aa11` |

`.gitignore` still ignores every other file in those folders (for example the unused `05-fire-extinguisher-gauge.webp`)
and the local design-reference source exports.

## Rights status (public repository)

The owner explicitly asked for these files to be included and published through the normal GitHub to Render workflow.
Written clearance of third-party rights is **not** recorded in this repository. Known points to resolve:

- `02-fire-extinguisher-presentation.webp` shows third-party "SAFEQUEST" branding.
- `dashboard-screenshot-lossless.webp` shows a third-party product screen.
- Licence terms for the other photos and the pricing wave artwork are unconfirmed.

Permission to display an image on the site is not the same as permission to redistribute the file in a public repository.
If any owner or rights holder objects, remove the file and rebuild; the page falls back to its neutral placeholder.
Earlier docs that call these files "LOCAL only" (`SOLUTIONS_LOCAL_IMAGES.md`, `PROJECT_CONTROL_LOCAL_IMAGE.md`) describe the previous policy.
