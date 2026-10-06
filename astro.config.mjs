import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kozaky.com.ua',
  trailingSlash: 'always',
  compressHTML: false,
  build: {
    format: 'directory',
  },
});
