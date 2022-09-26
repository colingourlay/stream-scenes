<script lang="ts">
	import Frame from '../Frame/Frame.svelte';

	export let aspect: number | undefined = undefined;
	export let isSecondary = false;
</script>

<article><Frame {aspect} {isSecondary} /></article>

<style>
	article {
		margin: 0;
		width: 88.75%;
	}
</style>
