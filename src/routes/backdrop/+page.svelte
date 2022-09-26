<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	let isSecondary: boolean;

	onMount(() => {
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
	});
</script>

<Backdrop {isSecondary} />
