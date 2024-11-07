<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	/** @typedef {import('$lib/components/Backdrop/Backdrop.svelte').BackdropProps} BackdropProps */
</script>

<script>
	/** @type {BackdropProps["image"]} */
	let image = $state();
	/** @type {BackdropProps["isSecondary"]} */
	let isSecondary = $state(false);

	$effect.pre(() => {
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
	});
</script>

<Backdrop {image} {isSecondary} />
