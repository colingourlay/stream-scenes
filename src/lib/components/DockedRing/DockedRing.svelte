<script module>
	import Ring from '../Ring/Ring.svelte';

	/** @typedef {import('$lib/components/Ring/Ring.svelte').RingProps} RingProps */

	/**
	 * @typedef {Object} DockedRingProps
	 * @property {string} [position]
	 * @property {RingProps["image"]} image
	 * @property {RingProps["isSecondary"]} isSecondary
	 */
</script>

<script>
	/** @type {DockedRingProps} */
	let { position = 'bottom-right', image, isSecondary } = $props();

	let blockAlignment = $derived(
		position.indexOf('top') > -1
			? 'flex-start'
			: position.indexOf('bottom') > -1
				? 'flex-end'
				: 'center'
	);
	let inlineAlignment = $derived(
		position.indexOf('left') > -1
			? 'flex-start'
			: position.indexOf('right') > -1
				? 'flex-end'
				: 'center'
	);
</script>

<article
	style={`--ring-block-alignment: ${blockAlignment}; --ring-inline-alignment: ${inlineAlignment};`}
>
	<aside>
		<Ring {image} {isSecondary} />
	</aside>
</article>

<style>
	article {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: var(--ring-block-alignment);
		justify-content: var(--ring-inline-alignment);
	}

	aside {
		width: 15%;
		margin: 2.5%;
	}
</style>
