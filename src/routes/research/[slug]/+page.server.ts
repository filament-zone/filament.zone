import { error } from '@sveltejs/kit';

import { publications } from 'cms/research.json';

export const load = async ({ params }) => {
	const publication = publications[params.slug as string];

	if (!publication) {
		console.error('Publication not found', params.slug);
		throw error(404, 'Page not found');
	}

	return {
		publication,
	};
};
