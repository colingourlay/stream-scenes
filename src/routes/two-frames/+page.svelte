<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import TwoFrames from '$lib/components/TwoFrames/TwoFrames.svelte';

	let aspect: number;
	let isSecondary: boolean;
	let isFirstSecondary: boolean;
	let isSecondSecondary: boolean;

	onMount(() => {
		aspect = +$page.url.searchParams.get('aspect') || undefined;
		isSecondary = $page.url.searchParams.has('secondary') || undefined;
		isFirstSecondary = $page.url.searchParams.has('first-secondary') || undefined;
		isSecondSecondary = $page.url.searchParams.has('second-secondary') || undefined;
	});
</script>

<TwoFrames {aspect} {isSecondary} {isFirstSecondary} {isSecondSecondary} />
