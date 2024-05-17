<script lang="ts">
	import type { Publication } from '$lib/cms';
	import PublicationMeta from 'component/PublicationMeta.svelte';

	export let publication: Publication;

	const { authors, category, published, teaser, title } = publication.metadata;
	authors.splice(1, 1);
</script>

<a class="publication-card" href="/publications/{publication.slug}" {title}>
	<div class="inner">
		<article>
			<h2>{title}</h2>
			<p>{teaser}</p>
		</article>
		<aside>
			<p class="category">{category}</p>
			<PublicationMeta {authors} {published} />
		</aside>
	</div>
</a>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';
	@import 'src/styles/typography.less';

	a {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		flex-shrink: 0;
		justify-content: center;
		gap: 1rem;

		min-height: 18.25rem;

		padding: 1rem 3rem;

		background: var(--card-background);
		border: 0.025rem solid var(--card-border);

		color: var(--foreground-color);
		text-decoration: none;

		transition: all 0.12s ease-in-out;

		& * {
			transition: all 0.12s ease-in-out;
		}

		&:hover {
			box-shadow: 0rem 0rem 1.375rem 0rem var(--card-shadow);
		}
	}

	div.inner {
		display: flex;
		align-items: flex-start;
		gap: 3.125rem;

		min-height: 12rem;
	}

	a.publication-card article {
		align-items: flex-start;
		display: flex;
		flex: 1 0 0;
		flex-direction: column;
		gap: 1.25rem;
		order: 2;

		& h2 {
			.h2();
		}
	}

	aside {
		display: flex;
		align-items: flex-start;
		align-self: stretch;
		flex-direction: column;
		justify-content: space-between;
		order: 1;

		width: 10rem;

		margin-right: 4rem;

		& .category {
			.h3();

			text-transform: capitalize;
		}
	}

	@media @screen-xxs, @screen-xs, @screen-s {
		div.inner {
			gap: 1rem;
		}
	}

	@media @screen-xxs, @screen-xs {
		a {
			height: auto;

			padding: 1.5rem 1.25rem;
		}

		div.inner {
			flex-direction: column;

			height: auto;
		}

		aside {
			order: 3;
			flex-direction: row;
			align-items: flex-end;
			width: 100%;

			margin: 0;
		}

		h2 {
			font-size: 2rem;
		}
	}

	@media @screen-xxs {
		aside {
			align-items: flex-start;
			flex-direction: column-reverse;
		}
	}
</style>
