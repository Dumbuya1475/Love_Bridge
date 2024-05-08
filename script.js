function smoothScroll(targetId) {
	const targetElement = document.getElementById(targetId);
	const targetPosition = targetElement.offsetTop;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	const duration = 1000; // Duration in milliseconds

	let start = null;
	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
		if (progress < duration) requestAnimationFrame(step);
	}

	function easeInOutCubic(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t * t + b;
		t -= 2;
		return c / 2 * (t * t * t + 2) + b;
	}

	requestAnimationFrame(step);
}

// ============================Function for navigation panel============================
function toggleNavPanel() {
	const navPanel = document.querySelector('.nav-panel');
	const body = document.body;

	// Toggle the class to slide the panel in or out
	navPanel.style.top = navPanel.style.right === '0px' ? '-400px' : '90px	';
	// navPanel.style.top = navPanel.style.left == '50px';

	// Toggle dark mode for the entire page when the panel is open
	// body.classList.toggle('dark-mode');
}

// function toggleNavPanel() {
	// const navContent = document.querySelector('#sideNav');
	// navContent.classList.toggle('nav-open');
// }
