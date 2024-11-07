<script module>
	import Frame from '../Frame/Frame.svelte';

	/** @typedef {import('$lib/components/Frame/Frame.svelte').FrameProps} FrameProps */

	/**
	 * @typedef {Object} ThreeFramesProps
	 * @property {FrameProps["aspect"]} aspect
	 * @property {FrameProps["image"]} image
	 * @property {FrameProps["isSecondary"]} isSecondary
	 * @property {FrameProps["isSecondary"]} isFirstSecondary
	 * @property {FrameProps["isSecondary"]} isSecondSecondary
	 * @property {FrameProps["isSecondary"]} isThirdSecondary
	 */
</script>

<script>
	/** @type {ThreeFramesProps} */
	let { aspect, image, isSecondary, isFirstSecondary, isSecondSecondary, isThirdSecondary } =
		$props();
</script>

<article>
	<section><Frame {aspect} {image} isSecondary={isFirstSecondary || isSecondary} /></section>
	<section><Frame {aspect} {image} isSecondary={isSecondSecondary || isSecondary} /></section>
	<section><Frame {aspect} {image} isSecondary={isThirdSecondary || isSecondary} /></section>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0 2.5%;
		justify-content: center;
		align-content: center;
	}

	section {
		width: 37.25%;
	}

	section:last-child {
		margin-top: 2.5%;
	}
</style>
