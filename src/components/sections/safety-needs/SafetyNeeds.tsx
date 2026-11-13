import Image from "next/image";
import { safetyNeeds } from "@/content/safety-needs";
import { FeatureCard } from "./FeatureCard";
import "./safety-needs.css";

/**
 * "كل ما تحتاجه شركة السلامة" — white features section after the dark intro.
 * Server Component. Layout measured from the Figma capture
 * (design-reference/assets/phase-03/*) — see safety-needs.css.
 *
 * The large decorative SLM mark is the supplied original SVG, unmodified,
 * placed behind the cards: purely decorative (`aria-hidden`, empty alt, no
 * pointer events), with explicit width/height so it cannot shift layout.
 *
 * CONTENT IS NOT APPROVED FOR PUBLIC RELEASE — see src/content/safety-needs.ts.
 */
export function SafetyNeeds() {
  const { title, actionLabel, cards } = safetyNeeds;

  return (
    <section aria-labelledby="needs-title" className="needs">
      <div className="needs__art" aria-hidden="true">
        <Image
          src="/images/safety-needs/background-mark.svg"
          alt=""
          width={607}
          height={1260}
          unoptimized
        />
      </div>

      <div className="needs__inner">
        <h2 id="needs-title" className="needs__title">
          {title}
        </h2>
        <ul className="needs__grid">
          {cards.map((card) => (
            <FeatureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              actionLabel={actionLabel}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
