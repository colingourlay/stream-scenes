<script module>
	import { resize } from 'svelte-resize-observer-action';
	import { getMaskURL } from './utils';

	/**
	 * @typedef {Object} FrameProps
	 * @property {number} [thicknessVW]
	 * @property {boolean} [isCircle]
	 * @property {number} [aspect]
	 * @property {string} [image]
	 * @property {boolean} [isSecondary]
	 */
</script>

<script>
	/** @type {FrameProps} */
	let {
		thicknessVW = 0.5,
		isCircle = false,
		aspect = isCircle ? 1 : 16 / 9,
		image,
		isSecondary = false
	} = $props();

	let thicknessPx = $state(0);
	let contentRadiusPx = $state(0);
	let maskURL = $state('');

	// TODO: When updating to Svelte 5, remove `use:resize` in favour of `bind:clientWidth` &
	// `bind:clientHeight` which will use `ResizeObserver` instead of an `iframe` ruler.
	/** @type {(entry: ResizeObserverEntry) => void} */
	const onResize = (entry) => {
		const { blockSize, inlineSize } = entry.contentBoxSize[0];

		thicknessPx = Math.round((window.innerWidth / 100) * thicknessVW);
		contentRadiusPx = isCircle ? inlineSize / 2 : thicknessPx;
		maskURL = getMaskURL(thicknessPx, inlineSize, blockSize, contentRadiusPx);
	};

	let color = $derived(`var(--color-${isSecondary ? 'secondary' : 'primary'})`);
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
></figure>

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
