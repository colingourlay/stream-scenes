<script lang="ts">
	import countdown from '$stores/countdown';

	const MILESTONES = {
		hour: 36e5,
		half: 18e5,
		quarter: 9e5
	};
	const FUTURE_MINUTES_OPTIONS = [1, 3, 5, 10, 15];
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
		{#each FUTURE_MINUTES_OPTIONS as minutes}
			<li>
				<button on:click={() => countdown.set(getMinutesIntoFuture(minutes))}
					>{`${minutes} Minute${minutes === 1 ? '' : 's'}`}</button
				>
			</li>
		{/each}
	</ul>
</menu>

<style>
	menu {
		padding: 0;
	}

	menu ul {
		padding: 0;
	}

	menu li {
		margin-bottom: 0.25rem;
		list-style: none;
	}

	menu button {
		width: 100%;
		line-height: 2;
	}
</style>
