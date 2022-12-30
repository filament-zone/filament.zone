<script lang="ts">
	import { Color } from '$lib/ui';

	import Divider from 'component/Divider.svelte';

	export let color: Color = Color.Pink;
	export let img: string;
</script>

<div class="frame {color}">
	<img src={img} />
	<div class="divider">
		<Divider {color} small />
	</div>
</div>

<style lang="less">
	@import 'src/styles/colors.less';

	div.frame {
		flex: none;
		order: 0;
		align-self: stretch;
		flex-grow: 1;

		overflow: hidden;
		position: relative;

		border: 4px solid @color-pink;
		border-radius: 20px;

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

		div.divider {
			position: absolute;
			width: 100%;

			bottom: 0;
			left: 0;
		}
	}
</style>
