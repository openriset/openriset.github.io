import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://openriset.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    outDir: 'dist'
  }
});
