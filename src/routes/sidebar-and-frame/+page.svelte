<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import FrameAndSidebar from '$lib/components/FrameAndSidebar/FrameAndSidebar.svelte';

	/** @type {number | undefined}*/
	let aspect;
	/** @type {boolean} */
	let isSecondary;
	/** @type {boolean} */
	let isFrameSecondary;
	/** @type {boolean} */
	let isSidebarSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		isSecondary = $page.url.searchParams.has('secondary');
		isFrameSecondary = $page.url.searchParams.has('frame-secondary');
		isSidebarSecondary = $page.url.searchParams.has('sidebar-secondary');
	}
</script>

<FrameAndSidebar {aspect} isFlipped {isSecondary} {isFrameSecondary} {isSidebarSecondary} />
