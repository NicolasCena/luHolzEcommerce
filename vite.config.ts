import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
    port:4008,
  },
});
