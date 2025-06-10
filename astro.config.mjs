// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
  redirects: {
    "/discord": "https://discord.gg/Fxkrf6Hqkj",
    "/patreon": "https://patreon.com/awfixer",
    "/github": "https://github.com/awfixer-org",
    "/terms": "https://legal.awfixer.com/terms",
    "/privacy": "https://legal.awfixer.com/privacy",
    "/gitlab": "https://gitlab.awfixer.dev",
    "/dev": "https://awfixer.dev",
    "/cloud": "https://awfixer.cloud",
    "/blog": "https://awfixer.blog",
  },
});
