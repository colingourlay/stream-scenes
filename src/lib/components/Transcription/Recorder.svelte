<script lang="ts">
	import type * as Ably from 'ably';
	import { onMount } from 'svelte';
	import Menu from '../Menu/Menu.svelte';
	import { getChannel } from './ably';

	interface MenuItem {
		label: string;
		handler: () => void;
		isDisabled: boolean;
	}

	let recognition: SpeechRecognition;
	let isRecognitionActive: boolean;
	let lastError: string | null = null;
	let channel: Ably.Types.RealtimeChannelPromise;
	let items: MenuItem[];

	const pub = (type: string, payload = '') => channel && channel.publish(type, payload);

	$: items = [
		{
			label: 'Start',
			handler: () => recognition && recognition.start(),
			isDisabled: isRecognitionActive
		},
		{
			label: 'Stop',
			handler: () => recognition && recognition.abort(),
			isDisabled: !isRecognitionActive
		},
		{
			label: 'Reset',
			handler: () => pub('reset'),
			isDisabled: !isRecognitionActive
		}
	];

	onMount(async () => {
		if ('webkitSpeechRecognition' in window) {
			channel = await getChannel();

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

				pub(result.isFinal ? 'line' : 'interimLine', result[0].transcript);
			};
		}
	});
</script>

{#if recognition}
	<Menu {items}>
		<button slot="item" let:item on:click={item.handler} disabled={item.isDisabled}>
			{item.label}
		</button>
	</Menu>
{:else}
	<p>Speech recognition not available</p>
{/if}
