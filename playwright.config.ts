import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  retries: 1,
  use: {
    baseURL: 'http://127.0.0.1:4411',
  },
  webServer: {
    command: 'npm run build && npm run preview -- --port 4411 --host 127.0.0.1',
    url: 'http://127.0.0.1:4411/',
    reuseExistingServer: true,
    timeout: 180_000,
  },
});
