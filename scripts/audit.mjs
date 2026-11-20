// Accessibility (axe) + overflow audit for every route.
// Usage: node scripts/audit.mjs [baseUrl] [--axe-only]
// Expects the production build served (e.g. `astro preview`).
import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

export const ROUTES = [
  '/', '/about/', '/courses/', '/courses/general-english/', '/courses/business-english/',
  '/courses/conversation-skills/', '/courses/exam-preparation/', '/testimonials/', '/pricing/',
  '/faq/', '/blog/', '/blog/how-to-speak-english-fluently/', '/book/', '/contact/',
  '/level-test/', '/how-it-works/', '/levels/', '/for-kids-teens/', '/for-adults/',
  '/results/', '/schedule/', '/resources/', '/resources/daily-phrases-cheat-sheet/', '/policies/', '/search/', '/privacy/', '/terms/',
];

const base = process.argv[2] || 'http://127.0.0.1:4411';
const onlyAxe = process.argv.includes('--axe-only');
let browser;
for (let attempt = 1; attempt <= 4; attempt++) {
  try { browser = await chromium.launch({ args: ['--disable-dev-shm-usage', '--no-sandbox'] }); break; }
  catch (err) { console.log(`launch attempt ${attempt} failed, retrying…`); await new Promise((r) => setTimeout(r, 3000)); }
}
if (!browser) throw new Error('chromium launch failed after retries');
let seriousTotal = 0, allTotal = 0, overflowBad = 0, crashed = 0;
for (const route of ROUTES) {
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const resp = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    if (!resp || resp.status() === 404) { console.log(`${route} -> NOT BUILT (skip)`); await ctx.close(); continue; }
    await page.waitForTimeout(350);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((v) => ['serious', 'critical'].includes(v.impact));
    const others = results.violations.filter((v) => !['serious', 'critical'].includes(v.impact));
    seriousTotal += serious.length; allTotal += results.violations.length;
    let line = `${route} axe serious/critical=${serious.length} other=${others.length}`;
    for (const v of serious) line += `\n   !! ${v.id} (${v.impact}) x${v.nodes.length}: ${v.help} :: ${v.nodes[0]?.target?.join(' ')}`;
    for (const v of others) line += `\n   ~  ${v.id} (${v.impact}) x${v.nodes.length}: ${v.help} :: ${v.nodes[0]?.target?.join(' ')}`;
    if (!onlyAxe) {
      for (const w of [320, 360, 768, 1440]) {
        await page.setViewportSize({ width: w, height: 800 });
        await page.waitForTimeout(80);
        const o = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (o > 0) { line += ` overflow@${w}=${o}`; overflowBad++; }
      }
    }
    console.log(line);
    await ctx.close();
  } catch (err) {
    crashed++;
    console.log(`${route} -> AUDIT ERROR: ${String(err).split('\n')[0]}`);
  }
}
await browser.close();
console.log(`\nTOTAL: serious/critical=${seriousTotal} all-violations=${allTotal} overflow-failures=${overflowBad} route-errors=${crashed}`);
