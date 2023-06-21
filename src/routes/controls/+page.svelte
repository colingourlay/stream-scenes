<script>
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';
	import CountdownPicker from '$lib/components/Countdown/CountdownPicker.svelte';
</script>

<Backdrop isSecondary>
	<article>
		<h2>Countdown</h2>
		<CountdownPicker minutes={[1]} />
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
