# Architecture rules

- Use `src/app/` for route entry points and metadata, `src/components/layout/` for site shell, `src/components/sections/` for each landing section, `src/components/ui/` only for genuinely reused UI, `src/lib/` for utilities and validation, and `src/content/` for stable content/data when helpful.
- Recommended sections: `Hero`, `AuthorityRibbon`, `Workflow`, `Features`, `Showcase`, `Story`, `Pricing`, `Faq`, `FinalCta`; derive the final names from Figma and code conventions.
- Static headings, lists, narratives and images: React Server Components by default. Use narrow client components for pricing mode, accordion, navigation and form state. Never mark the entire page `use client` just for one toggle.
- Render repeated data with typed immutable arrays instead of copy/paste markup; don't create a CMS or generic schema without a concrete content-editing need.
- Keep static design content and interactive business logic separate. Shared `Container`/`SectionHeading` components are fine when they remove genuine duplication; avoid a component per single wrapper.
- Use CSS Grid/Flex/Auto Layout equivalents and responsive CSS; no viewport-height pixel magic that breaks content reflow.
- Prefer accessible native markup, progressive enhancement and explicit states.
- No global state solution or API layer until integrations justify it. No speculative abstraction.
- Scaffold using the official current Next.js CLI, choose supported stable versions, commit lockfile and document package manager/Node version in README.
