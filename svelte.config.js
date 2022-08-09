import sveltePreprocess from "svelte-preprocess";
import postcssPreset from "postcss-preset-env";
import postcssCustomProperties from "postcss-custom-properties";
import safe from "postcss-safe-parser";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      parser: safe,
      plugins: [
        postcssCustomProperties,
        postcssPreset({
          stage: 0,
          browsers: "> 0.25%, iOS 9",
          autoprefixer: {
            grid: true,
          },
        }),
      ],
    },
  }),
};
