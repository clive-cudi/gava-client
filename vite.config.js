import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import handlebars from 'vite-plugin-handlebars';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: { initialIsOpen: false },
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"'
      }
    }),
    svgrPlugin(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials')
    })
  ],
  server: {
    port: 3000,
    proxy: {
      '/api-server/': '...',
      '/authorization/': '...'
    }
  }
});
