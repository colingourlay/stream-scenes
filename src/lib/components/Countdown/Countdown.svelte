<script>
	import { onMount } from 'svelte';
	import { hoursMinutesSeconds } from '$lib/utils/time';

	export let timeMS = 0;
	export let isFinished = false;

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

<time>{timeRemaining}</time>

<style>
	time {
		font-size: 5rem;
		font-variant-numeric: tabular-nums;
		font-weight: 200;
	}
</style>
