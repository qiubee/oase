import * as path from "path";
import { defineConfig } from "vite";
// import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { babel } from "@rollup/plugin-babel";
// import postcss from "rollup-plugin-postcss";

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
        // postcss({
        //   parser: safe,
        //   extract: true,
        //   minimize: true,
        //   plugins: [
        //     postcssPreset({
        //       stage: 0,
        //       browsers: "iOS 9",
        //       autoprefixer: { grid: true },
        //     }),
        //     postcssFlexboxFixes,
        //     postcssCustomProperties,
        //   ],
        // }),
      ],
      // output: {
      //   plugins: [getBabelOutputPlugin({
      //     configFile: path.resolve(__dirname, "babel.config.json")
      //   })
      //   ]
      // }
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
