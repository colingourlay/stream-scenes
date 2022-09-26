<script lang="ts">
	import { page } from '$app/stores';
	import TwoFrames from '$components/TwoFrames/TwoFrames.svelte';
</script>

<TwoFrames
	aspect={+$page.query.get('aspect') || undefined}
	isSecondary={$page.query.has('secondary') || undefined}
	isFirstSecondary={$page.query.has('first-secondary') || undefined}
	isSecondSecondary={$page.query.has('second-secondary') || undefined}
/>
