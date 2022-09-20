<script lang="ts">
	let windowInnerHeight: number;
	let windowInnerWidth: number;
</script>

<svelte:window bind:innerHeight={windowInnerHeight} bind:innerWidth={windowInnerWidth} />

<main style={`--canvas-height:${windowInnerHeight}px;--canvas-width:${windowInnerWidth}px`}>
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
		--hue-secondary: var(--theme-hue-secondary, var(--hue-primary));
		--saturation-secondary: var(--theme-saturation-secondary, var(--saturation-primary));
		--lightness-secondary: var(--theme-lightness-secondary, var(--lightness-primary));
		--alpha-secondary: var(--theme-alpha-secondary, var(--alpha-primary));
		--color-secondary: var(
			--theme-color-secondary,
			hsl(
				var(--hue-secondary) var(--saturation-secondary) var(--lightness-primary) /
					var(--alpha-secondary)
			)
		);
		overflow: hidden;
		background-color: var(--color-background, rgba(0, 0, 0, 0));
		color: var(--color-text, rgba(0, 0, 0, 1));
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		min-height: var(--canvas-height, 100vh);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
