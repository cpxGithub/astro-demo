import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// site: 'http://localhost:5500',
	build: {
		assetsPrefix: 'https://stalwart-puppy-cbdd2d.netlify.app',
  },
	// Enable React to support React JSX components.
	integrations: [react()],
});
