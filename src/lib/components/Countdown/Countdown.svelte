<script>
	import { onMount } from 'svelte';
	import { hoursMinutesSeconds } from '$lib/utils/time';

	export let timeMS = 0;
	export let isFinished = false;
	export let isInline = false;

	/** @type {number} */
	let msRemaining;
	/** @type {string} */
	let timeRemaining;

	$: timeRemaining = hoursMinutesSeconds(msRemaining, true);
	$: isFinished = msRemaining === 0;

	const update = () => (msRemaining = Math.max(0, timeMS - Date.now()));

	onMount(() => {
		const interval = setInterval(update, 50);

		return () => clearInterval(interval);
	});

	update();
</script>

<time
	style={`--countdown-font-size: ${isInline ? 1 : 5}rem; --countdown-font-weight: ${
		isInline ? 'inherit' : 200
	};`}>{timeRemaining}</time
>

<style>
	time {
		font-size: var(--countdown-font-size);
		font-variant-numeric: tabular-nums;
		font-weight: var(--countdown-font-weight);
	}
</style>
