---
description: Audit Amanix's landing page visual fidelity, responsiveness, accessibility, performance, security and maintenance risks before a pull request or release.
---

# Audit Amanix landing page

1. Read implementation/acceptance/decision docs and inspect the exact git ref and diff.
2. Verify design comparison with local approved SVG references at 390/744/1024/1440 and fluid widths 320/375/768/1280/1920. Record and rank visible deviations rather than assuming 1:1.
3. Check functional states: nav, pricing toggle, FAQ, registration form, success/failure, disabled/loading, keyboard and reduced motion.
4. Check semantics, SEO metadata, OG image, image alt text, hydration footprint, image/font loading and layout shifts.
5. Run lint, typecheck, build, tests and Lighthouse only when actual environment supports them; report commands and measured results. Never invent a score.
6. Check every marketing claim for content approval and registration backend contract. No unsupported legal assurances, fabricated ratings or false submission successes.
7. Produce a concise GO/NO-GO with severity, evidence, fix recommendation, owner and remaining risk.
