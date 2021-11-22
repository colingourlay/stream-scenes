<script lang="ts">
	type Particle = {
		distance: number;
		sizeVmin: number;
		color: string;
		topPct: number;
		leftPct: number;
		animationDurationSeconds: number;
		animationDelaySeconds: number;
		transformOriginXVh: number;
		transformOriginYVh: number;
	};

	const COLORS = [
		'hsl(var(--theme-hue-primary, 225) 40% 55%)',
		'hsl(var(--theme-hue-primary, 225) 45% 50%)',
		'hsl(var(--theme-hue-primary, 225) 55% 45%)',
		'hsl(var(--theme-hue-primary, 225) 60% 35%)'
	];
	const NUM_PARTICLES = 32;

	const particles: Particle[] = Array.from({ length: NUM_PARTICLES }, (_, index) => {
		const distance = Math.max(0.2, Math.random());
		const animationDurationSeconds = Math.floor(8 + 8 / distance);

		return {
			distance,
			sizeVmin: distance * 4,
			color: COLORS[index % COLORS.length],
			topPct: Math.floor(Math.random() * 100),
			leftPct: Math.floor(Math.random() * 100),
			animationDurationSeconds,
			animationDelaySeconds: Math.floor(Math.random() * -animationDurationSeconds),
			transformOriginXVh: Math.floor(Math.random() * 50) - 25,
			transformOriginYVh: Math.floor(Math.random() * 50) - 25
		};
	});

	particles.sort((a, b) => a.sizeVmin - b.sizeVmin);
</script>

<div>
	{#each particles as particle}
		<span
			style={`
        --size: ${particle.sizeVmin}vmin;
        --color: ${particle.color};
        top: ${particle.topPct}%;
        left: ${particle.leftPct}%;
        animation-duration: ${particle.animationDurationSeconds}s;
        animation-delay: ${particle.animationDelaySeconds}s;
        transform-origin: ${particle.transformOriginXVh}vh ${particle.transformOriginYVh}vh;
    `}
		/>
	{/each}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}

	@keyframes move {
		100% {
			transform: rotate(360deg);
		}
	}

	span {
		position: absolute;
		border-radius: 50%;
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		filter: blur(calc(var(--size) / 2)) drop-shadow(0 0 calc(var(--size) * 2) var(--color));
		backface-visibility: hidden;
		animation-name: move;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
</style>
