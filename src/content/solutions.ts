/**
 * «حلول سلم تدعمك» — solutions carousel content.
 *
 * !! NOT APPROVED, NOT COMPLETE !!
 * - Titles are the three captions visible in the Figma reference
 *   (design-reference/notes/phase-03/solutions-carousel/figma-section-reference-1440.png),
 *   in RTL order. They are tentative: the reference pairs them with images whose
 *   subjects do not match (e.g. a hose-reel photo under «فاتورة ضريبية متسلسلة»),
 *   so the title↔image mapping is UNRESOLVED and must come from the designer.
 * - At least one more card is partly visible in the reference; its title and
 *   image are unknown, so it is NOT included. Do not invent further solutions.
 * - Images: NONE are tracked in Git. Four photos were supplied (2026-11-13) but their usage rights
 *   are unverified (one visibly shows third-party SAFEQUEST branding) and this repository is
 *   public, so every item is `image: null` and renders the neutral placeholder. The photos and
 *   their SVG wrappers stay local (git-ignored); docs/SOLUTIONS_LOCAL_IMAGES.md has the exact
 *   mapping and snippet to restore them once rights are confirmed. The three cards are shown
 *   twice (temporary repetition, see SolutionsCarousel.tsx).
 * - No destinations are approved: cards are not links.
 */
export type SolutionImage = {
  src: string;
  width: number;
  height: number;
  /** Required for any informative image; use "" only for decorative ones. */
  alt: string;
};

export type SolutionItem = {
  id: string;
  title: string;
  image: SolutionImage | null;
};

export const solutions = {
  title: "حلول سلم تدعمك",
  items: [
    {
      id: "documented-field-execution",
      title: "تنفيذ ميداني موثّق",
      image: null,
    },
    {
      id: "tamper-proof-closing",
      title: "إغلاق لا يمكن العبث به",
      image: null,
    },
    {
      id: "sequential-invoicing",
      title: "فاتورة ضريبية متسلسلة",
      image: null,
    },
  ],
} as const satisfies { title: string; items: readonly SolutionItem[] };
