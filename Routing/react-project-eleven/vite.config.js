// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  // 👇 Important for React Router to handle 404 errors correctly
  server: {
    historyApiFallback: true,
  },
});
