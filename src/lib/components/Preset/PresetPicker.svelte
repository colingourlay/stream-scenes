<script>
	import preset from '$lib/stores/preset';
	import { PRESETS } from '$lib/utils/preset';
	import Menu from '../Menu/Menu.svelte';

	/** @type {Array<import('$lib/utils/preset').Preset | null>} */
	$: items = [null, ...PRESETS];
</script>

<Menu>
	{#each items as item}
		<li>
			<button disabled={$preset === item} on:click={() => preset.set(item)}>
				{#if item}
					<code>{item}</code>
				{:else}
					{'None'}
				{/if}
			</button>
		</li>
	{/each}
</Menu>
