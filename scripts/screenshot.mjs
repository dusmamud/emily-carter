// Screenshots via playwright-core + local chromium.
// Usage: node scripts/screenshot.mjs [baseUrl]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] || 'http://127.0.0.1:4411';
const out = 'screenshots';
await mkdir(out, { recursive: true });
let browser;
for (let i = 1; i <= 4; i++) {
  try { browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] }); break; }
  catch { console.log(`launch attempt ${i} failed…`); await new Promise((r) => setTimeout(r, 3000)); }
}
if (!browser) throw new Error('chromium launch failed');
const routes = [
  ['home', '/'], ['about', '/about/'], ['courses', '/courses/'], ['course-detail', '/courses/exam-preparation/'],
  ['testimonials', '/testimonials/'], ['pricing', '/pricing/'], ['faq', '/faq/'], ['blog', '/blog/'],
  ['book', '/book/'], ['contact', '/contact/'], ['level-test', '/level-test/'], ['how-it-works', '/how-it-works/'],
  ['levels', '/levels/'], ['for-kids-teens', '/for-kids-teens/'], ['for-adults', '/for-adults/'],
  ['results', '/results/'], ['schedule', '/schedule/'], ['resources', '/resources/'],
  ['resource-sheet', '/resources/daily-phrases-cheat-sheet/'], ['policies', '/policies/'], ['search', '/search/'],
];
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 110));
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 700));
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(900);
}
for (const [name, path] of routes) {
  for (const [suffix, w, h] of [['desktop-top', 1440, 900], ['mobile-top', 360, 740]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    await scrollThrough(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    await page.screenshot({ path: `${out}/${name}-${suffix}.png` });
    console.log(`${name}-${suffix}`, 'overflow=', overflow);
    await ctx.close();
  }
}
// home full-page (desktop + mobile)
for (const [name, w, h] of [['home-desktop-full', 1440, 900], ['home-mobile-full', 360, 740]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  await scrollThrough(page);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  console.log(name, 'done');
  await ctx.close();
}
await browser.close();
console.log('screenshots done');
