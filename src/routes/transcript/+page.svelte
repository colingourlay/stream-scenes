<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Transcript from '$lib/components/Transcription/Transcript.svelte';

	let showInterimLine = false;

	if (browser) {
		showInterimLine = $page.url.searchParams.has('secondary');
	}
</script>

<Transcript {showInterimLine} />
