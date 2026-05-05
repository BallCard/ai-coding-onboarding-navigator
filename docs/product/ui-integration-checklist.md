# UI Integration Checklist

Use this checklist when Gemini returns wireframes or visual drafts.

## 1. Product Fit

- Does the homepage start with a roadmap, not a marketing hero?
- Can users identify their current stage within 10 seconds?
- Are Windows and macOS both visible in install/verify flows?
- Is every page action-oriented rather than article-oriented?

## 2. Data Model Fit

- Roadmap UI can be powered by `RoadmapNode`.
- Troubleshooting cards can be powered by `Issue`.
- Source badges can be powered by `Source`.
- First-practice cards can be powered by `PracticeTask`.
- Update list can be powered by `UpdateRecord`.

## 3. Required Interactions

- User can click a roadmap node.
- User can mark a node as completed.
- User can click "I am stuck" from a node.
- "I am stuck" passes node context to troubleshooting.
- Search supports symptom-style queries.
- Source type is visible beside factual guidance.

## 4. Visual Quality

- Avoid marketing landing-page composition.
- Avoid one-note purple/blue gradient styling.
- Avoid dense card piles.
- Use tool-like layout, clear hierarchy, and compact text.
- Buttons and states should be obvious without explanation.

## 5. MVP Acceptance

The UI draft is acceptable only if it supports this journey:

1. A student chooses Claude Code or Codex.
2. The student selects Windows or macOS.
3. The student follows install and verification.
4. The student enters troubleshooting when blocked.
5. The student picks a first practice task.
6. The student can see source type and update status.
