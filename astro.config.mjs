import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import * as fs from "fs";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: JSON.parse(
        fs.readFileSync("./src/blog/Tomorrow_Night.tmTheme.json", "utf-8")
      ),
      wrap: true,
    },
  },
});
