/**
 * Site-level metadata inputs.
 *
 * Only values that already exist in the project are filled (the baseline name «Amanix», the
 * document language). Everything else is `null` ON PURPOSE and must come from the owner — nothing
 * here may be invented (CLAUDE.md). `src/app/layout.tsx` turns `null` into "omit the tag".
 *
 * APPROVALS NEEDED before launch (docs/DECISIONS_AND_OPEN_ITEMS.md, O06/P-meta):
 *  - name: public brand — the logo/header say «سلم SLM», copy and copyright say «أمانكس»/Amanix.
 *    The baseline «Amanix» below is the pre-existing placeholder, NOT a brand decision.
 *  - description: approved Arabic page description (no certification/compliance/pricing claims
 *    unless evidenced).
 *  - siteUrl: production domain (enables `metadataBase`, canonical and absolute Open Graph URLs).
 *  - ogImage: an approved, rights-cleared social preview image (none exists; do not reuse the Hero
 *    photo or third-party material).
 *  - indexing: whether the site may be indexed (e.g. keep `noindex` until launch is approved).
 */
export const siteMeta = {
  name: "Amanix",
  description: null as string | null,
  siteUrl: null as string | null,
  ogImage: null as { url: string; width: number; height: number; alt: string } | null,
  /** `true` = allow indexing. Left `false` until the owner approves launch (no live site yet). */
  indexable: false,
} as const;
