import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const workspaceRoot = path.resolve(appRoot, '..', '..');
const outputDir = path.resolve(workspaceRoot, 'ui', 'post-assets');
const profileDir = path.resolve(workspaceRoot, '.pw-post-screenshots');
const baseUrl = process.env.POST_SCREENSHOT_BASE_URL || 'http://localhost:3000';
const globalPlaywrightPath = process.env.APPDATA
  ? path.join(process.env.APPDATA, 'npm', 'node_modules', '@playwright', 'cli', 'node_modules', 'playwright')
  : '';
const playwrightCandidates = [
  path.join(appRoot, 'node_modules', 'playwright'),
  path.join(appRoot, 'node_modules', '@playwright', 'test', 'node_modules', 'playwright'),
  globalPlaywrightPath,
].filter(Boolean);
const playwrightPath = playwrightCandidates.find((candidate) => existsSync(candidate));

if (!playwrightPath) {
  throw new Error('Playwright package not found. Install playwright locally or globally with @playwright/cli.');
}

const { chromium } = require(playwrightPath);

const shots = [
  ['/', 'home-roadmap.png'],
  ['/starter', 'layer-starter.png'],
  ['/project', 'layer-project.png'],
  ['/advanced', 'layer-advanced.png'],
  ['/tools', 'tool-selection.png'],
  ['/setup', 'setup-verification.png'],
  ['/troubleshooting', 'troubleshooting.png'],
  ['/practice', 'first-practice.png'],
];

await mkdir(outputDir, { recursive: true });

const context = await chromium.launchPersistentContext(profileDir, {
  channel: 'chrome',
  headless: true,
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  args: ['--no-first-run', '--disable-gpu', '--hide-scrollbars'],
});

try {
  const page = context.pages()[0] || await context.newPage();

  for (const [route, filename] of shots) {
    const url = new URL(route, baseUrl).toString();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: path.join(outputDir, filename),
      fullPage: false,
    });
    console.log(`captured ${filename} from ${url}`);
  }
} finally {
  await context.close();
}
