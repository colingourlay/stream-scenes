<script>
	export let aspect = 16 / 9;
	export let radius = '0.4rem';
	/** @type {string | undefined} */
	export let image = undefined;
	export let isSecondary = false;

	$: color = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
</script>

<figure
	style={`
		--frame-aspect: ${aspect};
		--frame-radius: ${radius};
		--frame-image: linear-gradient(#000, #000), ${image || `linear-gradient(${color}, ${color})`};
	`}
/>

<style>
	figure {
		box-sizing: content-box;
		aspect-ratio: var(--frame-aspect);
		margin: -0.2rem;
		border: transparent solid 0.2rem;
		border-radius: var(--frame-radius);
		width: 100%;
		height: auto;
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		background-image: var(--frame-image);
	}
</style>
