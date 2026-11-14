import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { pricing, type PricingPlan } from "@/content/pricing";
import "./pricing.css";

/**
 * Decorative wave: pure-vector SVG (two filled paths + two linear gradients, no embedded bitmap),
 * a geometric re-trace of the design's artwork (the original export is a raster-in-SVG wrapper).
 * 1440x756 is the design's box; it is never enlarged (see pricing.css).
 */
const wave = { src: "/images/pricing/pricing-wave-true-vector.svg", width: 1440, height: 756 } as const;

function CheckIcon() {
  return (
    <svg className="plan__check" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="plan__arrow" aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M15 9H3m0 0l5-5M3 9l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan, ctaLabel }: { plan: PricingPlan; ctaLabel: string }) {
  const titleId = `plan-${plan.id}-title`;
  return (
    <li className="plan-slot">
      <article className="plan" aria-labelledby={titleId} data-featured={plan.featured ? "true" : undefined}>
        {plan.badge && <span className="plan__badge">{plan.badge}</span>}
        <h3 id={titleId} className="plan__name">
          {plan.name}
        </h3>
        <p className="plan__desc">{plan.description}</p>
        <p className="plan__price">
          <span className="plan__amount">{plan.price.amount}</span>
          {plan.price.unit && <span className="plan__unit"> {plan.price.unit}</span>}
          {plan.price.period && <span className="plan__period">{plan.price.period}</span>}
        </p>
        <ul className="plan__features">
          {plan.features.map((feature) => (
            <li key={feature} className="plan__feature">
              <span>{feature}</span>
              <CheckIcon />
            </li>
          ))}
        </ul>
        {/* No approved destination: presentation only (no button, no link, no hover/pointer state). */}
        <p className="plan__cta">
          {plan.featured && <ArrowIcon />}
          <span>{ctaLabel}</span>
        </p>
      </article>
    </li>
  );
}

/**
 * Pricing plans — light section after the FAQ (Server Component, no client JS).
 * CONTENT IS PROVISIONAL (src/content/pricing.ts). The wave is git-ignored local media (rights
 * unverified), rendered only when the file exists so clean clones get a plain white section.
 */
export function PricingPlans() {
  const { title, subtitle, ctaLabel, compareLabel, plans } = pricing;
  const hasWave = existsSync(path.join(process.cwd(), "public", wave.src));

  return (
    <section aria-labelledby="pricing-title" className="pricing">
      {hasWave && (
        <div className="pricing__wave" aria-hidden="true">
          <Image src={wave.src} alt="" width={wave.width} height={wave.height} unoptimized loading="lazy" />
        </div>
      )}
      <div className="pricing__inner">
        <h2 id="pricing-title" className="pricing__title">
          {title}
        </h2>
        <p className="pricing__subtitle">{subtitle}</p>
        <ul className="pricing__grid">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} ctaLabel={ctaLabel} />
          ))}
        </ul>
        {/* Underlined as in the design, but no destination exists yet: plain text, not a link. */}
        <p className="pricing__compare">{compareLabel}</p>
      </div>
    </section>
  );
}
