<script module>
	/** @typedef {import('svelte').Snippet} Snippet */

	/**
	 * @typedef {Object} MenuProps
	 * @property {Snippet} [children]
	 */
</script>

<script>
	/** @type {MenuProps} */
	let { children } = $props();
</script>

<menu>
	{@render children?.()}
</menu>

<style>
	menu {
		padding: 0;
	}

	menu > :global(li) {
		margin-bottom: 0.25rem;
		list-style: none;
	}

	menu > :global(li) > :global(*) {
		width: 100%;
	}
</style>
