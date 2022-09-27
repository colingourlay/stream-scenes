<script context="module" lang="ts">
	declare global {
		interface Window {
			webkitSpeechRecognition: any;
		}
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { createWebSocket } from './constants';

	let socket: WebSocket;
	let recognition;
	let lastError: string | null = null;

	if (browser && 'webkitSpeechRecognition' in window) {
		socket = createWebSocket();

		recognition = new window.webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.onstart = () => (lastError = null);
		recognition.onerror = ({ error }) => (lastError = error);
		recognition.onend = () => lastError !== 'aborted' && recognition.start();
		recognition.onresult = ({ results, resultIndex }) => {
			if (typeof results === 'undefined') {
				return;
			}

			const result: SpeechRecognitionResult = results[resultIndex];

			socket.send(
				JSON.stringify({
					type: result.isFinal ? 'line' : 'interimLine',
					payload: result[0].transcript
				})
			);
		};
	}

	const start = () => recognition && recognition.start();
	const stop = () => recognition && recognition.abort();
	const reset = () => socket.send(JSON.stringify({ type: 'reset' }));
</script>

{#if recognition}
	<menu>
		<ul>
			<li>
				<button on:click={start}>Start</button>
			</li>
			<li>
				<button on:click={stop}>Stop</button>
			</li>
			<li>
				<button on:click={reset}>Reset</button>
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
