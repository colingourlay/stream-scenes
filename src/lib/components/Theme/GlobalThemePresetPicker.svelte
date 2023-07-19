<script>
	import globalThemePreset from '$lib/stores/globalThemePreset';
	import { PRESETS } from '$lib/utils/theme';
	import Menu from '../Menu/Menu.svelte';

	/**
	 * @typedef MenuItem
	 * @prop {import('$lib/utils/theme').Preset | null} preset
	 */

	/** @type {MenuItem[]} */
	$: items = [{ preset: null }, ...PRESETS.map((preset) => ({ preset }))];
</script>

<Menu>
	{#each items as { preset } (preset)}
		<li>
			<button
				disabled={$globalThemePreset === preset}
				on:click={() => globalThemePreset.set(preset)}
			>
				{#if preset}
					<code>{preset}</code>
				{:else}
					{'None'}
				{/if}
			</button>
		</li>
	{/each}
</Menu>
