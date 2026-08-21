# Handoff Summary

Date: 2026-08-21
Status: learning-loop redesign complete; ready for deployment preparation

## Product position

AI Coding Onboarding Navigator helps Chinese university students establish a reliable AI-coding foundation and then learn through real, verifiable tasks.

The product is not a tutorial library, troubleshooting database, marketing page, or embedded chatbot. Official documentation decides product facts; this site designs the learning route.

## Current user journey

1. Confirm whether Claude Code, Codex, and WorkBuddy are installed.
2. If unsure, open the supplied Claude Code official setup page and the reviewed Codex / WorkBuddy reference articles.
3. Pick a small real goal instead of studying the whole tool in advance.
4. Repeat one loop: define the goal, inspect the plan, act in a bounded scope, verify evidence, and retain a reusable method.
5. Move into starter, project, and workflow layers only as more depth becomes useful.

## Current product surfaces

- Installation confirmation and source links
- Starter, project, and workflow routes
- Tool selection and official setup paths
- Small first-practice projects with acceptance evidence
- Local workflow notes and Markdown export
- Source hierarchy and update records
- Maintainer contact and GitHub Issue feedback
- Dismissible announcement explaining the redesign

## Explicit boundaries

- No troubleshooting cards or troubleshooting assistant
- No assistant backend or API secrets
- No network circumvention guidance
- No unverified community material presented as product fact
- No claim that feedback is stored by the site; GitHub persists current submissions

When a learner is stuck, the site recommends giving the goal, complete error text or screenshot, and attempted steps to Codex, Doubao, or another available AI after removing sensitive data.

## Feedback and persistence

The current feedback link opens a prefilled issue in the project repository. It works on static hosting and Sites without a database, but requires a GitHub account.

Browser storage is used only for local progress, workflow notes, and dismissed UI state. If a future native feedback form must retain submissions centrally, implement it with Sites D1 or an equivalent platform-backed store.

## Deployment handoff

The current app is a React + Vite SPA with a Vercel rewrite configuration. Sites metadata has not been created yet. Read `docs/operations/deployment-handoff.md` before publishing with Sites.

Validation currently covers content contracts, TypeScript, production build, 11 routes, and 1440px / 390px visual regression checks.

## Next work after release

1. Observe 3-5 real campus users without coaching them through the interface.
2. Improve confusing steps based on observed behavior and submitted feedback.
3. Keep official links and review dates current.
4. Decide from actual demand whether anonymous native feedback is worth the additional persistence and moderation work.
5. Split the production bundle only when performance measurements justify it.
