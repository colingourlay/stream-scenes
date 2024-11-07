<script module>
	/** @typedef {import('svelte').Snippet} Snippet */

	/**
	 * @typedef {Object} BackdropProps
	 * @property {string} [image]
	 * @property {boolean} [isSecondary]
	 * @property {Snippet} [children]
	 */
</script>

<script>
	/** @type {BackdropProps} */
	let { image, isSecondary = false, children } = $props();

	let color = $derived(
		image !== undefined ? 'transparent' : `var(--color-${isSecondary ? 'secondary' : 'primary'})`
	);
</script>

<div style={`--backdrop-color: ${color}; --backdrop-image: ${image ?? 'none'};`}>
	{@render children?.()}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		background-color: var(--backdrop-color);
		background-image: var(--backdrop-image);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
