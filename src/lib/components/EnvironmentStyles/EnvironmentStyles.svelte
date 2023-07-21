<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { getThemeFromPreset } from '$lib/utils/preset';
	import {
		DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE,
		applyTheme,
		getThemeFromSearchParams
	} from '$lib/utils/theme';
	import { applyViewport } from '$lib/utils/viewport';

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: browser &&
		applyTheme({
			...getThemeFromPreset($page.url.searchParams.get('preset') ?? $preset ?? ''),
			...getThemeFromSearchParams($page.url.searchParams)
		});

	$: browser && applyViewport(viewportHeight, viewportWidth);
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<svelte:head>
	{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}
</svelte:head>

<slot />
