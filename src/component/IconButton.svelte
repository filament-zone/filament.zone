<script lang="ts">
	import { Color } from '$lib/ui';

	import Icon from 'component/Icon.svelte';

	export let alternative = false;
	export let disabled = false;

	$: backgroundColor = Color.Cyan;
	let hover = false;

	$: if (hover) {
		backgroundColor = Color.White;
	} else if (alternative) {
		backgroundColor = Color.Pink;
	} else {
		backgroundColor = Color.Cyan;
	}

	const toggleHover = () => {
		hover = !hover;
	};
</script>

<button {disabled} class:disabled on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
	<Icon {backgroundColor}><slot /></Icon>
</button>

<style lang="less">
	@import 'src/styles/colors.less';

	button {
		display: block;
		position: relative;

		height: 100%;
		width: 100%;

		padding: 0;

		cursor: pointer;

		background: transparent;
		border: 0;
		outline: 0;
	}
</style>
