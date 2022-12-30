import { publications } from 'cms/research.json';

export const load = async () => {
	return {
		publications: Object.values(publications),
	};
};
