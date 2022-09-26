<script lang="ts">
	import { page } from '$app/stores';
	import ThreeFrames from '$components/ThreeFrames/ThreeFrames.svelte';
</script>

<ThreeFrames
	aspect={+$page.query.get('aspect') || undefined}
	isSecondary={$page.query.has('secondary') || undefined}
	isFirstSecondary={$page.query.has('first-secondary') || undefined}
	isSecondSecondary={$page.query.has('second-secondary') || undefined}
	isThirdSecondary={$page.query.has('third-secondary') || undefined}
/>
