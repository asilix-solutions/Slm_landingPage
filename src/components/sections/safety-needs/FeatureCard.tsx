import Image from "next/image";
import type { FeatureIcon } from "@/content/safety-needs";

const ICONS: Record<FeatureIcon, { src: string; size: number }> = {
  "document-search": {
    src: "/images/safety-needs/icon-document-search.svg",
    size: 55,
  },
};

type FeatureCardProps = {
  icon: FeatureIcon | null;
  title: string;
  description: string;
  actionLabel: string;
};

/**
 * One feature card (Server Component, no state).
 *
 * The icon slot is always rendered so cards keep the reference proportions even
 * when an original icon has not been supplied (`icon: null` → empty slot,
 * never a substitute). The action is deliberately inert text — no approved
 * destination exists yet — so it is not a link and not focusable.
 */
export function FeatureCard({
  icon,
  title,
  description,
  actionLabel,
}: FeatureCardProps) {
  const art = icon ? ICONS[icon] : null;

  return (
    <li className="feature-card">
      <span className="feature-card__icon" aria-hidden="true">
        {art && (
          <Image
            src={art.src}
            alt=""
            width={art.size}
            height={art.size}
            unoptimized
          />
        )}
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{description}</p>
      <span className="feature-card__action">{actionLabel}</span>
    </li>
  );
}
