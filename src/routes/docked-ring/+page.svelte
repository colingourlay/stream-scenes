<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import DockedRing from '$lib/components/DockedRing/DockedRing.svelte';
	import { PRESETS_IMAGES } from '$lib/utils/preset';

	/** @typedef {import('$lib/components/DockedRing/DockedRing.svelte').DockedRingProps} DockedRingProps */
</script>

<script>
	/** @type {DockedRingProps["position"]} */
	let position = $state();
	/** @type {DockedRingProps["image"]} */
	let image = $state();
	/** @type {DockedRingProps["isSecondary"]} */
	let isSecondary = $state();

	$effect.pre(() => {
		position = $page.url.searchParams.get('position') || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
	});
</script>

<DockedRing {position} {image} {isSecondary} />
