/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["vitest.setup.ts"],
    server: {
      deps: {
        inline: ["@webext-core/storage"],
      },
    },
  },
});
