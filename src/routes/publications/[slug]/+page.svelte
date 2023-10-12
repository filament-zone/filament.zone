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
	title="{publication.metadata.title} | Filament Publications"
	description={publication.metadata.teaser}
	footerDividerColor={Color.White}>
	<Segment slot="hero" color={Color.Blue}>
		<div class="background" style="background-image: url({publication.metadata.cover})">
			<Divider />
			<Container>
				<h1>{publication.metadata.title}</h1>
			</Container>
			<Divider color={Color.White} inverted />
		</div>
	</Segment>

	<Segment color={Color.White} slot="content">
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

	div.background {
		height: 100%;
		width: 100%;

		background-attachment: scroll;
		background-image: url('/img/hero-landscape.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	h1 {
		max-width: 56rem;

		padding: 4rem 0;
	}

	div.publication {
		display: flex;
		flex-direction: row;
	}

	#toc {
		flex-shrink: 0;

		max-width: 25rem;

		margin-right: 5rem;
		padding: 1.5rem 0rem;
	}

	:global(#toc ul) {
		position: sticky;
		top: 1.5rem;
	}

	article {
		max-width: 56rem;
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		div.publication {
			flex-direction: column;
		}
	}
</style>
