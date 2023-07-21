<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import { PRESETS_IMAGES } from '$lib/utils/theme';
	import FrameAndSidebar from '$lib/components/FrameAndSidebar/FrameAndSidebar.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;
	/** @type {boolean} */
	let isFrameSecondary;
	/** @type {boolean} */
	let isSidebarSecondary;

	$: if (browser) {
		const preset = $page.url.searchParams.get('theme') || $globalThemePreset || '';

		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image = $page.url.searchParams.get('image') ?? PRESETS_IMAGES[preset];
		isSecondary = $page.url.searchParams.has('secondary');
		isFrameSecondary = $page.url.searchParams.has('frame-secondary');
		isSidebarSecondary = $page.url.searchParams.has('sidebar-secondary');
	}
</script>

<FrameAndSidebar {aspect} {image} {isSecondary} {isFrameSecondary} {isSidebarSecondary} />
