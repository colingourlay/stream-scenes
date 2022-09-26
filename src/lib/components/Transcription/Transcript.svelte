<script lang="ts">
	import { browser } from '$app/environment';
	import { createWebSocket } from './constants';

	export let numVisibleLines: number = 2;
	export let showInterimLine: boolean = false;

	let recentLines: string[] = [];
	let interimLine: string | null = null;
	let socket: WebSocket;

	$: visibleRecentLines = showInterimLine && interimLine ? recentLines.slice(-1) : recentLines;

	if (browser) {
		socket = createWebSocket();

		socket.addEventListener('message', (event) => {
			if (!event.data) {
				return;
			}

			const { type, payload } = JSON.parse(event.data);

			switch (type) {
				case 'line':
					recentLines = [...recentLines, payload].slice(-numVisibleLines);
					interimLine = null;
					break;
				case 'interimLine':
					if (showInterimLine) {
						interimLine = payload;
					}
					break;
				case 'reset':
					recentLines = [];
					interimLine = null;
					break;
				default:
					break;
			}
		});
	}
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
		justify-self: flex-end;
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
