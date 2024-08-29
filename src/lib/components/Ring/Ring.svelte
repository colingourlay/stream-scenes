<script>
	import Frame from '../Frame/Frame.svelte';

	/** @type {boolean | undefined }*/
	export let isSecondary;
	/** @type {string | undefined} */
	export let image = undefined;
</script>

<Frame isCircle={true} {image} {isSecondary} />
