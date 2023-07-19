<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import { PRESETS_GRADIENTS } from '$lib/utils/theme';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	/** @type {string | undefined} */
	let gradient;
	/** @type {boolean} */
	let isSecondary;

	$: if (browser) {
		const preset = $page.url.searchParams.get('theme') || $globalThemePreset || '';

		gradient = $page.url.searchParams.get('gradient') ?? PRESETS_GRADIENTS[preset];
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<Backdrop {gradient} {isSecondary} />
