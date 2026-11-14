/**
 * FAQ content — Phase 05B.
 *
 * !! PROVISIONAL — NO APPROVED ANSWERS !!
 * The heading and the three questions are transcribed from the Figma screenshot
 * (design-reference/notes/phase-05/figma-faq-layout-detail.png, docs/PHASE05_DESIGN_SPEC.md) and
 * are NOT approved by the owner. `answer` is `null` for every item on purpose: no security,
 * financial or regulatory text may be written here until the owner supplies approved copy.
 * Do not use placeholder answers.
 *
 * OPEN COPY DECISION: question 1 says «أمانكس» while the header/logo show «سلم SLM».
 * It is kept exactly as shown in the reference; the brand name needs an owner decision.
 *
 * Order = DOM order = top-to-bottom order in the reference.
 *
 * UPGRADE PATH: when an item gets an approved `answer`, render that row as an accessible
 * disclosure (native <details>/<summary> or a button with aria-expanded + aria-controls inside
 * the existing <h3>) and make the decorative "+" (already drawn, aria-hidden) part of that control.
 * Until then rows are static, with the "+" as a provisional owner-requested visual only.
 */
export interface FaqItem {
  /** Stable id (used for keys and future aria-controls ids). */
  readonly id: string;
  readonly question: string;
  /** Approved answer text, or `null` while none has been supplied. */
  readonly answer: string | null;
}

export interface FaqContent {
  readonly title: string;
  readonly items: readonly FaqItem[];
}

export const faq: FaqContent = {
  title: "الأسئلة الشائعة",
  items: [
    { id: "data-protection", question: "كيف تحمي أمانكس البيانات؟", answer: null },
    {
      id: "zatca-invoices",
      question: "هل الفواتير متوافقة مع هيئة الزكاة والضريبة والجمارك؟",
      answer: null,
    },
    {
      id: "project-closing-integrity",
      question: "كيف يتم حظر التلاعب في إغلاق المشاريع وهوامش الأرباح؟",
      answer: null,
    },
  ],
};
