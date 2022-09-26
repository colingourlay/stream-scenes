<script lang="ts">
	import Frame from '../Frame/Frame.svelte';

	export let aspect: number | undefined = undefined;
	export let isSecondary = false;
	export let isFirstSecondary = isSecondary;
	export let isSecondSecondary = isSecondary;
</script>

<article>
	<section><Frame {aspect} isSecondary={isFirstSecondary} /></section>
	<section><Frame {aspect} isSecondary={isSecondSecondary} /></section>
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
