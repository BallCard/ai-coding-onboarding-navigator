# Content Maintenance Guide

Last updated: 2026-08-20

## 1. Source of Truth

Current content source:

```text
ui/ai-coding-onboarding-navigator/src/constants.ts
```

Current docs that matter most:

- `docs/product/learning-and-design-baseline.md`
- `docs/project-guide.md`
- `docs/development-guide.md`
- `docs/operations/source-policy.md`
- `docs/sources/official-sources.md`

Older docs under `docs/product/` may describe earlier designs. Use them as history unless they match current code.

Before adding content, read `docs/product/learning-and-design-baseline.md`. Its ability-compounding loop is the primary test for new content: it must help the user move from a real interest or problem, through a bounded AI-assisted action and observable evidence, to a reusable personal rule or reflection. Do not add material merely because it explains a tool feature.

## 2. Writing Standard by User Layer

The three layers use different writing logic because the user's cognitive task is different.

| Layer | Internal Name | Core Question | Writing Job |
| --- | --- | --- | --- |
| Starter | Operation | How do I run it now? | Remove action friction |
| Project | Engineering | Why does AI coding go wrong, and how do I improve efficiency while reducing mistakes? | Build engineering constraints |
| Architecture | Thinking | How does AI reshape human thinking and work systems? | Build AI-era literacy and methods |

### Starter Layer

Write like a campus teaching assistant standing beside the student.

Use:

- Press which key.
- Open which app.
- Copy which command.
- What output should appear.
- What output means failure.
- Where to go next.

Avoid:

- "Understand the environment."
- "Confirm your setup."
- "Choose a suitable path."
- "You just need to..."
- Soft reassurance without decision criteria.

Good starter pattern:

```text
Windows

1. Press Win.
2. Search PowerShell.
3. Open Windows PowerShell.

Copy:

git --version

Should see:

- Git version, for example `git version 2.x.x.windows.x`.

If you selected an npm install path, also run:

```text
node --version
npm --version
npm config get registry
```

If failed:

- node/npm is not recognized: install Node.js LTS only if the selected install path requires npm.
- git is not recognized: record that Git checkpoints are unavailable, then install Git before the first important project task.
```

### Project Layer

Write like a project workflow mentor.

Core idea:

> AI coding efficiency comes from constraints, not from letting the model do anything.

The project layer should explicitly name AI coding's problems and then show how each workflow mechanism reduces error or improves efficiency.

Use:

- Pain point.
- Why this step exists.
- What cost it reduces.
- What workflow habit it creates.
- How it affects review, testing, diff size, context quality, and rollback.
- What AI coding failure mode it prevents.

Good project pattern:

```text
Pain point: AI can modify many files faster than you can review them.
Plan-before-edit reduces review cost by forcing file scope, risk, and verification command before edits.
```

Common project-layer failure modes to reference:

- hallucinated requirement
- missing context
- over-editing
- ignored project rules
- unverifiable result
- weak review
- CI failure loop
- token waste from repeated context setup

### Workflow Layer

Write like a systems designer and reflective practitioner.

Core idea:

> Agent architecture is also human systems thinking expressed through AI tools.

Do not stop at "what is MCP / hooks / multi-agent". The architecture layer should help users see how AI co-working reshapes their problem definition, workflow design, context management, feedback habits, and method formation.

Use:

- Workflow structure.
- Token and context cost.
- Automation boundary.
- Feedback loops.
- Reusable assets.
- Multi-agent role separation.
- Human thinking pattern behind the technical structure.
- Literacy or habit the user should cultivate.

Good architecture pattern:

```text
Value: A fixed pipeline keeps repeated setup out of the prompt.
Spend context on the new problem, not on rebuilding the workflow every session.
```

Architecture-layer concepts should be framed this way:

- pipeline -> process awareness
- context architecture -> information organization
- memory -> experience sedimentation
- multi-agent -> division of labor
- evaluation loop -> feedback design
- automation boundary -> risk governance
- workflow retrospective -> method formation

The final goal is not "knowing how to use AI". The final goal is AI-era systematic thinking and collaboration literacy.

## 3. Source and Reference Priority

Reference hierarchy for the next content-filling phase:

1. Official documentation
2. High-quality open-source learning projects such as `learn-claude-code`, `claude-mem`, `claude-howto`
3. Bloggers and structured personal guides
4. Community and individual experience notes

Rules:

