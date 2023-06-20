<script lang="ts">
	import countdown from '$lib/stores/countdown';
	import Menu from '../Menu/Menu.svelte';

	export let minutes: number[] = [];

	const getNextMilestone = (milestonePeriodMS: number) =>
		Math.ceil(Date.now() / milestonePeriodMS) * milestonePeriodMS;
	const getMinutesIntoFuture = (minutes: number) => Date.now() + minutes * 6e4;

	interface MenuItem {
		label: string;
		getTime: (() => number | null);
	}

	let items: MenuItem[] = [
		{ label: 'None', getTime: () => null },
		{ label: 'Next Hour', getTime: () => getNextMilestone(36e5) },
		{ label: 'Next ½-Hour',  getTime: () => getNextMilestone(18e5) },
		{ label: 'Next ¼-Hour',  getTime: () => getNextMilestone(9e5) },
		...minutes.map((value) => ({
			label: `${value} Minute${value === 1 ? '' : 's'}`,
			getTime: () => getMinutesIntoFuture(value)
		}))
	];
</script>

<Menu {items}>
	<button slot="item" let:item on:click={() => countdown.set(item.getTime())}>{item.label}</button>
</Menu>
