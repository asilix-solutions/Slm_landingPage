import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { qna, qnaImage } from "@/content/qna";
import "./qna.css";

/** Genuine vector diamond from the design (qna-diamond-icon-10x12.svg), inlined: no file dependency. */
function Diamond({ className }: { className: string }) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" width="10" height="12" viewBox="0 0 10 12" fill="none">
      <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="#171717" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className="qna__chevron" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d={open ? "M4 10l4-4 4 4" : "M4 6l4 4 4-4"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Q&A Center — light section after Pricing (Server Component, no client JS).
 * No approved answers exist (src/content/qna.ts): rows are static (no button, no hover/pointer
 * affordance); the chevrons are decorative. A row shows its answer + up chevron only when an
 * approved `answer` is supplied. The dashboard image is git-ignored local media (rights unverified):
 * rendered only when the file exists, so a clean clone shows the empty frame without a broken URL.
 */
export function QnaCenter() {
  const { eyebrow, title, subtitle, items } = qna;
  const hasImage = existsSync(path.join(process.cwd(), "public", qnaImage.src));

  return (
    <section aria-labelledby="qna-title" className="qna">
      <div className="qna__inner">
        <header className="qna__head">
          <p className="qna__eyebrow">{eyebrow}</p>
          <h2 id="qna-title" className="qna__title">
            {title}
          </h2>
          <p className="qna__subtitle">{subtitle}</p>
        </header>

        <div className="qna__body">
          <ul className="qna__list">
            {items.map((item) => (
              <li key={item.id} className="qna__row">
                <div className="qna__row-head">
                  <h3 className="qna__question">{item.question}</h3>
                  <Chevron open={item.answer !== null} />
                </div>
                {item.answer !== null && <p className="qna__answer">{item.answer}</p>}
              </li>
            ))}
          </ul>

          {/* Decorative product screenshot in its light frame (visual left in RTL). */}
          <div className="qna__media" aria-hidden="true">
            <Diamond className="qna__diamond qna__diamond--tl" />
            <Diamond className="qna__diamond qna__diamond--tr" />
            <Diamond className="qna__diamond qna__diamond--bl" />
            <Diamond className="qna__diamond qna__diamond--br" />
            {hasImage && (
              <Image
                className="qna__img"
                src={qnaImage.src}
                alt=""
                width={qnaImage.width}
                height={qnaImage.height}
                /* Lossless WebP already: serve as is (no optimizer recompression). */
                unoptimized
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