- Official docs decide product facts.
- Open-source learning projects can inform learning path design and examples, but must not override official facts.
- Bloggers can provide framing and teaching inspiration, but do not become source of truth.
- Community experience can reveal pain points and places where the learning path needs clearer context.
- Any non-official claim must be labeled as `Personal Note`, `Community Signal`, or checked back against official docs before becoming instruction.

## 4. Source Types

Use the current source hierarchy:

1. `Official`
2. `Official-Derived`
3. `Personal Note`
4. `Community Signal`

Rules:

- Product facts need `Official`.
- Campus experience can be `Personal Note`.
- Community posts are signals, not instructions.
- Do not copy official docs wholesale.
- Do not copy self-media tutorials.
- Do not recommend VPN, proxy vendors, nodes, airports, bypass protocols, or circumvention tutorials.

## 5. Roadmap Node Guide

Type location:

```text
src/constants.ts
```

Current shape:

```ts
interface RoadmapNode {
  id: string;
  level: RouteLevel;
  title: string;
  description: string;
  userGoal: string;
  nextStepId?: string;
  tasks: string[];
  successCriteria: string[];
  commonPitfalls: number;
  sourceIds: string[];
  route: string;
  detail?: {
    preflight: string[];
    steps: string[];
    commands?: {
      label: string;
      command: string;
      note: string;
    }[];
    playbook?: {
      title: string;
      badge: string;
      blocks: {
        title: string;
        actions: string[];
        command?: string;
        expected?: string[];
        ifFailed?: string[];
      }[];
    };
    tracks?: {
      id: OS;
      title: string;
      openTerminal: string[];
      runCommands: {
        label: string;
        command: string;
        expected: string[];
      }[];
      success: string[];
      ifFailed: string[];
    }[];
    differences: string[];
    prompt?: string;
    doNotDo: string[];
  };
}
```

### When to Use `detail.tracks`

Use when Windows and macOS instructions differ.

Examples:

- Opening terminal.
- PATH problems.
- shell profile.
- PowerShell policy.
- Git installation differences.

Required content:

- `openTerminal`
- `runCommands`
- `expected`
- `success`
- `ifFailed`

### When to Use `detail.playbook`

Use for starter nodes without OS split.

Examples:

- Select tool.
- Install tool.
- Login and authorization.
- Create test project.
- Configure project rules.
- Complete first task.

Each block should include:

- `actions`
- Optional `command`
- `expected`
- `ifFailed` when possible

### When to Use `detail.steps`

Use as fallback, mainly for project and architecture layers.

Do not rely only on `steps` for starter layer unless the step is very simple.

## 6. Error-Handling Copy

The site does not maintain troubleshooting cards or an embedded assistant. When a page needs a failure note, keep it to one transferable instruction:

```text
把你原本想完成的目标、完整报错原文或截图交给 Codex、豆包或手边可用的 AI，请它先解释原因，再给最小解决步骤。
```

Also remind users to remove passwords, API keys, cookies, private paths, and sensitive project data before sharing.

## 7. Tool Selection Guide

The tool selection page should not become a benchmark page.

Current decision logic:

- Claude Code and Codex both support local repository work; project presence is not a product verdict.
- Compare the user's account/entry point, preferred surface (terminal, IDE, desktop, web), task shape (read, edit, review, automation), external-context needs, and approval/sandbox expectations.
- If the user already has one provider account and no strong task-specific reason to switch, start there and record the choice.
- If the user needs current external information, make source retrieval and verification part of the task contract; do not imply either tool makes search results true.

The maintained product paths are examples, not a claim that Claude Code and Codex are the only valid tools. OpenCode, Z Code, Grok Build, Cursor, Copilot, and future tools may share the same workflow questions. Add a product to the maintained database only after official-source review; otherwise mention it as a `Community Signal` or unverified example.

The transferable model is: human defines the why, boundaries, priorities, and acceptance test; the AI handles exploration, generation, execution, and feedback processing; tools expose context and actions; verification decides whether the result is acceptable. Fowler's why/how/on-the-loop framing is a source for this principle, not a product endorsement.

Do not write:

- "Claude Code is better."
- "Codex is better."
- "Choose based on benchmark."

Write:

- "If you have X, choose Y."
- "Both can do X; choose based on the entry point and control surface that fit this task."

## 8. Information and Evidence Guide

AI coding tasks often mix four different kinds of input:

