import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://loweffort-alt.github.io",
  base: "/portfolio_v3",
  integrations: [tailwind(), sitemap()],
});
