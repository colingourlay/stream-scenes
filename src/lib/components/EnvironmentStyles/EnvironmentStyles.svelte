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

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: theme = {
		...getThemeFromPreset(
			browser && $page.url.searchParams.has('preset')
				? $page.url.searchParams.get('preset') ?? ''
				: $globalThemePreset ?? ''
		),
		...(browser ? getThemeFromSearchParams($page.url.searchParams) : {})
	};

	$: if (browser) {
		applyTheme(theme);
		document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
		document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);
	}
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<svelte:head>
	{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}
</svelte:head>

<slot />
