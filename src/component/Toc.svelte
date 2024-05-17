<script lang="ts">
	import type { TOC } from '$lib/cms';
	import { onMount } from 'svelte';

	export let toc: TOC;

	let headers: HTMLHeadingElement[] = [];
	let items: HTMLLinkElement[] = [];
	const setActive = () => {
		let idx = headers.length;
		while (idx--) {
			const { top } = headers[idx].getBoundingClientRect();
			if (top < 200) {
				break;
			}
		}
		items.forEach((item) => item.classList.remove('active'));
		if (idx > -1) {
			items[idx].classList.add('active');
		}
	};
	onMount(() => {
		items = Array.from(document.querySelectorAll('#toc a'));
		headers = Array.from(document.querySelectorAll('h2, h3'));
		setActive();
	});
</script>

<svelte:window on:scroll={setActive} />

<ul id="toc" class="top">
	{#each toc as section, index}
		<li>
			<a href="#{section.slug}" class:active={index === 0}>
				<span class="index">{index + 1}</span>
				<span class="name">{section.name}</span>
			</a>
			{#if section.subs.length > 0}
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
			{/if}
		</li>
	{/each}
</ul>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/typography.less';

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		position: sticky;
		top: 1.5rem;
	}

	a {
		color: var(--foreground-color);

		&:hover {
			color: var(--highlight-color);
		}
	}

	li a {
		display: flex;
		flex: 1;
		flex-direction: row;
		gap: 0.625rem;
	}

	span.index {
		flex-shrink: 0;

		display: block;
	}

	span.name {
		flex-grow: 1;
	}

	ul.top > li > a span {
		.label1();

		&.index {
			width: 1.3125rem;
		}
	}

	li ul {
		align-items: flex-start;
		gap: 0.5rem;

		padding: 0.5rem 0rem;

		list-style: none;

		& li a {
			padding-left: 2rem;
		}

		& li a span {
			.label2();
		}
	}

	li a.active span.index,
	li a.active span.name {
		font-weight: 500;
	}
</style>
