import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { format, resolveConfig } from 'prettier';

import parseMD from 'parse-md';
// @ts-expect-error: Package is missing types.
import tocMD from 'markdown-toc';

import type { Metadata, Publications, TOC } from '../lib/cms.js';
import { jsonToTOC, titleToSlug } from '../lib/cms.js';

const publications: Publications = {};
const files = await readdir('./publications');

for (const file of files.filter((file) => {
	return path.extname(file).toLowerCase() === '.md';
})) {
	const raw = await readFile(`./publications/${file}`, { encoding: 'utf8' });
	const parsed = parseMD(raw);
	const metadata = parsed.metadata as Metadata;
	const slug = titleToSlug(metadata.title);
	const toc: TOC = jsonToTOC(
		tocMD(parsed.content, {
			slugify: (s: string) => {
				return encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'));
			},
		}).json,
	);

	publications[slug] = { metadata, content: parsed.content, slug, toc };
}

const out = await format(JSON.stringify(publications), {
	...(await resolveConfig('./src/cms/publications.json')),
	parser: 'json',
});
await writeFile('./src/cms/publications.json', out);

export {};
