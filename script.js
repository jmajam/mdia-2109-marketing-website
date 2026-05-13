// Simple button feedback
document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("Button clicked:", btn.textContent);
	});
});

document.querySelectorAll(".btn:not(.disabled-btn)").forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("Clicked:", btn.textContent);
	});
});
