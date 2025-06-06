import { defineConfig } from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',

  // css: {
  //   postcss: path.resolve(__dirname, 'postcss.config.js'),
  // },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    manifest: true,
    outDir: 'web/dist/',
    rollupOptions: {
      input: {
        app: 'viteEntryPoint.js',
      },
      output: {
        sourcemap: true,
      },
    },
  },

  plugins: [
    manifestSRI(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i,
    }),
    ViteRestart({
      reload: ['templates/**/*'],
    }),
  ],

  publicDir: path.resolve(__dirname, 'src/public'),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },

  server: {
    allowedHosts: ['emilies-keramik.ddev.site'],

    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true
  },
}));
