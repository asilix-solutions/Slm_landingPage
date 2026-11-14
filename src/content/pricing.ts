/**
 * Pricing plans content — Phase 06.
 *
 * !! PROVISIONAL — TRANSCRIBED FROM ARTWORK, NOT APPROVED !!
 * Everything below (plan names, descriptions, prices, limits, CTA label, badge, comparison label)
 * is read from the supplied Figma screenshot/SVG (design-reference/notes/phase-06/pricing/,
 * docs/PHASE06_DESIGN_SPEC.md). Prices, quotas ("40 حساب موظف", "150 جيجابايت"...), the 14-day trial
 * and the "unlimited" statements are NOT confirmed commercial terms: the owner must approve them
 * before public release. Do not invent, round or "improve" any value here.
 *
 * CTA / comparison destinations are UNKNOWN (no checkout, registration or comparison route has been
 * supplied), so the CTAs and the comparison label are rendered as non-interactive text.
 * To wire them later, add an approved `href` per plan and render a real <a>.
 *
 * Order = DOM order = RTL visual order, right to left: trial, basic, professional, enterprise.
 */
export interface PricingPlan {
  readonly id: "trial" | "basic" | "professional" | "enterprise";
  readonly name: string;
  readonly description: string;
  /** `amount` is shown large; `unit` (e.g. "ر.س") follows it; `period` is the small suffix. */
  readonly price: {
    readonly amount: string;
    readonly unit?: string;
    readonly period?: string;
  };
  readonly features: readonly string[];
  /** Informational badge (not a control). */
  readonly badge?: string;
  /** Emphasised (filled, with arrow) call-to-action presentation. */
  readonly featured?: boolean;
}

export interface PricingContent {
  readonly title: string;
  readonly subtitle: string;
  readonly ctaLabel: string;
  readonly compareLabel: string;
  readonly plans: readonly PricingPlan[];
}

export const pricing: PricingContent = {
  title: "خطط تناسب حجم شركتك",
  subtitle: "ابدأ بفترة تجريبية، وارفع خطتك متى احتجت.",
  ctaLabel: "اختر الخطة",
  compareLabel: "قارن المميزات بين الخطط",
  plans: [
    {
      id: "trial",
      name: "تجريبية",
      description: "فترة تجريبية مجانية لتقييم المنصة",
      price: { amount: "مجانًا" },
      features: ["3 حساب موظف", "5 طلب شهريًا", "1 جيجابايت تخزين", "14 يوم تجربة مجانية"],
    },
    {
      id: "basic",
      name: "الأساسية",
      description: "لمقاولي السلامة الصغار وفرق العمل الناشئة",
      price: { amount: "499", unit: "ر.س", period: "/شهر" },
      features: ["10 حساب موظف", "40 طلب شهريًا", "25 جيجابايت تخزين", "14 يوم تجربة مجانية"],
    },
    {
      id: "professional",
      name: "الاحترافية",
      description: "للشركات المتوسطة التي تدير عدة مشاريع في آن واحد",
      price: { amount: "1,499", unit: "ر.س", period: "/شهر" },
      features: ["40 حساب موظف", "200 طلب شهريًا", "150 جيجابايت تخزين", "14 يوم تجربة مجانية"],
      badge: "شائع",
      featured: true,
    },
    {
      id: "enterprise",
      name: "المؤسسية",
      description: "بلا حدود على المستخدمين أو الطلبات أو مساحة التخزين",
      price: { amount: "3,999", unit: "ر.س", period: "/شهر" },
      features: ["حسابات موظفين غير محدودة", "طلبات غير محدودة", "تخزين غير محدود"],
    },
  ],
};
