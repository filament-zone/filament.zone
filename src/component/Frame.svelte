<script lang="ts">
	import { Color } from '$lib/ui';

	import Divider from 'component/Divider.svelte';

	export let color: Color = Color.Pink;
	export let img: string | null = null;
</script>

<div class="frame {color}">
	{#if img}
		<img src={img} />
	{/if}

	<div class="content">
		<slot />
	</div>
	<div class="divider">
		<Divider {color} small />
	</div>
</div>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/responsive.less';

	div.frame {
		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 1;

		overflow: hidden;
		position: relative;

		padding: 2.5rem 2.5rem 4rem 2.5rem;

		background: rgba(22, 39, 61, 1);
		border: 4px solid @color-pink;
		border-radius: 1.25rem;

		&.black {
			border-color: @color-primary-black;
		}
		&.blue {
			border-color: @color-blue;
		}
		&.cyan {
			border-color: @color-primary-cyan;
		}
		&.pink {
			border-color: @color-pink;
		}
		&.white {
			border-color: @color-primary-white;
		}

		img {
			height: auto;
			width: 100%;
		}

		div.content {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
		}

		div.divider {
			position: absolute;
			width: 100%;

			bottom: 0;
			left: 0;
		}
	}

	@media @screen-xxs {
		div.frame {
			padding: 2.5rem 0.5rem 4rem 0.5rem;
		}
	}
</style>
