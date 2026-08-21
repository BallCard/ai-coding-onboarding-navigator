# Frontend Handover

Last updated: 2026-08-21

This file is a frontend entry point. The authoritative product handoff is `../../docs/product/handoff-summary.md`; deployment instructions are in `../../docs/operations/deployment-handoff.md`.

## Current app

- React 19, Vite 6, TypeScript, Tailwind CSS 4, Motion, and React Router
- Static frontend with no application server or embedded AI assistant
- Installation confirmation for Claude Code, Codex, and WorkBuddy
- Starter, project, workflow, practice, setup, tool, and source/update routes
- GitHub maintainer contact and GitHub Issue feedback
- Dismissible redesign announcement
- Local-only progress and workflow notes

## Product boundary

Do not restore the retired troubleshooting database, troubleshooting pages, floating assistant, or assistant backend. When a user is stuck, preserve the goal, complete error information or screenshot, and attempted steps, then give that context to an available AI after removing sensitive data.

The current feedback flow is not stored by this app. It opens a prefilled issue in the repository, so it works on static hosts and Sites without D1. Use platform-backed persistence only if a future release adds native site submission.

## Important files

- `src/App.tsx`: routes, shell, footer contact, and feedback entry
- `src/components/InstallationGate.tsx`: opening readiness question and reference links
- `src/components/UpdateAnnouncement.tsx`: redesign notice and feedback shortcut
- `src/components/WorkflowNotebook.tsx`: local notes and Markdown export
- `src/constants.ts`: current content data
- `src/pages/`: route and task surfaces
- `scripts/capture-visual-regression.mjs`: 1440px / 390px screenshots and overflow checks

## Visual invariants

- Paper, ink, sage, clay, and oat palette
- Libre Baskerville headings, Inter body, JetBrains Mono code
- Large whitespace, restrained motion, soft borders, rounded cards
- Validate desktop and mobile; the floating update notice must remain dismissible and must not block the primary action

## Validation

Run the content contract, TypeScript check, production build, route smoke test, browser smoke test, and visual regression capture before publishing. See `README.md` for the current commands.
