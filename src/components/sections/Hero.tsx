import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { NavAction } from "@/components/ui/NavAction";
import { headerActions } from "@/content/navigation";
import { heroContent } from "@/content/hero";
import "./hero.css";

/**
 * Hero (Server Component). Layout, crops, overlay gradients and card
 * positions come from the four reference screens (see hero.css).
 *
 * Layer order mirrors the reference file exactly:
 *   photo → card A → horizontal gradient → card B → vertical gradient → text
 *
 * The photograph is stationary. Only the inner `.hero-card__float` wrappers
 * animate (docs/HERO_SPEC.md); outer `.hero-card` wrappers carry position only.
 * The two card SVGs are the supplied originals, unmodified; their text is
 * outlined, so they are presentational (the product UI is illustrative).
 */
export function Hero() {
  const [lineOne, lineTwo] = heroContent.titleLines;

  return (
    <section id="hero" aria-labelledby="hero-title" className="hero">
      <div className="hero__stage">
        <div className="hero__media" aria-hidden="true">
          {/* Mirrored in the approved reference; the flip is baked into the file.
              hero-office.webp is a single-generation WebP q93 encoded from the lossless 1824x862 PNG
              embedded in the design export (docs/ASSET_MANIFEST.md). It is served as is: the default
              optimizer would re-encode it at q75 (a second lossy pass, ~4.7 dB worse) and cannot add
              resolution beyond the 1824px source anyway. */}
          <Image
            src="/images/hero/hero-office.webp"
            alt=""
            width={1824}
            height={862}
            unoptimized
            loading="eager"
            fetchPriority="high"
            className="hero__photo"
          />

          <div className="hero-card hero-card--a">
            <div className="hero-card__float">
              <Image
                src="/images/hero/card-matched-candidates.svg"
                alt=""
                width={283}
                height={231}
              />
            </div>
          </div>

          <div className="hero__shade hero__shade--side" />

          <div className="hero-card hero-card--b">
            <div className="hero-card__float">
              <Image
                src="/images/hero/card-contractor-profile.svg"
                alt=""
                width={329}
                height={170}
              />
            </div>
          </div>

          <div className="hero__shade hero__shade--bottom" />
        </div>

        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{lineOne}</span>
            <span className="hero__title-line">{lineTwo}</span>
          </h1>
          <p className="hero__description">{heroContent.description}</p>
          <div className="hero__actions">
            <NavAction href={headerActions.primary.href} className="btn btn-primary">
              {headerActions.primary.label}
              <ArrowIcon />
            </NavAction>
            <NavAction href={headerActions.secondary.href} className="btn btn-outline">
              {headerActions.secondary.label}
            </NavAction>
          </div>
        </div>

      </div>
    </section>
  );
}
