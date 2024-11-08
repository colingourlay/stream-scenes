<script module>
	import { page } from '$app/stores';
	import Status from '$lib/components/Status/Status.svelte';
	import StatusInstructions from '$lib/components/Status/StatusInstructions.svelte';

	/** @typedef {import('$lib/components/Status/Status.svelte').StatusProps} StatusProps */

	const PLACEHOLDER_CHARS = '-----';
</script>

<script>
	/** @type {StatusProps["chars"]} */
	let chars = $state('');

	$effect.pre(() => {
		chars = $page.url.searchParams.get('chars') ?? PLACEHOLDER_CHARS;
	});
</script>

<article>
	<Status {chars} />
	{#if chars === PLACEHOLDER_CHARS}
		<StatusInstructions />
	{/if}
</article>

<style>
	article {
		margin: auto;
	}
</style>
