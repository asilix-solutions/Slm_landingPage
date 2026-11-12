# Amanix — Acceptance criteria (V3)

## Foundation
- [ ] Correct local repository and branch used; existing CLAUDE.md/AGENTS.md/docs preserved/merged.
- [ ] Next.js stable, npm, App Router, TypeScript strict, Tailwind, ESLint; no unnecessary dependencies.
- [ ] `<html lang="ar" dir="rtl">`; body font is Noto Sans Arabic; display only IBM Plex Sans Arabic.
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build` PASS or transparent FAIL with exact error (not fabricated).

## Visual / responsiveness
- [ ] Supplied page-wide SVGs used solely for comparison, not as full-page production asset.
- [ ] Exact approved copy, tokens and original images/icons for each section; no invented business data.
- [ ] Responsive at 390/744/1024/1440, intermediate tests 320/375/768/1280/1920; no horizontal overflow or cropped text.
- [ ] Hero image remains still, two correct cards float subtly only as specified (A 7s/-8px; B 8.5s/+6px, .8s delay).
- [ ] Motion reduced or stopped for `prefers-reduced-motion: reduce`; layout stable.

## UX / quality
- [ ] Accessible HTML landmarks/one H1/RTL/focus/keyboard/navigable menu/FAQ/pricing as relevant.
- [ ] No deceptive form submission/claims/ratings/prices/trial without verification and authorized integration.
- [ ] Only necessary client JS, local optimized production images, LCP/CLS sanity checks, real screenshots and keyboard QA when tools available.
- [ ] Lighthouse mobile ≥90 is a target, and LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 are CWV target p75 metrics; no claim of achievement without measured results.
- [ ] Report tests with PASS/FAIL/NOT RUN, document remaining deviations and explicit approval needed before merge/deploy.
