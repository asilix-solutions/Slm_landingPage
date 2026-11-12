import { IBM_Plex_Sans_Arabic, Noto_Sans_Arabic } from "next/font/google";

/**
 * Approved Amanix typography (see .claude/rules/typography.md).
 *
 * - Noto Sans Arabic: default for body, UI and ordinary headings.
 *   Variable font (wght 100–900), so no static weight list is needed.
 * - IBM Plex Sans Arabic: display-only (very large Hero headline).
 *   Not variable on Google Fonts, so only the weight(s) actually used are
 *   loaded. 700 is PROVISIONAL until the Hero slice confirms the design weight
 *   (see docs/DECISIONS_AND_OPEN_ITEMS.md, A03).
 *
 * `subsets` only controls which faces are preloaded; the Latin faces are still
 * declared via unicode-range and fetched on demand for mixed Arabic/English
 * text (e.g. "Amanix", Latin numerals).
 *
 * next/font self-hosts the files at build time: the browser sends no requests
 * to Google.
 */
export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-arabic",
  fallback: ["Tahoma", "Segoe UI", "Arial", "sans-serif"],
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["700"],
  display: "swap",
  variable: "--font-ibm-plex-arabic",
  fallback: ["Tahoma", "Segoe UI", "Arial", "sans-serif"],
});
