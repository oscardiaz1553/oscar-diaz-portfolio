import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` is set to the repo subpath when building for GitHub Pages
// (via VITE_BASE in CI) and falls back to '/' for local dev/other hosts.
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});
