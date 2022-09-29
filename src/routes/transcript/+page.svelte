<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Transcript from '$lib/components/Transcription/Transcript.svelte';

	let showInterimLine = false;

	onMount(() => {
		showInterimLine = $page.url.searchParams.has('interim') || undefined;
	});
</script>

<Transcript showInterimLine />
