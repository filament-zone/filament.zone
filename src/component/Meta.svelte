<script lang="ts">
	import { page } from '$app/state';

	const origin = $derived(page.url.origin);
	const pathname = $derived(page.url.pathname);
	const url = $derived(`${origin}${pathname}`);

	const title = $derived(page.data.meta?.title || 'Filament');
	const description = $derived(page.data.meta?.description || 'Airdrops that work');
	const image = $derived(page.data.meta?.image || `${origin}/img/logo.png`);
	const category = $derived(page.data.meta?.category || 'website');
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={category} />
	<meta property="og:site_name" content="Filament" />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content={image} />
</svelte:head>
