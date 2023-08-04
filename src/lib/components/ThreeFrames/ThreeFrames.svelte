<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect;
	/** @type {string | undefined} */
	export let image;
	/** @type {boolean | undefined} */
	export let isSecondary;
	/** @type {boolean | undefined} */
	export let isFirstSecondary;
	/** @type {boolean | undefined} */
	export let isSecondSecondary;
	/** @type {boolean | undefined} */
	export let isThirdSecondary;
</script>

<article>
	<section><Frame {aspect} {image} isSecondary={isFirstSecondary ?? isSecondary} /></section>
	<section><Frame {aspect} {image} isSecondary={isSecondSecondary ?? isSecondary} /></section>
	<section><Frame {aspect} {image} isSecondary={isThirdSecondary ?? isSecondary} /></section>
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
