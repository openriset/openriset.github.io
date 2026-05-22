// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://openriset.github.io',
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true
    }
  }
});
