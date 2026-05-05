# Development Guide

Last updated: 2026-05-05

## 1. Project Location

Workspace root:

```powershell
D:\ClaudeCode教学
```

Frontend app:

```powershell
D:\ClaudeCode教学\ui\ai-programming-onboarding-navigator
```

## 2. Tech Stack

- Vite 6
- React 19
- TypeScript 5
- React Router 7
- Tailwind CSS 4
- motion/react
- lucide-react
- Express API reserve
- tsx for the local server

## 3. Install

```powershell
cd D:\ClaudeCode教学\ui\ai-programming-onboarding-navigator
npm install
```

## 4. Run Frontend

```powershell
npm run dev
```

Default URL:

```text
http://localhost:3000
```

The script binds to `0.0.0.0`:

```json
"dev": "vite --port=3000 --host=0.0.0.0"
```

## 5. Run Reserved API Server

```powershell
npm run build
npm run dev:full
```

Default server:

```text
http://localhost:3001
```

API endpoint:

```text
POST /api/troubleshooting-assistant
```

Request example:

```json
{
  "question": "npm 装不上",
  "stageId": "install-tool"
}
```

Current behavior:

- Without `OPENAI_API_KEY`: returns local troubleshooting matches.
- With `OPENAI_API_KEY`: returns `501 openai_assistant_not_enabled`.

This is intentional. The real OpenAI integration has not been implemented yet.

## 6. Environment Variables

File:

```text
.env.example
```

Variables:

```text
OPENAI_API_KEY=""
OPENAI_MODEL="gpt-5.4-mini"
```

Rules:

- API key stays server-side.
- Never expose key to frontend.
- Never log user secrets.
- Do not accept API keys through the assistant chat.

## 7. Scripts

Run in:

```powershell
D:\ClaudeCode教学\ui\ai-programming-onboarding-navigator
```

### Development

```powershell
npm run dev
```

### Full Local Server

```powershell
npm run build
npm run dev:full
```

### Type Check

```powershell
npm run lint
```

Note: despite the script name, this is TypeScript checking:

```json
"lint": "tsc --noEmit"
```

### Build

```powershell
npm run build
```

Known warning:

- Vite reports chunks larger than 500 kB after minification.
- This is not a functional failure.
- Consider route-level code splitting before public launch.

### Content Contract Test

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
```

Checks include:

- Route node source IDs exist.
- Troubleshooting issue source IDs exist.
- Practice task fallback issue IDs exist.
- Source IDs are resolvable.

### HTTP Smoke Test

```powershell
node scripts\smoke-test.mjs
```

Checks main routes at:

```text
http://localhost:3000
```

### Browser Smoke Test

```powershell
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
```

Use before serious handoff or release.

## 8. Directory Structure

```text
ui/ai-programming-onboarding-navigator/
  src/
    App.tsx
    constants.ts
    content.test.ts
    index.css
    main.tsx
    components/
      FloatingAssistant.tsx
    pages/
      Advanced.tsx
      FirstTask.tsx
      Home.tsx
      RoadmapDetail.tsx
      SetupVerification.tsx
      ToolSelection.tsx
      Troubleshooting.tsx
      Updates.tsx
  server/
    index.ts
  scripts/
    browser-smoke.ps1
    smoke-test.mjs
