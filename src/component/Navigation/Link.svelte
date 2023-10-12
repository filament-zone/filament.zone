<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
	export let name: string;
	export let inverted = false;
</script>

<a class:inverted {href} class:current={$page.url.pathname.includes(href)}>{name}</a>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	a {
		color: @color-primary-white;
		font-size: 1.25rem;
		font-family: 'GT-Eesti-Display-Medium';
		font-style: medium;
		line-height: 150%;
		text-decoration: none;

		transition: all 0.12s ease-in-out;

		&.current {
			border-bottom: 0.25rem solid @color-primary-white;
		}

		&:hover {
			border-color: @color-pink;
			color: @color-pink;
		}
	}

	a.inverted {
		color: @color-pink;

		&:hover {
			color: @color-primary-white;
		}
	}
</style>
