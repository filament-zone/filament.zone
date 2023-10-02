<script lang="ts">
	import type { PageData } from './$types';

	import MarkdownIt from 'markdown-it';
	import MarkdownItAnchor from 'markdown-it-anchor';
	import MarkdownItFootnote from 'markdown-it-footnote';

	import type { Publication } from '$lib/cms';
	import { Color, Direction } from '$lib/ui';

	import Container from 'component/Container.svelte';
	import Divider from 'component/Divider.svelte';
	import Page from 'component/Page.svelte';
	import Segment from 'component/Segment.svelte';
	import Toc from 'component/Toc.svelte';

	export let data: PageData;

	const { publication }: { publication: Publication } = data;

	const md = MarkdownIt('commonmark', {
		breaks: true,
		linkify: false,
		typographer: true,
	})
		.use(MarkdownItAnchor)
		.use(MarkdownItFootnote);
	md.renderer.rules.footnote_block_open = () => {
		return '<hr /><h3 id="footnotes">Footnotes</h4>\n' + '<ol>\n';
	};
	md.renderer.rules.footnote_block_close = () => {
		return '</ol>';
	};

	const rendered = md.render(publication.content);
</script>

<Page
	title="{publication.metadata.title} | Filament Research"
	description={publication.metadata.teaser}
	footerDividerColor={Color.White}>
	<Segment slot="hero">
		<Container>
			<h1>{publication.metadata.title}</h1>
		</Container>
	</Segment>

	<Segment color={Color.White} slot="content">
		<Divider />

		<Container direction={Direction.Row}>
			<div class="publication">
				<div id="toc">
					<Toc toc={publication.toc} />
				</div>
				<article>
					{@html rendered}
				</article>
			</div>
		</Container>
	</Segment>
</Page>

<style lang="less">
	@import 'src/styles/responsive.less';

	h1 {
		max-width: 910px;

		padding-bottom: 50px;
	}

	div.publication {
		display: flex;
		flex-direction: row;
	}

	#toc {
		flex-shrink: 0;

		margin-right: 80px;
		padding: 24px 0px;
	}

	:global(#toc ul) {
		position: sticky;
		top: 24px;
	}

	article {
		max-width: 910px;
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		div.publication {
			flex-direction: column;
		}
	}
</style>
