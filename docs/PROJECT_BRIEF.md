# Amanix — Product & Engineering Brief

**Status:** planning baseline and reusable instructions; not implementation approval. **Design:** Figma `236:136206`. **Repo:** `asilix-solutions/Slm_landingPage` (empty at audit).

## North star
Deliver an authentic, accessible, high-performance Arabic RTL marketing landing page faithful to Amanix's Figma design, with a codebase maintainable by a small team over time.

## Product specifics observed
Target copy addresses Saudi safety contracting companies. Main hero advertises a free 14-day trial, a lead-generation form, and an integrated workflow for technical review/field operations/invoicing. The page also displays standards/regulatory claims (SBC 801, ZATCA) and a review rating.

These are **observations about design copy**, NOT validation of those claims or backend capabilities.

## Non-goals
- No dashboard, auth system or full SaaS product in this scope.
- No fabricated registration activation, payment processing or backend integration.
- No unapproved rewrite of marketing copy or visual identity.
- No SEO/blog CMS, complex state management or animation runtime without an explicit need.

## Technical shape
Next.js App Router + TypeScript strict + Tailwind CSS + controlled ESLint configuration. Prefer static rendering and isolated interactive client components. Use asset optimization, Next metadata, Arabic RTL and performance/accessibility checks.

## Release criterion
Visual fidelity AND working in-scope functionality AND measured technical quality AND verified claims/contracts. Figma fidelity alone is insufficient.
