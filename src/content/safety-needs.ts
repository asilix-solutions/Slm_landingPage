/**
 * "كل ما تحتاجه شركة السلامة" — heading + eight feature cards.
 *
 * !! COPY NOT APPROVED FOR PUBLIC RELEASE !!
 * Every string below was transcribed by eye from the low-resolution Figma
 * capture (design-reference/assets/phase-03/safety-needs-full-figma-capture.png);
 * there is no source text file. Wording may contain reading errors, and several
 * lines make regulatory/compliance statements (ZATCA invoicing, SBC 801, QR
 * invoices, commercial-register fields) that need business/legal approval.
 * See docs/DECISIONS_AND_OPEN_ITEMS.md (Phase 03B).
 *
 * Order = reading order in RTL (first card is top-right), as in the reference:
 *   row 1: 1 2 3 · row 2: 4 5 6 · row 3: 7 8 (leaving the lower-left corner
 *   free for the decorative mark).
 *
 * Icons: only `document-search` was supplied (card 8). The "note-edit" icon
 * used by cards 1–6 and the "shield-lock" icon of card 7 were NOT supplied, so
 * those cards intentionally render an empty icon slot — do not substitute.
 *
 * The action text is visible in the capture as «تجربة المنصة» (the visual spec
 * calls it «تعرف أكثر»). No destination has been approved: it is rendered as
 * inert text, never as a link.
 */
export type FeatureIcon = "document-search";

export const safetyNeeds = {
  title: "كل ما تحتاجه شركة السلامة",
  actionLabel: "تجربة المنصة",
  cards: [
    {
      id: "tamper-proof-closing",
      icon: null,
      title: "إغلاق لا يمكن العبث به",
      description:
        "قائمة فحص، توقيعان، هامش نهائي مختوم، وأرشفة تجعل الشروع للقراءة فقط إلى الأبد.",
    },
    {
      id: "sequential-invoicing",
      icon: null,
      title: "فوترة ضريبية متسلسلة",
      description:
        "فواتير بسلسلة تجزئة ورمز QR وفق متطلبات هيئة الزكاة والضريبة والجمارك.",
    },
    {
      id: "self-running-maintenance",
      icon: null,
      title: "عقود صيانة ذاتية التشغيل",
      description:
        "جدولة الزيارات الدورية وإنشاء أوامر العمل تلقائيًا ورصد الزيارات الفائتة.",
    },
    {
      id: "engineering-review",
      icon: null,
      title: "مراجعة هندسية SBC 801",
      description:
        "قرار المهندس الاستشاري موثّق: فئة الخطورة، كثافة الرشاشات، ضغط المضخات والتهوية.",
    },
    {
      id: "controlled-margin-pricing",
      icon: null,
      title: "تسعير بهامش محكوم",
      description:
        "الضريبة والإجماليات تُحسب على الخادم، والهامش تحت الحد الأدنى يتطلب مبرّرًا مسجّلًا.",
    },
    {
      id: "documented-field-execution",
      icon: null,
      title: "تنفيذ ميداني موثّق",
      description:
        "هيكل أعمال تفصيلي، وصور تُتحقق من موقعها وتوقيتها تلقائيًا مقابل موقع المنشأة.",
    },
    {
      id: "branded-portal",
      icon: null,
      title: "بوابة بعلامتك التجارية",
      description:
        "نطاق فرعي خاص، شعارك وألوانك، وموقع تعريفي لعملائك مع إعدادات SEO كاملة.",
    },
    {
      id: "dynamic-request-forms",
      icon: "document-search",
      title: "نماذج طلبات ديناميكية",
      description:
        "صمّم نماذج الطلب لكل خدمة دون برمجة، مع حقول سعودية جاهزة: السجل التجاري والرقم الموحد 700.",
    },
  ],
} as const satisfies {
  title: string;
  actionLabel: string;
  cards: readonly {
    id: string;
    icon: FeatureIcon | null;
    title: string;
    description: string;
  }[];
};
