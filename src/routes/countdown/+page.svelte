<script lang="ts">
	import Countdown from '$lib/components/Countdown/Countdown.svelte';
	import countdown from '$lib/stores/countdown';

	let isFinished: boolean = false;
</script>

<article class:finished={isFinished}>
	{#if $countdown}
		<Countdown timeMS={$countdown} bind:isFinished />
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
