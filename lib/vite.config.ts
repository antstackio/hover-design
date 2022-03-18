import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

import pkg from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: "short" }),
    tsconfigPaths(),
    dts({
      exclude: [
        "src/**/*.docs.mdx",
        "src/**/*.snippets.tsx",
        "src/**/*.test.ts*",
        "src/**/*.stories.ts*",
      ],
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace("src", ""),
      }),
      compilerOptions: {
        baseUrl: "./src/",
        emitDeclarationOnly: true,
        noEmit: false,
      },
      outputDir: "dist/types",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
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
