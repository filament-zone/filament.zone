import { isPublished, type Publications } from '$lib/cms';

import pubs from 'cms/publications.json';

const publications = pubs as Publications;

export const load = async () => {
	return {
		meta: {
			title: 'Filament Publications',
		},
		publications: Object.values(publications)
			.filter((pub) => isPublished(pub.metadata))
			.sort(
				(a, b) =>
					new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime(),
			),
	};
};
