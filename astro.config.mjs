import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://iptv-sverige.org",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date()
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: "auto"
  }
});
