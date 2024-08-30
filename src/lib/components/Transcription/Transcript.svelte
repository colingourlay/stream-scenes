<script>
	import { onDestroy, onMount } from 'svelte';
	import { getChannel } from './ably';

	export let numVisibleLines = 2;
	export let showInterimLine = false;

	/**
	 * @typedef Line
	 * @prop {number} receivedAt
	 * @prop {string} text
	 */

	/** @type {Line[]} */
	let recentLines = [];
	/** @type {Line | null} */
	let interimLine = null;
	/** @type {import('ably').Types.RealtimeChannelPromise} */
	let channel;
	/** @type {NodeJS.Timer} */
	let cleanupTimer;

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
		font-size: 1.25rem;
		font-weight: 700;
		letter-spacing: 0.025ch;
		text-align: center;
	}

	p::first-letter {
		text-transform: capitalize;
	}

	p ~ p {
		margin-top: 0.25ch;
	}

	span {
		padding: 0.25ch 0.5ch 0.25ch;
		background-color: hsla(0 0% 0% / 0.75);
		border-radius: 0.375ch;
		line-height: 1.5;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}

	p:empty,
	span:empty {
		display: none;
	}
</style>
