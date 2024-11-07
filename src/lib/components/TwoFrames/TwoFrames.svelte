<script module>
	import Frame from '../Frame/Frame.svelte';

	/** @typedef {import('$lib/components/Frame/Frame.svelte').FrameProps} FrameProps */

	/**
	 * @typedef {Object} TwoFramesProps
	 * @property {FrameProps["aspect"]} aspect
	 * @property {FrameProps["image"]} image
	 * @property {FrameProps["isSecondary"]} isSecondary
	 * @property {FrameProps["isSecondary"]} isFirstSecondary
	 * @property {FrameProps["isSecondary"]} isSecondSecondary
	 */
</script>

<script>
	/** @type {TwoFramesProps} */
	let { aspect, image, isSecondary, isFirstSecondary, isSecondSecondary } = $props();
</script>

<article>
	<section><Frame {aspect} {image} isSecondary={isFirstSecondary || isSecondary} /></section>
	<section><Frame {aspect} {image} isSecondary={isSecondSecondary || isSecondary} /></section>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		display: flex;
		gap: 2.5%;
		justify-content: center;
		align-items: center;
	}

	section {
		width: 46.25%;
	}
</style>
