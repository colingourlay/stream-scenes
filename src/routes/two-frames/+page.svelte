<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import TwoFrames from '$lib/components/TwoFrames/TwoFrames.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {boolean} */
	let isSecondary;
	/** @type {boolean} */
	let isFirstSecondary;
	/** @type {boolean} */
	let isSecondSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		isSecondary = $page.url.searchParams.has('secondary');
		isFirstSecondary = $page.url.searchParams.has('first-secondary');
		isSecondSecondary = $page.url.searchParams.has('second-secondary');
	}
</script>

<TwoFrames {aspect} {isSecondary} {isFirstSecondary} {isSecondSecondary} />
