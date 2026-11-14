import Image from "next/image";
import { footerAssets, footerColumns, footerLegal, footerSocial } from "@/content/footer";
import "./site-footer.css";

/**
 * Site footer (Server Component, no client JS).
 *
 * Two layout levels, as specified: a full-width white shell (24px margin at the 1440 reference)
 * and a dark rounded card whose inner lane (max 1232px) is centred. The card is NOT placed in the
 * shared 1280px container.
 *
 * No destinations are approved (src/content/footer.ts), so every item is plain text: no <a>, no
 * hover/pointer styling. The social icons are decorative (aria-hidden) for the same reason.
 * Vector assets are served as-is (`unoptimized`): SVG is never re-encoded.
 */
export function SiteFooter() {
  const { logo, decoration } = footerAssets;

  return (
    <footer className="site-footer">
      <div className="site-footer__card">
        {/* Decorative orange outline, clipped by the card's radius + overflow. */}
        <Image
          className="site-footer__deco"
          src={decoration.src}
          alt=""
          width={decoration.width}
          height={decoration.height}
          unoptimized
          aria-hidden="true"
        />

        <div className="site-footer__lane">
          <div className="site-footer__top">
            <Image
              className="site-footer__logo"
              src={logo.src}
              alt="سلم SLM"
              width={logo.width}
              height={logo.height}
              unoptimized
            />

            <nav className="site-footer__nav" aria-label="روابط التذييل">
              {footerColumns.map((column) => (
                <div key={column.id} className="site-footer__col">
                  <h2 className="site-footer__col-title">{column.title}</h2>
                  <ul className="site-footer__list">
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="site-footer__social">
            <span className="site-footer__social-label">{footerSocial.label}</span>
            <ul className="site-footer__icons" aria-hidden="true">
              {footerSocial.platforms.map((platform) => (
                <li key={platform.id}>
                  <Image src={platform.src} alt="" width={24} height={24} unoptimized />
                </li>
              ))}
            </ul>
          </div>

          <hr className="site-footer__rule" />

          <div className="site-footer__legal">
            <p className="site-footer__copyright">{footerLegal.copyright}</p>
            <ul className="site-footer__legal-list">
              {footerLegal.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
