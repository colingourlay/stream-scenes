<script>
	import Frame from '../Frame/Frame.svelte';

	export let isSecondary = false;
</script>

<Frame aspect={1} radius={'50%'} {isSecondary} />
