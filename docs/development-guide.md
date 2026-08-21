# Development Guide

Last updated: 2026-08-21

## Project Location

```text
D:\Workspace\projects\ai-coding-onboarding-navigator\ui\ai-programming-onboarding-navigator
```

## Stack

- React 19
- React Router
- Vite 6
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide icons

The current product is a static frontend. It has no application server, embedded AI assistant, or assistant API.

## Install and Run

```powershell
npm install
npm run dev
```

Development URL: <http://localhost:3000>

Production build:

```powershell
npm run build
npm run preview
```

## Validation

```powershell
# Content contracts
.\node_modules\.bin\tsx.cmd src\content.test.ts

# TypeScript
npm run lint

# Production bundle
npm run build

# HTTP routes; requires local dev server
node scripts\smoke-test.mjs

# Rendered DOM; requires Chrome and local dev server
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1

# 1440px and 390px screenshots plus overflow checks
node scripts\capture-visual-regression.mjs
```

## Current Routes

```text
/
/starter
/project
/advanced
/roadmap/:nodeId
/tools
/setup
/practice
/practice/:taskId
/updates
```

Legacy `/troubleshooting/*` URLs redirect to `/`; they are not a product surface.

## Architecture

`src/App.tsx` owns the shell and route map.

`src/constants.ts` remains the current content source of truth for:

- route levels and roadmap nodes
- source records and site groups
- tool choices
- practice tasks
- rule templates and safety guides
- update records

Page components read those structures directly. New facts must include official sources or an explicit non-official source label.

Key components:

- `InstallationGate.tsx`: asks whether Claude Code, Codex, and WorkBuddy are installed; expands source links only when needed.
- `WorkflowNotebook.tsx`: saves a reflection locally and exports Markdown.
- `UpdateAnnouncement.tsx`: explains the learning-loop redesign, links to the route and GitHub feedback, and stores only its dismissed state locally.
- `MobileMenu.tsx`: responsive navigation.

## Contact and Feedback

- Maintainer contact: <https://github.com/BallCard>
- Feedback destination: prefilled issues in <https://github.com/BallCard/ai-coding-onboarding-navigator/issues>
- The site does not claim to store feedback itself. GitHub receives and persists the submission.
- If a future release accepts feedback directly inside the site, use platform-backed persistence such as Sites D1. Browser storage is only appropriate for drafts, preferences, progress, and dismissed UI state.

## Error-Handling Boundary

Do not add troubleshooting cards, a troubleshooting route, or an embedded AI assistant. A failure note should only tell the user to preserve the goal, complete error text, or screenshot and give it to Codex, Doubao, or another available AI after removing sensitive information.

## Styling

Design tokens live in `src/index.css`:

- paper / ink / sage / clay / oat palette
- Libre Baskerville headings
- Inter body text
- JetBrains Mono code
- paper noise and technical dot grid
- large whitespace, soft borders, rounded cards, restrained motion

Preserve these invariants during content or layout work. Validate at 1440px and 390px.

## Deployment

`vercel.json` configures the project as a Vite SPA and rewrites routes to `index.html`.

The current GitHub-based feedback flow works on any static host, including Vercel and Sites, because the browser opens GitHub to complete submission.

This repository does not yet contain `.openai/hosting.json`, so it has not been prepared or linked as a Sites project. When deploying with Sites, use the Sites deployment workflow for this existing Vite app so it can add the required hosting metadata and produce compatible output. Do not manually invent a project id or storage binding.

No D1 or R2 binding is needed for the current release. Add D1 only if feedback becomes a native site form whose submissions must be centrally retained.

Before publishing:

1. Run all validation commands.
2. Inspect desktop and mobile screenshots.
3. Check every factual link and review date.
4. Confirm community material is not presented as product fact.
5. Confirm the GitHub profile and feedback links open the expected owner and repository.
6. Check the update announcement at desktop and mobile widths, including its close action.
