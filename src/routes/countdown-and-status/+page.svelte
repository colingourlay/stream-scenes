<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Countdown from '$lib/components/Countdown/Countdown.svelte';
	import Status from '$lib/components/Status/Status.svelte';
	import countdown from '$lib/stores/countdown';

	/** @type {string} */
	let chars = '';

	let isFinished = false;

	$: if (browser) {
		chars = $page.url.searchParams.get('chars') ?? '-----';
	}
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
</article>

<style>
	article {
		margin: auto;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	aside {
		transition: opacity 1.5s 0.25s, transform 2s ease-in-out;
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
