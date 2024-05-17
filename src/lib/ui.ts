import { readable } from 'svelte/store';

export const prefersDarkTheme = readable(false, (set) => {
	let stop = () => {};

	if (typeof window != 'undefined') {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const setMatches = () => set(mediaQuery.matches);

		setMatches();

		mediaQuery.addEventListener('change', setMatches);
		stop = () => mediaQuery.removeEventListener('change', setMatches);
	}

	return stop;
});
