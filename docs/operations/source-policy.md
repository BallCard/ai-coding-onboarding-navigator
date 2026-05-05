# Source Policy

## Principle

Official facts only come from official sources. The site can add judgment, sequence, local context, and acceptance criteria, but it must not turn community claims into product facts.

Short rule:

> Official docs decide what is true. We decide how users should move. Community content only tells us where people may be stuck.

## Source Levels

### 1. Official

Use for facts.

Allowed sources:

- Anthropic / Claude Code official docs
- OpenAI Codex official docs
- OpenAI Help Center official Codex pages
- Official changelog and release notes
- Official GitHub release pages
- Official marketplace or extension pages

Use for:

- Install commands
- System requirements
- Authentication methods
- Account/subscription requirements
- Permissions and approval models
- Sandbox behavior
- MCP, hooks, skills, slash commands, subagents
- Troubleshooting facts
- Changelog and breaking changes

### 2. Official-Derived

Use for our interpretation of official facts.

Examples:

- Chinese explanation of an official install path
- Campus-friendly checklist
- "Done means..." acceptance criteria
- Which official page to read at which stage
- Impact summary of an official changelog entry

Requirement:

- Must link to at least one `Official` source.
- Must not add unsupported claims.

### 3. Personal Note

Use for local/campus experience.

Examples:

- Windows terminal friction observed locally
- Campus network diagnosis pattern
- npm registry troubleshooting experience
- Student onboarding feedback

Requirement:

- Must include `lastVerifiedAt`.
- Must not be phrased as universal product fact.

### 4. Community Signal

Use only as a signal.

Examples:

- Blog/tutorial claims
- Reddit threads
- Forum posts
- Bilibili/Zhihu/Xiaohongshu videos/posts
- GitHub discussions that are not official release notes

Requirement:

- Label as `Community Signal` or `Needs Verification`.
- Do not publish as formal instructions until checked against official docs or local verification.

## Publishing Rules

- Do not copy official docs wholesale.
- Do not rewrite self-media tutorials as original content.
- Do not recommend VPN providers, proxy vendors, nodes, airports, bypass protocols, or circumvention tutorials.
- Do not include secrets, tokens, API keys, or private config values.
- Do not publish claims about account availability, pricing, model access, or platform support without checking official pages.

## Review Checklist

Before adding or editing a factual guide:

- Is the product fact backed by `Official`?
- If it is an interpretation, is it `Official-Derived` with a linked official source?
- If it is campus experience, is it labeled `Personal Note` and dated?
- If it came from community content, is it still marked as signal?
- Does the guide include a success criterion?
- Does the page show a source badge near the instruction?
