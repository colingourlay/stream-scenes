<script lang="ts">
	let windowInnerHeight: number;
</script>

<svelte:window bind:innerHeight={windowInnerHeight} />

<main style={`--window-inner-height:${windowInnerHeight}px`}>
	<slot />
</main>

<style>
	:global(html) {
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		min-height: var(--window-inner-height, 100vh);
		background-color: var(--color-background, rgba(0, 0, 0, 0));
		color: var(--color-text, rgba(0, 0, 0, 1));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
