<script lang="ts">
	import CountdownPicker from '$components/Countdown/CountdownPicker.svelte';
</script>

<article>
	<h2>Countdown</h2>
	<CountdownPicker minutes={[1]} />
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
