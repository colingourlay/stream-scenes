<script module>
	import Frame from '../Frame/Frame.svelte';

	/** @typedef {import('$lib/components/Frame/Frame.svelte').FrameProps} FrameProps */

	/**
	 * @typedef {Object} RingProps
	 * @property {FrameProps["image"]} image
	 * @property {FrameProps["isSecondary"]} isSecondary
	 */
</script>

<script>
	/** @type {RingProps} */
	let { image, isSecondary } = $props();
</script>

<Frame isCircle={true} {image} {isSecondary} />
