<script lang="ts">
	import { page } from '$app/stores';

	import { Color } from '$lib/ui';

	import Comms from 'component/Comms.svelte';
	import Container from 'component/Container.svelte';
	import Divider from 'component/Divider.svelte';
	import Logo from 'component/Logo.svelte';
	import Navigation from 'component/Navigation.svelte';
	import Segment from 'component/Segment.svelte';

	$: origin = $page.url.origin;
	$: pathname = $page.url.pathname;

	export let title = 'Pulzaar';
	export let description = '';
	export let image = `${origin}/img/logo-type.png`;
	export let url = `${origin}${pathname}`;

	export let footerDividerColor: Color = Color.Cyan;
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={image} />
</svelte:head>

<div id="page">
	<header>
		<Segment>
			<Container>
				<div id="header">
					<Logo />
					<div class="comms">
						<Comms />
					</div>
					<div class="break" />
					<div class="navigation">
						<Navigation />
					</div>
				</div>
			</Container>
		</Segment>

		<slot name="hero" />
	</header>

	<main>
		<slot name="content" />
	</main>

	<footer>
		<Segment color={Color.Black}>
			<Divider color={footerDividerColor} />
			<Container>
				<div id="footer">
					<Logo inverted />
					<div class="comms">
						<Comms alternative />
					</div>
				</div>
			</Container>
		</Segment>
	</footer>
</div>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	#page {
		display: flex;
		flex-direction: column;

		height: 100%;
		width: 100%;

		background-color: @color-primary-black;
	}

	main {
		display: flex;
		flex: 1;
	}

	#header {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		& div {
			order: 1;

			height: 52px;
		}

		& div.comms {
			order: 3;

			margin-left: 48px;
			width: 160px;
		}

		& div.navigation {
			margin-left: auto;
		}
	}

	#footer {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;

		padding: 40px 0px 50px 0px;
	}

	@media @screen-xs, @screen-s {
		#header div {
			height: 44px;
		}
	}

	@media @screen-xxs, @screen-xs {
		#header div.comms {
			order: 1;
		}

		#header div.break {
			flex-basis: 100%;
			height: 0;

			margin-top: 1.5rem;
		}

		#header div.navigation {
			margin-right: auto;
		}

		#footer {
			flex-direction: column;

			padding: 0;
		}

		#footer div.comms {
			margin-top: 2rem;
		}
	}

	@media @screen-xxs {
		#header {
			flex-direction: column;
			align-items: center;
		}

		#header div {
			height: 2rem;
		}

		#header div.comms {
			margin: 0;
			margin-top: 1.5rem;
			width: 120px;
		}
	}
</style>
