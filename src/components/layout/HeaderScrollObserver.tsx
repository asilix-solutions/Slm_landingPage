"use client";

import { useEffect } from "react";

/**
 * Switches the site header between its transparent (over the Hero) and white
 * (after the Hero) states by setting `data-scrolled` on it.
 *
 * It watches the Hero boundary marker (`<HeroBoundary />`, an element inside
 * the Hero positioned `header-height + 80px` above the Hero's bottom edge, so
 * the offset is pure CSS and follows every breakpoint/Hero height). The header
 * turns white the moment the marker leaves through the TOP of the viewport,
 * i.e. when the Hero's bottom edge is ~80px below the header's bottom edge,
 * and turns transparent again when the marker re-enters.
 *
 * One IntersectionObserver, no scroll listener, no React state: the attribute
 * is written only when the marker's side actually flips. A page without a Hero
 * marker keeps the header white.
 *
 * (Observed once on mount: the app has a single route today. If more routes
 * with different Heroes are added, re-run on pathname change.)
 */
export function HeaderScrollObserver({ headerId }: { headerId: string }) {
  useEffect(() => {
    const header = document.getElementById(headerId);
    if (!header) return;

    const boundary = document.querySelector("[data-header-boundary]");
    if (!boundary) {
      header.dataset.scrolled = "true";
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Not intersecting + above the viewport => Hero (almost) finished.
      // Not intersecting + below the viewport => still well inside the Hero.
      const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      header.dataset.scrolled = String(pastHero);
    });
    observer.observe(boundary);
    return () => observer.disconnect();
  }, [headerId]);

  return null;
}
