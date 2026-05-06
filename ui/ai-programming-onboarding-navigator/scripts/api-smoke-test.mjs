import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.API_SMOKE_PORT ?? 4181);
const baseUrl = `http://127.0.0.1:${port}`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const tsxCli = path.join(projectRoot, 'node_modules', 'tsx', 'dist', 'cli.mjs');

const server = spawn(process.execPath, [tsxCli, 'server/index.ts'], {
  cwd: projectRoot,
  env: {
    ...process.env,
    PORT: String(port),
    OPENAI_API_KEY: '',
    ASSISTANT_RATE_LIMIT_MAX: '3',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

let serverOutput = '';
server.stdout.on('data', (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on('data', (chunk) => {
  serverOutput += chunk.toString();
});

async function waitForServer() {
  const deadline = Date.now() + 10_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/api/troubleshooting-assistant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: 'npm install timeout' }),
      });
      if (response.ok) return response;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  throw new Error(`API server did not start.\n${serverOutput}`);
}

try {
  const first = await waitForServer();
  const payload = await first.json();
  assert.equal(payload.mode, 'local');
  assert.ok(Array.isArray(payload.firstActions));
  assert.ok(payload.firstActions.length > 0);

  const redaction = await fetch(`${baseUrl}/api/troubleshooting-assistant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: '我的 key 是 sk-proj-1234567890abcdef1234567890abcdef，npm 装不上' }),
  });
  const redactionPayload = await redaction.json();
  assert.equal(JSON.stringify(redactionPayload).includes('sk-proj-1234567890abcdef'), false);

  await fetch(`${baseUrl}/api/troubleshooting-assistant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: 'login loop' }),
  });

  const limited = await fetch(`${baseUrl}/api/troubleshooting-assistant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: 'login loop again' }),
  });
  assert.equal(limited.status, 429);

  console.log('api smoke checks passed');
} finally {
  server.kill();
}
