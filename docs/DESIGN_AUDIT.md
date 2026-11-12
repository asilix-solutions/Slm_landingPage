# Figma audit — observed design structure

Source: https://www.figma.com/design/p3FgrEtTGEfQTyKDPmxR4O/Amanix?node-id=236-136206
Frame: `236:136206`, `Main`, 1280 × ~8231.4 px. Audit date: 2026-11-12. Access succeeded with linked Figma account `Abdullah`. We inspected structural metadata and an actual screenshot of the Hero. Detailed tokens/assets/interactions below still require section-level extraction.

| Order | Figma node | Section / implementation concern |
|---|---|---|
| 1 | `236:137190` | Hero: strong orange gradient, large editorial copy and a white registration form card |
| 2 | `236:137277` | Metrics & Authority Ribbon: claims/statistics/standards, needs factual review |
| 3 | `236:136485` | Workflow Stepper: 8 stages; accessible responsive sequence |
| 4 | `236:136238` | Product Core Features: editorial tiles, content/data-driven rendering |
| 5 | `236:136749` | Dark Immersive Showcase: images, visual assets and performance impact |
| 6 | `236:136776` | Asymmetric Storytelling: responsive hierarchy and supporting media |
| 7 | `236:136804` | Pricing: monthly/annual toggle; source of pricing values and billing terms must be verified |
| 8 | `236:136344` | Numbered FAQ Accordion: 01/02/03…, keyboard and state management |
| 9 | `236:136985` | Final Conversion Banner: accurate CTA destination and action |

## Hero confirmed in screenshot and layers
- Prominent Arabic headline: "من طلب العميل حتى شهادة الإغلاق المختومة — في منصة واحدة".
- Trial messaging: "تجربة فورية 14 يوماً مجاناً" and "تفعيل الحساب التجريبي الفوري".
- Inputs: business/facility name, unified number (700), CR number, mobile number or admin email.
- A prominent displayed 4.9/5 rating and compliance/standards statements.
- Figma layout: 1280px page; hero section ~754px tall with two main columns (text right, form left).

## Questions requiring confirmation before shipping
1. Is the displayed hero registration form connected to an existing API? If yes, provide request/response and errors. If no, define the honest CTA state.
2. Are 14-day trial, 4.9/5 rating, compliance claims, ZATCA/SBC and all figures verified and approved?
3. Is there a verified mobile/tablet frame? The **provided target** is 1280px; not all file pages were audited for alternatives.
4. What are exact marketing CTA destinations, policy/privacy URLs, social links and pricing logic?
5. Which images/fonts/SVG assets have export permissions, and who owns the rights to use them?

## Fidelity protocol — V2 supersedes the original MCP process
Primary input is **manual source handoff** at 390/744/1024/1440px, including approved standalone assets/tokens/content, not Figma MCP. Earlier Figma 1280×~8231 is background historical context and conflicts in dimension with newly supplied 1440×12334; establish approved canonical version before visual coding. Compare local rendered screenshots at supplied widths and test intermediate widths. Never ship full-page SVG exports.
