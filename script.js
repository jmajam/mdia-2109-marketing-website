// Simple button feedback
document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("Button clicked:", btn.textContent);
	});
});
