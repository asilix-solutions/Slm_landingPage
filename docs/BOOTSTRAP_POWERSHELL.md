# Amanix Windows PowerShell first boot — safe setup

Current screenshot showed `D:\amanix-landing` with `.claude`, `docs` and `CLAUDE.md`, cloned empty Git branch `feat/amanix-foundation`. `create-next-app` halted because it detected a root `CLAUDE.md` conflict. The user may or may not have subsequently finished scaffolding. **Check before acting; do not rerun blindly.**

```powershell
cd D:\amanix-landing
Get-ChildItem -Force
Test-Path .\package.json
```

**If package.json is already present**, do not rerun create-next-app. Otherwise, and only if source files aren't present:

```powershell
# Backup original instructions safely; never delete them.
Move-Item -LiteralPath .\CLAUDE.md -Destination ..\amanix-CLAUDE-backup.md
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
# Respect prompts; use supported options. Preserve any generated AGENTS.md.
Get-ChildItem -Force -Name AGENTS.md,CLAUDE.md
```

If Next.js created `CLAUDE.md`, inspect it: it may be an agent pointer to `AGENTS.md`. Keep `AGENTS.md`, and use V3 `CLAUDE.md` whose first-session rules explicitly read `AGENTS.md`. Backup/merge when applying V3; never blindly overwrite an unrelated project-specific instruction file.

Extract the `Amanix_Claude_Code_V3_2026-11-12.zip` at the root `D:\amanix-landing` using Windows Explorer **after** Next.js completes. The ZIP contains source refs, approved separate assets, instructions, and documentation; it intentionally does not contain `AGENTS.md` or Next.js app files. Avoid bringing older V2 `.claude/rules` back over V3. Review `git status`.

Run from `D:\amanix-landing`:
```powershell
node -v
npm -v
npm run dev
```

Open Claude Desktop → Code → Local → `D:\amanix-landing`. Select Opus 5.5 via `/model` and paste **PROMPT 01** from `docs/EXECUTION_PROMPTS.md`. Claude will check/reuse current scaffold and implement only the foundation. Do not use Cowork for local code execution.
