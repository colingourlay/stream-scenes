<script lang="ts">
	export let isSecondary = false;
</script>

<div style={`--backdrop-color: var(--color-${isSecondary ? 'secondary' : 'primary'});`}>
	<slot />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		background-color: var(--backdrop-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
