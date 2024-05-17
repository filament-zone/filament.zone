<div>
	<slot />
</div>

<style lang="less">
	@import 'src/styles/responsive.less';

	div {
		display: flex;

		max-width: 120rem;
		width: 100%;

		margin: 0 auto;

		padding: 2.5rem 5rem 1.875rem 5rem;
	}

	@media @screen-s, @screen-m, @screen-l, @screen-xl {
		div {
			padding: 2.5rem 2.5rem 1.875rem 2.5rem;
		}
	}

	@media @screen-xxs, @screen-xs {
		div {
			padding: 2.5rem 1.25rem 1.375rem 1.25rem;
		}
	}
</style>
