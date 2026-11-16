/**
 * Metrics / assurance band — content for Phase 05A.
 *
 * !! UNVERIFIED — VISUAL REFERENCE ONLY !!
 * The four indicators and their descriptions are an approximate transcription of the Figma
 * screenshot (docs/PHASE05_DESIGN_SPEC.md) and are NOT approved. In particular `100%`,
 * `SBC 801` and `ZATCA` and the compliance/security wording are unverified claims: nothing here
 * may be presented as a confirmed certification, approval or compliance statement until the
 * owner supplies documentation. Do not reword them to sound stronger.
 *
 * Order = DOM order = RTL visual order, right to left: 8, 100%, SBC 801, ZATCA.
 */
export type Metric = {
  /** Display value. Rendered LTR so "100%" and "SBC 801" keep their glyph order inside RTL text. */
  value: string;
  description: string;
};

export const metrics: readonly Metric[] = [
  { value: "8", description: "مراحل موثقة لكل مشروع من الاستشارة للتسليم" },
  { value: "100%", description: "بيئة سحابية محلية آمنة ومشفرة" },
  { value: "SBC 801", description: "مراجعة معايير الحريق وفق الأكواد الوطنية" },
  { value: "ZATCA", description: "توليد الفواتير المشفرة بختم وتشفير متسلسل" },
];

/**
 * Local-only background (rights unverified, git-ignored): the FULL uncropped 2400x1200 original with the
 * design's 62% black overlay already baked in (do not add another overlay). The source JPEG/SVG are kept
 * under design-reference/assets/phase-05/metrics/.
 */
export const metricsBackground = {
  src: "/images/metrics/metrics-full-dark-2400x1200.webp",
  width: 2400,
  height: 1200,
} as const;
