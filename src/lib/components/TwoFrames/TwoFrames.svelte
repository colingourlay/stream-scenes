<script lang="ts">
	import Frame from '../Frame/Frame.svelte';

	export let aspect: number | undefined = undefined;
	export let isSecondary = false;
	export let isFirstSecondary = isSecondary;
	export let isSecondSecondary = isSecondary;
</script>

<main>
	<article><Frame {aspect} isSecondary={isFirstSecondary} /></article>
	<article><Frame {aspect} isSecondary={isSecondSecondary} /></article>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		gap: 2.5%;
		justify-content: center;
		align-items: center;
	}

	article {
		width: 46.25%;
	}
</style>
