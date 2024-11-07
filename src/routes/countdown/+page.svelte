<script module>
	import Countdown from '$lib/components/Countdown/Countdown.svelte';
	import countdown from '$lib/stores/countdown';

	/** @typedef {import('$lib/components/Countdown/Countdown.svelte').CountdownProps} CountdownProps */
</script>

<script>
	/** @type {CountdownProps["isFinished"]} isFinished */
	let isFinished = $state(false);
</script>

<article class:finished={isFinished}>
	{#if $countdown}
		<Countdown timeMS={$countdown} bind:isFinished />
	{/if}
</article>

<style>
	article {
		transition:
			opacity 1.5s 0.25s,
			transform 2s ease-in-out;
	}

	.finished {
		opacity: 0;
		transform: scale(0.75);
	}
</style>
