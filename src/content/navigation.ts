/**
 * Header navigation content.
 *
 * Labels were read from the rendered desktop reference (design-reference/screens)
 * because the SVG text is outlined; they are NOT confirmed copy (see
 * docs/DECISIONS_AND_OPEN_ITEMS.md, A07). Only destinations that exist in
 * the page are real links (`href`); the rest are `null` and render as honest, non-interactive text
 * until a destination is approved (B02).
 */
export type NavDestination = {
  readonly label: string;
  /** In-page anchor that exists in the DOM, or `null` while no destination is approved. */
  readonly href: string | null;
};

export const navItems: readonly (NavDestination & { readonly hasChevron: boolean })[] = [
  // The design shows a chevron on "الخدمات" (a dropdown). Its contents and target were never
  // supplied (no section is named "services"), so it is NOT linked: href null.
  { label: "الخدمات", href: null, hasChevron: true },
  // Real target: <section id="pricing"> in PricingPlans.
  { label: "الاسعار", href: "#pricing", hasChevron: false },
];

/** No registration / demo URL exists (CLAUDE.md: never invent registration APIs). */
export const headerActions: {
  readonly primary: NavDestination;
  readonly secondary: NavDestination;
} = {
  primary: { label: "سجل شركتك", href: null },
  secondary: { label: "تجربة المنصة", href: null },
};
