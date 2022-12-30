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
		padding: 40px 80px 30px 80px;
	}

	@media @screen-xs, @screen-s, @screen-m {
		div {
			padding: 40px 40px 30px 40px;
		}
	}

	@media @screen-xxs {
		div {
			padding: 30px;
		}
	}
</style>
