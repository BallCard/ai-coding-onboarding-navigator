import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const html = await readFile(join(distRoot, 'index.html'), 'utf8');
const assetPaths = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map(
  ([, assetPath]) => assetPath,
);

assert.ok(assetPaths.length > 0, 'dist/index.html should reference built assets');

for (const assetPath of assetPaths) {
  const assetFile = join(distRoot, assetPath.slice(1));
  const assetStat = await stat(assetFile);
  assert.ok(assetStat.isFile(), `${assetPath} should be a file`);
  assert.ok(assetStat.size > 0, `${assetPath} should not be empty`);
}

console.log(`verified ${assetPaths.length} built assets referenced by dist/index.html`);
