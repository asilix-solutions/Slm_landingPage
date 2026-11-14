import { HeroBoundary } from "@/components/layout/HeroBoundary";
import { Hero } from "@/components/sections/Hero";
import { SolutionsCarousel } from "@/components/sections/solutions/SolutionsCarousel";
import { MetricsBand } from "@/components/sections/metrics/MetricsBand";
import { ProjectControl } from "@/components/sections/project-control/ProjectControl";
import { SafetyNeeds } from "@/components/sections/safety-needs/SafetyNeeds";
import { TrustStrip } from "@/components/sections/TrustStrip";

/**
 * Landing page composition root (Server Component).
 * Sections are added one slice at a time (docs/IMPLEMENTATION_PLAN.md).
 *
 * The photographic Hero and the trust strip form ONE dark region
 * (.dark-intro). The header boundary marker lives at the end of that region,
 * so the header stays transparent over both and turns white just before the
 * following light section.
 */
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <div className="dark-intro">
        <Hero />
        <TrustStrip />
        <HeroBoundary />
      </div>
      <SafetyNeeds />
      <SolutionsCarousel />
      <ProjectControl />
      <MetricsBand />
    </main>
  );
}
