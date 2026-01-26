// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tiendasdonmariano.com', // Reemplaza con tu dominio real cuando lo tengas
  vite: {
    plugins: [tailwindcss()],
  }
});
