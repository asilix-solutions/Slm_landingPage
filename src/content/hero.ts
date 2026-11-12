/**
 * Hero copy.
 *
 * Read from the rendered references (design-reference/screens) because their
 * text is outlined — NOT confirmed copy, transcribed exactly as shown
 * (including its spacing/spelling). See docs/DECISIONS_AND_OPEN_ITEMS.md (A14).
 * CTA destinations are placeholders (B02); the same two actions appear in the
 * header, see src/content/navigation.ts.
 */
export const heroContent = {
  // Rendered on two lines in every reference (explicit break after "..").
  titleLines: ["ادارة السلامة من الحرائق..", "أصبحت سهلة"],
  description:
    "أنشئ منصتك للسلامة في دقائق، واقنع المنشآت لاختيارك  كشريك لانظمة الحماية والتوريد، والتركيب، بكل سهولة لأن نجاحك لايحتاج إلى تعقيد",
} as const;
