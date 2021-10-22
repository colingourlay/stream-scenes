<script lang="ts">
	// const COLORS = ['#583C87', '#E45A84', '#FFACAC'];
	const COLORS = [
		'hsl(270deg 40% 55%)',
		'hsl(270deg 45% 50%)',
		'hsl(270deg 55% 45%)',
		'hsl(270deg 60% 35%)'
	];
	const ANIMATION_DURATION_S = 6;
	const PARTICLE_SIZE_VMIN = 20;
	const NUM_PARTICLES = 15;

	const particles = Array.from({ length: NUM_PARTICLES }, (_, index) => ({
		color: COLORS[index % COLORS.length],
		top: `${Math.floor(Math.random() * 100)}%`,
		left: `${Math.floor(Math.random() * 100)}%`,
		animationDuration: `${Math.floor(Math.random() * ANIMATION_DURATION_S) + 10}s`,
		animationDelay: `${Math.floor(Math.random() * -(10 + ANIMATION_DURATION_S))}s`,
		transformOrigin: `${Math.floor(Math.random() * 50) - 25}vh ${
			Math.floor(Math.random() * 50) - 25
		}vh`,
		boxShadow: `${PARTICLE_SIZE_VMIN * 2 * (Math.random() > 0.5 ? -1 : 1)}vmin 0 ${Math.floor(
			(Math.random() + 0.5) * PARTICLE_SIZE_VMIN * 0.5
		)}vmin currentColor`
	}));
</script>

<article>
	{#each particles as particle}
		<span
			style={`
        color: ${particle.color};
        top: ${particle.top};
        left: ${particle.left};
        animation-duration: ${particle.animationDuration};
        animation-delay: ${particle.animationDelay};
        transform-origin: ${particle.transformOrigin};
        box-shadow: ${particle.boxShadow};
    `}
		/>
	{/each}
</article>

<style>
	@keyframes move {
		100% {
			transform: rotate(360deg);
		}
	}

	article {
		width: 100vw;
		height: 100vh;
	}

	span {
		position: absolute;
		border-radius: 50%;
		width: 20vmin;
		height: 20vmin;
		backface-visibility: hidden;
		animation-name: move;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>
