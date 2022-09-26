<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import FrameAndSidebar from '$lib/components/FrameAndSidebar/FrameAndSidebar.svelte';

	let aspect: number;
	let isSecondary: boolean;
	let isFrameSecondary: boolean;
	let isSidebarSecondary: boolean;

	onMount(() => {
		aspect = +$page.url.searchParams.get('aspect') || undefined;
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
		isFrameSecondary = $page.url.searchParams.has('frame-secondary') || undefined;
		isSidebarSecondary = $page.url.searchParams.has('sidebar-secondary') || undefined;
	});
</script>

<FrameAndSidebar {aspect} isFlipped {isSecondary} {isFrameSecondary} {isSidebarSecondary} />
