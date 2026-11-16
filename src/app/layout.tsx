import type { Metadata, Viewport } from "next";
import { ibmPlexSansArabic, notoSansArabic } from "@/lib/fonts";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteMeta } from "@/content/site-meta";
import "./globals.css";

// Metadata is built from src/content/site-meta.ts. Unapproved fields (description, domain, social
// image, final brand) are null there and simply omitted here — see docs/DECISIONS_AND_OPEN_ITEMS.md.
export const metadata: Metadata = {
  title: {
    default: siteMeta.name,
    template: `%s | ${siteMeta.name}`,
  },
  applicationName: siteMeta.name,
  ...(siteMeta.description && { description: siteMeta.description }),
  ...(siteMeta.siteUrl && { metadataBase: new URL(siteMeta.siteUrl) }),
  ...(siteMeta.ogImage && {
    openGraph: { siteName: siteMeta.name, type: "website", images: [siteMeta.ogImage] },
  }),
  // No approved launch yet: keep crawlers out (flip `indexable` in site-meta.ts when approved).
  robots: siteMeta.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body className="min-h-dvh bg-surface font-body text-ink antialiased">
        <a href="#main-content" className="skip-link">
          تخطَّ إلى المحتوى الرئيسي
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
