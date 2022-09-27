<script context="module" lang="ts">
	declare global {
		interface Window {
			webkitSpeechRecognition: any;
		}
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { createWebSocket } from './constants';

	let socket: WebSocket;
	let recognition: SpeechRecognition;
	let isRecognitionActive: boolean;
	let lastError: string | null = null;

	const start = () => recognition && recognition.start();
	const stop = () => recognition && recognition.abort();
	const reset = () => socket && socket.send(JSON.stringify({ type: 'reset' }));

	onMount(() => {
		if ('webkitSpeechRecognition' in window) {
			socket = createWebSocket();

			recognition = new window.webkitSpeechRecognition();
			recognition.continuous = true;
			recognition.interimResults = true;
			recognition.onstart = () => {
				isRecognitionActive = true;
				lastError = null;
			};
			recognition.onerror = ({ error }) => (lastError = error);
			recognition.onend = () => {
				isRecognitionActive = false;

				if (lastError !== 'aborted') {
					recognition.start();
				}
			};
			recognition.onresult = ({ results, resultIndex }) => {
				if (typeof results === 'undefined') {
					return;
				}

				const result = results[resultIndex];

				socket.send(
					JSON.stringify({
						type: result.isFinal ? 'line' : 'interimLine',
						payload: result[0].transcript
					})
				);
			};
		}
	});
</script>

{#if recognition}
	<menu>
		<ul>
			<li>
				<button on:click={start} disabled={isRecognitionActive}>Start</button>
			</li>
			<li>
				<button on:click={stop} disabled={!isRecognitionActive}>Stop</button>
			</li>
			<li>
				<button on:click={reset} disabled={!isRecognitionActive}>Reset</button>
			</li>
		</ul>
	</menu>
{:else}
	<p>Speech recognition not available</p>
{/if}

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
