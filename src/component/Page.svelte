<script lang="ts">
	import Container from 'component/Container.svelte';
	import Header from 'component/Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div id="page">
	<header>
		<Container>
			<Header />
		</Container>

		<slot name="hero" />
	</header>

	<main>
		<slot name="content" />
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
		display: flex;
		flex: 1;
	}
</style>
