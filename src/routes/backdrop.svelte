<script lang="ts">
	import { page } from '$app/stores';
	import Backdrop from '$components/Backdrop/Backdrop.svelte';
</script>

<Backdrop isSecondary={$page.query.has('backdrop-secondary')} />
