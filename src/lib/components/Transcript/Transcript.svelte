<script lang="ts">
	import transcript from '$stores/transcript';
</script>

<article>
	{#if $transcript}
		{#each $transcript.recentLines as line}
			<p>{line}</p>
		{/each}
		{#if $transcript.interimLine}
			<p class="interim">{$transcript.interimLine}</p>
		{/if}
	{/if}
</article>

<style>
	article {
		width: 95vw;
		height: calc(100vh - 5vw);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	p {
		margin: 2.5vw 0 0;
		font-size: 4vw;
	}

	.interim {
		font-style: italic;
	}
</style>
