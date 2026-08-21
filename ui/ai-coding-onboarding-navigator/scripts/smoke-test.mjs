import assert from 'node:assert/strict';

const baseUrl = process.env.SMOKE_BASE_URL ?? 'http://localhost:3000';
const routes = ['/', '/starter', '/project', '/advanced', '/roadmap/select-tool', '/roadmap/agentic-thinking', '/tools', '/setup', '/practice', '/practice/web-tool', '/updates'];
const expectedShellText = ['<div id="root"></div>', '/src/main.tsx'];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, 200, `${route} should return 200`);

  const html = await response.text();
  for (const text of expectedShellText) {
    assert.ok(html.includes(text), `${route} should include shell marker: ${text}`);
  }
}

console.log(`smoke checks passed for ${routes.length} routes at ${baseUrl}`);
