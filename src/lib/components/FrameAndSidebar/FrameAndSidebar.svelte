<script module>
	import Backdrop from '../Backdrop/Backdrop.svelte';
	import Frame from '../Frame/Frame.svelte';

	/** @typedef {import('$lib/components/Backdrop/Backdrop.svelte').BackdropProps} BackdropProps */
	/** @typedef {import('$lib/components/Frame/Frame.svelte').FrameProps} FrameProps */

	/**
	 * @typedef {Object} FrameAndSidebarProps
	 * @property {FrameProps["aspect"]} aspect
	 * @property {BackdropProps["image"] & FrameProps["image"]} image
	 * @property {boolean} [isFlipped]
	 * @property {BackdropProps["isSecondary"] & FrameProps["isSecondary"]} isSecondary
	 * @property {FrameProps["isSecondary"]} isFrameSecondary
	 * @property {BackdropProps["isSecondary"]} isSidebarSecondary
	 */
</script>

<script>
	/** @type {FrameAndSidebarProps} */
	let {
		aspect,
		image,
		isFlipped = false,
		isSecondary,
		isFrameSecondary,
		isSidebarSecondary
	} = $props();
</script>

<article class:isFlipped>
	<section><Frame {aspect} {image} isSecondary={isFrameSecondary || isSecondary} /></section>
	<aside><Backdrop {image} isSecondary={isSidebarSecondary || isSecondary} /></aside>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.isFlipped {
		flex-direction: row-reverse;
	}

	section {
		margin: auto;
		width: 75%;
	}

	aside {
		align-self: stretch;
		width: 20%;
	}
</style>
