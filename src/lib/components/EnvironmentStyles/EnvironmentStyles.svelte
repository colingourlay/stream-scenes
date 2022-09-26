<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import {
		DEFAULT_THEME_DOCUMENT_ELEMENT_CSS,
		DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE,
		getThemeFromSearchParams
	} from '$lib/utils/theme';

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: if (browser) {
		document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
		document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);

		if (window.obsstudio) {
			document.documentElement.style.setProperty('--viewport-background-alpha', '0');
		}
	}

	onMount(() => {
		Object.entries(getThemeFromSearchParams($page.url.searchParams)).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--theme-${key}`, value);
		});
	});
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}

<slot />
