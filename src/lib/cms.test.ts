import { describe, expect, it } from 'vitest';

import { jsonToTOC, titleToSlug } from './cms';

describe('jsonToTOC', () => {
	const input = [
		{ content: 'Scope', slug: 'scope', lvl: 2, i: 0, seen: 0 },
		{ content: 'Outline', slug: 'outline', lvl: 2, i: 1, seen: 0 },
		{ content: 'Intro', slug: 'intro', lvl: 3, i: 2, seen: 0 },
		{ content: 'Why?', slug: 'why', lvl: 3, i: 3, seen: 0 },
		{
			content: 'State of the ecosystem',
			slug: 'state-of-the-ecosystem',
			lvl: 3,
			i: 4,
			seen: 0,
		},
		{ content: 'Solution', slug: 'solution', lvl: 3, i: 5, seen: 0 },
		{
			content: 'Trajectory - Escalating Odds',
			slug: 'trajectory---escalating-odds',
			lvl: 3,
			i: 6,
			seen: 0,
		},
		{
			content: 'Conclusion',
			slug: 'conclusion',
			lvl: 3,
			i: 7,
			seen: 0,
		},
		{ content: 'refs', slug: 'refs', lvl: 2, i: 8, seen: 0 },
	];
	const output = [
		{
			name: 'Scope',
			slug: 'scope',
			subs: [],
		},
		{
			name: 'Outline',
			slug: 'outline',
			subs: [
				{
					name: 'Intro',
					slug: 'intro',
				},
				{
					name: 'Why?',
					slug: 'why',
				},
				{
					name: 'State of the ecosystem',
					slug: 'state-of-the-ecosystem',
				},
				{
					name: 'Solution',
					slug: 'solution',
				},
				{
					name: 'Trajectory - Escalating Odds',
					slug: 'trajectory---escalating-odds',
				},
				{
					name: 'Conclusion',
					slug: 'conclusion',
				},
			],
		},
		{
			name: 'refs',
			slug: 'refs',
			subs: [],
		},
	];

	it('should convert accurately', () => {
		expect(jsonToTOC(input)).toStrictEqual(output);
	});
});

describe('titleToSlug', () => {
	it('should replace space with hyphen', () => {
		expect(titleToSlug(' ')).toBe('-');
	});

	it('should lower case characters', () => {
		expect(titleToSlug('pUlZAaR')).toBe('pulzaar');
	});
});
