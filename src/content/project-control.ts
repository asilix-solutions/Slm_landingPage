/**
 * «كل مشروع تحت سيطرتك من الطلب إلى الربح» — scrollytelling content.
 *
 * !! NOT FULLY APPROVED !!
 * - All text was read by eye from the Figma screenshot of the desktop frame (there is no
 *   text source file) and is unconfirmed: heading, description, the eight list labels,
 *   the story caption and the CTA label.
 * - OWNER-APPROVED: the ENTIRE first story-panel composition (image + caption + CTA) is
 *   repeated unchanged for all eight steps. `storyPanel` is the single source; the eight list
 *   labels differ, the panels do not. No per-step copy exists or was invented.
 * - PHOTO NOT TRACKED: redistribution rights are unverified and the repository is public, so the
 *   file and its SVG wrapper are git-ignored. StoryPanel renders the photo only when the file
 *   exists on disk; otherwise a neutral decorative placeholder (no broken URL).
 *   See docs/PROJECT_CONTROL_LOCAL_IMAGE.md. One file, never duplicated.
 * - The photograph is the supplied SVG export's own 832:448 crop of the 1470×1070 PNG.
 *   The floating «طلبات العملاء» widget visible in the screenshot was NOT supplied and is not
 *   reproduced. The active list item's small red icon was not supplied either.
 * - The CTA has no approved destination (ACCEPTANCE BLOCKER): it renders as inert text styled as
 *   a button — no href, no fake navigation, no success behaviour.
 */
export type ProjectControlImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ProjectControlStep = {
  /** Stable unique id: list item <-> panel `pc-panel-<id>`. */
  id: string;
  label: string;
};

/** The one story-panel composition repeated for every step. Decorative image (alt ""). */
export const storyPanel = {
  image: {
    src: "/images/project-control/request-intake.webp",
    width: 1470,
    height: 792,
    alt: "",
  } as ProjectControlImage,
  caption: "يصل كل طلب إلى مكان واحد، ويُسجّل برقم واضح لتتمكن من متابعته",
  ctaLabel: "جرب المنصة",
} as const;

export type ProjectControlContent = {
  title: string;
  description: string;
  steps: readonly ProjectControlStep[];
};

export const projectControl: ProjectControlContent = {
  title: "كل مشروع تحت سيطرتك من الطلب إلى الربح",
  description:
    "تنظيم دقيق يبدأ من لحظة تقديم المالك لطلبه ويستمر حتى إصدار شهادة الإنجاز المعتمدة، مع تسجيل توثيقي لكل اعتماد وهامش ربحي.",
  steps: [
    { id: "no-lost-requests", label: "لا طلبات ضائعة" },
    { id: "no-unowned-requests", label: "لا طلبات بلا مسؤول" },
    { id: "no-undocumented-engineering", label: "لا قرارات هندسية غير موثّقة" },
    { id: "no-margin-risk", label: "لا تسعير يهدد هامش الربح" },
    { id: "no-start-without-approval", label: "لا مشروع يبدأ دون موافقة العميل" },
    { id: "no-execution-without-proof", label: "لا تنفيذ بلا إثبات" },
    { id: "no-uncontrolled-expenses", label: "لا مصروفات خارج الرقابة" },
    { id: "no-close-without-review", label: "لا مشروع يُغلق دون مراجعة نهائية" },
  ],
};
