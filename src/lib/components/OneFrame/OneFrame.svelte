<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect;
	/** @type {boolean | undefined} */
	export let isSecondary;
</script>

<article><Frame {aspect} {isSecondary} /></article>

<style>
	article {
		margin: 0;
		width: 88.75%;
	}
</style>
