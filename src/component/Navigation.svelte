<script lang="ts">
	import Link from 'component/Navigation/Link.svelte';

	export let dark: boolean = false;
</script>

<nav>
	<ul class:dark>
		<li><Link href="/publications" name="Publications" {dark} /></li>
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

	@media @screen-xxs {
		ul {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.5rem;

			li::before {
				content: '• ';
				color: var(--foreground-color); /* or whatever color you prefer */
			}
		}

		ul.dark li::before {
			color: var(--background-color);
		}
	}
</style>
