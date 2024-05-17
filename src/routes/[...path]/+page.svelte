<script lang="ts">
	import Container from 'component/Container.svelte';
	import Page from 'component/Page.svelte';
</script>

<Page>
	<div slot="hero">
		<h1>404 - Page not found</h1>
	</div>

	<Container>
		<p>
			This is not where you wanted to go, because this is nowhere. But don’t worry, we can guide you
			back onto the right path!
		</p>
		<a href="/" title="Filament">Back to Main Page</a>
	</Container>
</Page>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	h1 {
		padding: 2.5rem 0 5rem 0;

		text-align: center;
	}

	p {
		max-width: 38rem;

		font-family: 'GT-Eesti-Display-Regular';
		font-style: normal;
		font-weight: 400;
		font-size: 1.375rem;
		line-height: 160%;
		text-align: center;
	}

	@media @screen-m, @screen-s, @screen-xs, @screen-xxs {
		p {
			font-size: 1.25rem;
		}
	}

	@media @screen-s, @screen-xs, @screen-xxs {
		h1 {
			padding-bottom: 4rem;

			font-size: 2.5rem;
		}
	}

	@media @screen-xs, @screen-xxs {
		h1 {
			padding-bottom: 3rem;

			font-size: 1.875rem;
		}

		p {
			font-size: 1.125rem;
		}
	}

	@media @screen-xxs {
		h1 {
			padding-bottom: 2rem;

			font-size: 1.6rem;
		}
	}
</style>
