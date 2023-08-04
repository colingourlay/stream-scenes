<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import ThreeFrames from '$lib/components/ThreeFrames/ThreeFrames.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;
	/** @type {boolean} */
	let isFirstSecondary;
	/** @type {boolean} */
	let isSecondSecondary;
	/** @type {boolean} */
	let isThirdSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
		isFirstSecondary = $page.url.searchParams.has('first-secondary');
		isSecondSecondary = $page.url.searchParams.has('second-secondary');
		isThirdSecondary = $page.url.searchParams.has('third-secondary');
	}
</script>

<ThreeFrames
	{aspect}
	{image}
	{isSecondary}
	{isFirstSecondary}
	{isSecondSecondary}
	{isThirdSecondary}
/>
