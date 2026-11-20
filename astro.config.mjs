import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://emilycarter-english.pages.dev',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/search') })],
  vite: { plugins: [tailwindcss()] },
});
