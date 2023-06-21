<script>
	import { onMount } from 'svelte';
	import Menu from '../Menu/Menu.svelte';
	import { getChannel } from './ably';

	/**
	 * @typedef MenuItem
	 * @prop {string} label
	 * @prop {() => void} handler
	 * @prop {boolean} isDisabled
	 */

	/** @type {SpeechRecognition} */
	let recognition;
	/** @type {boolean} */
	let isRecognitionActive;
	/** @type {string | null} */
	let lastError = null;
	/** @type {import('ably').Types.RealtimeChannelPromise} */
	let channel;
	/** @type {MenuItem[]} */
	let items;

	/**
	 *
	 * @param {string} type
	 * @param {string} payload
	 */
	const pub = (type, payload = '') => channel && channel.publish(type, payload);

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
	<Menu>
		{#each items as { label, handler, isDisabled } (label)}
			<li>
				<button on:click={handler} disabled={isDisabled}>
					{label}
				</button>
			</li>
		{/each}
	</Menu>
{:else}
	<p>Speech recognition not available</p>
{/if}
