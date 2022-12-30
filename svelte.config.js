import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			component: 'src/component',
			cms: 'src/cms',
			icon: 'src/icon',
			style: 'src/style',
		},
	},
};

export default config;
