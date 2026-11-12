/**
 * Invisible marker that tells the header where the dark intro region ends.
 *
 * Render it as a direct child of the region's `position: relative` root — today
 * `.dark-intro` in src/app/page.tsx, which wraps the photographic Hero AND the
 * trust strip, so the header stays transparent over both. The marker sits
 * `--header-h + 80px` above the region's bottom edge (see `.hero-boundary` in
 * globals.css); see HeaderScrollObserver for how it is used.
 */
export function HeroBoundary() {
  return (
    <div
      data-header-boundary=""
      aria-hidden="true"
      className="hero-boundary"
    />
  );
}
