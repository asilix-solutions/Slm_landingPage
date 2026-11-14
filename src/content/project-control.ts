/**
 * «كل مشروع تحت سيطرتك من الطلب إلى الربح» — scrollytelling content.
 *
 * !! NOT APPROVED, INCOMPLETE !!
 * - All text was read by eye from the Figma screenshot of the desktop frame (there is no
 *   text source file) and is unconfirmed: heading, description, the eight list labels,
 *   the first panel's caption and the CTA label.
 * - Only the FIRST story panel has supplied material (the photograph, caption and CTA).
 *   Steps 2–8 appear in the list but have `panel: null`: their images/overlays/copy were
 *   NOT supplied, so nothing is rendered for them and nothing was invented. They cannot
 *   become "active" (there is nothing to scroll to). Add a `panel` to a step and the
 *   section builds the matching story panel and active tracking automatically.
 * - PHOTO NOT TRACKED: its redistribution rights are unverified and the repository is public, so
 *   `image` is null and a neutral placeholder renders. The file and its SVG wrapper stay local
 *   (git-ignored); docs/PROJECT_CONTROL_LOCAL_IMAGE.md explains how to restore it locally.
 * - The photograph is the supplied SVG export's own 832:448 crop of the 1470×1070 PNG
 *   (design-reference/assets/project-control/…(2).svg → public/images/project-control/).
 *   The floating «طلبات العملاء» widget visible in the screenshot over the photo was NOT
 *   supplied as an asset and is not reproduced.
 * - The active list item shows a small red icon in the reference; that icon was not
 *   supplied either and is omitted.
 * - The CTA has no approved destination: it renders as inert text styled as a button.
 */
export type ProjectControlPanel = {
  /** null => neutral placeholder block (photo rights unverified; see docs/PROJECT_CONTROL_LOCAL_IMAGE.md). */
  image: { src: string; width: number; height: number; alt: string } | null;
  caption: string;
  ctaLabel: string;
};

export type ProjectControlStep = {
  id: string;
  label: string;
  panel: ProjectControlPanel | null;
};

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
    {
      id: "no-lost-requests",
      label: "لا طلبات ضائعة",
      panel: {
        image: null,
        caption: "يصل كل طلب إلى مكان واحد، ويُسجّل برقم واضح لتتمكن من متابعته",
        ctaLabel: "جرب المنصة",
      },
    },
    { id: "no-unowned-requests", label: "لا طلبات بلا مسؤول", panel: null },
    { id: "no-undocumented-engineering", label: "لا قرارات هندسية غير موثّقة", panel: null },
    { id: "no-margin-risk", label: "لا تسعير يهدد هامش الربح", panel: null },
    { id: "no-start-without-approval", label: "لا مشروع يبدأ دون موافقة العميل", panel: null },
    { id: "no-execution-without-proof", label: "لا تنفيذ بلا إثبات", panel: null },
    { id: "no-uncontrolled-expenses", label: "لا مصروفات خارج الرقابة", panel: null },
    { id: "no-close-without-review", label: "لا مشروع يُغلق دون مراجعة نهائية", panel: null },
  ],
};
