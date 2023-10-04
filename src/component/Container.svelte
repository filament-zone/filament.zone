<script lang="ts">
	import { Alignment, Direction } from '$lib/ui';

	export let alignment: Alignment = Alignment.Start;
	export let direction: Direction = Direction.Row;
</script>

<div style="--alignment: {alignment}; --direction: {direction}">
	<slot />
</div>

<style lang="less">
	@import 'src/styles/responsive.less';

	div {
		display: flex;
		flex-direction: var(--direction);
		align-items: var(--alignment);

		max-width: 1620px;
		width: 100%;

		margin: 0 auto;
		padding: 2.5rem 5rem 1.875rem 5rem;
	}

	@media @screen-xs, @screen-s, @screen-m {
		div {
			padding: 2.5rem 2.5rem 1.875rem 2.5rem;
		}
	}

	@media @screen-xxs {
		div {
			padding: 0.5rem;
		}
	}
</style>
