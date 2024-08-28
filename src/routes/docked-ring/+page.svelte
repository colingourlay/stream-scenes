<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import DockedRing from '$lib/components/DockedRing/DockedRing.svelte';
	import { PRESETS_IMAGES } from '$lib/utils/preset';

	/**	@type {string | undefined} */
	let position;
	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;

	$: if (browser) {
		position = $page.url.searchParams.get('position') || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<DockedRing {position} {image} {isSecondary} />
