<script context="module" lang="ts">
	export const load = () => ({
		stuff: {
			description: 'Description from page',
		},
	});
</script>

<script lang="ts">
	import type { PageData } from './$types';

	import MarkdownIt from 'markdown-it';
	import MarkdownItAnchor from 'markdown-it-anchor';
	import MarkdownItFootnote from 'markdown-it-footnote';
	import MarkdownItTexMath from 'markdown-it-texmath';

	import type { Publication } from '$lib/cms';

	import Container from 'component/Container.svelte';
	import Page from 'component/Page.svelte';
	import PublicationMeta from 'component/PublicationMeta.svelte';
	import Toc from 'component/Toc.svelte';

	export let data: PageData;

	const { publication }: { publication: Publication } = data;
	const { authors, category, published, title } = publication.metadata;

	const md = MarkdownIt('commonmark', {
		breaks: true,
		linkify: false,
		typographer: true,
	})
		.use(MarkdownItAnchor)
		.use(MarkdownItFootnote)
		.use(MarkdownItTexMath);
	md.renderer.rules.footnote_block_open = () => {
		return '<hr /><h3 id="footnotes">Footnotes</h4>\n' + '<ol>\n';
	};
	md.renderer.rules.footnote_block_close = () => {
		return '</ol>';
	};

	const rendered = md.render(publication.content);
</script>

<Page>
	<Container slot="content">
		<div class="publication">
			<h1>{publication.metadata.title}</h1>
			<div class="breadcrumb">
				<a href="/publications">Publications</a><span>></span><a
					href="/publications/{publication.slug}"
					{title}>{title}</a>
			</div>
			<div class="content">
				<aside>
					<Toc toc={publication.toc} />
				</aside>
				<article>
					{@html rendered}
					<div class="metadata">
						<h3>{category}</h3>
						<PublicationMeta {authors} {published} />
					</div>
				</article>
			</div>
		</div>
	</Container>
</Page>

<style lang="less">
	@import 'src/styles/responsive.less';
	@import 'src/styles/typography.less';

	div.publication {
		align-items: flex-start;
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 2.375rem;

		max-width: 80rem;

		margin: 0 auto;
	}

	h1 {
		max-width: 52rem;

		padding: 2.8125rem 0 1.375rem 0;
	}

	div.breadcrumb {
		.label3();

		display: flex;
		gap: 0.5rem;

		& a {
			border-bottom: 0.0625rem solid var(--foreground-color);
			color: var(--foreground-color);

			&:hover {
				color: var(--highlight-color);
				border-color: var(--highlight-color);
			}
		}
	}

	div.content {
		display: flex;
		gap: 4.5rem;
	}

	aside {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;

		max-width: 20rem;
	}

	article {
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 3.5rem;

		max-width: 56rem;
	}

	.metadata {
		display: flex;
		justify-content: space-between;

		h3 {
			text-transform: capitalize;
		}
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		div.content {
			flex-direction: column;
		}
	}
</style>
