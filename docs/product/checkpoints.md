# Checkpoints

## 2026-05-04 Network Compliance Checkpoint

Current verified state:

- Product scope: campus AI coding onboarding for Claude Code + Codex.
- Local dev server: `http://localhost:3000`.
- Verification passed before this checkpoint:
  - Content contract check
  - TypeScript check
  - Production build
  - HTTP route smoke test
  - Chrome headless browser smoke test

Next scoped addition:

- Add "Network Reachability and Compliant Connection" guidance.
- Do not provide bypass, circumvention, VPN provider, node, protocol, or "ladder" tutorials.
- Focus on:
  - Browser reachability checks
  - Terminal reachability checks
  - npm registry diagnostics
  - Login callback diagnostics
  - Campus network escalation path
  - Compliance disclaimer

Acceptance:

- Roadmap and troubleshooting content include network reachability without using unsafe implementation instructions.
- Users can diagnose whether a problem is browser access, terminal access, npm registry, auth callback, or campus network policy.
- Page text clearly states that users should follow local law and campus network rules.

## 2026-05-04 MVP Checkpoint

Current MVP scope reached:

- Basic usability checks
- Claude Code / Codex tool choice
- Windows/macOS install and verification
- Network reachability and compliant connection guidance
- Troubleshooting search and category routing
- First-practice task cards
- `CLAUDE.md` and `AGENTS.md` starter templates
- Beginner permissions / approvals / sandbox safety guidance
- Third-layer advanced route reframed as Agentic Thinking / pipeline / automation boundaries / multi-agent collaboration / workflow retrospective.
- MCP / Hooks / Skills / Subagents capability map moved to project layer because it is mainly a project implementation capability.
- Second layer expanded with plan-before-edit, command system, and Review / CI feedback loop.
- Third layer expanded with context/memory architecture and evaluation/feedback loop.
- Official source and update trust layer

Verification passed:

- `tsx src/content.test.ts`
- `npm run lint`
- `npm run build`
- `node scripts/smoke-test.mjs`
- `powershell.exe -ExecutionPolicy Bypass -File scripts/browser-smoke.ps1`

Deferred after MVP:

- MCP walkthroughs
- Hooks walkthroughs
- Skills and subagents
- GitHub PR workflow
- Changelog impact automation
- Community submission flow
