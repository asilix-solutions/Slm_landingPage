import { solutions } from "@/content/solutions";
import { SolutionCard } from "./SolutionCard";
import { SolutionsCarouselControls } from "./SolutionsCarouselControls";
import "./solutions.css";

const SCROLLER_ID = "solutions-scroller";

/**
 * TEMPORARY (owner-authorised): the three approved cards are rendered twice, in the same
 * order, so the carousel has real overflow while only three solutions exist. The repeat is
 * purely presentational: copies are hidden from assistive technology (identical text would
 * be announced twice), reuse the same image files (no extra downloads) and carry unique
 * keys. Set to 1 — or delete — once additional approved solutions are supplied.
 */
const TEMPORARY_REPEAT = 2;

/**
 * «حلول سلم تدعمك» — user-controlled horizontal carousel (light section).
 *
 * Server Component. The scroller is a native overflow-x / scroll-snap element,
 * keyboard-focusable, with no autoplay and no duplicated items. The small client
 * component only adds previous/next buttons and a progress bar that mirror the
 * scroll position.
 *
 * CONTENT/MEDIA INCOMPLETE — see src/content/solutions.ts: original images and
 * the title↔image mapping were not supplied, so cards show a neutral image
 * placeholder and no card is a link.
 */
export function SolutionsCarousel() {
  const { title, items } = solutions;
  const cards = Array.from({ length: TEMPORARY_REPEAT }, (_, copy) =>
    items.map((item) => ({ item, copy, key: `${item.id}-${copy}` })),
  ).flat();

  return (
    <section aria-labelledby="solutions-title" className="solutions">
      <h2 id="solutions-title" className="solutions__title">
        {title}
      </h2>

      <SolutionsCarouselControls scrollerId={SCROLLER_ID} />

      {/* Focusable so keyboard users can scroll it with the arrow keys. */}
      <div
        id={SCROLLER_ID}
        className="solutions__scroller"
        role="region"
        aria-labelledby="solutions-title"
        tabIndex={0}
      >
        <ul className="solutions__track">
          {cards.map(({ item, copy, key }) => (
            <SolutionCard
              key={key}
              title={item.title}
              image={item.image}
              repeated={copy > 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
