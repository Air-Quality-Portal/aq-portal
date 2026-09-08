import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: "tree", // or "default", "tap", etc.
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./"),
    },
  },
});
