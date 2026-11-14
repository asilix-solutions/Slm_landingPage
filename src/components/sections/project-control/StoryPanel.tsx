import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { storyPanel } from "@/content/project-control";

type Props = {
  /** Full DOM id of the article (unique per step). */
  id: string;
  /** The step label: the panel's visually hidden heading / accessible name. */
  label: string;
  /** Whether the (git-ignored) photo exists locally; false => neutral placeholder. */
  imageAvailable: boolean;
};

/**
 * One story panel (Server Component). Every step renders this IDENTICAL composition — image,
 * caption and CTA — from the single `storyPanel` source (owner-approved). Only the id and the
 * hidden heading differ per instance.
 */
export function StoryPanel({ id, label, imageAvailable }: Props) {
  const { image, caption, ctaLabel } = storyPanel;
  const titleId = `${id}-title`;

  return (
    <article id={id} className="pc-panel" aria-labelledby={titleId}>
      <h3 id={titleId} className="sr-only">
        {label}
      </h3>
      {/* Placeholder (no image) is decorative: hidden from assistive tech. */}
      <div className="pc-panel__media" aria-hidden={imageAvailable ? undefined : true}>
        {imageAvailable && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 832px, calc(100vw - 2rem)"
            loading="lazy"
          />
        )}
      </div>
      <p className="pc-panel__caption">{caption}</p>
      {/* Inert: no approved destination yet (acceptance blocker) — no href, no fake navigation. */}
      <span className="pc-panel__cta">
        {ctaLabel}
        <ArrowIcon />
      </span>
    </article>
  );
}
