interface ParticleElement extends HTMLElement {
	animate: (
		keyframes: Keyframe[],
		options?: KeyframeAnimationOptions,
	) => Animation;
}

interface CustomMouseEvent extends MouseEvent {
	target: HTMLElement & {
		dataset: {
			type?: 'shadow' | 'line' | string;
		};
	};
}

export function pop(e: CustomMouseEvent) {
	let amount = 30;
	switch (e.target?.dataset.type) {
		case 'shadow':
		case 'line':
			amount = 60;
			break;
	}

	if (e.clientX === 0 && e.clientY === 0) {
		const bbox = e.target?.getBoundingClientRect();
		const x = bbox.left + bbox.width / 2;
		const y = bbox.top + bbox.height / 2;
		for (let i = 0; i < 30; i++) {
			createParticle(x, y, e.target?.dataset.type);
		}
	} else {
		for (let i = 0; i < amount; i++) {
			createParticle(e.clientX, e.clientY, e.target?.dataset.type);
		}
	}
}

function createParticle(x: number, y: number, type?: string) {
	const particle = document.createElement('particle') as ParticleElement;
	document.body.appendChild(particle);

	let width = Math.floor(Math.random() * 30 + 8);
	let height = width;
	const destinationX = (Math.random() - 0.5) * 300;
	const destinationY = (Math.random() - 0.5) * 300;
	const rotation = Math.random() * 520;
	const delay = Math.random() * 200;

	switch (type) {
		case 'shadow':
			const color = `hsl(${Math.random() * 50 + 100}, 100%, 50%)`;
			particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
			particle.style.background = color;
			particle.style.borderRadius = '50%';
			width = height = Math.random() * 5 + 4;
			break;
	}

	particle.style.width = `${width}px`;
	particle.style.height = `${height}px`;

	const animation = particle.animate(
		[
			{
				transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
				opacity: 1,
			},
			{
				transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
				opacity: 0,
			},
		],
		{
			duration: Math.random() * 1000 + 5000,
			easing: 'cubic-bezier(0, .9, .57, 1)',
			delay: delay,
		},
	);

	animation.onfinish = () => {
		particle.remove();
	};
}

document.querySelectorAll('button').forEach((button) => {
	button.addEventListener('click', pop as EventListener);
});
