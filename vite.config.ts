import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import postcssPreset from "postcss-preset-env";
import postcssFlexboxFixes from "postcss-flexbugs-fixes";
import safe from "postcss-safe-parser";
import postcssCustomProperties from "postcss-custom-properties";
// import postcss from "rollup-plugin-postcss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oase/",
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       postcss({
  //         extract: "public/build/global.css",
  //         sourceMap: true,
  //         minimize: true,
  //       }),
  //     ],
  //   },
  // },
  server: {
    port: 3000,
  },
  preview: {
    port: 5050,
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [
            safe,
            postcssPreset({
              stage: 0,
              browsers: "iOS 9",
              autoprefixer: { grid: true },
            }),
            postcssFlexboxFixes,
            postcssCustomProperties,
          ],
        },
      }),
    }),
    legacy({
      targets: ["defaults", "iOS 9"],
    }),
  ],
});
