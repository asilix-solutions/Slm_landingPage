import Image from "next/image";
import type { SolutionItem } from "@/content/solutions";

/**
 * One carousel card (Server Component). The card is not a link: no destination
 * is approved. When `image` is null (originals not supplied) the media area is a
 * neutral placeholder block — never a cropped screenshot or a stock photo.
 */
export function SolutionCard({ title, image }: Pick<SolutionItem, "title" | "image">) {
  return (
    <li className="solution-card" data-snap-item="">
      <div className="solution-card__media" aria-hidden={image ? undefined : true}>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1440px) 405px, 78vw"
            loading="lazy"
          />
        )}
      </div>
      <h3 className="solution-card__title">{title}</h3>
    </li>
  );
}
