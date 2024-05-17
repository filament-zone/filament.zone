<script lang="ts">
	import type { PageData } from './$types';

	import type { Publication } from '$lib/cms';

	import Container from 'component/Container.svelte';
	import Page from 'component/Page.svelte';
	import Pub from 'component/Publication.svelte';

	export let data: PageData;
	const { publications } = data as { publications: Publication[] };
</script>

<Page>
	<Container slot="hero">
		<h1>Publications</h1>
	</Container>

	<Container slot="content">
		<div class="publications">
			{#each publications as publication}
				<div class="publication">
					<Pub {publication} />
				</div>
			{/each}
		</div>
	</Container>
</Page>

<style lang="less">
	h1 {
		width: 80rem;

		margin: 0 auto;
	}

	.publications {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		justify-content: flex-start;
		gap: 4rem;

		max-width: 80rem;
		width: 100%;

		margin: 0 auto;
	}
</style>
