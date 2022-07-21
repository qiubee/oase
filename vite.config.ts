import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    legacy({
      targets: ["defaults", "iOS 9"],
    }),
  ],
  build: {
    polyfillModulePreload: true,
  },
  experimental: {
    renderBuiltUrl: (filename: string, { hostType } ) => {
      if (hostType === 'js') {
        return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` }
      } else {
        return { relative: true }
      }
    }
  }
});
