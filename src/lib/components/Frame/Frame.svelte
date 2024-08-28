<script>
	export let thicknessVW = 0.5;
	export let isCircle = false;
	export let aspect = isCircle ? 1 : 16 / 9;
	/** @type {string | undefined} */
	export let image = undefined;
	export let isSecondary = false;

	let viewportWidthPx = 0;
	let contentWidthPx = 0;

	$: thicknessPx = Math.round((viewportWidthPx / 100) * thicknessVW);
	$: contentHeightPx = Math.round(contentWidthPx / aspect);
	$: contentRadiusPx = isCircle ? contentWidthPx / 2 : thicknessPx;
	$: frameWidthPx = contentWidthPx + 2 * thicknessPx;
	$: frameHeightPx = contentHeightPx + 2 * thicknessPx;
	$: frameRadiusPx = isCircle ? frameWidthPx / 2 : thicknessPx * 2;
	$: color = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
	$: maskURL = `data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg"><mask id="x"><rect x="0" y="0" width="${frameWidthPx}" height="${frameHeightPx}" fill="#fff" /><rect x="${thicknessPx}" y="${thicknessPx}" width="${contentWidthPx}" height="${contentHeightPx}" rx="${contentRadiusPx}" /></mask></svg>`
	)}#x`;
</script>

<svelte:window bind:innerWidth={viewportWidthPx} />

<figure
	bind:clientWidth={contentWidthPx}
	style={`
		--frame-aspect: ${aspect};
		--frame-thickness: ${thicknessPx}px;
		--frame-radius: ${frameRadiusPx}px;
		--frame-image: ${image || `linear-gradient(${color}, ${color})`};
		--frame-mask: url(${maskURL});
	`}
/>

<style>
	figure {
		box-sizing: content-box;
		aspect-ratio: var(--frame-aspect);
		margin: calc(var(--frame-thickness) * -1);
		border: transparent solid var(--frame-thickness);
		border-radius: var(--frame-radius);
		width: 100%;
		height: auto;
		background-clip: border-box;
		background-origin: border-box;
		background-image: var(--frame-image);
		-webkit-mask-image: var(--frame-mask);
		mask-image: var(--frame-mask);
	}
</style>
