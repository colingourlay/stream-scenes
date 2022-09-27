<script lang="ts">
	import countdown from '$lib/stores/countdown';

	export let minutes: number[] = [];

	const MILESTONES = {
		hour: 36e5,
		half: 18e5,
		quarter: 9e5
	};
	const getNextMilestone = (milestonePeriodMS: number) =>
		Math.ceil(Date.now() / milestonePeriodMS) * milestonePeriodMS;
	const getMinutesIntoFuture = (minutes: number) => Date.now() + minutes * 6e4;
</script>

<menu>
	<ul>
		<li><button on:click={() => countdown.set(null)}>None</button></li>
		<li>
			<button on:click={() => countdown.set(getNextMilestone(MILESTONES.hour))}>Next Hour</button>
		</li>
		<li>
			<button on:click={() => countdown.set(getNextMilestone(MILESTONES.half))}>Next ½-hour</button>
		</li>
		<li>
			<button on:click={() => countdown.set(getNextMilestone(MILESTONES.quarter))}
				>Next ¼-hour</button
			>
		</li>
		{#each minutes as value}
			<li>
				<button on:click={() => countdown.set(getMinutesIntoFuture(value))}
					>{`${value} Minute${value === 1 ? '' : 's'}`}</button
				>
			</li>
		{/each}
	</ul>
</menu>

<style>
	menu {
		padding: 0;
	}

	ul {
		padding: 0;
	}

	li {
		margin-bottom: 0.25rem;
		list-style: none;
	}

	button {
		width: 100%;
	}
</style>
