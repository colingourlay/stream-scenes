<script>
	import Backdrop from '../Backdrop/Backdrop.svelte';
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect = undefined;
	/** @type {string | undefined} */
	export let image = undefined;
	export let isFlipped = false;
	export let isSecondary = false;
	export let isFrameSecondary = false;
	export let isSidebarSecondary = false;
</script>

<article class:isFlipped>
	<section><Frame {aspect} isSecondary={isFrameSecondary || isSecondary} /></section>
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
