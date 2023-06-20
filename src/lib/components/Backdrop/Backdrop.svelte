<script lang="ts">
	export let gradient: string | undefined = undefined;
	export let isSecondary = false;

	$: colorA = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
	$: colorB = `var(--color-${isSecondary ? 'primary' : 'secondary'})`;
	$: image =
		gradient === 'linear'
			? `linear-gradient(var(--angle-linear-gradient), ${colorB}, transparent)`
			: gradient === 'radial'
			? `radial-gradient(circle, ${colorB}, transparent)`
			: 'none';
</script>

<div style={`--backdrop-color: ${colorA}; --backdrop-image: ${image};`}>
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
