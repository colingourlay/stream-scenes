<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {boolean | undefined }*/
	export let isSecondary;
</script>

<Frame aspect={1} radius={'50%'} {isSecondary} />
