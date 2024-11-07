<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import FrameAndSidebar from '$lib/components/FrameAndSidebar/FrameAndSidebar.svelte';

	/** @typedef {import('$lib/components/FrameAndSidebar/FrameAndSidebar.svelte').FrameAndSidebarProps} FrameAndSidebarProps */
</script>

<script>
	/** @type {FrameAndSidebarProps["aspect"]} */
	let aspect = $state();
	/** @type {FrameAndSidebarProps["image"]} */
	let image = $state();
	/** @type {FrameAndSidebarProps["isSecondary"]} */
	let isSecondary = $state();
	/** @type {FrameAndSidebarProps["isFrameSecondary"]} */
	let isFrameSecondary = $state();
	/** @type {FrameAndSidebarProps["isSidebarSecondary"]} */
	let isSidebarSecondary = $state();

	$effect.pre(() => {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
		isFrameSecondary = $page.url.searchParams.has('frame-secondary');
		isSidebarSecondary = $page.url.searchParams.has('sidebar-secondary');
	});
</script>

<FrameAndSidebar {aspect} {image} {isSecondary} {isFrameSecondary} {isSidebarSecondary} />
