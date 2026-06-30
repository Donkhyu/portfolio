// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Update `site` to your final domain (Vercel subdomain or custom domain).
// For GitHub Pages project hosting, also set `base: '/portfolio'`.
export default defineConfig({
  site: 'https://donkhyu-portfolio.vercel.app',
  integrations: [react(), sitemap()],
});
