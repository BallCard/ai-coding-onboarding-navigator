# UI V1 Review

Review date: 2026-05-04

Reviewed target: `ui/ai-coding-onboarding-navigator`

Scope: review only. No source code changes were made.

## 1. Verdict

UI V1 is visually promising and technically runnable. It successfully captures a calm Anthropic-inspired documentation/product feel: warm paper background, restrained palette, serif headings, subtle borders, spacious sections, and route-based page structure.

However, it is not yet product-ready. The main gap is not visual quality; it is product alignment. Some pages still behave like a polished design demo rather than a campus onboarding tool that can guide a student from tool choice to first successful AI coding task.

## 2. What To Keep

- Keep the overall visual direction: warm off-white background, ink/sage/clay palette, quiet borders, serif headings, minimal decoration.
- Keep the six-page structure:
  - Roadmap
  - Tool Selection
  - Setup Verification
  - Troubleshooting
  - First Practice
  - Updates
- Keep the route-based Vite/React structure.
- Keep the roadmap-as-core concept on the homepage.
- Keep the troubleshooting search/filter interaction.
- Keep the OS segmented control on setup.
- Keep the source/integrity page as a trust-building layer.

## 3. Blocking Issues Before MVP

### P0: Tool scope drift

The product scope is Claude Code + Codex. UI V1 includes wording and data that mixes Codex with GitHub Copilot/Cursor-style positioning. This weakens the core promise and will confuse users.

Required fix:

- Tool selection must compare `Claude Code` and `Codex`, not `Claude Code` and `Copilot/Cursor`.
- GitHub Student Pack may appear as a related note, but not as the main Codex identity.

### P0: Homepage still reads partly like a philosophy page

The roadmap exists, but the first viewport still leans toward large editorial expression. The MVP needs the roadmap to be immediately actionable.

Required fix:

- First viewport should show the roadmap or current-stage selector earlier.
- Title should be practical: "从 0 跑通你的第一次 AI 编程".
- Reduce philosophical copy before the roadmap.

### P0: Missing success criteria on roadmap nodes

The PRD requires each roadmap stage to show success criteria. UI V1 shows tasks and bottleneck count, but not explicit "done means..." standards.

Required fix:

- Add one concrete success criterion per node.
- Example: "终端能运行 `codex --version` 或 `claude --version`".

### P0: Source badges are not consistently attached to factual guidance

The product depends on source integrity. UI V1 has provenance labels in troubleshooting and update sections, but factual guidance in setup and roadmap is not consistently connected to source badges.

Required fix:

- Add source badges to roadmap node cards, setup steps, issue cards, and update records.
- Each source badge should map to `Official`, `Community`, `Personal Note`, `Needs Verification`, or `Outdated`.

## 4. Important Improvements

### P1: "I completed" is not persistent

The homepage has an acknowledgement-style button, but it does not persist node completion.

Recommended V2:

- Use localStorage for MVP.
- Store completed roadmap node IDs.
- Show completed nodes with green/sage completed state.

### P1: "I am stuck" should pass node context

The current route passes a rough category. The intended behavior is node-context routing.

Recommended V2:

- Pass `nodeId` and optional `category`.
- Troubleshooting page should display "You came from: Install Tool" context.

### P1: First Practice needs real task templates

The page has task cards, but the cards need concrete input, expected output, and success criteria.

Recommended V2 task fields:

- Target user
- Estimated time
- Recommended tool
- Required input
- Step outline
- Success criterion
- Fallback issue link

### P1: Setup should support both Claude Code and Codex

The setup page currently appears oriented toward one install command. MVP needs a tool selector or route context.

Recommended V2:

- OS selector: Windows/macOS
- Tool selector: Claude Code/Codex
- Steps update based on both.

### P1: Updates page should avoid unsupported claims

The update records include example claims that must not be published as facts unless sourced and checked.

Recommended V2:

- Replace placeholder claims with source-backed official records.
- Add `lastCheckedAt`, `impactArea`, and `userActionRequired`.

## 5. Data Model Fit

Current fit:

- Roadmap can mostly map to `RoadmapNode`.
- Troubleshooting can map to `Issue`, but categories are too narrow.
- First practice cards need to move into `PracticeTask`.
- Updates need to move into `UpdateRecord`.
- Source records need a first-class `Source` object.

Required data model additions for implementation:

- `sourceIds` on every roadmap node and issue.
- `successCriteria` on roadmap nodes and practice tasks.
- `recommendedTool` on setup steps and practice tasks.
- `lastVerifiedAt` on troubleshooting issues.

## 6. Gemini V2 Prompt Direction

If sending V2 feedback to Gemini, ask for refinement, not a redesign.

Use this direction:

> Keep the current Anthropic-inspired visual language and page structure. Do not redesign from scratch. Make the interface more actionable for a campus AI coding onboarding product. Move the roadmap into the first viewport, add visible success criteria, add source badges beside factual guidance, replace Copilot/Cursor framing with Claude Code vs Codex, and make setup support both Windows/macOS and Claude Code/Codex.

## 7. Recommended Next Step

Do not rewrite the UI yet.

Next step should be content/data integration:

1. Create structured data files for roadmap nodes, sources, troubleshooting issues, practice tasks, and updates.
2. Replace placeholder content with source-backed MVP content.
3. Add minimal state for node completion and stuck routing.
4. Re-run build and browser check.

This preserves the good visual work while turning the project into a usable onboarding tool.
