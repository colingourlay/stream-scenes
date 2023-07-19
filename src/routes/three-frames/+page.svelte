<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ThreeFrames from '$lib/components/ThreeFrames/ThreeFrames.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {boolean} */
	let isSecondary;
	/** @type {boolean} */
	let isFirstSecondary;
	/** @type {boolean} */
	let isSecondSecondary;
	/** @type {boolean} */
	let isThirdSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		isSecondary = $page.url.searchParams.has('secondary');
		isFirstSecondary = $page.url.searchParams.has('first-secondary');
		isSecondSecondary = $page.url.searchParams.has('second-secondary');
		isThirdSecondary = $page.url.searchParams.has('third-secondary');
	}
</script>

<ThreeFrames {aspect} {isSecondary} {isFirstSecondary} {isSecondSecondary} {isThirdSecondary} />
