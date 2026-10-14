import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			preprocess: preprocess({ less: true }),
			adapter: adapter({
				config: process.env.CF_PAGES ? 'cloudflare/pages/wrangler.jsonc' : 'wrangler.jsonc',
			}),
		}),
	],
	resolve: {
		alias: {
			component: new URL('./src/component', import.meta.url).pathname,
			cms: new URL('./src/cms', import.meta.url).pathname,
			styles: new URL('./src/styles', import.meta.url).pathname,
		},
	},
};

export default config;
