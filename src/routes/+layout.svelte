<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Skin from '$lib/components/Skin/Skin.svelte';
	import { getThemeFromSearchParams } from '$lib/utils/theme';
	import '../app.css';

	let scheme: string;
	let theme: Record<string, string>;

	onMount(() => {
		scheme = $page.url.searchParams.get('scheme');
		theme = getThemeFromSearchParams($page.url.searchParams);
	});
</script>

<Skin {scheme} {theme}>
	<slot />
</Skin>
