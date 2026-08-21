# Campus AI Coding Onboarding Site MVP PRD

> Status: historical product draft. It includes the retired troubleshooting-system direction.
> For current scope and deployment decisions, use `docs/project-guide.md`,
> `docs/product/handoff-summary.md`, and `docs/operations/deployment-handoff.md`.

## 1. Positioning

Build a campus-facing AI coding onboarding navigation site for students who want to start using Claude Code or Codex but do not know where to begin.

The product is a visual task path plus troubleshooting system. It should help a student complete the first successful AI coding workflow within one hour.

## 2. MVP User

Primary users:

- Students with some programming exposure who want AI to help with coursework, personal projects, or code understanding.
- Students who have used ChatGPT-style assistants but have not used coding agents in a repo/terminal workflow.

Secondary users:

- Non-CS students with basic computer operation ability.

The MVP should not be optimized for complete programming beginners at the cost of clarity for the primary users.

## 3. Core User Problem

Students are blocked before they reach productive AI coding:

- They do not know whether to use Claude Code or Codex.
- They do not know what their computer needs before installation.
- They get stuck on Windows/macOS terminal, Node/npm, login, network, subscription, API key, or permission issues.
- They do not know how to confirm installation success.
- They do not know what first task proves the tool is actually usable.

## 4. MVP Goal

A student should be able to:

1. Choose a tool path.
2. Check Windows/macOS readiness.
3. Install and log in.
4. Resolve common setup blockers.
5. Run a small AI coding task.
6. Know where each piece of guidance comes from.

## 5. Product Shape

The homepage is a visual roadmap, not a blog index.

Roadmap stages:

1. Choose Tool
2. Check Computer
3. Install Tool
4. Login and Authorization
5. Subscription/API/Network
6. Create Test Project
7. Configure Project Rules
8. Complete First AI Coding Task
9. Troubleshoot When Stuck

Each stage must show:

- Current task
- Success criterion
- Common blockers
- Primary action
- Stuck action
- Source type

## 6. MVP Pages

### 6.1 Roadmap

Purpose: Let users identify their current stage and move forward.

Required elements:

- Visual flow map
- Windows/macOS quick entry
- Search box for blockers
- Recommended next step
- Recently updated source notices

Acceptance:

- A user can click any stage and understand what to do next within 10 seconds.

### 6.2 Tool Choice

Purpose: Help students choose Claude Code or Codex for their first path.

Required elements:

- Scenario cards
- Recommendation output
- Difference summary
- Links to official docs
- "Still unsure" default recommendation

Acceptance:

- A user can choose a first tool path without reading a long comparison article.

### 6.3 Install and Verify

Purpose: Guide Windows/macOS users through install readiness and success verification.

Required elements:

- OS selector
- Official documentation links
- Pre-install checklist
- Verification checklist
- Common failure branches

Acceptance:

- A user can confirm whether installation worked using concrete commands or visible states.

### 6.4 Troubleshooting

Purpose: Route blockers to likely causes and next actions.

Categories:

- Network
- Login
- Subscription
- API Key
- Node/npm
- PowerShell/Terminal
- Permission
- Windows
- macOS

Acceptance:

- A user can search a symptom and receive the first 1-3 actions to try.

### 6.5 First Practice

Purpose: Give users a small successful AI coding experience.

Task options:

- Generate a webpage utility
- Fix a simple bug
- Explain a small codebase
- Add tests to course code
- Create a script tool

Acceptance:

- Each task has audience, estimated time, recommended tool, input material, and success criterion.

### 6.6 Sources and Updates

Purpose: Maintain trust and future updates.

Required elements:

- Source records
- Source type labels
- Last checked date
- Impact notes
- Whether users need action

Acceptance:

- Users can distinguish official facts, personal notes, community signals, outdated material, and unverified leads.

### 6.7 Project Rules and Safety

Purpose: Prevent first-time users from letting an agent edit important coursework without boundaries.

Required elements:

- `CLAUDE.md` starter template
- `AGENTS.md` starter template
- Beginner explanation of permissions / approvals / sandbox
- Clear warning to test in a disposable project first
- Official source badges

Acceptance:

- A user can create a minimal project rule file before starting the first task.
- A user understands why permissions and sandboxing are safety boundaries, not optional decoration.

## 7. Non-Goals

- Do not replicate full official installation docs.
- Do not build a generalized AI news site.
- Do not publish large copied content from self-media.
- Do not support all operating systems in MVP.
- Do not build user accounts or community submission flow in MVP.

## 8. Success Metrics

Initial qualitative metrics:

- 5 campus users can finish setup or identify their blocker.
- At least 3 users complete a first practice task.
- Users can explain which source is official and which is personal/community.

Quantitative MVP metrics:

- Roadmap stage click-through
- Troubleshooting search count
- "I completed this" clicks
- "I am stuck" clicks
- First-practice completion rate

## 9. Maintenance Rules

- Official source links should be reviewed weekly during active development.
- Setup pages should be reviewed whenever official install docs/changelogs change.
- Troubleshooting entries should include last verified date.
- Outdated entries should be retained only when they explain historical errors or migration paths.
