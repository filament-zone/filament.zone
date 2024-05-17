import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import type { Publications } from '$lib/cms';
import pubs from 'cms/publications.json';

const publications = pubs as Publications;

export const load: PageServerLoad = async ({ params }) => {
	const publication = publications[params.slug as string];

	if (!publication) {
		console.error('Publication not found', params.slug);
		throw error(404, 'Page not found');
	}

	return {
		meta: {
			title: `${publication.metadata.title} | Filament Publications`,
			description: publication.metadata.teaser,
			category: publication.metadata.category,
		},
		publication,
	};
};
