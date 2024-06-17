<script lang="ts">
	import { page } from '$app/stores';

	import Container from 'component/Container.svelte';
	import Page from 'component/Page.svelte';
</script>

<Page>
	<Container slot="hero">
		<h1>{$page.status}: {$page.error?.message}</h1>
	</Container>

	<div class="content" slot="content">
		<p>
			This is not where you wanted to go, because this is nowhere. <a href="/" title="Filament"
				>Back to Main Page</a>
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
