<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import TwoFrames from '$lib/components/TwoFrames/TwoFrames.svelte';

	/** @typedef {import('$lib/components/TwoFrames/TwoFrames.svelte').TwoFramesProps} TwoFramesProps */
</script>

<script>
	/** @type {TwoFramesProps["aspect"]} */
	let aspect = $state();
	/** @type {TwoFramesProps["image"]} */
	let image = $state();
	/** @type {TwoFramesProps["isSecondary"]} */
	let isSecondary = $state();
	/** @type {TwoFramesProps["isFirstSecondary"]} */
	let isFirstSecondary = $state();
	/** @type {TwoFramesProps["isSecondSecondary"]} */
	let isSecondSecondary = $state();

	$effect.pre(() => {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
		isFirstSecondary = $page.url.searchParams.has('first-secondary');
		isSecondSecondary = $page.url.searchParams.has('second-secondary');
	});
</script>

<TwoFrames {aspect} {image} {isSecondary} {isFirstSecondary} {isSecondSecondary} />
