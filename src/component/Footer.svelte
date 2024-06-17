<script lang="ts">
	import Container from './Container.svelte';
	import Logo from './Logo.svelte';
</script>

<footer>
	<Container>
		<div id="footer">
			<div class="logo">
				<Logo />
			</div>
		</div>
	</Container>
	<span>2023-2024 Filament</span>
</footer>

<style lang="less">
	@import 'src/styles/typography.less';

	footer {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		gap: 4rem;

		padding: 2.5rem 0rem 3rem 0rem;
	}

	#footer {
		align-items: center;
		display: flex;
		flex: 1;
		justify-content: space-between;

		& div {
			height: 3.25rem;
		}
	}

	span {
		.b2();
	}
</style>
