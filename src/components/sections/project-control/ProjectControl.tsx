import Image from "next/image";
import { projectControl } from "@/content/project-control";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ProjectControlSteps } from "./ProjectControlSteps";
import "./project-control.css";

const PANEL_PREFIX = "pc-panel-";

/**
 * «كل مشروع تحت سيطرتك من الطلب إلى الربح» — scroll-driven story, desktop two-column RTL:
 * a sticky principles list (right) and a normally scrolling story (left).
 *
 * No scroll hijacking, no autoplay: the story is ordinary document flow, the list is
 * `position: sticky` (≥1024px and tall enough viewports), and the only JavaScript is the
 * small client list that highlights the item of the panel in view.
 *
 * INCOMPLETE CONTENT — see src/content/project-control.ts: only the first panel has supplied
 * material; the other seven steps render in the list only.
 */
export function ProjectControl() {
  const { title, description, steps } = projectControl;
  const panels = steps.filter((step) => step.panel);

  return (
    <section aria-labelledby="pc-title" className="pc">
      <div className="pc__inner">
        <header className="pc__head">
          <h2 id="pc-title" className="pc__title">
            {title}
          </h2>
          <p className="pc__description">{description}</p>
        </header>

        <div className="pc__grid">
          <div className="pc__aside">
            <ProjectControlSteps steps={steps} panelPrefix={PANEL_PREFIX} />
          </div>

          <div className="pc__story">
            {panels.map((step) => {
              const panel = step.panel!;
              return (
                <article
                  key={step.id}
                  id={PANEL_PREFIX + step.id}
                  className="pc-panel"
                  aria-label={step.label}
                >
                  {/* Placeholder (no image) is decorative: hidden from assistive tech. */}
                  <div
                    className="pc-panel__media"
                    aria-hidden={panel.image ? undefined : true}
                  >
                    {panel.image && (
                      <Image
                        src={panel.image.src}
                        alt={panel.image.alt}
                        width={panel.image.width}
                        height={panel.image.height}
                        sizes="(min-width: 1280px) 832px, calc(100vw - 2rem)"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <p className="pc-panel__caption">{panel.caption}</p>
                  {/* Inert: no approved destination yet. */}
                  <span className="pc-panel__cta">
                    {panel.ctaLabel}
                    <ArrowIcon />
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
