<script lang="ts">
	import type { TOC } from '$lib/cms';

	export let toc: TOC;
</script>

<ul>
	{#each toc as section, index}
		<li>
			<a href="#{section.slug}"><span>{index + 1}</span>{section.name}</a>
			<ul>
				{#each section.subs as sub, subIndex}
					<li>
						<a href="#{sub.slug}"><span>{index + 1}.{subIndex + 1}</span>{sub.name}</a>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style lang="less">
	@import 'src/styles/colors.less';

	li a {
		display: block;

		margin-bottom: 4px;

		color: #ff226e;
		font-family: 'Satoshi-Medium';
		font-size: 1.25rem;
		line-height: 150%;
		text-decoration: none;
	}

	li a span {
		display: inline-block;
		width: 32px;

		color: @color-blue;
		font-family: 'Satoshi-Regular';
	}

	li a ul {
		list-style: none;
	}

	li a ul li:first-of-type {
		margin-top: 8px;
	}

	li a ul li:last-of-type {
		margin-bottom: 8px;
	}

	li a ul li a {
		margin-bottom: 8px;
		padding-left: 32px;
	}
</style>
