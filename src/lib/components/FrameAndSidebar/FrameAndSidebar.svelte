<script>
	import Backdrop from '../Backdrop/Backdrop.svelte';
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect;
	/** @type {string | undefined} */
	export let image;
	export let isFlipped = false;
	/** @type {boolean | undefined} */
	export let isSecondary;
	/** @type {boolean | undefined} */
	export let isFrameSecondary;
	/** @type {boolean | undefined} */
	export let isSidebarSecondary;
</script>

<article class:isFlipped>
	<section><Frame {aspect} {image} isSecondary={isFrameSecondary ?? isSecondary} /></section>
	<aside><Backdrop {image} isSecondary={isSidebarSecondary ?? isSecondary} /></aside>
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
