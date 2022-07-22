import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oase/",
  server: {
    port: 3000,
  },
  preview: {
    port: 5050,
  },
  plugins: [
    svelte(),
    legacy({
      targets: ["defaults", "iOS 9"],
    }),
  ],
});
