# AI Coding Onboarding Navigator Project Guide

Last updated: 2026-05-05

## 1. Project Summary

AI Coding Onboarding Navigator is a campus-facing onboarding site for students who want to start using AI-assisted programming tools but do not know where to begin. Claude Code and Codex are the two maintained example paths; the transferable subject is the workflow, not a brand.

The product is not a copied tutorial collection. It is a guided operating layer:

- It tells students which stage they are in.
- It tells them what to do next.
- It gives concrete success criteria.
- It routes them to troubleshooting when they are stuck.
- It labels which claims come from official sources and which come from campus experience.

The core promise:

> A student should be able to go from zero to one verified AI coding task without hunting through scattered docs, videos, and forum posts.

## 2. Target Users

Primary users are campus students with mixed backgrounds:

- Non-CS students who do not know terminal basics.
- CS or engineering students who know some code but have not used coding agents.
- Students who have used ChatGPT for coding but not a coding agent or tool-using assistant.
- Students trying to bring AI coding into course projects, personal projects, or GitHub workflows.

The first version serves Windows and macOS users.

## 3. Product Principles

### 3.1 Layered Guidance

The three layers are not only difficulty levels. They represent three different cognitive tasks.

Short version:

- Starter layer: from "I cannot use it" to "I can run one verified task."
- Project layer: from "I can run it" to "I can use it safely and efficiently in a real project."
- Architecture layer: from "I can use AI" to "I can build AI-era systems of thinking and work."

### 3.1.1 Starter Layer: Operation

Core question:

> How do I run it now?

This layer solves action friction.

The user may not know what terminal is, what output means success, or whether an error means stop. Content must behave like a teaching assistant standing beside the user.

Writing principles:

- Be explicit and concrete.
- Tell users what key to press, what app to open, what command to copy, what output means success, and what error means stop.
- Separate Windows and macOS when the operation differs.
- Avoid conceptual language unless it changes the next action.

The layer cultivates basic usability.

### 3.1.2 Project Layer: Engineering

Core question:

> Why does AI coding go wrong, and how do we improve efficiency while reducing mistakes?

This layer is not about teaching more features. It is about facing the real defects of AI coding:

- It hallucinates requirements.
- It misreads or overuses context.
- It changes too many files.
- It ignores project rules.
- It produces plausible but unverified results.
- It makes users relax review because generation is fast.
- It amplifies existing project disorder.

Writing principles:

- Start from the pain point.
- Explain why the mechanism exists.
- Explain what risk or cost it reduces.
- Show the workflow habit it creates.
- Focus on task boundaries, rules, context control, permissions, small edits, diff review, tests, PR/CI feedback, and recovery.

The core claim:

> AI coding efficiency comes from constraints, not from letting the agent do anything.

The layer cultivates engineering judgment.

### 3.1.3 Workflow Layer: Thinking

Core question:

> When AI becomes a tool, how should human thinking and work be reconstructed?

This layer must not stop at agent architecture, MCP, hooks, pipeline, or multi-agent vocabulary. These are not magic AI concepts. They are expressions of human systems thinking through AI tools:

- Pipeline is process awareness.
- Context architecture is information organization.
- Memory is experience sedimentation.
- Multi-agent collaboration is division of labor.
- Evaluation loop is feedback design.
- Automation boundary is risk governance.
- Workflow retrospective is method formation.

Writing principles:

- Return to the human side of the tool.
- Explain how AI co-working reshapes how people define problems, split tasks, organize context, evaluate outputs, and preserve methods.
- Explain system structure, reuse value, token/context cost, automation boundaries, and feedback loops.
- Make the final goal "AI-era literacy and thinking", not merely "knowing how to use AI."

The layer cultivates systematic thinking and AI collaboration literacy.

### 3.2 Official Source First

Official facts come from official sources. The site adds path design, local context, and acceptance criteria.

Short rule:

> Official docs decide what is true. The site decides how users should move. Community content only tells us where people may be stuck.

### 3.3 No Circumvention Guidance

The site can discuss network reachability and compliant diagnosis:

- Browser vs terminal access.
- npm registry reachability.
- Login callback failures.
- Campus network escalation path.

