<script lang="ts">
	import Frame from '../Frame/Frame.svelte';

	export let aspect: number | undefined = undefined;
	export let isSecondary = false;
	export let isFirstSecondary = isSecondary;
	export let isSecondSecondary = isSecondary;
	export let isThirdSecondary = isSecondary;
</script>

<main>
	<article><Frame {aspect} isSecondary={isFirstSecondary} /></article>
	<article><Frame {aspect} isSecondary={isSecondSecondary} /></article>
	<article><Frame {aspect} isSecondary={isThirdSecondary} /></article>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0 2.5%;
		justify-content: center;
		align-content: center;
	}

	article {
		width: 37.25%;
	}

	article:last-child {
		margin-top: 2.5%;
	}
</style>
