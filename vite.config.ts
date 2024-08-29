import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components")
    },
  },
  plugins: [tsconfigPaths(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/constants.scss";
          @import "src/styles/mixins.scss";
          @import "src/styles/root.scss";
        `,
      },
    },
  },
  server: {
    port: 4008,
  },
});
