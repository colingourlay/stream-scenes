<script module>
	import { onMount } from 'svelte';
	import Menu from '../Menu/Menu.svelte';
	import { getChannel } from './ably';

	/** @typedef {import('ably').Types.RealtimeChannelPromise} RealtimeChannelPromise */
</script>

<script>
	/** @type {SpeechRecognition | undefined} */
	let recognition = $state();
	/** @type {boolean} */
	let isRecognitionActive = $state(false);
	/** @type {string | null} */
	let lastError = null;
	/** @type {RealtimeChannelPromise} */
	let channel;
	/**
	 * @typedef MenuItem
	 * @prop {string} label
	 * @prop {() => void} handler
	 * @prop {boolean} isDisabled
	 */
	/** @type {MenuItem[]} */
	let items = $derived([
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
	]);

	/**
	 *
	 * @param {string} type
	 * @param {string} payload
	 */
	const pub = (type, payload = '') => channel && channel.publish(type, payload);

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
					recognition && recognition.start();
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
	<Menu>
		{#each items as { label, handler, isDisabled } (label)}
			<li>
				<button onclick={handler} disabled={isDisabled}>
					{label}
				</button>
			</li>
		{/each}
	</Menu>
{:else}
	<p>Speech recognition not available</p>
{/if}
