<script lang="ts">
	import { page } from '$app/stores';

	import { Color } from '$lib/ui';

	import Comms from 'component/Comms.svelte';
	import Container from 'component/Container.svelte';
	import Logo from 'component/Logo.svelte';
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
		<Segment color={Color.BackgroundsDark}>
			<Container>
				<div id="footer">
          <div class="logo">
            <Logo inverted />
          </div>
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

			margin-left: 3rem;
      width: 5rem;
		}

		& div.navigation {
			margin-left: auto;
		}
	}

	main {
		display: flex;
		flex: 1;

    background-color: @color-backgrounds-dark;
	}

	#footer {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;

		padding: 2.5rem 0rem 3rem 0rem;

    div.logo {
      height: 3rem;
    }
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
