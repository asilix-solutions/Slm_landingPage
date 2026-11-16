# Project Control — local-only first-panel photo

The photograph for story panel 1 («لا طلبات ضائعة») has **unverified redistribution rights**, and this
repository is public. Therefore neither the photo nor its source SVG is tracked in Git:

- `public/images/project-control/request-intake.webp` (1470x792 WebP, git-ignored)
- `design-reference/assets/project-control/3wme9Iq3yBiqF5kNhDWBTGE9k4.png (2).svg` (original, git-ignored, preserved locally)

A fresh clone renders a neutral, decorative placeholder block (no broken image URL); the caption and
CTA text remain real, accessible text.

## Restore locally (or after rights are confirmed)
1. Place `request-intake.webp` at `public/images/project-control/`.
2. In `src/content/project-control.ts`, set panel 1 `image` to
   `{ src: "/images/project-control/request-intake.webp", width: 1470, height: 792, alt: "" }`
   (alt text must be written once the photo content is approved; `""` if decorative).
3. Remove the two ignore lines in `.gitignore` only once rights are confirmed.
