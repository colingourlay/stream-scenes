<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	/** @type {string | undefined} */
	let image;
	/** @type {boolean} */
	let isSecondary;

	$: if (browser) {
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') || $preset || ''];
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<Backdrop {image} {isSecondary} />
