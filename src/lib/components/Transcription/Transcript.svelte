<script lang="ts">
	import { browser } from '$app/env';
	import { createWebSocket } from './constants';

	let recentLines: string[] = [];
	let interimLine: string | null = null;

	let socket: WebSocket;

	if (browser) {
		socket = createWebSocket();

		socket.addEventListener('message', (event) => {
			if (!event.data) {
				return;
			}

			const { type, payload } = JSON.parse(event.data);

			switch (type) {
				case 'line':
					recentLines = [...recentLines, payload].slice(-10);
					interimLine = null;
					break;
				case 'interimLine':
					interimLine = payload;
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
	{#each recentLines as line}
		<p><span>{line}</span></p>
	{:else}
		<p class="empty"><em>[…]</em></p>
	{/each}
	{#if interimLine}
		<p><em>{interimLine}</em></p>
	{/if}
</article>

<style>
	article {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		-webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%);
	}

	p {
		margin: 1vw 0 0;
		font-size: 5vw;
	}

	.empty:not(:last-child) {
		display: none;
	}

	p > * {
		display: inline-block;
		padding: 0.5vw 1vw;
		background-color: var(--color-highlight, var(--color-background));
		line-height: 1.33;
		letter-spacing: 0.1ch;
	}
</style>
