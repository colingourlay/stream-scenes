<script lang="ts">
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';
	import Recorder from '$lib/components/Transcription/Recorder.svelte';
</script>

<Backdrop isSecondary>
	<article>
		<h2>Transcription</h2>
		<Recorder />
	</article>
</Backdrop>

<style>
	article {
		padding: 0.5rem;
		max-width: 20rem;
	}

	h2 {
		text-align: center;
	}
</style>
