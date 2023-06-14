<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	let gradient: string;
	let isSecondary: boolean;

	onMount(() => {
		gradient = $page.url.searchParams.get('gradient') || undefined;
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
	});
</script>

<Backdrop {gradient} {isSecondary} />
