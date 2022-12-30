import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import type { Publication } from '$lib/cms';
import research from 'cms/publications.json';

const publications = research.publications as { [key: string]: Publication };

export const load: PageServerLoad = async ({ params }) => {
	const publication = publications[params.slug as string];

	if (!publication) {
		console.error('Publication not found', params.slug);
		throw error(404, 'Page not found');
	}

	return {
		publication,
	};
};