The site must not recommend VPN providers, proxy vendors, nodes, airports, bypass protocols, or circumvention tutorials.

### 3.4 Action Before Explanation

For starter pages, every instruction should answer:

- What do I click or open?
- What do I copy?
- What should I see?
- What do I do if it fails?

Avoid phrases like "understand the environment" when the user needs "press Win, search PowerShell, run this command."

## 4. Current MVP Scope

Implemented routes:

- `/` - three-layer route map.
- `/starter` - independent starter layer entry.
- `/project` - independent project layer entry.
- `/advanced` - independent architecture layer entry.
- `/roadmap/:nodeId` - detail page for each route node.
- `/tools` - Claude Code / Codex selection.
- `/setup` - Windows/macOS install and verification flow.
- `/troubleshooting` - structured troubleshooting database.
- `/practice` - first task, rule templates, and safety guide.
- `/updates` - source map and update radar.

Implemented core features:

- Three-layer onboarding map.
- Per-node detail pages.
- Starter-layer playbooks and OS-specific tracks.
- Tool selection.
- Setup verification.
- Troubleshooting search and filtering.
- Floating troubleshooting assistant.
- Local-first assistant fallback.
- Reserved API endpoint for future OpenAI integration.
- Source badges and update records.

## 5. Route Layers

### 5.1 Starter Layer / Operation Layer

Goal:

> Help a student complete the first verified AI coding task.

Starter nodes:

1. Select tool.
2. Check computer environment.
3. Install tool.
4. Login and authorization.
5. Network reachability and compliant connection.
6. Create test project.
7. Configure project rules.
8. Complete first task.
9. Troubleshoot.

Expected user outcome:

- They choose one tool, not both.
- They can open a terminal.
- Node, npm, Git checks pass.
- Tool install command works.
- Login state is confirmed.
- A test project exists.
- Rules file exists.
- First task is completed and checked with Git or a visible result.

### 5.2 Project Layer / Engineering Layer

Goal:

> Help a student understand why AI coding fails in real projects, then build constraints that increase efficiency and reduce mistakes.

Project nodes:

- Project rule system.
- Permissions / Approval / Sandbox.
- Reading an unfamiliar repository.
- Plan before edit.
- Bug fix / testing workflow.
- Command system.
- GitHub / PR workflow.
- Review / CI feedback loop.
- Extension tools: MCP / Hooks / Skills / Subagents.

Expected user outcome:

- They do not let AI edit blindly.
- They can identify common AI coding failure modes.
- They can ask for a plan before edits.
- They can inspect diff.
- They can run tests or verification commands.
- They can prepare a PR with intent, validation, and risks.

### 5.3 Workflow Layer / Thinking Layer

Goal:

> Help students move beyond "using AI" and form AI-era systematic thinking, workflow design ability, and collaboration literacy.

Architecture nodes:

- Agentic Thinking.
- Pipeline design.
- Context and memory architecture.
- Automation boundaries.
- Multi-agent collaboration.
- Evaluation and feedback loop.
- Workflow retrospective.

Expected user outcome:

- They can design a pipeline.
- They know where to place context.
- They know what should and should not be automated.
- They can split work across agents with clear outputs.
- They can evaluate and improve a workflow.
- They can reflect on how AI changes their own thinking and work habits.

## 6. Page Map

### Home

File: `src/pages/Home.tsx`

Purpose:

- Choose user layer.
- Show route nodes.
- Track completed nodes in local storage.
- Route stuck users to troubleshooting.
- Provide links to independent layer entries for collaboration.

### Independent Layer Entries

File: `src/pages/LayerRoute.tsx`

Routes:

- `/starter`
- `/project`
- `/advanced`

Purpose:

- Give each layer its own URL.
- Let different collaborators work on starter, project, and architecture content independently.
- Reuse the same `ROADMAP_NODES` data instead of duplicating content.
- Keep `/` as the unified interface.

Current interface note:

- `/starter` uses the regular layer route list.
- `/project` currently uses a custom capability-map interface inside `LayerRoute.tsx`.
- `/advanced` is the collaboration entry and current topic interface for architecture-layer nodes. Do not recreate `/architecture` as a parallel entry.

