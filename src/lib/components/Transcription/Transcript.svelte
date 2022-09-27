<script lang="ts">
	import { onMount } from 'svelte';
	import { TRANSCRIPTION_SERVER_URL } from '$lib/config';

	export let numVisibleLines: number = 2;
	export let showInterimLine: boolean = false;

	let recentLines: string[] = [];
	let interimLine: string | null = null;
	let es: EventSource;

	$: visibleRecentLines = showInterimLine && interimLine ? recentLines.slice(-1) : recentLines;

	onMount(() => {
		es = new EventSource(`${TRANSCRIPTION_SERVER_URL}/sub`);

		es.addEventListener('line', ({ data }) => {
			recentLines = [...recentLines, data].slice(-numVisibleLines);
			interimLine = null;
		});

		es.addEventListener('interimLine', ({ data }) => {
			if (showInterimLine) {
				interimLine = data;
			}
		});

		es.addEventListener('reset', () => {
			recentLines = [];
			interimLine = null;
		});
	});
</script>

<article>
	<svg width="0" height="0">
		<defs>
			<filter id="outliner">
				<feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="5" />
				<feFlood
					flood-color="var(--theme-color-text-outline, hsla(0 0% 0% / 0))"
					flood-opacity="1"
					result="OUTLINE_COLOUR"
				/>
				<feComposite in="OUTLINE_COLOUR" in2="DILATED" operator="in" result="OUTLINE" />

				<feMerge>
					<feMergeNode in="OUTLINE" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>
	</svg>
	{#each visibleRecentLines as line}
		<p>{line}</p>
	{/each}
	{#if showInterimLine && interimLine}
		<p class="interim">{interimLine}</p>
	{/if}
</article>

<style>
	article {
		align-self: stretch;
		margin-top: auto;
		-webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%);
		mask-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%);
	}

	p {
		margin: 0;
		padding: 0.5vw 1vw;
		font-size: 5vw;
		line-height: 1.33;
		letter-spacing: 0.1ch;
		filter: url(#outliner);
	}

	.interim {
		font-style: italic;
	}

	p::first-letter {
		text-transform: capitalize;
	}

	p::after {
		content: '.';
	}
</style>
