<script lang="ts">
	import Highlights from 'component/Highlights.svelte';
	import Footer from 'component/Footer.svelte';
	import Hero from 'component/Hero.svelte';
	import Partners from 'component/Partners.svelte';
</script>

<div id="page">
	<header>
		<Hero />
	</header>

	<main>
		<Highlights />
		<Partners />
	</main>

	<Footer />
</div>

<style lang="less">
	#page {
		display: flex;
		flex-direction: column;

		height: 100%;
		width: 100%;
	}

	main {
		align-items: center;
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 20rem;

		margin: 0 auto;
		padding: 11rem 0;
		width: 100%;
	}
</style>
