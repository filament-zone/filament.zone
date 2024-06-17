<script lang="ts">
	import Container from 'component/Container.svelte';
	import Page from 'component/Page.svelte';
</script>

<Page>
	<Container slot="hero">
		<h1>Thanks for subscribing</h1>
	</Container>

	<div class="content" slot="content">
		<p>
			We will kee you updated about upcoming relases and news. <a href="/" title="Filament"
				>Back to Home</a>
		</p>
	</div>
</Page>

<style lang="less">
	@import 'src/styles/typography.less';

	h1 {
		width: 100%;

		text-align: center;
	}

	p {
		.b1();
	}

	.content {
		align-items: center;
		display: flex;
		flex-direction: column;

		height: 60vh;
		padding: 10rem 2rem;
		width: 100%;
	}
</style>
