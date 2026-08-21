# Official Sources

Last checked: 2026-08-21

This file records first-pass official sources for the MVP. Use these as linked references and maintenance targets. Do not copy full documentation into the site.

## Claude Code

| ID | Title | URL | Use In MVP | Source Type | Usage Policy |
|---|---|---|---|---|---|
| `claude-code-overview` | Claude Code Overview | https://code.claude.com/docs/en/overview | Tool choice, Start Here | Official | Link and summarize |
| `claude-code-setup` | Claude Code Setup | https://code.claude.com/docs/en/setup | Install and Verify | Official | Link and summarize |
| `claude-code-quickstart` | Claude Code Quickstart | https://code.claude.com/docs/en/quickstart | First Practice | Official | Link and summarize |
| `claude-code-changelog` | Claude Code Changelog | https://code.claude.com/docs/en/changelog | Sources and Updates, Radar | Official | Link and summarize |
| `claude-code-slash-commands` | Claude Code Slash Commands | https://docs.claude.com/en/docs/claude-code/slash-commands | Workflow, Configuration | Official | Link and summarize |
| `claude-code-hooks` | Claude Code Hooks Reference | https://docs.claude.com/en/docs/claude-code/hooks | Advanced later-stage configuration | Official | Link and summarize |
| `claude-code-directory` | Claude Code .claude Directory | https://code.claude.com/docs/en/claude-directory | Project rules and configuration | Official | Link and summarize |
| `claude-code-permissions` | Claude Code Permissions | https://code.claude.com/docs/en/permissions | Permissions and safety | Official | Link and summarize |
| `claude-code-permission-modes` | Claude Code Permission Modes | https://code.claude.com/docs/en/permission-modes | Planning and approval flow | Official | Link and summarize |
| `claude-code-commands` | Claude Code Commands | https://code.claude.com/docs/en/commands | Slash commands and workflows | Official | Link and summarize |
| `claude-code-features-overview` | Claude Code Feature Overview | https://code.claude.com/docs/en/features-overview | MCP, skills, hooks, subagents overview | Official | Link and summarize |
| `claude-code-subagents` | Claude Code Subagents | https://code.claude.com/docs/en/sub-agents | Subagents and context architecture | Official | Link and summarize |

## Anthropic Design Reference

| ID | Title | URL | Use In MVP | Source Type | Usage Policy |
|---|---|---|---|---|---|
| `anthropic-skills-repo` | Anthropic Skills Repository | https://github.com/anthropics/skills | Skill provenance and design reference | Official | Link and summarize |
| `anthropic-brand-guidelines-skill` | Anthropic Brand Guidelines Skill | https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md | UI style reference | Official | Link and summarize |

## Codex

| ID | Title | URL | Use In MVP | Source Type | Usage Policy |
|---|---|---|---|---|---|
| `codex-overview` | Use Codex | https://developers.openai.com/api/docs/guides/code-generation#use-codex | Tool choice, Start Here | Official | Link and summarize |
| `codex-cli-docs` | Codex CLI Docs | https://developers.openai.com/codex/cli | Install and Verify | Official | Link and summarize |
| `codex-changelog` | ChatGPT & Codex Changelog | https://learn.chatgpt.com/docs/changelog | Sources and Updates, Radar | Official | Link and summarize |
| `codex-windows` | Windows Sandbox Troubleshooting | https://learn.chatgpt.com/docs/windows/windows-sandbox#troubleshooting-and-faq | Windows setup and troubleshooting | Official | Link and summarize |
| `codex-troubleshooting` | Codex Troubleshooting | https://learn.chatgpt.com/docs/reference/troubleshooting | Troubleshooting | Official | Link and summarize |
| `codex-agents-md` | Codex AGENTS.md Docs | https://developers.openai.com/codex/guides/agents-md | Project rules and configuration | Official | Link and summarize |
| `codex-mcp` | Codex MCP Docs | https://developers.openai.com/codex/mcp | Later-stage configuration | Official | Link and summarize |
| `codex-skills` | Codex Skills Docs | https://developers.openai.com/codex/skills | Later-stage configuration | Official | Link and summarize |
| `codex-sandboxing` | Codex Sandboxing | https://developers.openai.com/codex/concepts/sandboxing | Permissions and safety | Official | Link and summarize |
| `codex-agent-approvals-security` | Codex Agent Approvals & Security | https://developers.openai.com/codex/agent-approvals-security | Approvals and security | Official | Link and summarize |
| `codex-rules` | Codex Rules | https://developers.openai.com/codex/rules | Project rules and instructions | Official | Link and summarize |
| `codex-hooks` | Codex Hooks | https://developers.openai.com/codex/hooks | Advanced later-stage configuration | Official | Link and summarize |
| `codex-config-reference` | Codex Config Reference | https://developers.openai.com/codex/config-reference | Configuration reference | Official | Link and summarize |
| `codex-use-cases` | Codex CLI Workflows | https://developers.openai.com/codex/cli | Local workflow, scripting, review and external context | Official | Link and summarize |
| `codex-web-search` | Codex Web Search | https://learn.chatgpt.com/docs/web-search?surface=cli | Current-information lookup | Official | Link and summarize; verify source/date |
| `codex-code-review` | Codex Code Review | https://learn.chatgpt.com/docs/code-review?surface=cli | Review and verification | Official | Link and summarize |

## Maintenance Notes

- Review `claude-code-changelog` and `codex-changelog` weekly during active development.
- Any install, login, permission, or Windows/macOS advice should cite an official source when possible.
- If a source URL changes, update this file before updating product pages.
- Community content should not be added here. Put it in `docs/sources/community-signals.md` when needed.
- Product facts must not be sourced from self-media, forum posts, or generated summaries.
- Community content can identify likely user pain points, but it cannot become official guidance until checked against official documentation or local verification.
- A search result is an input, not evidence by itself. Record the page URL, checked date, applicable version/surface, and the exact claim it supports.
- Separate repository facts, official product facts, time-sensitive external facts, community signals, and model inference. Do not promote an inference into a rule file without verification.

## AI-assisted programming and human-AI collaboration

These sources are used for principles and framing, not for product facts or tool rankings.

| ID | Title | URL | Use In MVP | Source Type | Usage Policy |
|---|---|---|---|---|---|
| `fowler-humans-and-agents` | Humans and Agents in Software Engineering Loops | https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html | Human/agent roles, verification loops | Community Signal | Use as a named expert perspective; do not present as official product guidance |
| `dora-2025-ai-amplifier` | DORA Research 2025 | https://dora.dev/dora-report-2025/ | AI as amplifier, delivery system context | Community Signal | Use the research claim with scope and date; do not convert it into a universal causal law |
| `baoyu-claude-code-secrets` | Claude Code 强大的秘密究竟是什么？ | https://baoyu.ai/blog/claude-code-secrets | Community observations about model/tool/context/verification | Community Signal | Use only as a clearly labeled community signal; verify product claims against official docs |
