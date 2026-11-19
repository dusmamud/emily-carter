// Screenshots via playwright-core + local chromium.
// Usage: node scripts/screenshot.mjs [baseUrl]
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] || 'http://localhost:4321';
const out = 'screenshots';
await mkdir(out, { recursive: true });
const browser = await chromium.launch();
const shots = [
  { name: 'home-desktop-top', path: '/', w: 1440, h: 900, full: false },
  { name: 'home-desktop-full', path: '/', w: 1440, h: 900, full: true },
  { name: 'home-mobile-top', path: '/', w: 360, h: 740, full: false },
  { name: 'home-mobile-full', path: '/', w: 360, h: 740, full: true },
  { name: 'courses', path: '/courses/', w: 1440, h: 900, full: false },
  { name: 'course-detail', path: '/courses/exam-preparation/', w: 1440, h: 900, full: false },
  { name: 'pricing', path: '/pricing/', w: 1440, h: 900, full: false },
  { name: 'book', path: '/book/', w: 1440, h: 900, full: false },
  { name: 'book-mobile', path: '/book/', w: 360, h: 740, full: false },
];
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await page.goto(base + s.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  // Scroll through the page so scroll-triggered reveals fire (they use
  // once:true, so sections stay visible), then return to the top.
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 900));
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(1200);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await page.screenshot({ path: `${out}/${s.name}.png`, fullPage: s.full });
  console.log(s.name, 'overflow=', overflow);
  await page.close();
}
await browser.close();
console.log('screenshots done');
