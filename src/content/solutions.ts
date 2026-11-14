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
 * - Images: the four supplied photos (2026-11-13) have UNVERIFIED usage rights (one visibly shows
 *   third-party SAFEQUEST branding) and this repository is public, so the files are git-ignored and
 *   NEVER committed. The items below declare the approved provisional image mapping (paths only);
 *   SolutionsCarousel.tsx renders an image only when its file exists in public/ at render time
 *   (same local-only pattern as Q&A/Pricing), so a fresh clone or deploy without the files shows the
 *   neutral placeholder and no broken URL. See docs/SOLUTIONS_LOCAL_IMAGES.md. The three cards are
 *   shown twice (temporary repetition, see SolutionsCarousel.tsx).
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
      image: {
        src: "/images/solutions-carousel/01-field-hydrant-worker.webp",
        width: 810,
        height: 546,
        alt: "",
      },
    },
    {
      id: "tamper-proof-closing",
      title: "إغلاق لا يمكن العبث به",
      image: {
        src: "/images/solutions-carousel/02-fire-extinguisher-presentation.webp",
        width: 810,
        height: 546,
        alt: "",
      },
    },
    {
      id: "sequential-invoicing",
      title: "فاتورة ضريبية متسلسلة",
      image: {
        src: "/images/solutions-carousel/03-abc-extinguisher-sign.webp",
        width: 810,
        height: 546,
        alt: "",
      },
    },
  ],
} as const satisfies { title: string; items: readonly SolutionItem[] };
