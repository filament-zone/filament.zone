import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			component: 'src/component',
			cms: 'src/cms',
			styles: 'src/styles',
		},
	},

	preprocess: preprocess({
		less: true,
	}),
};

export default config;
