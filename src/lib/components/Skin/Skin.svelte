<script lang="ts">
	import { browser } from '$app/env';
	import { SCHEMES } from './schemes';

	export let scheme: string | undefined;
	export let theme: Record<string, string> = {};

	let viewportHeight = 0;
	let viewportWidth = 0;

	$: if (browser) {
		// Viewport
		document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
		document.documentElement.style.setProperty('--viewport-width', `${viewportWidth}px`);
		if (window.obsstudio) {
			document.documentElement.style.setProperty('--viewport-background-alpha', '0');
		}

		// Theming
		Object.entries({
			...((scheme && SCHEMES[scheme]) || {}),
			...theme
		}).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--theme-${key}`, value);
		});
	}
</script>

<svelte:window bind:innerHeight={viewportHeight} bind:innerWidth={viewportWidth} />

<slot />

<style>
	:root {
		--hue-text: var(--theme-hue-text, 0);
		--hue-primary: var(--theme-hue-primary, 120);
		--hue-secondary: var(--theme-hue-secondary, 240);
		--saturation-text: var(--theme-saturation-text, 100%);
		--saturation-primary: var(--theme-saturation-primary, 50%);
		--saturation-secondary: var(--theme-saturation-secondary, 50%);
		--lightness-text: var(--theme-lightness-text, 100%);
		--lightness-primary: var(--theme-lightness-primary, 50%);
		--lightness-secondary: var(--theme-lightness-secondary, 50%);
		--alpha-text: var(--theme-alpha-text, 1);
		--alpha-primary: var(--theme-alpha-primary, 1);
		--alpha-secondary: var(--theme-alpha-secondary, 1);
		--color-text: var(
			--theme-color-text,
			hsl(var(--hue-text) var(--saturation-text) var(--lightness-text) / var(--alpha-text))
		);
		--color-primary: var(
			--theme-color-primary,
			hsl(
				var(--hue-primary) var(--saturation-primary) var(--lightness-primary) / var(--alpha-primary)
			)
		);
		--color-secondary: var(
			--theme-color-secondary,
			hsl(
				var(--hue-secondary) var(--saturation-secondary) var(--lightness-primary) /
					var(--alpha-secondary)
			)
		);
		--font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(html) {
		overflow: hidden;
		background-color: hsla(0 0% 0% / var(--viewport-background-alpha, 1));
		color: var(--color-text);
		font-family: var(--font-family-sans);
	}

	:global(body) {
		margin: 0;
	}

	:global(#svelte) {
		width: var(--viewport-width, 100vw);
		height: var(--viewport-height, 100vh);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	:global(a):is(:link, :visited) {
		color: var(--color-text);
	}

	:global(button) {
		appearance: none;
		border: currentColor 0.125rem solid;
		padding: 0 1rem;
		background-color: hsla(0 0% 0% / 0);
		color: var(--color-text);
		font-size: 1.25rem;
		letter-spacing: 0.1ch;
		cursor: pointer;
	}

	:global(button):is(:focus, :hover) {
		background-color: hsla(0 0% 0% / 0.125);
		outline: none;
	}

	:global(button):is(:active) {
		background-color: hsla(0 0% 0% / 0.25);
	}
</style>
