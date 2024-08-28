<script>
	export let thicknessVW = 0.5;
	export let isCircle = false;
	export let aspect = isCircle ? 1 : 16 / 9;
	/** @type {string | undefined} */
	export let image = undefined;
	export let isSecondary = false;

	let wW = 0;
	let oW = 0;
	let oH = 0;
	let cW = 0;
	let cH = 0;

	$: thickness = `${thicknessVW}vw`;
	$: radius = isCircle ? '50%' : `${thicknessVW * 2}vw`;
	$: color = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
	$: maskURL = `data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${oW}" height="${oH}" viewBox="0 0 ${oW} ${oH}"><mask id="x"><rect x="0" y="0" width="${oW}" height="${oH}" fill="#fff" />${
			isCircle
				? `<circle cx="${oW / 2}" cy="${oH / 2}" r="${Math.min(cW, cH) / 2}" />`
				: `<rect x="${(oW - cW) / 2}" y="${(oH - cH) / 2}" width="${cW}" height="${cH}" rx="${
						(wW / 100) * thicknessVW
				  }" />`
		}</mask></svg>`
	)}#x`;
</script>

<svelte:window bind:innerWidth={wW} />

<figure
	bind:offsetWidth={oW}
	bind:offsetHeight={oH}
	bind:clientWidth={cW}
	bind:clientHeight={cH}
	style={`
		--frame-aspect: ${aspect};
		--frame-thickness: ${thickness};
		--frame-radius: ${radius};
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
