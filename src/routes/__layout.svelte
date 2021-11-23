<script lang="ts">
	let windowInnerHeight: number;
	let windowInnerWidth: number;
</script>

<svelte:window bind:innerHeight={windowInnerHeight} bind:innerWidth={windowInnerWidth} />

<main style={`--canvas-height:${windowInnerHeight}px;--canvas-width:${windowInnerHeight}px`}>
	<slot />
</main>

<style>
	:global(html) {
		--hue-primary: var(--theme-hue-primary, 225);
		--saturation-primary: var(--theme-saturation-primary, 50%);
		--lightness-primary: var(--theme-lightness-primary, 40%);
		--alpha-primary: var(--theme-alpha-primary, 1);
		--color-primary: var(
			--theme-color-primary,
			hsl(
				var(--hue-primary) var(--saturation-primary) var(--lightness-primary) / var(--alpha-primary)
			)
		);
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		min-height: var(--canvas-height, 100vh);
		background-color: var(--color-background, rgba(0, 0, 0, 0));
		color: var(--color-text, rgba(0, 0, 0, 1));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
