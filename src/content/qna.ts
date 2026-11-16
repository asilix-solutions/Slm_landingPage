/**
 * Q&A Center content — Phase 07C (second Q&A section, after Pricing; NOT the 3-row FAQ in faq.ts).
 *
 * !! PROVISIONAL — NO APPROVED ANSWERS !!
 * Eyebrow, heading, subtitle and the four questions are transcribed from the Figma reference
 * (design-reference/notes/phase-07c/qna/, docs/PHASE07C_QNA_COPY_REVIEW.md) and are NOT approved.
 * `answer` is `null` for all four items on purpose. The reference shows question 2 open with generic
 * "Flow / SaaS / dashboard" text that is off-topic: it is NOT an approved answer about tenant
 * isolation and must not be copied here. No security, privacy, ZATCA or accounting statement may be
 * written until the owner supplies approved copy for each question.
 *
 * OPEN COPY DECISIONS: «أمانكس» (here) vs «سلم SLM» (header/logo); and whether this section
 * replaces or complements the 3-row FAQ (questions 1 and 4 overlap with it).
 *
 * Order = DOM order = top-to-bottom order in the reference.
 *
 * UPGRADE PATH: when approved answers exist, set `answer` and render each row as an accessible
 * disclosure (native <details>/<summary>, or a button with aria-expanded/aria-controls inside the
 * existing <h3>); the chevron already drawn (aria-hidden) becomes part of that control.
 * While `answer` is set the row renders it as an open item (up chevron, answer paragraph).
 */
export interface QnaItem {
  readonly id: string;
  readonly question: string;
  /** Approved answer text, or `null` while none has been supplied. */
  readonly answer: string | null;
}

export interface QnaContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly items: readonly QnaItem[];
}

export const qna: QnaContent = {
  eyebrow: "مركز الأسئلة والأجوبة",
  title: "أسئلة شائعة؟ لدينا جميع الإجابات.",
  subtitle: "كل ما تود معرفته حول اعتماد منصة أمانكس في عمليات السلامة والامتثال الزكوي والهندسي.",
  items: [
    { id: "data-safety", question: "هل بياناتي آمنة مع أمانكس؟", answer: null },
    { id: "tenant-isolation", question: "كيف تضمن أمانكس عزل بيانات كل شركة مقاولات؟", answer: null },
    {
      id: "zatca-invoices",
      question: "هل فواتير أمانكس متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)؟",
      answer: null,
    },
    { id: "closing-integrity", question: "كيف يتم حظر التلاعب في إغلاق المشاريع وهوامش الأرباح؟", answer: null },
  ],
};

/** Dashboard screenshot (lossless WebP of the 1352x768 original). Local-only: rights unverified. */
export const qnaImage = {
  src: "/images/qna/dashboard-screenshot-lossless.webp",
  width: 1352,
  height: 768,
} as const;
