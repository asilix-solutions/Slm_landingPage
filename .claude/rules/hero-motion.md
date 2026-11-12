# Subtle Hero cards motion — user-approved

Source reference: `design-reference/notes/hero-cards-highlight.png`. The Hero image and two UI card SVGs are provided separately in `design-reference/assets/inbox/`.

- Upper-left matching-candidates widget: `Main - MatchedTalentWidget.svg` (283×231). Soft vertical float 0 → -8px, 7s, `ease-in-out`, `infinite alternate`.
- Lower-right contractor/status card: `Outer Card Shell.svg` (329×170). Soft vertical float 0 → +6px, 8.5s, `ease-in-out`, `infinite alternate`, 0.8s phase offset/delay.
- Original office photograph: `Fire Safety Office Professional 1.svg` (1440×680). Never animate photograph itself.
- CSS animations on inner card wrappers only. Static outer absolute positioning wrappers. Prevent transform composition bugs; prevent moving beyond clipped container; ensure card visibility/text at 390px and wider. Do not animate content in a way that obstructs reading/click targets.
- No `framer-motion` or GSAP just for floating, no bounce, zoom, pulse or parallax.
- Support `@media (prefers-reduced-motion: reduce)` by disabling all continuous/card-entry animation and showing elements in final visible position.
- Optional one-shot entry only after verifying it improves UX, with no layout shifts. Avoid `will-change` on excessive elements; only two small cards are animated.
- Verify source imagery does not already contain the cards. Use true original assets where available, do not reconstruct or swap their contents without requirement.
