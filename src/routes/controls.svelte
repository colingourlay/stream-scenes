<script lang="ts">
	import CountdownPicker from '$components/Countdown/CountdownPicker.svelte';
	import TranscriptRecorder from '$lib/components/Transcript/TranscriptRecorder.svelte';
</script>

<article>
	<h2>Countdown</h2>
	<CountdownPicker minutes={[1]]} />
	<!-- <CountdownPicker minutes={[1, 3, 5, 10, 15]} /> -->
	<h2>Transcript</h2>
	<TranscriptRecorder />
</article>

<style>
	article {
		width: 100%;
		max-width: 20rem;
	}

	h2 {
		text-align: center;
	}
</style>
