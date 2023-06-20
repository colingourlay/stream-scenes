<script lang="ts">
	import { onMount } from 'svelte';
	import EnvironmentStyles from '$lib/components/EnvironmentStyles/EnvironmentStyles.svelte';
	import { install as installOBS } from '$lib/utils/obs';
	import '../app.css';

	onMount(() => {
		installOBS();
	});
</script>

<EnvironmentStyles>
	<slot />
</EnvironmentStyles>
