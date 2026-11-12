import Image from "next/image";
import { trustStrip } from "@/content/trust";
import "./trust-strip.css";

/** Number of identical groups in the marquee track (see trust-strip.css). */
const GROUPS = 5;

/**
 * Black trust-logo strip: the visual continuation of the dark Hero.
 * Server Component; CSS-only marquee (no client JS, no state).
 *
 * Marquee mechanics: the track holds GROUPS identical groups; it translates by
 * exactly one group width (`--n` items × `--pitch`), so the loop is seamless.
 * Only the first group is exposed to assistive technology; the others are
 * `aria-hidden`. Logos are decorative (`alt=""`): each caption already names
 * the mark, so nothing is announced twice. Reduced motion: no movement, only
 * the first group is shown, wrapped and centred (nothing is clipped).
 *
 * CONTENT IS NOT APPROVED FOR PUBLIC RELEASE — see src/content/trust.ts.
 */
export function TrustStrip() {
  const { title, logos } = trustStrip;

  return (
    <section
      aria-labelledby="trust-title"
      className="trust"
      style={{ "--n": logos.length } as React.CSSProperties}
    >
      <h2 id="trust-title" className="trust__title">
        {title}
      </h2>

      <div className="trust__viewport">
        <div className="trust__track">
          {Array.from({ length: GROUPS }, (_, group) => (
            <ul
              key={group}
              className="trust__group"
              aria-hidden={group > 0 ? true : undefined}
            >
              {logos.map((logo) => (
                <li key={logo.id} className="trust__item">
                  <div className="trust__card">
                    <span className="trust__logo">
                      <Image
                        src={logo.src}
                        alt=""
                        width={logo.width}
                        height={logo.height}
                        unoptimized
                        draggable={false}
                      />
                    </span>
                    <span className="trust__caption">{logo.caption}</span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
