<script module>
	import { page } from '$app/stores';
	import Transcript from '$lib/components/Transcription/Transcript.svelte';

	/** @typedef {import('$lib/components/Transcription/Transcript.svelte').TranscriptProps} TranscriptProps */
</script>

<script>
	/** @type TranscriptProps["showInterimLine"] */
	let showInterimLine = $state();

	$effect.pre(() => {
		showInterimLine = $page.url.searchParams.has('secondary');
	});
</script>

<Transcript {showInterimLine} />
