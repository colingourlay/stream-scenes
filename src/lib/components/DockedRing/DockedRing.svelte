<script>
	import Ring from '../Ring/Ring.svelte';

	/**	@type {string} */
	export let position = 'bottom-right';
	/**	@type {boolean | undefined} */
	export let isSecondary;

	let blockAlignment =
		position.indexOf('top') > -1
			? 'flex-start'
			: position.indexOf('bottom') > -1
			? 'flex-end'
			: 'center';
	let inlineAlignment =
		position.indexOf('left') > -1
			? 'flex-start'
			: position.indexOf('right') > -1
			? 'flex-end'
			: 'center';
</script>

<article
	style={`--ring-block-alignment: ${blockAlignment}; --ring-inline-alignment: ${inlineAlignment};`}
>
	<aside>
		<Ring {isSecondary} />
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
