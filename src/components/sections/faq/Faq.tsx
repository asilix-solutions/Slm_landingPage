import { faq } from "@/content/faq";
import "./faq.css";

/**
 * FAQ — light section directly after the Metrics band (Server Component, no client JS).
 *
 * No approved answers exist yet (src/content/faq.ts), so the rows are static, non-interactive:
 * no button, no hover/pointer affordance, no fake expansion. The design's "+" (owner-requested,
 * provisional visual) is a purely decorative, aria-hidden SVG at the visual left (inline end in RTL).
 * Each question is an <h3> so that it can later host a disclosure button without changing the
 * heading outline.
 */
export function Faq() {
  const { title, items } = faq;

  return (
    <section aria-labelledby="faq-title" className="faq">
      <div className="faq__inner">
        <h2 id="faq-title" className="faq__title">
          {title}
        </h2>
        <ul className="faq__list">
          {items.map((item) => (
            <li key={item.id} className="faq__row">
              <h3 className="faq__question">{item.question}</h3>
              <svg
                className="faq__plus"
                aria-hidden="true"
                focusable="false"
                width="14"
                height="14"
                viewBox="104 239 14 14"
              >
                {/* Exact glyph from the reference: 14x14, 2px bars. */}
                <path d="M110 247H104V245H110V239H112V245H118V247H112V253H110Z" fill="currentColor" />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
