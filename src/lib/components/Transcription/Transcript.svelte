<script lang="ts">
	import type * as Ably from 'ably';
	import { onDestroy, onMount } from 'svelte';
	import { getChannel } from './ably';

	interface Line {
		receivedAt: number;
		text: string;
	}

	export let numVisibleLines: number = 2;
	export let showInterimLine: boolean = false;

	let recentLines: Line[] = [];
	let interimLine: Line | null = null;
	let channel: Ably.Types.RealtimeChannelPromise;
	let cleanupTimer: NodeJS.Timer;

	$: visibleLines =
		showInterimLine && interimLine ? [...recentLines.slice(-1), interimLine] : recentLines;

	onMount(async () => {
		channel = await getChannel();

		channel.subscribe('line', ({ data }) => {
			recentLines = [...recentLines, { receivedAt: Date.now(), text: data }].slice(
				-numVisibleLines
			);
			interimLine = null;
		});

		channel.subscribe('interimLine', ({ data }) => {
			if (showInterimLine) {
				interimLine = { receivedAt: Date.now(), text: data };
			}
		});

		channel.subscribe('reset', () => {
			recentLines = [];
			interimLine = null;
		});

		cleanupTimer = setInterval(() => {
			if (recentLines.length > 0) {
				recentLines = recentLines.filter(({ receivedAt }) => Date.now() - receivedAt < 10000);
			}
		}, 2000);
	});

	onDestroy(() => {
		clearInterval(cleanupTimer);
	});
</script>

<article>
	{#each visibleLines as line}
		<p><span>{line.text}</span></p>
	{/each}
</article>

<style>
	article {
		align-self: stretch;
		margin-top: auto;
	}

	p {
		margin: 0;
		font-size: 3vw;
		font-weight: 700;
		letter-spacing: 0.025em;
	}
	p::first-letter {
		text-transform: capitalize;
	}

	span {
		padding: 0.25em;
		background-color: hsla(0 0% calc(100% - var(--lightness-text)) / 0.67);
		line-height: 1.68;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}
</style>
