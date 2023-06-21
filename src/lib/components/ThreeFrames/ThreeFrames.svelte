<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {number | undefined} */
	export let aspect = undefined;
	export let isSecondary = false;
	export let isFirstSecondary = isSecondary;
	export let isSecondSecondary = isSecondary;
	export let isThirdSecondary = isSecondary;
</script>

<article>
	<section><Frame {aspect} isSecondary={isFirstSecondary} /></section>
	<section><Frame {aspect} isSecondary={isSecondSecondary} /></section>
	<section><Frame {aspect} isSecondary={isThirdSecondary} /></section>
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
