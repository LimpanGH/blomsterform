import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";
import atImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  publicDir: "./web/public/",
  build: {
    manifest: true,
    outDir: "./web/dist/",
    target: "es2015",
    rollupOptions: {
      input: {
        app: "./src/js/site.js",
        flickity: "./src/js/flickity.js",
        polyfill: './src/js/polyfill.js'
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        atImport(),
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    ViteRestart({
      reload: ["./templates/*.twig", "./templates/**/*.twig"],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true
  },
});
