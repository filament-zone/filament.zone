import { isPublished, type Publications } from '$lib/cms';

import pubs from 'cms/publications.json';

const publications = pubs as Publications;

export const load = async () => {
	return {
		publications: Object.values(publications).filter((pub) => isPublished(pub.metadata)),
	};
};
