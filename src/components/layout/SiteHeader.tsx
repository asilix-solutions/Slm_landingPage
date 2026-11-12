import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { headerActions, navItems } from "@/content/navigation";
import { HeaderScrollObserver } from "./HeaderScrollObserver";
import { MobileMenu } from "./MobileMenu";

const HEADER_ID = "site-header";

/**
 * Fixed site header with two visual states driven by `data-scrolled`
 * (see `.site-header` in globals.css):
 *  - over the Hero: transparent, light foreground, light logo (Variant2)
 *  - past the Hero (HeroBoundary marker ~80px before the Hero ends) or while the
 *    mobile menu is open: white, navy foreground, Default logo
 *
 * Server Component. Only HeaderScrollObserver and MobileMenu are client code.
 * Logos are the supplied originals, unmodified; both are always rendered and
 * cross-faded with opacity so the swap never shifts layout.
 */
export function SiteHeader() {
  return (
    <>
      <HeaderScrollObserver headerId={HEADER_ID} />
      <header id={HEADER_ID} className="site-header" data-scrolled="false">
        <div className="container-page site-header__bar">
          <Link href="/" className="site-logo" aria-label="الصفحة الرئيسية">
            <Image
              src="/brand/logo-on-dark.svg"
              alt=""
              width={594}
              height={229}
              loading="eager"
              className="site-logo__img site-logo__img--on-dark"
            />
            <Image
              src="/brand/logo-on-light.svg"
              alt=""
              width={594}
              height={229}
              loading="eager"
              className="site-logo__img site-logo__img--on-light"
            />
          </Link>

          <nav aria-label="التنقل الرئيسي" className="site-nav">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="site-nav__link">
                    {item.label}
                    {item.hasChevron && <ChevronIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-actions">
            <a href={headerActions.primary.href} className="btn btn-primary">
              {headerActions.primary.label}
              <ArrowIcon />
            </a>
            <a href={headerActions.secondary.href} className="btn btn-outline">
              {headerActions.secondary.label}
            </a>
          </div>

          <MobileMenu />
        </div>
      </header>
    </>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
