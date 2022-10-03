<script lang="ts">
	import countdown from '$lib/stores/countdown';
	import Menu from '../Menu/Menu.svelte';

	export let minutes: number[] = [];

	const getNextMilestone = (milestonePeriodMS: number) =>
		Math.ceil(Date.now() / milestonePeriodMS) * milestonePeriodMS;
	const getMinutesIntoFuture = (minutes: number) => Date.now() + minutes * 6e4;

	interface MenuItem {
		label: string;
		time: number;
	}

	let items: MenuItem[] = [
		{ label: 'None', time: null },
		{ label: 'Next Hour', time: getNextMilestone(36e5) },
		{ label: 'Next ½-Hour', time: getNextMilestone(18e5) },
		{ label: 'Next ¼-Hour', time: getNextMilestone(9e5) },
		...minutes.map((value) => ({
			label: `${value} Minute${value === 1 ? '' : 's'}`,
			time: getMinutesIntoFuture(value)
		}))
	];
</script>

<Menu {items}>
	<button slot="item" let:item on:click={() => countdown.set(item.time)}>{item.label}</button>
</Menu>
