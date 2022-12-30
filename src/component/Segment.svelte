<script lang="ts">
	import { Color } from '$lib/ui';

	export let backgroundImage: string | null = null;
	export let color: Color = Color.Blue;
</script>

<div class="segment {color}">
	{#if backgroundImage}
		<div class="background" style="--background-url: url({backgroundImage})">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style lang="less">
	@import 'src/styles/colors.less';

	div {
		display: flex;
		flex: 1;
		flex-direction: column;
		/* justify-content: space-between; */

		&.black {
			background-color: @color-primary-black;
		}
		&.blue {
			background-color: @color-blue;
		}
		&.cyan {
			background-color: @color-primary-cyan;
		}
		&.white {
			background-color: @color-primary-white;
		}
	}

	div.background {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		height: 100%;
		width: 100%;

		background-attachment: scroll;
		background-image: var(--background-url);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