### Roadmap Detail

File: `src/pages/RoadmapDetail.tsx`

Purpose:

- Render each node as a detail page.
- If a node has OS tracks, render Windows/macOS execution tracks.
- If a node has a playbook, render action blocks.
- Otherwise render project/architecture execution logic.
- Show completion criteria, stuck cards, official sources, and next step.

### Tool Selection

File: `src/pages/ToolSelection.tsx`

Purpose:

- Help user choose Claude Code or Codex.
- Avoid parameter comparison.
- Push user to install verification after selection.

### Setup Verification

File: `src/pages/SetupVerification.tsx`

Purpose:

- Provide OS and tool selectors.
- Show official install entry and verification command.
- Clarify install is not complete until a version command works.

### Troubleshooting

File: `src/pages/Troubleshooting.tsx`

Purpose:

- Search symptoms.
- Filter by category or OS.
- Show likely cause, first actions, source type, and escalation route.

### First Practice

File: `src/pages/FirstTask.tsx`

Purpose:

- Provide rule templates.
- Explain safety boundaries.
- Offer first tasks.
- Define what "first task completed" means.

### Advanced

File: `src/pages/Advanced.tsx`

Purpose:

- Present architecture-layer concepts as workflow design modules.
- Link to official sources for capabilities.

### Updates

File: `src/pages/Updates.tsx`

Purpose:

- Display source hierarchy.
- Show official sources and update records.
- Keep update radar separate from regular content.

### Floating Assistant

File: `src/components/FloatingAssistant.tsx`

Purpose:

- Provide local-first troubleshooting support.
- Use route context when available.
- Call reserved API when available.
- Fall back to local matching when API is unavailable.

## 7. Content Model

Current source of truth:

`ui/ai-programming-onboarding-navigator/src/constants.ts`

Main exported data:

- `ROUTE_LEVELS`
- `SOURCES`
- `ROADMAP_NODES`
- `TOOLS`
- `TROUBLESHOOTING_DATA`
- `PRACTICE_TASKS`
- `RULE_TEMPLATES`
- `SAFETY_GUIDES`
- `UPDATES`

Important route detail structures:

- `detail.tracks`: OS-specific execution tracks for starter nodes.
- `detail.playbook`: generic starter execution playbook.
- `detail.steps`: fallback step list.
- `detail.commands`: copyable command snippets.
- `successCriteria`: acceptance criteria shown across pages.
- `sourceIds`: source linkage.
- `stuckCategory`: troubleshooting link target.

## 8. Assistant Boundary

The assistant is a troubleshooting assistant, not a general chatbot.

It should:

- Diagnose stage and symptom.
- Return first actions.
- Link related issue IDs and source IDs.
- Stay inside local content and official source boundaries.

It should not:

- Execute commands.
- Ask for secrets.
- Accept API keys from users.
- Invent install commands.
- Recommend network circumvention services.

## 9. Success Criteria for MVP

The MVP is useful only if a real student can:

1. Choose the correct layer.
2. Choose Claude Code or Codex without overthinking.
3. Open terminal and run environment checks.
4. Install one tool using official instructions.
5. Log in or identify the login blocker.
6. Create a safe test project.
7. Add a rule file.
8. Complete one small AI coding task.
9. Use troubleshooting when stuck.

Suggested user test:

- Test with 3-5 campus students.
- Include non-CS and CS users.
- Do not explain the site while they use it.
- Record where they stop, ask questions, or copy wrong commands.

## 10. Current Risks

- Starter content still needs more real-user testing.
- Some official version numbers may change and must be reviewed.
- Bundle size warning appears during Vite build.
- API assistant is reserved but not connected to real OpenAI Responses API.
- Mobile visual QA should be repeated before public launch.

## 11. Next Product Work

Recommended order:

1. User test starter layer.
2. Rewrite weak starter pages based on observed confusion.
3. Expand troubleshooting database from real failures.
4. Add richer project-layer examples.
5. Implement real assistant API with current official OpenAI docs.
6. Add rate limiting and logging redaction.
7. Optimize mobile layout and bundle splitting.
