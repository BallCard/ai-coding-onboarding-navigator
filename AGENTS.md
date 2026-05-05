# Project Rules

## Project Purpose

This workspace is for a campus-facing AI coding onboarding site. The product helps Chinese university students use Claude Code and Codex from first setup to their first successful AI coding task.

The site is not a tutorial dump, a blog, or a marketing page. It is a structured onboarding navigation system with official-source links, local context, validation checklists, troubleshooting paths, and field notes.

## Audience

- Chinese university students
- Windows and macOS users
- Mixed technical backgrounds
- People who want to start AI coding but are blocked by tool choice, installation, login, subscription/API setup, networking, terminal environment, permissions, or the first practical workflow

## Scope

MVP includes:

- Visual onboarding roadmap
- Tool choice guide for Claude Code and Codex
- Windows/macOS install and verification paths
- Troubleshooting entry points
- First-practice task selection
- Source and update records

MVP excludes:

- Full internet crawling
- Full tutorial rewrites
- Community submission system
- Advanced multi-agent workflows
- Complete MCP/plugin ecosystem database
- Unverified self-media content republishing

## Content Rules

- Official docs are the only source of product facts.
- Official-derived explanations may translate official facts into campus-friendly paths, checklists, and acceptance criteria, but must keep a linked official source.
- Community/self-media content is only used as a signal, never as a primary factual basis.
- Personal experience must be labeled as `Personal Note` with a verification date.
- Unverified information must be labeled as `Needs Verification`.
- Outdated but useful information must be labeled as `Outdated`.
- Every actionable guide needs a success criterion.
- Every factual instruction must show a source badge or be explicitly marked as personal/experimental.

Source hierarchy:

1. `Official`: Anthropic/OpenAI docs, Help Center, official changelog, official GitHub release, official marketplace pages.
2. `Official-Derived`: our Chinese routing explanation, checklist, or validation standard derived from official sources.
3. `Personal Note`: campus/local experience, verified by us for a specific context.
4. `Community Signal`: forum, blog, video, Reddit, GitHub discussion, or self-media signal that still needs official verification before becoming guidance.

Rule of thumb: official docs decide what is true; this site decides how users should move; community content only tells us where people may be stuck.

## Structure

- `docs/product/`: product requirements, information architecture, content model
- `docs/sources/`: official and community source lists
- `docs/operations/`: update process, review process, release checklist
- `ui/`: Gemini-generated UI drafts or implementation handoff materials

## Decision Principles

- Optimize for user progress, not content volume.
- Prefer task paths over article categories.
- Prefer official sources for facts.
- Prefer field notes for local/campus-specific context.
- Make every page answer: what should the user do now, how do they know it worked, and where do they go if stuck?
