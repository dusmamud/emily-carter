import { test, expect } from '@playwright/test';

test.describe('navigation & home', () => {
  test('home loads with one H1 and working nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Emily Carter/);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('Master English');
    await page.getByRole('link', { name: 'Level Test' }).first().click();
    await expect(page).toHaveURL(/\/level-test\/$/);
    await expect(page.locator('h1')).toHaveCount(1);
  });

  test('watch intro opens a dialog with a video', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Watch Intro/ }).click();
    const dialog = page.locator('#intro-dialog');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#intro-video')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('no horizontal overflow at 360px on main pages', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    for (const path of ['/', '/level-test/', '/levels/', '/schedule/', '/results/', '/resources/', '/book/', '/for-kids-teens/', '/search/']) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${path} overflow`).toBeLessThanOrEqual(0);
    }
  });
});

test.describe('level test', () => {
  test('completing the quiz shows a CEFR result with preselected booking CTA', async ({ page }) => {
    await page.goto('/level-test/');
    // Answer every question correctly by picking the known-correct options:
    // the quiz paginates one question at a time; choose the first option each
    // time except where the test data puts the answer elsewhere — instead of
    // depending on data, answer all 12 with option index 1 which yields a
    // deterministic mid result; we only assert the result flow works.
    for (let i = 0; i < 12; i++) {
      const fieldset = page.locator('.quiz-q:visible');
      await fieldset.locator('input[type="radio"]').nth(1).check();
      await page.getByRole('button', { name: i === 11 ? 'See my result' : /Next question/ }).click();
    }
    const result = page.locator('#quiz-result');
    await expect(result).toBeVisible();
    await expect(page.locator('#result-band')).toHaveText(/A1|A2|B1|B2|C1/);
    const href = await page.locator('#result-book').getAttribute('href');
    expect(href).toContain('/book/?level=');
    expect(href).toContain('course=');
    // Follow the CTA: booking form must preselect level + course
    await page.locator('#result-book').click();
    await expect(page).toHaveURL(/\/book\//);
    await expect(page.locator('#bk-level')).not.toHaveValue('');
    await expect(page.locator('#bk-course')).not.toHaveValue('');
  });

  test('quiz blocks advancing without an answer', async ({ page }) => {
    await page.goto('/level-test/');
    await page.getByRole('button', { name: /Next question/ }).click();
    await expect(page.locator('#quiz-error')).toContainText('Please choose an answer');
  });
});

test.describe('booking form', () => {
  test('empty submit shows per-field errors; valid submit confirms', async ({ page }) => {
    await page.goto('/book/');
    await page.getByRole('button', { name: /Request My Free Trial/ }).click();
    await expect(page.locator('#bk-name-error')).toContainText('name');
    await expect(page.locator('#bk-email-error')).toContainText('valid email');
    await page.locator('#bk-name').fill('Test Student');
    await page.locator('#bk-email').fill('test@example.com');
    await page.locator('#bk-course').selectOption({ label: 'General English' });
    await page.locator('#bk-level').selectOption({ label: 'B1 — Intermediate' });
    await page.locator('#bk-date').fill('2027-01-15');
    await page.locator('#bk-time').selectOption('10:00');
    await page.getByRole('button', { name: /Request My Free Trial/ }).click();
    await expect(page.locator('#book-success')).toBeVisible();
    await expect(page.locator('#bk-ref')).toHaveText(/EC-[A-Z0-9]+/);
  });
});

test.describe('search & resources', () => {
  test('search filters results', async ({ page }) => {
    await page.goto('/search/');
    await page.locator('#search-input').fill('IELTS');
    await expect(page.locator('#search-status')).toContainText('result');
    const visible = await page.locator('[data-search-item]:visible').count();
    expect(visible).toBeGreaterThan(0);
    expect(visible).toBeLessThan(30);
  });

  test('resource sheet prints via button and has content', async ({ page }) => {
    await page.goto('/resources/daily-phrases-cheat-sheet/');
    await expect(page.locator('h1')).toContainText('Daily Phrases');
    await expect(page.getByRole('button', { name: /Print \/ Save as PDF/ })).toBeVisible();
  });
});
