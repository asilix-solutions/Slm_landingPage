import { Hero } from "@/components/sections/Hero";

/**
 * Landing page composition root (Server Component).
 * Sections are added one slice at a time (docs/IMPLEMENTATION_PLAN.md).
 */
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <Hero />
    </main>
  );
}
