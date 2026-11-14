import { existsSync } from "node:fs";
import path from "node:path";
import { projectControl, storyPanel } from "@/content/project-control";
import { ProjectControlSteps } from "./ProjectControlSteps";
import { StoryPanel } from "./StoryPanel";
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
 * All eight panels repeat the ONE owner-approved story-panel composition (src/content/project-control.ts). The photo is
 * git-ignored (unverified rights): it is rendered only if the file exists locally, so a fresh clone
 * shows a neutral placeholder instead of a broken URL. Evaluated at build/render time (static page).
 */
function imageAvailable(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

export function ProjectControl() {
  const { title, description, steps } = projectControl;
  const hasImage = imageAvailable(storyPanel.image.src);

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
            {steps.map((step) => (
              <StoryPanel
                key={step.id}
                id={PANEL_PREFIX + step.id}
                label={step.label}
                imageAvailable={hasImage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
