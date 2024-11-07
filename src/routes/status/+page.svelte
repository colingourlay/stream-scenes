<script module>
	import { page } from '$app/stores';
	import Status from '$lib/components/Status/Status.svelte';

	/** @typedef {import('$lib/components/Status/Status.svelte').StatusProps} StatusProps */
</script>

<script>
	/** @type {StatusProps["chars"]} */
	let chars = $state('');

	$effect.pre(() => {
		chars = $page.url.searchParams.get('chars') ?? '-----';
	});
</script>

<article>
	<Status {chars} />
</article>

<style>
	article {
		margin: auto;
	}
</style>
