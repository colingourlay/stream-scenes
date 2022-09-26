<script lang="ts">
	import { browser } from '$app/environment';
	import { SCHEMES } from './schemes';

	export let scheme: string | undefined;
	export let theme: Record<string, string> = {};

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: if (browser) {
		// Viewport
		document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
		document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);
		if (window.obsstudio) {
			document.documentElement.style.setProperty('--viewport-background-alpha', '0');
		}

		// Theming
		Object.entries({
			...((scheme && SCHEMES[scheme]) || {}),
			...theme
		}).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--theme-${key}`, value);
		});
	}
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<slot />
