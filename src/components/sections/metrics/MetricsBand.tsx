import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { metrics, metricsBackground } from "@/content/metrics";
import "./metrics.css";

/**
 * Dark metrics band (Server Component), directly after Project Control. The photo layer is viewport-fixed
 * and clipped to the section (pinned look, no extra height; see metrics.css), with a static fallback.
 *
 * The background photo has unverified redistribution rights and is git-ignored: it is rendered only
 * when the file exists at build time; clean clones get a coherent CSS gradient (no broken URL).
 * The supplied image already includes the design's 62% black overlay, so NO second overlay is added.
 * Text is real DOM text. The indicators are unverified (see src/content/metrics.ts).
 */
export function MetricsBand() {
  const hasImage = existsSync(path.join(process.cwd(), "public", metricsBackground.src));

  return (
    <section className="metrics">
      {/* Photo layer (fixed + section-clipped on desktop, absolute elsewhere): decorative. */}
      <div className="metrics__pin" aria-hidden="true">
        {hasImage && (
          <Image
            src={metricsBackground.src}
            alt=""
            width={metricsBackground.width}
            height={metricsBackground.height}
            /* The full 2400x1200 original (~76 KB, 62% black overlay baked in: no second overlay).
               `cover` can scale it beyond 100vw, which `sizes` cannot express, so the optimizer
               would pick a too-small variant: serve the file as is. */
            unoptimized
            className="metrics__bg"
            loading="lazy"
          />
        )}
      </div>
      <div className="metrics__inner">
        <div className="metrics__list-wrap">
          <dl className="metrics__list">
            {metrics.map((metric) => (
              <div key={metric.value} className="metrics__item">
                <dt className="metrics__value" dir="ltr">
                  {metric.value}
                </dt>
                <dd className="metrics__desc">{metric.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
