<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';

	/** @type {string | undefined} */
	let gradient;
	/** @type {boolean} */
	let isSecondary;

	if (browser) {
		gradient = $page.url.searchParams.get('gradient') ?? undefined;
		isSecondary = $page.url.searchParams.has('secondary');
	}
</script>

<Backdrop {gradient} {isSecondary} />
