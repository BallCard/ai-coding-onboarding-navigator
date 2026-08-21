import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const outputDir = path.resolve(appRoot, 'artifacts', 'visual-regression');
const baseUrl = process.env.SMOKE_BASE_URL || 'http://localhost:3000';
const globalPlaywrightPath = process.env.APPDATA
  ? path.join(process.env.APPDATA, 'npm', 'node_modules', '@playwright', 'cli', 'node_modules', 'playwright')
  : '';
const playwrightPath = [
  path.join(appRoot, 'node_modules', 'playwright'),
  path.join(appRoot, 'node_modules', '@playwright', 'test', 'node_modules', 'playwright'),
  globalPlaywrightPath,
].find((candidate) => candidate && existsSync(candidate));

if (!playwrightPath) throw new Error('Playwright package not found.');

const { chromium } = require(playwrightPath);
const pages = [
  ['home', '/'],
  ['starter', '/starter'],
  ['project', '/project'],
  ['advanced', '/advanced'],
  ['tools', '/tools'],
  ['setup', '/setup'],
  ['practice', '/practice'],
  ['practice-detail', '/practice/web-tool'],
  ['updates', '/updates'],
];
const viewports = [
  ['1440', { width: 1440, height: 1200 }],
  ['390', { width: 390, height: 844 }],
];

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });

try {
  for (const [viewportName, viewport] of viewports) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await context.newPage();

    for (const [name, route] of pages) {
      await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'networkidle', timeout: 30000 });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(outputDir, `${name}-${viewportName}.png`), fullPage: false });
      const dimensions = await page.evaluate(() => ({
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      if (dimensions.scrollWidth > dimensions.innerWidth) {
        throw new Error(`${route} overflows at ${viewportName}px: ${dimensions.scrollWidth} > ${dimensions.innerWidth}`);
      }
      console.log(`captured ${name}-${viewportName}.png (${dimensions.innerWidth}px)`);

      if (name === 'home') {
        await page.getByRole('button', { name: '没有 / 不确定' }).click();
        await page.screenshot({ path: path.join(outputDir, `home-help-${viewportName}.png`), fullPage: false });
        const helpDimensions = await page.evaluate(() => ({
          innerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
        }));
        if (helpDimensions.scrollWidth > helpDimensions.innerWidth) {
          throw new Error(`${route} help state overflows at ${viewportName}px: ${helpDimensions.scrollWidth} > ${helpDimensions.innerWidth}`);
        }
        console.log(`captured home-help-${viewportName}.png (${helpDimensions.innerWidth}px)`);
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}
