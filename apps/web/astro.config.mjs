import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SANITY_PROJECT_ID } = loadEnv('production', process.cwd(), 'SANITY');

export default defineConfig({
  site: 'https://marrlaserandskinclinic.com',
  output: 'static',
  integrations: [
    // The form thank-you page is a post-submit destination, not a landing page.
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
  vite: {
    envDir: '../../',
  },
});
