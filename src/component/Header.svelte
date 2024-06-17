<script lang="ts">
	import Logo from 'component/Logo.svelte';
	import Navigation from 'component/Navigation.svelte';
	import Cta from './Cta.svelte';

	export let dark: boolean = false;
</script>

<div class="header">
	<div class="logo">
		<div>
			<Logo {dark} />
		</div>
	</div>
	<div class="navigation">
		<Navigation {dark} />
	</div>
	<div class="cta">
		<Cta href="/subscribe" title="Launch App" {dark} />
	</div>
</div>

<style lang="less">
	@import 'src/styles/responsive.less';

	.header {
		align-items: center;
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 3rem;
	}

	.logo {
		align-items: flex-end;
		display: flex;
		justify-content: flex-start;

		margin-right: auto;

		& div {
			height: 3.25rem;
		}
	}

	.navigation {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		justify-self: flex-end;
		gap: 3rem;
	}

	@media @screen-xxs, @screen-xs, @screen-s {
		.header {
			gap: 2rem;
			justify-content: center;
		}

		.logo,
		.cta {
			order: 1;

			margin: 0;
			width: calc(50% - 1rem);
		}

		.cta {
			display: flex;
			justify-content: flex-end;
		}

		.navigation {
			flex-direction: column;
			order: 2;
		}
	}

	@media @screen-xxs {
		.header {
			justify-content: flex-start;
		}
	}
</style>
