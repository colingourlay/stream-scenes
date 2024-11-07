<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import OneFrame from '$lib/components/OneFrame/OneFrame.svelte';

	/** @typedef {import('$lib/components/OneFrame/OneFrame.svelte').OneFrameProps} OneFrameProps */
</script>

<script>
	/** @type {OneFrameProps["aspect"]} */
	let aspect = $state();
	/** @type {OneFrameProps["image"]} */
	let image = $state();
	/** @type {OneFrameProps["isSecondary"]} */
	let isSecondary = $state();

	$effect.pre(() => {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
	});
</script>

<OneFrame {aspect} {image} {isSecondary} />
