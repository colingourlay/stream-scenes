<script module>
	import { browser } from '$app/environment';
	import EnvironmentStyles from '$lib/components/EnvironmentStyles/EnvironmentStyles.svelte';
	import { install as installOBS } from '$lib/utils/obs';
	import './styles.css';

	/** @typedef {import('svelte').Snippet} Snippet */

	/**
	 * @typedef {Object} LayoutProps
	 * @property {Snippet} [children]
	 */

	if (browser) {
		installOBS();
	}
</script>

<script>
	/** @type {LayoutProps} */
	let { children } = $props();
</script>

<EnvironmentStyles>
	<main>
		{@render children?.()}
	</main>
</EnvironmentStyles>

<style>
	main {
		width: var(--viewport-width);
		height: var(--viewport-height);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
