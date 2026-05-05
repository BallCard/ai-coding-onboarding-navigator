# Content and Data Model

> Status: historical draft. The current implementation source of truth is
> `ui/ai-programming-onboarding-navigator/src/constants.ts`.
> For current maintenance rules, use `docs/content-maintenance-guide.md`.

## 1. Source Type

```ts
type SourceType =
  | "Official"
  | "Community"
  | "Personal Note"
  | "Experimental"
  | "Outdated"
  | "Needs Verification";
```

## 2. Roadmap Node

```ts
type RoadmapNode = {
  id: string;
  title: string;
  stage: number;
  summary: string;
  userGoal: string;
  successCriteria: string[];
  primaryActionLabel: string;
  stuckActionLabel: string;
  blockerIds: string[];
  sourceIds: string[];
  osSupport: ("windows" | "macos" | "both")[];
  nextNodeIds: string[];
  lastReviewedAt: string;
};
```

Example:

```json
{
  "id": "install-tool",
  "title": "Install Tool",
  "stage": 3,
  "summary": "Install Claude Code or Codex using the selected OS path.",
  "userGoal": "Get the selected AI coding tool available in terminal or app workflow.",
  "successCriteria": [
    "The command or app can be launched successfully.",
    "The user can reach login or authenticated state.",
    "A simple test command/task starts without environment errors."
  ],
  "primaryActionLabel": "Start install path",
  "stuckActionLabel": "I am stuck installing",
  "blockerIds": ["npm-install-fails", "powershell-policy", "macos-permission"],
  "sourceIds": ["claude-code-setup", "codex-cli-docs"],
  "osSupport": ["both"],
  "nextNodeIds": ["login-auth"],
  "lastReviewedAt": "2026-05-04"
}
```

## 3. Troubleshooting Issue

```ts
type Issue = {
  id: string;
  title: string;
  symptoms: string[];
  category:
    | "network"
    | "login"
    | "subscription"
    | "api-key"
    | "node-npm"
    | "terminal"
    | "permission"
    | "windows"
    | "macos";
  likelyCauses: string[];
  firstActions: string[];
  escalation: "self-serve" | "ask-campus-helper" | "official-support";
  relatedNodeIds: string[];
  sourceIds: string[];
  sourceType: SourceType;
  lastVerifiedAt: string;
};
```

## 4. Source Record

```ts
type Source = {
  id: string;
  title: string;
  url: string;
  sourceType: SourceType;
  owner: "Anthropic" | "OpenAI" | "GitHub" | "Community" | "Personal";
  topicTags: string[];
  lastCheckedAt: string;
  usagePolicy: "link-and-summarize" | "short-quote-only" | "personal-original";
  notes: string;
};
```

## 5. First Practice Task

```ts
type PracticeTask = {
  id: string;
  title: string;
  targetUser: string;
  estimatedMinutes: number;
  recommendedTool: "Claude Code" | "Codex" | "Either";
  requiredInputs: string[];
  steps: string[];
  successCriteria: string[];
  fallbackIssueIds: string[];
  sourceIds: string[];
};
```

## 6. Update Record

```ts
type UpdateRecord = {
  id: string;
  title: string;
  sourceId: string;
  detectedAt: string;
  impactArea:
    | "install"
    | "auth"
    | "network"
    | "permissions"
    | "configuration"
    | "workflow"
    | "troubleshooting"
    | "unknown";
  impactSummary: string;
  userActionRequired: boolean;
  affectedPageIds: string[];
  status: "candidate" | "reviewed" | "published" | "ignored";
};
```

## 7. UI Handoff Notes

Gemini UI should map directly to these concepts:

- Route map nodes use `RoadmapNode`.
- Search and blocker cards use `Issue`.
- Source badges use `Source.sourceType`.
- First-practice cards use `PracticeTask`.
- Updates page uses `UpdateRecord`.

No UI should display a factual instruction without a connected `Source` or `Personal Note`.
