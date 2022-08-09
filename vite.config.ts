import * as path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oase/",
  build: {
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: "bundled",
          configFile: path.resolve(__dirname, "babel.config.json"),
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 5050,
  },
  plugins: [svelte()],
});
