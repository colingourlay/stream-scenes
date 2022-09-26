<script lang="ts">
	import Backdrop from '../Backdrop/Backdrop.svelte';
	import Frame from '../Frame/Frame.svelte';

	export let aspect: number | undefined = undefined;
	export let isFlipped = false;
	export let isSecondary = false;
	export let isFrameSecondary = false;
	export let isSidebarSecondary = false;
</script>

<main class:isFlipped>
	<article><Frame {aspect} isSecondary={isFrameSecondary || isSecondary} /></article>
	<aside><Backdrop isSecondary={isSidebarSecondary || isSecondary} /></aside>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.isFlipped {
		flex-direction: row-reverse;
	}

	article {
		margin: auto;
		width: 75%;
	}

	aside {
		align-self: stretch;
		width: 20%;
	}
</style>
