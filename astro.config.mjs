import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robots from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robots()]
})
