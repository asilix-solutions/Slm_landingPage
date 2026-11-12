/**
 * Landing page composition root (Server Component).
 *
 * FOUNDATION SLICE: intentionally skeletal. Sections are added one slice at a
 * time from src/components/sections/ (Header + Hero next — see
 * docs/IMPLEMENTATION_PLAN.md). The temporary H1 below is replaced by the
 * approved Hero headline; no marketing copy is invented here.
 */
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <section
        aria-labelledby="page-title"
        className="container-page py-16"
      >
        <h1 id="page-title" className="font-display text-4xl" dir="ltr">
          Amanix
        </h1>
      </section>
    </main>
  );
}