1. Repository facts: files, scripts, tests, and runtime behavior that can be inspected locally.
2. Official product facts: provider documentation, release notes, and support pages.
3. Time-sensitive external facts: current versions, APIs, service status, or changing policies.
4. Community or personal signals: useful for finding pain points, never sufficient for product truth.

Every material claim should carry a source, checked date, applicable version/surface, and a status: `Official`, `Official-Derived`, `Personal Note`, `Community Signal`, or `Needs Verification`.

Search is an information retrieval step, not a truth oracle. The user should ask the agent to show what a source proves, what it does not prove, and which claims still need a local check. High-risk claims need an independent source or a reproducible local validation before entering code, `CLAUDE.md`, `AGENTS.md`, or automation.

## 9. Environment Check Guide

Current starter expectation:

- Windows and macOS are separated when shell behavior differs.
- User sees exact terminal opening instructions.
- User copies command block.
- User sees expected output examples.
- User gets stop conditions.

Do not hard-code a version as a product requirement. Native installers for Claude Code and Codex may not require Node/npm; check those only when the selected install path or project requires them. Version examples are illustrative, not equality checks. Git remains a recommended checkpoint/review dependency, but is not a universal install gate.

When updating versions:

1. Check the selected tool's current official install page.
2. If using npm, check the official Node.js and npm pages.
3. If using Git for checkpoints, check the official Git install page.
4. Update `SOURCES.lastCheckedAt`.
5. Update docs if examples changed.

## 10. Practice Task Guide

Practice tasks should be small and verifiable.

Tasks are not miniature tutorials. Their job is to give the student one bounded opportunity to practise the full loop: describe a goal, ask AI for a plan, act within a boundary, inspect evidence, and record one reusable lesson.

Good practice task:

- Can complete in 15-25 minutes.
- Has visible output or a test result.
- Can be done in a test directory.
- Has fallback issue IDs.
- States the editing or data boundary.
- Includes at least three observable acceptance criteria.
- Ends with one reflection prompt that can become a personal Markdown note, rule, or template.

Avoid:

- "Build a full app."
- "Refactor the whole project."
- "Connect real user accounts."
- "Deploy to production."

## 11. Rule Template Guide

Rule templates should teach boundaries, not prompt cleverness.

Every template should include:

- Project goal.
- Verify command.
- Editing boundaries.
- Safety rules.
- Completion criteria.

Do not include:

- API keys.
- Private paths.
- Real personal credentials.
- Commands that delete or reset files.

## 12. Update Record Guide

Use `UPDATES` for changes that may affect users.

Good update:

```text
Claude Code changed install flow.
Impact: setup page needs review.
Action: update official source link and install acceptance criteria.
```

Bad update:

```text
Interesting blog post about AI coding.
```

Statuses:

- `candidate`: detected but not reviewed.
- `reviewed`: checked but not published to user flow.
- `published`: visible or reflected in content.
- `ignored`: not relevant.

## 13. No Embedded Assistant

Do not add a site-specific troubleshooting assistant or API. General AI products already handle error interpretation more efficiently. The site should focus on learning paths, task boundaries, evidence, and reflection.

## 14. Review Checklist Before Publishing Content

Before a content change is done:

- Does each factual instruction have a source?
- Does each starter instruction say what to click/open/copy?
- Does each command have expected output?
- Does each failure state tell the user to preserve complete evidence and ask an available AI without exposing secrets?
- Are Windows and macOS separated when needed?
- Is community content kept as signal only?
- Are there no VPN/proxy/node/airport recommendations?
- Did `content.test.ts` pass?
- Did TypeScript pass?

## 15. Current Content Debt

Known items to improve:

- Rewrite all starter detail pages with the same hard-action tone as `select-tool` and `check-env`.
- Remove remaining legacy troubleshooting data when the content model is next split out of `constants.ts`.
- Update old `docs/product/content-model.md` or archive it.
- Add more project-layer examples for PR and CI workflows.
- Add architecture-layer diagrams or concrete sample pipelines.

## 16. Current Content-Filling Phase

Current progress:

- Overall frontend UI should not be redesigned at large scale.
- Columns and sections can be added or removed when they serve layer-specific content.
- The next main task is to fill every roadmap detail page around the three-layer core ideas.

Execution focus:

1. Starter layer pages should become hard, detailed execution scripts.
2. Project layer pages should explain AI coding pain points, efficiency gains, and mistake-reduction mechanisms.
3. Architecture layer pages should connect agent/workflow architecture back to human thinking patterns and AI-era literacy.

Do not expand into more tools before this content pass is complete.
