<script lang="ts">
	import Link from 'component/Navigation/Link.svelte';

	export let inverted = false;
</script>

<nav>
	<ul>
		<li><Link href="/publications" name="Publications" {inverted} /></li>
	</ul>
</nav>

<style lang="less">
	@import 'src/styles/responsive.less';

	nav {
		height: 100%;
	}

	ul {
		display: flex;
		align-items: center;

		height: 100%;
	}

	li:not(:last-of-type) {
		margin-right: 2.125rem;
	}

	@media @screen-xxs, @screen-xs, @screen-s {
		li:not(:last-of-type) {
			margin-right: 2rem;
		}
	}
</style>
