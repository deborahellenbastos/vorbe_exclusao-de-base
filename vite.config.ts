import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages configuration
const repoName = 'vorbe_exclusao-de-base';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Use '/' for dev, '/repoName/' for production (GitHub Pages)
  base: mode === 'production' ? `/${repoName}/` : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
