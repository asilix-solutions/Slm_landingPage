# Claude Code model selection — Amanix, 2026-11-12

| Slice | Model | Why |
|---|---|---|
| Bootstrap / architecture / fonts / initial repository decisions | **Opus 5.5** | Highest leverage, one-time foundational decisions |
| Header + Hero visuals and calm float motion | **Sonnet 5.5** | Bounded implementation, speed/quota efficiency |
| Each later section / responsive fixes / routine tests | **Sonnet 5.5** | Localized work with clear acceptance criteria |
| Difficult failures with complex tradeoffs | **Opus 5.5** | Escalation when Sonnet stalls |
| Independent final audit | **Opus 5.5** | Cross-cutting QA |

Check actual account support with `/model`; don't assume that a subscription supports all models. Don't hardcode model IDs into settings or run many autonomous agents. For this landing page, neither Fable nor other frontier models are required. Keep context bounded by section, save stable decisions in docs, and don't reread 40+ MB of reference screens unnecessarily.

Anthropic release guidance (Nov 9, 2026): https://www.anthropic.com/claude-fable-and-mythos-5-2
