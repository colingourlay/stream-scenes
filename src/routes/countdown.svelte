<script lang="ts">
	import Countdown from '$components/Countdown/Countdown.svelte';
	import countdown from '$stores/countdown';

	let isFinished: boolean = false;

	$: timeMS = $countdown ? +$countdown : null;
</script>

<article class:finished={isFinished}>
	{#if timeMS}
		<Countdown {timeMS} bind:isFinished />
	{/if}
</article>

<style>
	article {
		transition: opacity 1.5s 0.25s, transform 2s ease-in-out;
	}

	.finished {
		opacity: 0;
		transform: scale(0.75);
	}
</style>
