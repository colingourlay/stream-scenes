<script>
	/** @type {string | undefined} */
	export let image = undefined;
	export let isSecondary = false;

	$: color =
		image !== undefined ? 'transparent' : `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
</script>

<div style={`--backdrop-color: ${color}; --backdrop-image: ${image ?? 'none'};`}>
	<slot />
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
