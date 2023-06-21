<script>
	import countdown from '$lib/stores/countdown';
	import Menu from '../Menu/Menu.svelte';

	/** @type {number[]} */
	export let minutes = [];

	/**
	 * @param {number} milestonePeriodMS
	 */
	const getNextMilestone = (milestonePeriodMS) =>
		Math.ceil(Date.now() / milestonePeriodMS) * milestonePeriodMS;

	/**
	 * @param {number} minutes
	 */
	const getMinutesIntoFuture = (minutes) => Date.now() + minutes * 6e4;

	/**
	 * @typedef MenuItem
	 * @prop {string} label
	 * @prop {() => number | null} getTime
	 */

	/** @type {MenuItem[]} */
	$: items = [
		{ label: 'None', getTime: () => null },
		{ label: 'Next Hour', getTime: () => getNextMilestone(36e5) },
		{ label: 'Next ½-Hour', getTime: () => getNextMilestone(18e5) },
		{ label: 'Next ¼-Hour', getTime: () => getNextMilestone(9e5) },
		...minutes.map((value) => ({
			label: `${value} Minute${value === 1 ? '' : 's'}`,
			getTime: () => getMinutesIntoFuture(value)
		}))
	];
</script>

<Menu>
	{#each items as { label, getTime } (label)}
		<li><button on:click={() => countdown.set(getTime())}>{label}</button></li>
	{/each}
</Menu>
