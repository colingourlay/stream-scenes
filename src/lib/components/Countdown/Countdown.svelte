<script lang="ts">
	import { onMount } from 'svelte';
	import { hoursMinutesSeconds } from '$utils/time';

	export let timeMS: number;
	export let isFinished: boolean = false;

	let msRemaining: number;
	let timeRemaining: string;

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
		font-size: 12.5vw;
		font-variant-numeric: tabular-nums;
		font-weight: 200;
	}
</style>
