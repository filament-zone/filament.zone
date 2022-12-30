import { publications } from 'cms/publications.json';

export const load = async () => {
	return {
		publications: Object.values(publications),
	};
};
