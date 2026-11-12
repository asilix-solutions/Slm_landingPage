# Amanix typography — approved

- Default font: **Noto Sans Arabic** for body, navigation, buttons, forms, cards, FAQ, pricing, all ordinary headings.
- Display-only font: **IBM Plex Sans Arabic** for the extremely large Hero headline and any other explicitly designated display heading.
- Preserve real text nodes: never flatten text into assets or take text from SVG paths by guessing.
- Use `next/font/google` for `Noto_Sans_Arabic` / `IBM_Plex_Sans_Arabic` if confirmed supported by the installed Next.js version; use properly licensed `next/font/local` originals if supplied.
- Variable fonts/weights: include only used ones, prefer font CSS variables and fallbacks. Explicitly inspect Arabic shaping, wraps, weights and line heights across all reference widths.
- Do not set display font globally on all `<h1>`/`<h2>` without checking design semantics; class or component variant must control this distinction.
