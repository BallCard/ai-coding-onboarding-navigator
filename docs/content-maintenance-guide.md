# Content Maintenance Guide

Last updated: 2026-05-05

## 1. Source of Truth

Current content source:

```text
ui/ai-programming-onboarding-navigator/src/constants.ts
```

Current docs that matter most:

- `docs/project-guide.md`
- `docs/development-guide.md`
- `docs/operations/source-policy.md`
- `docs/sources/official-sources.md`

Older docs under `docs/product/` may describe earlier designs. Use them as history unless they match current code.

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

node --version
npm --version
git --version

Should see:

- Node version, for example v24.15.0.
- npm version, for example 11.6.0.
- Git version, for example git version 2.54.0.windows.1.

If failed:

- node is not recognized: install Node.js LTS first.
- git is not recognized: install Git for Windows first.
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

### Architecture Layer

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
- Community experience can reveal pain points and missing troubleshooting cases.
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
  stuckCategory: TroubleshootingCategory;
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

## 6. Troubleshooting Card Guide

Current shape:

```ts
interface TroubleshootingItem {
  id: string;
  category: TroubleshootingCategory;
  os: 'all' | 'windows' | 'macos';
  symptom: string;
  cause: string;
  firstActions: string[];
  escalation: 'self-serve' | 'ask-campus-helper' | 'official-support';
  sourceIds: string[];
  sourceType: SourceType;
  lastVerifiedAt: string;
}
```

Good symptom:

```text
PowerShell 提示禁止运行脚本或无法加载 .ps1 文件
```

Bad symptom:

```text
安装失败
```

Good first actions:

```text
1. 优先换用 PowerShell 7 或 Windows Terminal
2. 查看当前执行策略
3. 确认风险后再调整执行策略
```

Bad first actions:

```text
检查系统环境
```

Escalation rules:

- `self-serve`: user can follow instructions safely.
- `ask-campus-helper`: likely needs a more experienced peer.
- `official-support`: account, subscription, product access, billing, or official platform issue.

## 7. Tool Selection Guide

The tool selection page should not become a benchmark page.

Current decision logic:

- No project directory: start with Codex.
- Existing project directory: start with Claude Code.
- Only one loose code file: treat as no project directory.
- Already familiar with ChatGPT: Codex is easier to start.
- Need multi-file project modification: Claude Code is more direct.

Do not write:

- "Claude Code is better."
- "Codex is better."
- "Choose based on benchmark."

Write:

- "If you have X, choose Y."
- "If not sure, default to Codex for the first run."

## 8. Environment Check Guide

Current starter expectation:

- Windows and macOS are separated.
- User sees exact terminal opening instructions.
- User copies command block.
- User sees expected output examples.
- User gets stop conditions.

Current reference values as of 2026-05-05:

- Node LTS reference: `v24.15.0`
- npm latest reference: `11.6.0`
- Git for Windows reference: `git version 2.54.0.windows.1`

Important:

- These version examples are not strict equality checks.
- Node `v20` or higher can continue.
- Git `2.x` can generally continue.
- npm output must exist.
- `npm view npm version` must output a version or the npm/network layer is not ready.

When updating versions:

1. Check official Node.js download page.
2. Check npm package/latest official page.
3. Check git-scm official install page or release page.
4. Update `SOURCES.lastCheckedAt`.
5. Update docs if examples changed.

## 9. Practice Task Guide

Practice tasks should be small and verifiable.

Good practice task:

- Can complete in 15-25 minutes.
- Has visible output or a test result.
- Can be done in a test directory.
- Has fallback issue IDs.

Avoid:

- "Build a full app."
- "Refactor the whole project."
- "Connect real user accounts."
- "Deploy to production."

## 10. Rule Template Guide

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

## 11. Update Record Guide

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

## 12. Assistant Content Boundary

The assistant should answer from:

- `TROUBLESHOOTING_DATA`
- Current route node
- Source records
- Official source policy

The assistant should not:

- Make up commands.
- Tell users to paste secrets.
- Recommend circumvention services.
- Turn into general coding chat.

When adding assistant API:

- Keep answers structured.
- Return next actions.
- Include related issue IDs.
- Include source IDs.
- Refuse secret-handling requests.

## 13. Review Checklist Before Publishing Content

Before a content change is done:

- Does each factual instruction have a source?
- Does each starter instruction say what to click/open/copy?
- Does each command have expected output?
- Does each failure state say what to do next?
- Are Windows and macOS separated when needed?
- Is community content kept as signal only?
- Are there no VPN/proxy/node/airport recommendations?
- Did `content.test.ts` pass?
- Did TypeScript pass?

## 14. Current Content Debt

Known items to improve:

- Rewrite all starter detail pages with the same hard-action tone as `select-tool` and `check-env`.
- Expand real troubleshooting cards after user testing.
- Update old `docs/product/content-model.md` or archive it.
- Add more project-layer examples for PR and CI workflows.
- Add architecture-layer diagrams or concrete sample pipelines.

## 15. Current Content-Filling Phase

Current progress:

- Overall frontend UI should not be redesigned at large scale.
- Columns and sections can be added or removed when they serve layer-specific content.
- The next main task is to fill every roadmap detail page around the three-layer core ideas.

Execution focus:

1. Starter layer pages should become hard, detailed execution scripts.
2. Project layer pages should explain AI coding pain points, efficiency gains, and mistake-reduction mechanisms.
3. Architecture layer pages should connect agent/workflow architecture back to human thinking patterns and AI-era literacy.

Do not expand into more tools before this content pass is complete.