```

## 9. Architecture

### 9.1 Content-First Architecture

Most product content lives in:

```text
src/constants.ts
```

Pages are mostly renderers:

- `Home.tsx` renders route levels and roadmap nodes.
- `RoadmapDetail.tsx` renders node detail structures.
- `Troubleshooting.tsx` renders `TROUBLESHOOTING_DATA`.
- `FirstTask.tsx` renders practice tasks, rule templates, and safety guides.
- `Updates.tsx` renders source and update records.

This makes content iteration faster, but `constants.ts` can grow large. If the project expands, split it into:

```text
src/content/sources.ts
src/content/roadmap.ts
src/content/troubleshooting.ts
src/content/practice.ts
src/content/updates.ts
```

### 9.2 Routing

Routes are defined in:

```text
src/App.tsx
```

Current routes:

```text
/
/starter
/project
/architecture
/roadmap/:nodeId
/tools
/setup
/troubleshooting
/practice
/updates
/advanced
```

Route meaning:

- `/` is the unified interface.
- `/starter`, `/project`, and `/architecture` are collaboration entries for the three teaching layers.
- `/advanced` is still an active architecture-layer topic interface, not a deprecated route.

### 9.3 Roadmap Detail Rendering

File:

```text
src/pages/RoadmapDetail.tsx
```

Rendering priority:

1. `detail.tracks`
   - Used for OS-specific starter guidance.
   - Example: Windows/macOS environment checks.

2. `detail.playbook`
   - Used for starter pages without OS split.
   - Blocks show actions, optional command, expected output, and failure handling.

3. `detail.steps`
   - Fallback for project/architecture nodes.

### 9.4 Independent Layer Entry Rendering

File:

```text
src/pages/LayerRoute.tsx
```

Routes:

```text
/starter
/project
/architecture
```

Purpose:

- Keep a unified route map at `/`.
- Give each teaching layer an independent collaboration entry.
- Reuse `ROUTE_LEVELS` and `ROADMAP_NODES`.
- Avoid maintaining three separate copies of the same content.

Current implementation notes:

- `project` renders a custom capability-map layout in `LayerRoute.tsx`.
- `starter` and `architecture` use the regular layer entry layout.
- `advanced` also has a dedicated route at `/advanced` through `Advanced.tsx`.
- Do not collapse `/advanced` into `/architecture` without a product decision.

### 9.5 Floating Assistant

File:

```text
src/components/FloatingAssistant.tsx
```

Behavior:

1. Reads route context when on `/roadmap/:nodeId`.
2. Sends question to `/api/troubleshooting-assistant`.
3. If API fails, uses local matching against `TROUBLESHOOTING_DATA`.
4. Shows first actions and related issues.

## 10. API Reserve

File:

```text
server/index.ts
```

Endpoint:

```text
POST /api/troubleshooting-assistant
```

Current server responsibilities:

- Parse request.
- Match local troubleshooting data.
- Return local mode response.
- Return `501` when an API key exists but real integration is not enabled.

Before real API launch:

- Verify current OpenAI Responses API official docs.
- Add request validation.
- Add rate limiting.
- Add prompt boundary.
- Add source-grounded answer format.
- Redact secrets from logs.
- Add server tests.

## 11. Styling System

File:

```text
src/index.css
```

Global design tokens:

- `paper`
- `ink`
- `clay`
- `oat`
- `sage`

Core utility classes:

- `.step-card`
- `.terminal-box`
- `.tertiary-text`
- `.btn-claude`
- `.link-claude`
- `.technical-grid`

Current visual direction:

- Anthropic-inspired restrained UI.
- Stronger contrast than the initial version.
- Starter pages should feel like a working manual.
- Project/architecture pages can remain more editorial.

When adjusting UI:

- Do not make text too pale.
- Do not overuse italic for action text.
- Keep command blocks highly visible.
- Keep starter actions heavier than secondary labels.

## 12. Verification Workflow

Before saying a change is done, run:

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
npm run build
node scripts\smoke-test.mjs
```

Run browser smoke test for visual/layout changes:

```powershell
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
```

## 13. Common Development Tasks

### Add a Roadmap Node

1. Add item to `ROADMAP_NODES`.
2. Choose `level`.
3. Add `sourceIds`.
4. Add `stuckCategory`.
5. Add `successCriteria`.
6. For starter nodes, add `detail.playbook` or `detail.tracks`.
7. Run content test.

### Add a Troubleshooting Issue

1. Add item to `TROUBLESHOOTING_DATA`.
2. Use a clear symptom.
3. Add likely cause.
4. Add first actions.
5. Add source IDs.
6. Set escalation.
7. Run content test.

### Add a Source

1. Add item to `SOURCES`.
2. Label source type.
3. Add owner.
4. Add topic tags.
5. Add `lastCheckedAt`.
6. Link from content through `sourceIds`.

### Change UI Copy

1. Prefer editing `src/constants.ts`.
2. For page chrome or headings, edit relevant page file.
3. Check if the layer needs starter/manual tone or project/architecture tone.
4. Run content and type checks.

## 14. Git and Deployment Notes

This workspace may not be a Git repository. Do not assume git commands work at root.

Project policy:

- Do not auto-push.
- Commit messages should be English if commits are requested.
- Deployment should follow project commands, not implicit `git push`.

No production deployment pipeline is currently documented.
