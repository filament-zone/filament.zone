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
</footer>

<style lang="less">
	#footer {
		align-items: center;
		display: flex;
		flex: 1;
		justify-content: space-between;

		padding: 40px 0px 50px 0px;

		& div {
			height: 3.25rem;
		}
	}
</style>
