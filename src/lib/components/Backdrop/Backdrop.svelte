<script>
	export let image = 'none';
	export let isSecondary = false;

	$: color =
		image === 'none' ? `var(--color-${isSecondary ? 'secondary' : 'primary'})` : 'transparent';
</script>

<div style={`--backdrop-color: ${color}; --backdrop-image: ${image};`}>
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
