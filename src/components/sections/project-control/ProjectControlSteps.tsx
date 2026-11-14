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
 * assistive technology is not interrupted while scrolling). Items with a panel are real
 * in-page links; items without one (material not supplied yet) are plain text.
 */
export function ProjectControlSteps({ steps, panelPrefix }: Props) {
  const firstWithPanel = steps.find((step) => step.panel)?.id ?? null;
  const [activeId, setActiveId] = useState<string | null>(firstWithPanel);

  useEffect(() => {
    const panels = steps
      .filter((step) => step.panel)
      .map((step) => ({ id: step.id, el: document.getElementById(panelPrefix + step.id) }))
      .filter((entry): entry is { id: string; el: HTMLElement } => entry.el !== null);
    if (panels.length === 0) return;

    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = panels.find((panel) => panel.el === entry.target)?.id;
          if (!id) continue;
          if (entry.isIntersecting) inBand.add(id);
          else inBand.delete(id);
        }
        // First panel (document order) inside the band; keep the previous one between panels.
        const next = panels.find((panel) => inBand.has(panel.id))?.id;
        if (next) setActiveId(next);
      },
      // A thin band across the middle of the viewport (below the fixed header).
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );
    panels.forEach((panel) => observer.observe(panel.el));
    return () => observer.disconnect();
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
            {step.panel ? (
              <a
                href={`#${panelPrefix}${step.id}`}
                className="pc-steps__label"
                aria-current={active ? "true" : undefined}
              >
                {step.label}
              </a>
            ) : (
              <span className="pc-steps__label">{step.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
