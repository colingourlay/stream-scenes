<script module>
	/* eslint svelte/no-at-html-tags: "off" */

	import { page } from '$app/stores';
	import preset from '$lib/stores/preset';
	import { getThemeFromPreset } from '$lib/utils/preset';
	import {
		DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE,
		applyTheme,
		getThemeFromSearchParams
	} from '$lib/utils/theme';
	import { applyViewport } from '$lib/utils/viewport';

	/** @typedef {import('svelte').Snippet} Snippet */

	/**
	 * @typedef {Object} EnvironmentStylesProps
	 * @property {Snippet} [children]
	 */
</script>

<script>
	/** @type {EnvironmentStylesProps} */
	let { children } = $props();

	let viewportHeight = $state(0);
	let viewportWidth = $state(0);

	$effect.pre(() => {
		applyTheme({
			...getThemeFromPreset($page.url.searchParams.get('preset') ?? $preset ?? ''),
			...getThemeFromSearchParams($page.url.searchParams)
		});
	});

	$effect.pre(() => {
		applyViewport(viewportHeight, viewportWidth);
	});
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<svelte:head>
	{@html DEFAULT_THEME_DOCUMENT_ELEMENT_STYLE}
</svelte:head>

{@render children?.()}
