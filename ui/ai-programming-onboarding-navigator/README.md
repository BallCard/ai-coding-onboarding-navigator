# AI Programming Onboarding Navigator

This is the Vite/React frontend and reserved API server for the campus AI coding onboarding site.

## Run Frontend

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Run Reserved API Server

```powershell
npm run build
npm run dev:full
```

Open:

```text
http://localhost:3001
```

API:

```text
POST /api/troubleshooting-assistant
```

## Environment

Copy `.env.example` and fill later:

```text
OPENAI_API_KEY=""
OPENAI_MODEL="gpt-5.4-mini"
ASSISTANT_RATE_LIMIT_MAX="12"
```

The API key must stay server-side.

## Verify

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
npm run build
node scripts\smoke-test.mjs
node scripts\api-smoke-test.mjs
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
```

## Main Files

- `src/constants.ts`: all route, source, troubleshooting, task, rule, and safety data
- `src/pages/Home.tsx`: three-layer route selector
- `src/pages/RoadmapDetail.tsx`: per-node detail page
- `src/components/FloatingAssistant.tsx`: floating troubleshooting assistant
- `server/index.ts`: reserved API endpoint

## Assistant Status

Current assistant is local-first and API-backed:

- Frontend calls `/api/troubleshooting-assistant`
- If API is unavailable, frontend falls back to local matching
- Without `OPENAI_API_KEY`, server returns local matches
- With `OPENAI_API_KEY`, server calls the OpenAI Responses API from the backend only
- If OpenAI fails or times out, server returns local fallback results

## Assistant Safety

- API key is read only from server environment variables.
- User input is limited to 800 characters.
- Request body is limited to 12kb.
- API keys, bearer tokens, and JWT-like strings are redacted before processing.
- Rate limiting is enabled per IP. Default: 12 requests per minute.
- The model only receives matched troubleshooting context from the site.
- The assistant is instructed not to provide credential handling, account bypass, or network bypass guidance.
- User-facing errors do not expose stack traces or secrets.
