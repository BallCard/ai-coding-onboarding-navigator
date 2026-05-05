# Troubleshooting AI Assistant Plan

## Verdict

An AI troubleshooting assistant is useful for this product, but it must be a guided assistant, not a general chatbot.

It should answer from the site's structured content first:

- Roadmap nodes
- Troubleshooting issues
- Official sources
- Project rule templates
- Safety guidance

It should not invent install commands, account policies, pricing, model availability, VPN recommendations, or unsupported fixes.

## Product Role

Name: `排障助手`

Primary job:

- Ask what stage the user is in.
- Classify the symptom.
- Return the first 1-3 safe actions.
- Link to the relevant route node, troubleshooting card, and official source.

Non-goals:

- It is not a full coding assistant.
- It should not execute commands.
- It should not provide VPN/provider/node recommendations.
- It should not replace official support for account or billing issues.

## Recommended Architecture

Use a server-side API route or backend service.

Do not call the OpenAI API directly from the browser.

```text
Browser UI
  -> POST /api/troubleshooting-assistant
  -> Server validates input and rate limits
  -> Server retrieves relevant local content
  -> OpenAI Responses API
  -> Structured answer with citations
  -> Browser displays answer + source links
```

## API Contract

Request:

```ts
type AssistantRequest = {
  question: string;
  stageId?: string;
  tool?: "Claude Code" | "Codex" | "Unknown";
  os?: "windows" | "macos" | "unknown";
};
```

Response:

```ts
type AssistantResponse = {
  summary: string;
  likelyCategory: string;
  firstActions: string[];
  doNotDo: string[];
  relatedIssueIds: string[];
  relatedSourceIds: string[];
  needsHumanHelp: boolean;
};
```

## System Prompt Boundary

The assistant should follow these rules:

- Answer in Chinese.
- Use only provided site context and official source summaries.
- If the answer depends on current product facts not in context, say it needs official verification.
- Do not recommend VPN providers, proxy vendors, nodes, airports, or circumvention tutorials.
- Do not ask users to paste secrets, API keys, tokens, passwords, or private config.
- Prefer diagnosis over broad explanation.
- Always include a success check.

## Security Requirements

- API key stays on the server.
- Validate user input length.
- Rate limit by IP/session.
- Do not log secrets.
- Redact likely API keys/tokens before logging.
- Return generic server errors.
- Add abuse controls before public launch.

## MVP UI

Add a small assistant panel on the troubleshooting page:

- Input placeholder: `描述你卡在哪一步，例如：npm 装不上 / 登录回调失败 / 浏览器能打开但 CLI 不行`
- Optional selectors:
  - Tool: Claude Code / Codex / Unknown
  - OS: Windows / macOS / Unknown
  - Stage: selected from roadmap nodes

Output:

- Likely category
- First 1-3 actions
- What not to do
- Related cards
- Official sources

## Implementation Phases

### Phase 1: Local deterministic assistant

No external API.

- Search local troubleshooting cards.
- Return matched issues.
- Useful for testing UX and avoiding API cost.

### Phase 2: Server-side AI assistant

- Add backend endpoint.
- Use OpenAI Responses API.
- Use structured output.
- Feed only local content and official source summaries.

### Phase 3: Retrieval and feedback

- Add embeddings or local search index if content grows.
- Add "this helped / did not help" feedback.
- Add analytics for unresolved issues.

## OpenAI Docs To Use

- Responses API / text generation
- Structured outputs
- Rate limits
- Data and privacy
- Safety in building agents

Source policy:

- OpenAI API implementation facts must be checked against official OpenAI docs before coding the real endpoint.
