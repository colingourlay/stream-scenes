<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import OneFrame from '$lib/components/OneFrame/OneFrame.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<OneFrame {aspect} {image} {isSecondary} />
