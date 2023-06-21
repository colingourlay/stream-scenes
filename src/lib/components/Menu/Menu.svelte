<menu>
	<slot />
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
