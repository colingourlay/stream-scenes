<script lang="ts">
	import { page } from '$app/stores';
	import OneFrame from '$components/OneFrame/OneFrame.svelte';
</script>

<OneFrame
	aspect={+$page.query.get('aspect') || undefined}
	isSecondary={$page.query.has('secondary') || undefined}
/>
