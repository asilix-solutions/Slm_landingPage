import type { Metadata, Viewport } from "next";
import { ibmPlexSansArabic, notoSansArabic } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

// Baseline metadata only. Final title/description/OG copy and the production
// domain (metadataBase) are pending approval — see docs/DECISIONS_AND_OPEN_ITEMS.md (O06).
export const metadata: Metadata = {
  title: {
    default: "Amanix",
    template: "%s | Amanix",
  },
  applicationName: "Amanix",
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
      </body>
    </html>
  );
}
