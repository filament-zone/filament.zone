<script lang="ts">
	import { Color } from '$lib/ui';

	export let color: Color = Color.Blue;
	export let inverted = false;
	export let small = false;

	let backgroundUrl = `/img/speedlines-${color}${inverted ? '-inverted' : ''}${
		small ? '-small' : ''
	}.png`;
</script>

<div style="--background-url: url({backgroundUrl})" />

<style lang="less">
	div {
		height: 25px;

		background-image: var(--background-url);
		background-repeat: repeat-x;
	}
</style>
