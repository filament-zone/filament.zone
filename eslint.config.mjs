import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'**/*.cjs',
			'**/.*',
			'build/**',
			'coverage/**',
			'node_modules/**',
			'package/**',
			'package-lock.json',
			'worker-configuration.d.ts',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: { extraFileExtensions: ['.svelte'] },
		},
		rules: {
			'svelte/no-at-html-tags': 'warn',
			// This site is deployed at the domain root, with no SvelteKit base path.
			'svelte/no-navigation-without-resolve': 'off',
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: { parser: tseslint.parser },
		},
	},
];
