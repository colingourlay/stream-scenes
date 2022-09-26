<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import OneFrame from '$lib/components/OneFrame/OneFrame.svelte';

	let aspect: number;
	let isSecondary: boolean;

	onMount(() => {
		aspect = +$page.url.searchParams.get('aspect') || undefined;
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
	});
</script>

<OneFrame {aspect} {isSecondary} />
