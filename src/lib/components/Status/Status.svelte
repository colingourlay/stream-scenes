<script>
	/** @type {string} */
	export let chars;
</script>

<p class:long={chars.length >= 10}>
	{#each chars.toUpperCase().split('') as char}
		<span>{char}</span>
	{/each}
</p>

<style>
	p {
		margin: 0;
		font-size: 4rem;
		font-weight: 200;
	}

	.long {
		font-size: 3rem;
	}

	span {
		display: inline-block;
		padding: 0.6rem;
		animation: 5s ease infinite chars;
	}

	span:nth-child(2) {
		animation-delay: 0.125s;
	}

	span:nth-child(3) {
		animation-delay: 0.25s;
	}

	span:nth-child(4) {
		animation-delay: 0.375s;
	}

	span:nth-child(5) {
		animation-delay: 0.5s;
	}

	span:nth-child(6) {
		animation-delay: 0.625s;
	}

	span:nth-child(7) {
		animation-delay: 0.75s;
	}

	span:nth-child(8) {
		animation-delay: 0.875s;
	}

	span:nth-child(9) {
		animation-delay: 1s;
	}

	span:nth-child(10) {
		animation-delay: 1.125s;
	}

	span:nth-child(11) {
		animation-delay: 1.25s;
	}

	span:nth-child(12) {
		animation-delay: 1.375s;
	}

	span:nth-child(13) {
		animation-delay: 1.5s;
	}

	span:nth-child(14) {
		animation-delay: 1.625s;
	}

	span:nth-child(15) {
		animation-delay: 1.75s;
	}

	span:nth-child(16) {
		animation-delay: 1.875s;
	}

	span:nth-child(17) {
		animation-delay: 2s;
	}

	@keyframes chars {
		25%,
		75% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
	}
</style>
