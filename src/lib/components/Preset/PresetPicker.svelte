<script module>
	import preset from '$lib/stores/preset';
	import { PRESETS } from '$lib/utils/preset';
	import Menu from '../Menu/Menu.svelte';

	/** @typedef {import('$lib/utils/preset').Preset} Preset */
</script>

<script>
	/** @type {Array<Preset | null>} */
	let items = $derived([null, ...PRESETS]);
</script>

<Menu>
	{#each items as item}
		<li>
			<button disabled={$preset === item} onclick={() => preset.set(item)}>
				{#if item}
					<code>{item}</code>
				{:else}
					{'None'}
				{/if}
			</button>
		</li>
	{/each}
</Menu>
