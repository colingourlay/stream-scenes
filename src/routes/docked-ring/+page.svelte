<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import DockedRing from '$lib/components/DockedRing/DockedRing.svelte';

	/** @type {boolean} */
	let isSecondary;
	/**	@type {string | undefined} */
	let position;

	if (browser) {
		isSecondary = $page.url.searchParams.has('secondary');
		position = $page.url.searchParams.get('position') || undefined;
	}
</script>

<DockedRing {position} {isSecondary} />
