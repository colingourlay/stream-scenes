<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import OneFrame from '$lib/components/OneFrame/OneFrame.svelte';

	/** @type {number | undefined} */
	let aspect;
	/** @type {boolean} */
	let isSecondary;

	if (browser) {
		aspect = Number($page.url.searchParams.get('aspect')) || undefined;
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<OneFrame {aspect} {isSecondary} />
