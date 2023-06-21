<script>
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
		outline: var(--frame-color) solid 0.2rem;
		border-radius: 0.2rem;
		padding-bottom: calc(100% / var(--frame-aspect));
		width: 100%;
		height: 0;
	}
</style>
