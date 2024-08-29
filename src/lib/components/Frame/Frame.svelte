<script>
	import { resize } from 'svelte-resize-observer-action';
	import { getMaskURL } from './utils';

	export let thicknessVW = 0.5;
	export let isCircle = false;
	export let aspect = isCircle ? 1 : 16 / 9;
	/** @type {string | undefined} */
	export let image = undefined;
	export let isSecondary = false;

	let thicknessPx = 0;
	let frameRadiusPx = 0;
	let maskURL = '';

	// TODO: When updating to Svelte 5, remove `use:resize` in favour of `bind:clientWidth` &
	// `bind:clientHeight` which will use `ResizeObserver` instead of an `iframe` ruler.
	/** @type {(entry: ResizeObserverEntry) => void} */
	const onResize = (entry) => {
		thicknessPx = Math.round((window.innerWidth / 100) * thicknessVW);

		const { blockSize, inlineSize } = entry.contentBoxSize[0];
		const contentRadiusPx = isCircle ? inlineSize / 2 : thicknessPx;
		const frameWidthPx = inlineSize + 2 * thicknessPx;
		const frameHeightPx = blockSize + 2 * thicknessPx;

		frameRadiusPx = isCircle ? frameWidthPx / 2 : thicknessPx * 2;
		maskURL = getMaskURL(
			thicknessPx,
			frameWidthPx,
			frameHeightPx,
			inlineSize,
			blockSize,
			contentRadiusPx
		);
	};

	$: color = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
</script>

<figure
	use:resize={onResize}
	style={`
		--frame-aspect: ${aspect};
		--frame-thickness: ${thicknessPx}px;
		--frame-radius: ${frameRadiusPx}px;
		--frame-image: ${image || `linear-gradient(${color}, ${color})`};
		--frame-mask: url(${maskURL});
		--temp-frame-color: ${color};
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
		background-origin: border-box;
		background-image: var(--frame-image);
		mask-image: var(--frame-mask);
	}

	@supports not (mask-image: none) {
		figure {
			border: var(--temp-frame-color) solid var(--frame-thickness);
			background-origin: unset;
			background-image: unset;
		}
	}
</style>
