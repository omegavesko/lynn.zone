import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import * as fs from "fs";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true }), tailwind()],
  markdown: {
    shikiConfig: {
      theme: JSON.parse(
        fs.readFileSync("./src/blog/Tomorrow_Night.tmTheme.json", "utf-8")
      ),
      wrap: true,
    },
  },
});
