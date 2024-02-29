<script lang="ts">
	import { page } from '$app/stores';

	import { Color } from '$lib/ui';

	import Comms from 'component/Comms.svelte';
	import Container from 'component/Container.svelte';
	import Divider from './Divider.svelte';
	import Logo from 'component/Logo.svelte';
	import Navigation from './Navigation.svelte';
	import Segment from 'component/Segment.svelte';

	$: origin = $page.url.origin;
	$: pathname = $page.url.pathname;

	export let title = 'Filament';
	export let description = '';
	export let image = `${origin}/img/logo-type.png`;
	export let url = `${origin}${pathname}`;
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
		<slot name="hero" />
	</header>

	<main>
		<slot name="content" />
	</main>

	<footer>
		<Segment color={Color.Black}>
			<Divider color={Color.White} />
			<Container>
				<div id="footer">
					<div class="logo">
						<Logo inverted />
					</div>
					<div class="comms">
						<Comms alternative />
					</div>
					<div class="break" />
					<div class="navigation">
						<Navigation inverted />
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
	}

	header {
		display: flex;
		flex: 1;
	}

	main {
		display: flex;
		flex: 1;

		background-color: @color-backgrounds-dark;
	}

	#footer {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;

		padding: 2.5rem 0rem 3rem 0rem;

		& div {
			order: 1;

			height: 3.25rem;
		}

		& div.comms {
			order: 3;

			margin-left: 3rem;
		}

		& div.navigation {
			margin-left: auto;
		}
	}

	@media @screen-xxs, @screen-xs {
		#footer {
			flex-direction: column;

			padding: 0;

			& div.comms {
				order: 1;

				margin-left: 0;
			}

			& div.break {
				flex-basis: 100%;
				height: 0;

				margin-top: 2rem;
			}

			& div.navigation {
				margin-left: 0;
			}
		}

		#footer div.comms {
			margin-top: 2rem;
		}
	}
</style>
