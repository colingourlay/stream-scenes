<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import ThreeFrames from '$lib/components/ThreeFrames/ThreeFrames.svelte';

	let aspect: number;
	let isSecondary: boolean;
	let isFirstSecondary: boolean;
	let isSecondSecondary: boolean;
	let isThirdSecondary: boolean;

	onMount(() => {
		aspect = +$page.url.searchParams.get('aspect') || undefined;
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
		isFirstSecondary = $page.url.searchParams.has('first-secondary') || undefined;
		isSecondSecondary = $page.url.searchParams.has('second-secondary') || undefined;
		isThirdSecondary = $page.url.searchParams.has('third-secondary') || undefined;
	});
</script>

<ThreeFrames {aspect} {isSecondary} {isFirstSecondary} {isSecondSecondary} {isThirdSecondary} />
