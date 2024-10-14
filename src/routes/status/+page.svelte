<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Status from '$lib/components/Status/Status.svelte';

	/** @type {string} */
	let chars = '';

	$: if (browser) {
		chars = $page.url.searchParams.get('chars') ?? '-----';
	}
</script>

<article>
	<Status {chars} />
</article>

<style>
	article {
		margin: auto;
	}
</style>
