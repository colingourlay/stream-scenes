<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import { PRESETS_IMAGES } from '$lib/utils/theme';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;

	$: if (browser) {
		const preset = $page.url.searchParams.get('preset') || $globalThemePreset || '';

		image = $page.url.searchParams.get('image') ?? PRESETS_IMAGES[preset];
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<Backdrop {image} {isSecondary} />
