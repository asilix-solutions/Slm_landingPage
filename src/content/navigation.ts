/**
 * Header navigation content.
 *
 * Labels were read from the rendered desktop reference (design-reference/screens)
 * because the SVG text is outlined; they are NOT confirmed copy (see
 * docs/DECISIONS_AND_OPEN_ITEMS.md, A07). Hrefs are placeholders: destinations
 * are not yet supplied (B02).
 */
export const navItems = [
  // The design shows a chevron on "الخدمات" (a dropdown). Its contents are not
  // supplied, so for now it is a plain in-page link.
  { label: "الخدمات", href: "#services", hasChevron: true },
  { label: "الاسعار", href: "#pricing", hasChevron: false },
] as const;

export const headerActions = {
  primary: { label: "سجل شركتك", href: "#register" },
  secondary: { label: "تجربة المنصة", href: "#platform-demo" },
} as const;
