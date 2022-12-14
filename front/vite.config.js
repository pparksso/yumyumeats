import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: "node_modules/$1",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/_vars.scss"; @import "./src/style/_mixin.scss";`,
      },
    },
  },
});
