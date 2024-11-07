<script module>
	import Frame from '../Frame/Frame.svelte';

	/** @typedef {import('$lib/components/Frame/Frame.svelte').FrameProps} FrameProps */

	/**
	 * @typedef {Object} OneFrameProps
	 * @property {FrameProps["aspect"]} aspect
	 * @property {FrameProps["image"]} image
	 * @property {FrameProps["isSecondary"]} isSecondary
	 */
</script>

<script>
	/** @type {OneFrameProps} */
	let { aspect, image, isSecondary } = $props();
</script>

<article><Frame {aspect} {image} {isSecondary} /></article>

<style>
	article {
		margin: 0;
		width: 88.75%;
	}
</style>
