<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import {
		DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE,
		getThemeFromSearchParams,
		getThemeFromPreset
	} from '$lib/utils/theme';

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: theme = {
		...getThemeFromPreset(
			browser && $page.url.searchParams.has('theme')
				? $page.url.searchParams.get('theme') ?? ''
				: $globalThemePreset ?? ''
		),
		...(browser ? getThemeFromSearchParams($page.url.searchParams) : {})
	};

	$: if (browser) {
		document.documentElement.setAttribute('style', '');
		Object.entries(theme).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--theme-${key}`, value);
		});
		document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
		document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);
	}
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<svelte:head>
	{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}
</svelte:head>

<slot />
