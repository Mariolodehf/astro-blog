// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});

/*
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/https://github.com/Mariolodehf/astro-blog.git/', // Reemplaza '<nombre-repo>' con el nombre de tu repositorio de GitHub.
  outDir: 'dist',
});
*/