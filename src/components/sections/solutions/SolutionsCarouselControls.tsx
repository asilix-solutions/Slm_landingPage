"use client";

import { useEffect, useRef, useState } from "react";

type Props = { scrollerId: string };

/**
 * The only client code of the section: previous/next buttons and a progress bar
 * that mirror the position of the native scroll container (`scrollerId`).
 *
 * The scroller itself stays a plain overflow-x / scroll-snap element (touch,
 * trackpad, wheel and keyboard all work without this component). This only adds
 * a pointer-friendly alternative to dragging and a real progress indicator.
 * Scroll position is written straight to CSS variables (no React state per
 * scroll event); state changes only when a boundary/overflow flips.
 * Smooth scrolling is requested only when the user has not asked for reduced
 * motion.
 */
export function SolutionsCarouselControls({ scrollerId }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ overflow: false, atStart: true, atEnd: true });

  useEffect(() => {
    const scroller = document.getElementById(scrollerId);
    const track = trackRef.current;
    if (!scroller || !track) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const pos = Math.min(Math.abs(scroller.scrollLeft), Math.max(max, 0));
      const visible = scroller.scrollWidth > 0 ? scroller.clientWidth / scroller.scrollWidth : 1;
      track.style.setProperty("--vis", String(Math.min(1, visible)));
      track.style.setProperty("--p", String(max > 1 ? pos / max : 0));
      const next = {
        overflow: max > 1,
        atStart: pos < 2,
        atEnd: pos > max - 2,
      };
      setEdges((prev) =>
        prev.overflow === next.overflow &&
        prev.atStart === next.atStart &&
        prev.atEnd === next.atEnd
          ? prev
          : next,
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", schedule, { passive: true });
    const observer = new ResizeObserver(schedule);
    observer.observe(scroller);
    return () => {
      scroller.removeEventListener("scroll", schedule);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scrollerId]);

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = document.getElementById(scrollerId);
    if (!scroller) return;
    const items = scroller.querySelectorAll<HTMLElement>("[data-snap-item]");
    const step =
      items.length > 1
        ? Math.abs(items[1].offsetLeft - items[0].offsetLeft)
        : scroller.clientWidth * 0.8;
    const smooth = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    // Physical axis: "next" in RTL moves toward the left (negative scrollLeft).
    scroller.scrollBy({ left: -direction * step, behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <>
      <div ref={trackRef} className="solutions__progress" aria-hidden="true">
        <span className="solutions__progress-thumb" />
      </div>
      <div className="solutions__buttons" hidden={!edges.overflow}>
        <button
          type="button"
          className="solutions__button"
          aria-label="السابق"
          disabled={edges.atStart}
          onClick={() => scrollByCard(-1)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <button
          type="button"
          className="solutions__button"
          aria-label="التالي"
          disabled={edges.atEnd}
          onClick={() => scrollByCard(1)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
