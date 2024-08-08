import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// site: 'http://localhost:5500',
	build: {
		// assetsPrefix: 'http://localhost:3006',
  },
	// Enable React to support React JSX components.
	integrations: [react()],
});
