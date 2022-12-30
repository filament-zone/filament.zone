<script lang="ts">
	import { Color } from '$lib/ui';

	export let backgroundColor: Color = Color.Cyan;
</script>

<div class="icon">
	<div class="circle">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				class="circle {backgroundColor}"
				d="M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35Z"
				stroke-width="2" />
		</svg>
	</div>
	<div>
		<slot />
	</div>
</div>

<style lang="less">
	@import 'src/styles/colors.less';

	div.icon {
		position: relative;

		height: 100%;
		width: 100%;
	}

	div.icon div {
		position: absolute;
		left: 0;
		top: 0;
	}

	svg path {
		transition: all 0.12s ease-in-out;
	}

	svg path.circle {
		fill: @color-primary-cyan;
		stroke: @color-primary-black;

		&.black {
			fill: @color-primary-black;
		}
		&.blue {
			fill: @color-blue;
		}
		&.cyan {
			fill: @color-primary-cyan;
		}
		&.pink {
			fill: @color-pink;
		}
		&.white {
			fill: @color-primary-white;
		}
	}
</style>
