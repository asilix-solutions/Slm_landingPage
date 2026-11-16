/**
 * Footer content — Phase 08.
 *
 * !! PROVISIONAL !! Every string is transcribed from the outlined-path reference
 * (design-reference/assets/phase-08/footer/source-exports/footer-full-reference-1440x540.svg);
 * none of it is owner-approved (docs/PHASE08_FOOTER_COPY_AND_LINKS.md).
 *
 * NO DESTINATIONS EXIST. No item carries an `href` on purpose: no verified internal anchor exists
 * (the header's #services / #pricing placeholders point at ids that are not in the page) and no
 * resource, company, legal or social URL has been supplied. Items render as plain text — no link,
 * no hover/pointer state. When a destination is approved, add `href` to that item and render it as
 * an <a> with a >=44px hit area.
 *
 * OPEN COPY DECISIONS
 *  - Brand: the white logo reads «سلم SLM» while the copyright reads «أمانكس». Preserved as in the
 *    reference, not normalised.
 *  - «الاسعار» is the reference spelling; «الأسعار» needs designer confirmation.
 *  - Copyright owner and year (2026) are unconfirmed.
 *
 * Order = DOM order = right-to-left visual order in the RTL footer.
 */

export interface FooterColumn {
  readonly id: string;
  readonly title: string;
  readonly items: readonly string[];
}

export const footerColumns: readonly FooterColumn[] = [
  { id: "customers", title: "للعملاء", items: ["خدماتنا", "الاسعار"] },
  { id: "resources", title: "موارد", items: ["المساعدة والدعم", "قسم المعرفة"] },
  { id: "company", title: "شركة", items: ["معلومات عنا", "اتصل بنا", "الثقة والأمن والأمان"] },
];

/** Visual right-to-left order as in the reference. Icons only: no profile URLs are known. */
export const footerSocial = {
  label: "تابعنا",
  platforms: [
    { id: "instagram", src: "/images/footer/social-instagram.svg" },
    { id: "youtube", src: "/images/footer/social-youtube.svg" },
    { id: "x", src: "/images/footer/social-x.svg" },
    { id: "linkedin", src: "/images/footer/social-linkedin.svg" },
    { id: "facebook", src: "/images/footer/social-facebook.svg" },
  ],
} as const;

export const footerLegal = {
  copyright: "جميع الحقوق محفوظة لشركة أمانكس © 2026",
  items: ["شروط الخدمة", "سياسة الخصوصية", "إمكانية الوصول"],
} as const;

export const footerAssets = {
  logo: { src: "/brand/footer-logo-white.svg", width: 594, height: 229 },
  decoration: { src: "/images/footer/footer-decorative-slm.svg", width: 209, height: 423 },
} as const;
