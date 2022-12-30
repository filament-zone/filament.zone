import { readdir, readFile, writeFile } from 'node:fs/promises';

import parseMD from 'parse-md';
import tocMD from 'markdown-toc';

import type { Metadata, Publications } from '../lib/cms.js';
import { jsonToTOC, titleToSlug } from '../lib/cms.js';

const publications: Publications = {};
const files = await readdir('./research/publications');

for (const file of files) {
	const raw = await readFile(`./research/publications/${file}`, { encoding: 'utf8' });
	const parsed = parseMD(raw);
	const metadata = parsed.metadata as Metadata;
	const slug = titleToSlug(metadata.title);
	const toc: object = jsonToTOC(
		tocMD(parsed.content, {
			slugify: (s: string) => {
				return encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));
			},
		}).json,
	);

	publications[slug] = { metadata, content: parsed.content, slug, toc };

	const out = JSON.stringify({ publications: publications });
	await writeFile('./src/cms/research.json', out);
}

export {};
