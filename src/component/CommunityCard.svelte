<script lang="ts">
	import { Color } from '$lib/ui';

	import Divider from 'component/Divider.svelte';
	import Icon from 'component/Icon.svelte';

	export let href: string;
	export let title: string;
</script>

<a {href} {title}>
	<div class="inner">
		<span><slot /></span>
		<div class="icon">
			<Icon backgroundColor={Color.Pink}><slot name="icon" /></Icon>
		</div>
	</div>
	<Divider color={Color.Pink} />
</a>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	a {
		display: block;

		overflow: hidden;

		height: 100%;
		width: 100%;

		background-clip: padding-box;
		background-color: @color-blue;
		border: 0.25rem solid @color-pink;
		border-radius: 1.25rem;

		color: @color-primary-white;
		font-family: 'GT-Eesti-Display-Bold';
		font-style: normal;
		font-weight: 700;
		font-size: 1.875rem;
		line-height: 150%;
		text-decoration: none;
		transition: all 0.12s ease-in-out;

		& div.inner {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			padding: 2rem 2rem 1.25rem 2rem;
		}

		& div.icon {
			height: 60px;
			width: 60px;
		}

		&:hover {
			background-color: @color-primary-cyan;
			color: @color-blue;
		}
	}

	@media @screen-m, @screen-s, @screen-xs, @screen-xxs {
		a {
			font-size: 1.375rem;

			& div.icon {
				height: 36px;
				width: 36px;
			}
		}
	}
</style>
