import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '');
        },
      },
    ],
  },
  optimizeDeps: { esbuildOptions: { target: 'es2020' } },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
