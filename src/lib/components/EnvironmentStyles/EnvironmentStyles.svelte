<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import {
		DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE,
		applyTheme,
		getThemeFromSearchParams,
		getThemeFromPreset
	} from '$lib/utils/theme';
	import { applyViewport } from '$lib/utils/viewport';

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: browser &&
		applyTheme({
			...getThemeFromPreset(
				$page.url.searchParams.has('preset')
					? $page.url.searchParams.get('preset') ?? ''
					: $globalThemePreset ?? ''
			),
			...getThemeFromSearchParams($page.url.searchParams)
		});

	$: browser && applyViewport(viewportHeight, viewportWidth);
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<svelte:head>
	{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}
</svelte:head>

<slot />
