<script lang="ts">
	import { page } from '$app/stores';
	import FrameAndSidebar from '$components/FrameAndSidebar/FrameAndSidebar.svelte';
</script>

<FrameAndSidebar
	aspect={+$page.query.get('aspect') || undefined}
	isFrameSecondary={$page.query.has('frame-secondary')}
	isSidebarSecondary={$page.query.has('sidebar-secondary')}
/>
