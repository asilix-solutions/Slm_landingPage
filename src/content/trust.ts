/**
 * Trust strip content.
 *
 * !! NOT APPROVED FOR PUBLIC RELEASE !!
 * - Logo files: the six below are the originals supplied by the designer in
 *   design-reference/assets/phase-03/trust-strip/logos/ (raster wrapped in SVG),
 *   re-exported unchanged as lossless WebP at 3x display size
 *   (public/images/trust-strip/). Not yet verified: usage rights, and whether
 *   each mark is currently valid/licensed for Amanix.
 * - Captions use wording such as «معتمد» / «عضو» / «متوافق» / «معتمدة». They were
 *   read from the Figma capture (design-reference/assets/phase-03/
 *   trust-strip-full-figma-capture.png). They are business/legal claims and
 *   have NOT been confirmed by the business.
 * - The reference also shows «FM» (مكونات معتمدة FM) and «الدفاع المدني»
 *   (معتمد الدفاع المدني). Their logo files were NOT supplied, so they are
 *   deliberately omitted — do not draw, trace or crop them from the capture.
 *
 * Order = reading order in RTL (first item is rightmost), as in the reference
 * (FM, UL, NFPA, SAIS, SASO, ISO, GCC, Civil Defense → FM/Civil Defense missing).
 */
export const trustStrip = {
  title: "مُصمّم لشركات السلامة في السعودية",
  logos: [
    {
      id: "ul",
      src: "/images/trust-strip/ul.webp",
      width: 109,
      height: 144,
      caption: "منتجات معتمدة UL",
    },
    {
      id: "nfpa",
      src: "/images/trust-strip/nfpa.webp",
      width: 58,
      height: 61,
      caption: "عضو NFPA",
    },
    {
      id: "industrial-security",
      src: "/images/trust-strip/industrial-security.webp",
      width: 132,
      height: 144,
      caption: "الهيئة العليا للأمن الصناعي",
    },
    {
      id: "saso",
      src: "/images/trust-strip/saso.webp",
      width: 86,
      height: 144,
      caption: "متوافق مع SASO",
    },
    {
      id: "iso-9001",
      src: "/images/trust-strip/iso-9001.webp",
      width: 144,
      height: 140,
      caption: "معتمد ISO 9001",
    },
    {
      id: "gcc-lab",
      src: "/images/trust-strip/gcc-lab.webp",
      width: 144,
      height: 72,
      caption: "مختبر دول الخليج",
    },
  ],
} as const;
