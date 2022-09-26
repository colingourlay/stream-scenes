<script lang="ts">
	export let aspect = 16 / 9;
	export let isSecondary = false;
</script>

<figure
	style={`--frame-aspect: ${aspect}; --frame-color: var(--color-${
		isSecondary ? 'secondary' : 'primary'
	});`}
/>

<style>
	figure {
		margin: 0;
		outline: var(--frame-color) solid calc(var(--viewport-width) * 0.005);
		border-radius: calc(var(--viewport-width) * 0.005);
		padding-bottom: calc(100% / var(--frame-aspect));
		width: 100%;
		height: 0;
	}
</style>
