<script module>
	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { PRESETS_IMAGES } from '$lib/utils/preset';
	import ThreeFrames from '$lib/components/ThreeFrames/ThreeFrames.svelte';

	/** @typedef {import('$lib/components/ThreeFrames/ThreeFrames.svelte').ThreeFramesProps} ThreeFramesProps */
</script>

<script>
	/** @type {ThreeFramesProps["aspect"]} */
	let aspect = $state();
	/** @type {ThreeFramesProps["image"]} */
	let image = $state();
	/** @type {ThreeFramesProps["isSecondary"]} */
	let isSecondary = $state();
	/** @type {ThreeFramesProps["isFirstSecondary"]} */
	let isFirstSecondary = $state();
	/** @type {ThreeFramesProps["isSecondSecondary"]} */
	let isSecondSecondary = $state();
	/** @type {ThreeFramesProps["isThirdSecondary"]} */
	let isThirdSecondary = $state();

	$effect.pre(() => {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		image =
			$page.url.searchParams.get('image') ??
			PRESETS_IMAGES[$page.url.searchParams.get('preset') ?? $preset ?? ''];
		isSecondary = $page.url.searchParams.has('secondary');
		isFirstSecondary = $page.url.searchParams.has('first-secondary');
		isSecondSecondary = $page.url.searchParams.has('second-secondary');
		isThirdSecondary = $page.url.searchParams.has('third-secondary');
	});
</script>

<ThreeFrames
	{aspect}
	{image}
	{isSecondary}
	{isFirstSecondary}
	{isSecondSecondary}
	{isThirdSecondary}
/>
