export enum Category {
	Paper = 'paper',
}

export enum State {
	Draft = 'draft',
	Published = 'published',
}

export type Metadata = {
	category: Category;
	title: string;
	teaser: string;
	published: string;
	authors: string[];
	state: State;
	cover?: string;
};

export type Publication = {
	slug: string;
	toc: TOC;
	metadata: Metadata;
	content: string;
};

export type Publications = { [k: string]: Publication };

export const isPublished = (metadata: Metadata): boolean => {
	return metadata.state === State.Published;
};

export const titleToSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};

export type Sub = {
	name: string;
	slug: string;
};

export type Section = {
	name: string;
	slug: string;
	subs: Sub[];
};

interface tocInput {
	content: string;
	slug: string;
	lvl: number;
	i: number;
	seen: number;
}

export type TOC = Section[];

export const jsonToTOC = (inputs: tocInput[]): TOC => {
	const sections: Section[] = [];

	let section = null;
	let level = 0;
	for (const input of inputs) {
		if (section && level === input.lvl) {
			const subs: Sub[] = [];
			sections.push(section);
			section = { name: input.content, slug: input.slug, subs };
			level = input.lvl;
		} else if (section) {
			section.subs.push({ name: input.content, slug: input.slug });
		}

		if (!section) {
			section = { name: input.content, slug: input.slug, subs: [] };
			level = input.lvl;
		}
	}

	if (section) {
		sections.push(section);
	}

	return sections;
};
