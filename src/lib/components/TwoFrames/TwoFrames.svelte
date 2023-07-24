<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect;
	/** @type {boolean | undefined} */
	export let isSecondary;
	/** @type {boolean | undefined} */
	export let isFirstSecondary;
	/** @type {boolean | undefined} */
	export let isSecondSecondary;
</script>

<article>
	<section><Frame {aspect} isSecondary={isFirstSecondary ?? isSecondary} /></section>
	<section><Frame {aspect} isSecondary={isSecondSecondary ?? isSecondary} /></section>
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
