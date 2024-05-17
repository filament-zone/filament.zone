<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let name: string;
	export let dark: boolean = false;
</script>

<a {href} class:current={$page.url.pathname.includes(href)} class:dark>{name}</a>

<style lang="less">
	@import 'src/styles/typography.less';

	a {
		.nav-item();

		color: var(--foreground-color);

		transition: all 0.12s ease-in-out;

		&.current {
			border-bottom: 0.25rem solid var(--foreground-color);
		}

		&.dark {
			border-color: var(--dark-color);
			color: var(--dark-color);
		}

		&:hover {
			border-color: var(--highlight-color);
			color: var(--highlight-color);
		}
	}
</style>
