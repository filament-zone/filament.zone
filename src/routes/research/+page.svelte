<script lang="ts">
	import type { PageData } from './$types';

	import { Alignment, Color, Direction } from '$lib/ui';

	import Container from 'component/Container.svelte';
	import Divider from 'component/Divider.svelte';
	import Page from 'component/Page.svelte';
	import Publication from 'component/Publication.svelte';
	import Segment from 'component/Segment.svelte';

	export let data: PageData;

	const { publications } = data;
</script>

<Page title="Pulzzar Research" footerDividerColor={Color.White}>
	<Segment slot="hero">
		<Container>
			<h1>Research</h1>
		</Container>
	</Segment>

	<Segment color={Color.White} slot="content">
		<Divider />

		<Container alignment={Alignment.Center} direction={Direction.Column}>
			{#each publications as publication}
				<div class="publication">
					<Publication {publication} />
				</div>
			{/each}
		</Container>
	</Segment>
</Page>

<style lang="less">
	h1 {
		padding-bottom: 50px;
	}

	div.publication {
		max-width: 1024px;

		margin-bottom: 4rem;
	}
</style>
