# Handoff Summary

Date: 2026-05-04

## 1. Product Positioning

This project is a campus-facing AI coding onboarding navigator for Claude Code and Codex.

It is not:

- A copied tutorial collection
- A blog
- A marketing landing page
- A community content scraper

It is:

- A structured route map
- A troubleshooting database
- A source-tracked official guidance layer
- A first-practice workflow
- A bridge from tool usage to agentic workflow thinking

## 2. Current MVP Scope

### Three Route Levels

1. Starter layer: from zero to first successful AI coding task
2. Project layer: from successful first run to real project workflow
3. Architecture layer: from tool usage to Agentic Thinking

### Starter Layer

Covers:

- Basic usability check
- Tool selection
- Install verification
- Login and authorization
- Network reachability and compliant connection
- Test project creation
- Project rules
- First task
- Troubleshooting

### Project Layer

Covers:

- Project rule system
- Permissions / Approval / Sandbox
- Reading an unfamiliar repository
- Plan before edit
- Bug fix / testing workflow
- Command system
- GitHub / PR workflow
- Review / CI feedback loop
- Capability map: MCP / Hooks / Skills / Subagents

### Architecture Layer

Covers:

- Agentic Thinking
- Pipeline design
- Context and memory architecture
- Automation boundaries
- Multi-agent collaboration
- Evaluation and feedback loop
- Workflow retrospective

## 3. Important Product Decisions

### Official Source Priority

The project now follows this hierarchy:

1. `Official`
2. `Official-Derived`
3. `Personal Note`
4. `Community Signal`

Community content cannot become product fact unless checked against official docs or local verification.

### Network Guidance Boundary

The site can discuss:

- Network reachability
- Browser vs terminal diagnosis
- npm registry diagnosis
- Login callback failures
- Campus network escalation path

The site must not recommend:

- VPN providers
- Proxy vendors
- Nodes
- Airports
- Circumvention tutorials

### AI Assistant Boundary

The assistant is a troubleshooting assistant, not a general chatbot.

It should:

- Diagnose stages
- Match symptoms
- Return first actions
- Link related issues and official sources

It should not:

- Execute commands
- Ask for secrets
- Invent install commands
- Recommend network circumvention services

## 4. Implemented Files

### Entry / Handoff Docs

- `README.md`
- `ui/ai-programming-onboarding-navigator/README.md`
- `docs/product/handoff-summary.md`

### Product Docs

- `docs/product/mvp-prd.md`
- `docs/product/content-model.md`
- `docs/product/ui-v1-review.md`
- `docs/product/official-chain-gap-map.md`
- `docs/product/troubleshooting-ai-assistant.md`
- `docs/product/checkpoints.md`

### Source Docs

- `docs/operations/source-policy.md`
- `docs/sources/official-sources.md`
- `docs/sources/community-signals.md`

### Frontend

- `src/constants.ts`
- `src/App.tsx`
- `src/pages/Home.tsx`
- `src/pages/RoadmapDetail.tsx`
- `src/pages/ToolSelection.tsx`
- `src/pages/SetupVerification.tsx`
- `src/pages/Troubleshooting.tsx`
- `src/pages/FirstTask.tsx`
- `src/pages/Advanced.tsx`
- `src/pages/Updates.tsx`
- `src/components/FloatingAssistant.tsx`

### API Reserve

- `server/index.ts`
- `.env.example`
- `package.json` script `dev:full`

### Tests

- `src/content.test.ts`
- `scripts/smoke-test.mjs`
- `scripts/browser-smoke.ps1`

## 5. Current Verification Status

Previously verified full command set:

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
npm run build
node scripts\smoke-test.mjs
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
```

All passed in the previous verification round.

Latest handoff check after adding documentation:

```powershell
npm run build
```

Passed.

The following commands were not rerun in the latest handoff check because the local Windows sandbox blocked the executable startup, and escalation was unavailable due the current Codex usage limit:

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
node scripts\smoke-test.mjs
```

Known warning:

- Vite reports one chunk larger than 500 kB after minification. This is not blocking. Consider code splitting before production release.

## 6. Local API Test

The reserved API endpoint was tested with:

```powershell
Invoke-RestMethod -Method Post `
  -Uri 'http://localhost:3001/api/troubleshooting-assistant' `
  -ContentType 'application/json' `
  -Body '{"question":"npm 装不上","stageId":"install-tool"}'
```

Expected current behavior without `OPENAI_API_KEY`:

- Returns `mode: local`
- Returns local troubleshooting actions
- Returns related issue IDs and source IDs

## 7. What To Do Next

Recommended next work:

1. Run a real user test with 3-5 campus students.
2. Observe whether they can choose a layer, follow a route, and complete a first task.
3. Add missing troubleshooting issues from real failures.
4. Add richer examples to project and architecture layer details.
5. Implement the real OpenAI Responses API assistant after reviewing current official OpenAI docs.
6. Add rate limiting and server-side logging redaction before public release.
7. Improve mobile layout and code splitting.

## 8. Do Not Do Next

Avoid:

- Adding random community tutorials as official guidance
- Expanding to every AI coding tool
- Turning the assistant into a general chat bot
- Recommending VPN/proxy services
- Publishing before testing with real students
