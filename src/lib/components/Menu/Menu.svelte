<script lang="ts">
	type T = $$Generic;

	export let items: T[];

	interface $$Slots {
		item: { item: T };
	}
</script>

<menu>
	<ul>
		{#each items as item}
			<li>
				<slot name="item" {item} />
			</li>
		{/each}
	</ul>
</menu>

<style>
	menu {
		padding: 0;
	}

	ul {
		padding: 0;
	}

	li {
		margin-bottom: 0.25rem;
		list-style: none;
	}

	li > :global(*) {
		width: 100%;
	}
</style>
