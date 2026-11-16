"use client";

import { useEffect, useState } from "react";
import type { ProjectControlStep } from "@/content/project-control";

type Props = {
  steps: readonly ProjectControlStep[];
  /** id prefix of the story panels: `${panelPrefix}${step.id}` */
  panelPrefix: string;
};

/**
 * The right-hand (RTL start) principles list. Highlights the item whose story panel is in
 * the middle band of the viewport.
 *
 * Only this component is client code. One IntersectionObserver watches the panels — no
 * scroll listener, no per-frame work; React state changes only when the active panel
 * actually changes. The active item gets `aria-current="true"` (no live region, so
 * assistive technology is not interrupted while scrolling). Every item is a real
 * in-page link to its panel.
 */
export function ProjectControlSteps({ steps, panelPrefix }: Props) {
  const [activeId, setActiveId] = useState<string | null>(steps[0]?.id ?? null);

  useEffect(() => {
    const panels = steps
      .map((step) => ({ id: step.id, el: document.getElementById(panelPrefix + step.id) }))
      .filter((entry): entry is { id: string; el: HTMLElement } => entry.el !== null);
    if (panels.length === 0) return;

    const inBand = new Set<string>();
    let lastFullyVisible = false;
    const lastPanel = panels[panels.length - 1];

    const update = () => {
      // The final panel can never reach the middle band when the section ends near the bottom of
      // the viewport (single column, tall viewports). Once it is completely on screen it is the
      // active one. Otherwise: first panel (document order) inside the band; keep the previous one
      // between panels.
      const next = lastFullyVisible
        ? lastPanel.id
        : panels.find((panel) => inBand.has(panel.id))?.id;
      if (next) setActiveId(next);
    };

    const bandObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = panels.find((panel) => panel.el === entry.target)?.id;
          if (!id) continue;
          if (entry.isIntersecting) inBand.add(id);
          else inBand.delete(id);
        }
        update();
      },
      // A thin band across the middle of the viewport (below the fixed header).
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );
    const lastObserver = new IntersectionObserver(
      ([entry]) => {
        lastFullyVisible = entry.isIntersecting;
        update();
      },
      { threshold: 1 },
    );
    panels.forEach((panel) => bandObserver.observe(panel.el));
    lastObserver.observe(lastPanel.el);
    return () => {
      bandObserver.disconnect();
      lastObserver.disconnect();
    };
  }, [steps, panelPrefix]);

  return (
    <ul className="pc-steps">
      {steps.map((step) => {
        const active = step.id === activeId;
        return (
          <li
            key={step.id}
            className="pc-steps__item"
            data-active={active ? "true" : undefined}
          >
            <a
              href={`#${panelPrefix}${step.id}`}
              className="pc-steps__label"
              aria-current={active ? "true" : undefined}
            >
              {step.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
