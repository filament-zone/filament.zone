import Inspect from 'vite-plugin-inspect';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Inspect()],
};

export default config;

function markdownCMS() {
	return {
		name: 'markdown-cms',

		buildStart(options) {
			return;
		},
	};
}
