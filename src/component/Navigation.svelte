<script lang="ts">
	import Link from 'component/Navigation/Link.svelte';
</script>

<nav>
	<ul>
		<li><Link href="/research" name="Research" /></li>
		<li><Link href="/community" name="Community" /></li>
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
		margin-right: 35px;
	}

	@media @screen-xxs, @screen-xs, @screen-s {
		li:not(:last-of-type) {
			margin-right: 24px;
		}
	}
</style>
