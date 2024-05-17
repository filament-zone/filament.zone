<script lang="ts">
	import { page } from '$app/stores';

	$: origin = $page.url.origin;
	$: pathname = $page.url.pathname;
	$: url = `${origin}${pathname}`;

	$: title = $page.data.meta?.title || 'Filament';
	$: description = $page.data.meta?.description || 'Airdrops that work';
	$: image = $page.data.meta?.image || `${origin}/img/logo.png`;
	$: category = $page.data.meta?.category || 'website';
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
