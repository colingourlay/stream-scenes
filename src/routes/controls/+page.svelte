<script>
	import Backdrop from '$lib/components/Backdrop/Backdrop.svelte';
	import CountdownPicker from '$lib/components/Countdown/CountdownPicker.svelte';
	import GlobalThemePresetPicker from '$lib/components/Theme/GlobalThemePresetPicker.svelte';
</script>

<Backdrop isSecondary>
	<article>
		<h3>Countdown</h3>
		<CountdownPicker minutes={[1]} />
		<h3>Global Theme Preset</h3>
		<GlobalThemePresetPicker />
	</article>
</Backdrop>

<style>
	article {
		padding: 0.5rem;
		overflow-x: auto;
	}

	h3 {
		text-align: center;
		max-width: 12rem;
	}
</style>
