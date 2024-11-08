<script module>
	import { page } from '$app/stores';
	import Countdown from '$lib/components/Countdown/Countdown.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import StatusInstructions from '$lib/components/Status/StatusInstructions.svelte';
	import countdown from '$lib/stores/countdown';

	/** @typedef {import('$lib/components/Countdown/Countdown.svelte').CountdownProps} CountdownProps */
	/** @typedef {import('$lib/components/Status/Status.svelte').StatusProps} StatusProps */

	const PLACEHOLDER_CHARS = '-----';
</script>

<script>
	/** @type {boolean} */
	let isFinished = $state(false);
	/** @type {StatusProps["chars"]} */
	let chars = $state('');

	$effect.pre(() => {
		chars = $page.url.searchParams.get('chars') ?? PLACEHOLDER_CHARS;
	});
</script>

<article>
	{#if $countdown}
		<aside class:finished={isFinished}>
			<Countdown timeMS={$countdown} bind:isFinished />
		</aside>
	{/if}
	<section>
		<Status {chars} />
	</section>
	{#if chars === PLACEHOLDER_CHARS}
		<StatusInstructions />
	{/if}
</article>

<style>
	article {
		margin: auto;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	aside {
		transition:
			opacity 1.5s 0.25s,
			transform 2s ease-in-out;
	}

	.finished {
		opacity: 0;
		transform: scale(0.75);
	}

	section {
		transition: transform 2s 0.5s ease-in-out;
	}

	.finished ~ section {
		transform: translate(0, -50%);
	}
</style>
