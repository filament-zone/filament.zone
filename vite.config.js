import Inspect from 'vite-plugin-inspect';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), Inspect()],
};

export default config;
