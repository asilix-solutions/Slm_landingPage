/**
 * Invisible marker that tells the header where the Hero ends.
 *
 * Render it as a direct child of the Hero's `position: relative` root. It sits
 * `--header-h + 80px` above the Hero's bottom edge (see `.hero-boundary` in
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
