import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { BASE } from './src/utils/baseUrl';

// https://astro.build/config
export default defineConfig({
  site: "https://ondrastech82.github.io",
  base: BASE,
  markdown: {
    shikiConfig: {
      theme: "monokai"
    }
  },
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt()]
});