# Amanix asset inventory (V3; updated by foundation slice 2026-11-12)

Inspected programmatically (SVG root size, embedded raster type/pixels, `<text>` vs outlined paths). No asset has been copied to `public/` yet.

| Source path (under design-reference/) | SVG size | File | Contents found | Role | Production policy |
|---|---:|---:|---|---|---|
| `screens/Desktop 1441.svg` | 1440×12334 | 11.6 MB | 11 JPEG + 11 PNG embedded, 354 paths, 0 `<text>` | Full desktop reference | Reference only — never serve |
| `screens/iPad Pro 1025.svg` | 1024×9406 | 10.4 MB | 14 JPEG + 13 PNG, 0 `<text>` | Tablet reference | Reference only |
| `screens/iPad mini 8.3 - 3.svg` | 744×7794 | 9.4 MB | 6 JPEG + 11 PNG, 0 `<text>` | Tablet reference | Reference only |
| `screens/iPhone 13 & 14 - 3.svg` | 390×8147 | 10.1 MB | 6 JPEG + 9 PNG, 0 `<text>` | Mobile reference | Reference only |
| `assets/Property 1=Default.svg` | 594×229 | 18 KB | Pure vector; fills `#201F37`, `#FD4006`, `#FF2613`, white | Logo, light backgrounds (probable) | Usable as SVG after role confirmation; optimize (SVGO) |
| `assets/Property 1=Variant3.svg` | 594×229 | 18 KB | Pure vector; fills `#F3F7F8`, white | Logo, dark backgrounds (probable) | Same |
| `assets/inbox/Fire Safety Office Professional 1.svg` | 1440×680 | 2.4 MB | Single PNG 1824×862 (1.8 MB) | Hero photo | Extract raster → AVIF/WebP via `next/image`, priority (LCP). **Verified: contains no UI cards.** |
| `assets/inbox/Main - MatchedTalentWidget.svg` | 283×231 | 55 KB | Vector (text outlined) + 1 JPEG 206×112 | Hero card A (upper-left), animated | Use as SVG; consider extracting/optimizing embedded JPEG |
| `assets/inbox/Outer Card Shell.svg` | 329×170 | 113 KB | Vector (text outlined) + 1 JPEG 235×128 | Hero card B (lower-right), animated | Same |
| `assets/inbox/FAQ.svg` | 1440×474 | 420 KB | Single JPEG 2400×1200 | FAQ-area image (unconfirmed) | Extract JPEG → `next/image`; confirm section |
| `assets/inbox/Pay when work is done.svg` | 405×273 | 106 KB | Single JPEG 736×736 | Section illustration (unconfirmed) | Extract → `next/image`; confirm section |
| `assets/inbox/3wme9Iq3yBiqF5kNhDWBTGE9k4.png (1).svg` | 832×623 | 2.5 MB | Single PNG 1470×1070 (1.8 MB) | Unknown section | Confirm role before use |
| `notes/hero-cards-highlight.png` | — | 285 KB | Annotated screenshot | Card placement reference | Never serve |

## Findings
- All four page references have text converted to outlines: **copy cannot be read from them reliably** — original Arabic copy must be supplied (O02).
- Hero cards contain outlined Arabic text inside the SVG. Shipping them as SVG images keeps the designer's look but that text is not real DOM text (not selectable/translatable, needs an accurate `alt` or `aria-hidden` + adjacent text). Decide in Slice 02 (A04).
- `hero-cards-highlight.png` shows the photo **horizontally mirrored** relative to the supplied source (fire extinguisher appears on the left, tablet on the left; in the source both are on the right). Hero slice must confirm whether to mirror (CSS `scale: -1 1` on the image) or whether a mirrored original exists (A05).
- Rasters wrapped in SVG are 1.8–2.5 MB: extract and re-encode before serving; never serve the SVG wrappers for photos.
- Default `public/*.svg` (next, vercel, file, globe, window) and `src/app/favicon.ico` are create-next-app boilerplate, unused; preserved per instruction — remove/replace with brand favicon when approved.

## Missing / requested
Design tokens; original Arabic copy for all sections; brand favicon/app icons; icons for workflow/features; confirmation of section ownership for the three unconfirmed images; optimized photo originals (optional — extraction is possible).

## Production assets created (Hero slice, 2026-11-12)
| Public path | Source | Notes |
|---|---|---|
| `public/images/hero/hero-office.jpg` | PNG 1824×862 embedded in `Fire Safety Office Professional 1.svg` | Mirrored (as in all four references), JPEG q84 mozjpeg, 165 KB; `next/image` serves 26–96 KB responsive variants |
| `public/images/hero/card-matched-candidates.svg` | `Main - MatchedTalentWidget.svg` | Unmodified, 55 KB, 283×231 |
| `public/images/hero/card-contractor-profile.svg` | `Outer Card Shell.svg` | Unmodified, 113 KB, 329×170 |
| `public/brand/logo-on-dark.svg` | `Property 1=Variant2.svg` | Unmodified (orange symbol + light lettering) |
| `public/brand/logo-on-light.svg` | `Property 1=Default.svg` | Unmodified |
