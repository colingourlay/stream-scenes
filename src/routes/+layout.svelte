<script lang="ts">
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import Skin from '$components/Skin/Skin.svelte';
	import { getThemeFromURLSearchParams } from '$utils/theme';

	$: scheme = browser ? $page.query.get('scheme') : undefined;
	$: theme = browser ? getThemeFromURLSearchParams($page.query) : undefined;
</script>

<Skin {scheme} {theme}>
	<slot />
</Skin>
