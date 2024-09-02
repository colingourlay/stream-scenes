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
	let contentRadiusPx = 0;
	let maskURL = '';

	// TODO: When updating to Svelte 5, remove `use:resize` in favour of `bind:clientWidth` &
	// `bind:clientHeight` which will use `ResizeObserver` instead of an `iframe` ruler.
	/** @type {(entry: ResizeObserverEntry) => void} */
	const onResize = (entry) => {
		const { blockSize, inlineSize } = entry.contentBoxSize[0];

		thicknessPx = Math.round((window.innerWidth / 100) * thicknessVW);
		contentRadiusPx = isCircle ? inlineSize / 2 : thicknessPx;
		maskURL = getMaskURL(thicknessPx, inlineSize, blockSize, contentRadiusPx);
	};

	$: color = `var(--color-${isSecondary ? 'secondary' : 'primary'})`;
</script>

<figure
	use:resize={onResize}
	style={`
		--frame-aspect: ${aspect};
		--frame-thickness: ${thicknessPx}px;
		--frame-image: ${image || `linear-gradient(${color}, ${color})`};
		--frame-mask: url(${maskURL});
		--temp-frame-color: ${color};
		--temp-frame-radius: ${contentRadiusPx + thicknessPx}px;
	`}
/>

<style>
	figure {
		box-sizing: content-box;
		aspect-ratio: var(--frame-aspect);
		margin: calc(var(--frame-thickness) * -1);
		border: transparent solid var(--frame-thickness);
		width: 100%;
		background-image: var(--frame-image);
		background-origin: border-box;
		mask-image: var(--frame-mask);
	}

	@supports not (mask-image: none) {
		figure {
			background-origin: unset;
			background-image: unset;
			border: var(--temp-frame-color) solid var(--frame-thickness);
			border-radius: var(--temp-frame-radius);
		}
	}
</style>
