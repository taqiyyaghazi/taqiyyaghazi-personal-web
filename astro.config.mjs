import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://taqiyyaghazi.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
