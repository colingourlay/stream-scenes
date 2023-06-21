<script>
	import { browser } from '$app/environment';
	import EnvironmentStyles from '$lib/components/EnvironmentStyles/EnvironmentStyles.svelte';
	import { install as installOBS } from '$lib/utils/obs';
	import './styles.css';

	if (browser) {
		installOBS();
	}
</script>

<EnvironmentStyles>
	<main>
		<slot />
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
