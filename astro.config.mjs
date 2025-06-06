// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
  redirects: {
    "/discord": "https://discord.gg/awfixer",
    "/patreon": "https://patreon.com/awfixer",
    "/github": "https://github.com/awfixer-org",
    "/terms": "https://legal.awfixer.com/terms",
    "/privacy": "https://legal.awfixer.com/privacy",
  },
});
