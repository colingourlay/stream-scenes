<script module>
	import { onMount } from 'svelte';
	import { hoursMinutesSeconds } from '$lib/utils/time';

	/**
	 * @typedef {Object} CountdownProps
	 * @property {number} [timeMS]
	 * @property {boolean} [isFinished]
	 * @property {boolean} [isInline]
	 */
</script>

<script>
	/** @type {CountdownProps} */
	let { timeMS = 0, isFinished = $bindable(false), isInline = false } = $props();

	let msRemaining = $state(0);
	let timeRemaining = $derived(hoursMinutesSeconds(msRemaining, true));

	$effect(() => {
		isFinished = msRemaining === 0;
	});

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
