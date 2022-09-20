<article>
	<figure><div /></figure>
	<aside />
</article>

<style>
	article {
		width: var(--canvas-width);
		height: var(--canvas-height);
		display: flex;
	}
	figure {
		align-self: center;
		margin: auto;
		width: 75%;
		height: 73.25%;
		border: calc(var(--canvas-width) * 0.0025) solid var(--color-secondary);
		border-radius: calc(var(--canvas-width) * 0.00667);
	}
	div {
		width: 100%;
		height: 100%;
		border-radius: calc(var(--canvas-width) * 0.005);
		box-shadow: 0 0 0 calc(var(--canvas-width) * 0.0025) var(--color-secondary);
	}
	aside {
		align-self: stretch;
		width: 20%;
		background-color: var(--color-primary);
	}
</style>
