import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  base: "/PersonalPage/",
  plugins: [react(), ViteYaml()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
