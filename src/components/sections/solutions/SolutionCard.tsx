import Image from "next/image";
import type { SolutionItem } from "@/content/solutions";

/**
 * One carousel card (Server Component). The card is not a link: no destination
 * is approved. When `image` is null (originals not supplied) the media area is a
 * neutral placeholder block — never a cropped screenshot or a stock photo.
 * The red gradient is part of the supplied image; no overlay is applied here.
 */
export function SolutionCard({
  title,
  image,
  repeated = false,
}: Pick<SolutionItem, "title" | "image"> & { repeated?: boolean }) {
  return (
    <li
      className="solution-card"
      data-snap-item=""
      aria-hidden={repeated ? true : undefined}
    >
      <div className="solution-card__media" aria-hidden={image ? undefined : true}>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            /* The supplied WebP (810x546 = 2x of the 405x273 card) is already optimized;
               re-encoding it through the image optimizer would only lose quality. */
            unoptimized
            draggable={false}
            loading="lazy"
          />
        )}
      </div>
      <h3 className="solution-card__title">{title}</h3>
    </li>
  );
}
