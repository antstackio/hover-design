import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

import pkg from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: "short" }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format) => `hover-react.${format}.js`,
      formats: ["es"],
      name: "@hover-design/react",
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
