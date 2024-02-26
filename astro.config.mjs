import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

export default defineConfig({
	site: "https://ithundxr.dev",
	integrations: [react(), tailwind(), sitemap(), robotsTxt(), icon()],
});
