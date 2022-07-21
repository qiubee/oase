import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oase/",
  plugins: [
    svelte(),
    legacy({
      targets: ["defaults", "iOS 9"],
    }),
  ],
});
