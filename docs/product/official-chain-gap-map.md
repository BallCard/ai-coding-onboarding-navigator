# Official Chain Gap Map

Last checked: 2026-05-04

Purpose: keep the site aligned with official Claude Code and Codex documentation. Community material can suggest pain points, but this table decides what the MVP and later phases cover.

| Chain Area | Claude Code Official Source | Codex Official Source | Current Site Coverage | Gap | Priority |
|---|---|---|---|---|---|
| Basic usability | `claude-code-setup` | `codex-cli-docs`, `codex-windows` | Covered | Keep network wording compliant and diagnostic, not tool recommendation | P0 |
| Install | `claude-code-setup`, `claude-code-quickstart` | `codex-cli-docs`, `codex-windows` | Covered | Add more exact OS-specific verified commands later | P1 |
| Auth / login | `claude-code-setup` | `codex-cli-docs` | Covered lightly | Add account-state checklist | P1 |
| Windows/macOS | `claude-code-setup` | `codex-windows` | Covered | More native Windows vs WSL guidance later | P1 |
| Project initialization | `claude-code-quickstart`, `claude-code-directory` | `codex-cli-docs`, `codex-agents-md` | Partially covered | Add project rules minimum template | P0 |
| Project rules | `claude-code-directory` | `codex-agents-md`, `codex-rules` | Partially covered | Add CLAUDE.md / AGENTS.md starter guidance | P0 |
| Permissions / approvals / sandbox | `claude-code-permissions` | `codex-sandboxing`, `codex-agent-approvals-security` | Not enough | Add beginner safety model and first-task guardrails | P0 |
| Plan-before-edit flow | `claude-code-permission-modes` | `codex-agent-approvals-security` | Covered in project route | Add concrete examples later | P1 |
| Commands / slash commands | `claude-code-commands`, `claude-code-slash-commands` | `codex-cli-docs` | Not covered | Add common command cheat sheet | P1 |
| Review / CI feedback loop | `claude-code-commands` | `codex-use-cases` | Covered in project route | Add PR/CI example later | P1 |
| Agentic thinking | `claude-code-features-overview`, `claude-code-permissions` | `codex-agent-approvals-security`, `codex-sandboxing` | Covered as advanced route | Expand examples after user testing | P1 |
| Pipeline design | `claude-code-hooks`, `claude-code-features-overview` | `codex-hooks`, `codex-agent-approvals-security` | Covered as advanced route | Add concrete project automation example later | P1 |
| Context / memory architecture | `claude-code-directory`, `claude-code-subagents` | `codex-agents-md` | Covered as advanced route | Add examples after user testing | P1 |
| Multi-agent collaboration | `claude-code-features-overview`, `claude-code-directory` | Codex docs navigation / subagents pages | Covered conceptually | Add role-based example later | P2 |
| Evaluation / feedback loop | Local verification rule | `codex-use-cases` | Covered as advanced route | Add metric examples later | P1 |
| MCP / Hooks / Skills / Subagents capability map | `claude-code-features-overview`, `claude-code-hooks` | `codex-mcp`, `codex-hooks`, `codex-skills` | Covered in project route | Defer deep tutorials | P1 |
| Workflow retrospective | Local process rule | Local process rule | Covered as workflow route | Add examples after user testing | P1 |
| IDE / App / Web | Claude Code docs navigation | Codex App / IDE / Web docs navigation | Not covered | Add second-stage comparison later | P1 |
| GitHub / PR workflow | Claude Code commands/review docs | Codex GitHub integration docs | First-practice only | Add PR workflow example later | P1 |
| Troubleshooting | `claude-code-setup`, `codex-troubleshooting` | `codex-troubleshooting` | Covered lightly | Add official-specific error branches | P1 |
| Changelog / update tracking | `claude-code-changelog` | `codex-changelog` | Covered as source list | Add impact radar later | P2 |

## MVP Completion Criteria

The MVP is considered usable when it covers:

- Basic usability checks
- Tool choice
- Install and verification
- Network reachability diagnosis
- Project rules starter guidance
- Permissions / approval / sandbox beginner explanation
- Agentic workflow architecture overview
- First practice tasks
- Source and update trust layer

## Deferred Scope

Do not block MVP on:

- MCP
- Hooks
- Skills
- Subagents
- GitHub PR automation
- Update impact automation
- Community submissions
