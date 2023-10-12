<script lang="ts">
	import moment from 'moment';

	import type { Publication } from '$lib/cms';

	export let publication: Publication;

	const { authors, category, published, teaser, title } = publication.metadata;
	const date = moment(published).format('MMM Do, YYYY');
</script>

<a href="/publications/{publication.slug}" {title}>
	<article>
		<h2>{title}</h2>
		<hr />
		<p>{teaser}</p>
	</article>
	<aside>
		<p class="category">{category}</p>
		<div class="meta">
			<ul>
				{#each authors as author}
					<li>{author}</li>
				{/each}
			</ul>
			<small>{date}</small>
		</div>
	</aside>
</a>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	a {
		display: flex;
		flex-direction: row;

		width: 100%;

		padding: 2.2rem;

		background: @color-blue;
		border: 3px solid @color-primary-cyan;

		color: @color-primary-white;
		text-decoration: none;

		transition: all 0.12s ease-in-out;

		& * {
			transition: all 0.12s ease-in-out;
		}
	}

	article {
		order: 2;
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		order: 1;

		width: 10rem;

		margin-right: 4rem;

		& div.meta {
			display: flex;
			flex-direction: column;
		}

		& p {
			font-family: 'GT-Eesti-Display-Bold';
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 700;
			line-height: 150%;
			text-transform: capitalize;
		}

		& ul {
			font-family: 'GT-Eesti-Display-Medium';
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
		}

		& small {
			font-family: 'IBM-Plex-Mono-Regular';
			font-size: 1.125rem;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
		}
	}

	h2 {
		font-family: 'GT-Eesti-Display-Bold';
		font-size: 2.5rem;
		font-style: medium;
		font-weight: 700;
		line-height: 150%;
	}

	hr {
		margin: 1.25rem 0;

		border: 0.125rem solid @color-primary-cyan;
	}

	p {
		font-family: 'GT-Eesti-Text-Medium';
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 375;
		line-height: 180%;
	}

	a:hover {
		background-color: #1b61c2;

		& h2 {
			color: @color-pink;
		}
	}

	@media @screen-xxs, @screen-xs {
		a {
			flex-direction: column;
		}

		aside {
			order: 3;
			flex-direction: row;
			align-items: flex-end;
			width: 100%;

			margin: 0;
			margin-top: 3rem;

			& div.meta {
				align-items: flex-end;
			}

			& ul li {
				display: inline;

				&:not(:last-of-type) {
					margin-right: 1rem;
				}
			}
		}

		h2 {
			font-size: 2rem;
		}
	}

	@media @screen-xxs {
		aside {
			& ul li {
				display: block;
			}
		}
	}
</style>
