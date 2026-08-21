# Frontend App

React + Vite implementation for AI Coding Onboarding Navigator.

## Run

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>.

## Contact and feedback

- GitHub: [@BallCard](https://github.com/BallCard)
- Feedback: [open a repository issue](https://github.com/BallCard/ai-coding-onboarding-navigator/issues/new)

## Verify

```powershell
.\node_modules\.bin\tsx.cmd src\content.test.ts
npm run lint
npm run build
node scripts\smoke-test.mjs
powershell.exe -ExecutionPolicy Bypass -File scripts\browser-smoke.ps1
node scripts\capture-visual-regression.mjs
```

## Structure

- `src/App.tsx`: routes, header, footer
- `src/constants.ts`: current content source of truth
- `src/components/InstallationGate.tsx`: opening installation confirmation
- `src/components/WorkflowNotebook.tsx`: local reflection notes and Markdown export
- `src/pages/`: home, layer routes, task pages, setup, tools, sources and updates
- `scripts/`: route smoke checks and visual regression captures

The app intentionally has no troubleshooting database, embedded AI assistant, or assistant backend. Error states should briefly tell users to give complete error text or screenshots to an available AI after removing sensitive information.

Before publishing, read `../../docs/operations/deployment-handoff.md`. The current feedback link works on static hosting and Sites because GitHub receives the submission; this release does not require a database.
