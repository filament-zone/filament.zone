<script lang="ts">
	import type { TOC } from '$lib/cms';

	export let toc: TOC;
</script>

<ul>
	{#each toc as section, index}
		<li>
			<a href="#{section.slug}">
				<span class="index">{index + 1}</span>
				<span class="name">{section.name}</span>
			</a>
			<ul>
				{#each section.subs as sub, subIndex}
					<li>
						<a href="#{sub.slug}">
							<span class="index">{index + 1}.{subIndex + 1}</span>
							<span class="name">{sub.name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style lang="less">
	@import 'src/styles/colors.less';

	li a {
		display: flex;
		flex: 1;
		flex-direction: row;

		margin-bottom: 0.25rem;

		text-decoration: none;
	}

	li a span {
		display: block;
	}

	span.index {
		min-width: 2rem;

		color: @color-blue;
		font-family: 'Satoshi-Regular';
	}

	span.name {
		flex-grow: 1;

		color: #ff226e;
		font-family: 'Satoshi-Medium';
		font-size: 1.25rem;
		line-height: 150%;
	}

	li ul {
		list-style: none;
	}

	li ul li:first-of-type {
		margin-top: 0.5rem;
	}

	li ul li:last-of-type {
		margin-bottom: 0.5rem;
	}

	li ul li a {
		margin-bottom: 0.5rem;
		padding-left: 2rem;

		& span {
			width: 2.5rem;
		}
	}
</style>
