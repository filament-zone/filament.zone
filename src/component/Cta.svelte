<script lang="ts">
	export let href: string;
	export let title: string;
	export let dark: boolean = false;
	export let disabled: boolean = false;
</script>

<a class="cta" class:dark class:disabled {href} {title}>{title}</a>

<style lang="less">
	@import 'src/styles/responsive.less';
	@import 'src/styles/typography.less';

	a {
		.nav-item();

		align-items: center;
		display: flex;
		justify-content: center;

		box-sizing: border-box;
		height: 3rem;
		width: 11.5rem;

		padding: 0.875rem;

		border: 0.125rem solid transparent;

		background-color: var(--cta-background);
		color: var(--cta-foreground);

		&:hover {
			background-color: transparent;
			border-color: var(--cta-background);
			color: var(--cta-background);
		}

		&.dark {
			background-color: var(--cta-dark-background);
			color: var(--cta-dark-foreground);

			&:hover {
				background-color: transparent;
				border-color: var(--cta-dark-background);
				color: var(--cta-dark-background);
			}
		}

		&.disabled {
			pointer-events: none;

			background-color: var(--foreground-color);
			opacity: 50%;
		}
	}

	@media @screen-xxs {
		a {
			height: 2.25rem;
			width: 8rem;

			font-size: 0.75rem;
		}
	}
</style>
