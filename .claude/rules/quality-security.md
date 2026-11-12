# Quality, accessibility, security and performance

## Accessibility
- One logical H1, semantic sections and landmarks, appropriate headings, Arabic `lang="ar"` and RTL direction at the document root unless verified otherwise.
- Keyboard navigation, visible focus, accessible names, meaningful labels/errors, no keyboard traps, adequate contrast and touch targets. Test accordion and mobile menu by keyboard.
- Honor `prefers-reduced-motion`. Do not put crucial content behind hover interactions.

## Performance
- Favor prerendering and minimal hydrated JS, optimized local imagery, responsive `sizes`, fixed media dimensions/aspect ratios and limited fonts/weights.
- Treat key CWV field targets as LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 at p75 (mobile and desktop), measured post-deployment; use Lighthouse mobile >90 as an **aspirational lab gate**, not proof of real-user CWV.
- Test on throttled mobile and production build. Record baseline and final metrics with device/tool context; never promise 100 scores.

## Security and privacy
- Never log contact details; do not expose private secrets in NEXT_PUBLIC_* variables.
- Registration form is production-ready only with a verified endpoint and server-side input validation, abuse prevention appropriate to the endpoint, explicit privacy handling, error/retry states and actual success response.
- For missing backend, implement UI validation and an honestly unavailable/disabled submission path, or approved external route; NO fake success.
- No unsanctioned analytics or third-party embeds. Avoid unverified regulatory and compliance statements.

## Mandatory validation
- Run package scripts for lint, typecheck, tests and production build when defined; add or verify missing ones during bootstrap.
- Verify visual screenshots, responsive overflow, semantic structure and keyboard behavior. Add lightweight component tests where interactions warrant them.
- Report findings and remaining risks; do not swallow errors or claim checks were run if not.
