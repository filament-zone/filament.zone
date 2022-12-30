<script lang="ts">
	export let href: string;
	export let label: string;
	export let title: string;
</script>

<a {href} {title}>{label}</a>

<style lang="less">
	@import 'src/styles/colors.less';

	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 1.875rem 1.375rem;
		gap: 0.625rem;
		isolation: isolate;

		/* width: 253px; */
		/* height: 64px; */

		background: @color-beige;

		border: 0.1875rem solid @color-blue;
		box-shadow: inset 0px -0.75rem 0px rgba(0, 0, 0, 0.25);
		border-radius: 1rem;

		color: @color-primary-black;
		font-family: 'IBM-Plex-Mono-SemiBold';
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 600;
		letter-spacing: 0.05em;
		line-height: 150%;
		text-decoration: none;
		text-transform: uppercase;

		&:hover {
			background-color: @color-primary-white;
		}
	}
</style>
