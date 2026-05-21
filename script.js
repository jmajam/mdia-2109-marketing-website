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
const track = document.querySelector(".carousel__track");
let slides = Array.from(document.querySelectorAll(".carousel__slide"));
const prevBtn = document.querySelector(".carousel__nav--prev");
const nextBtn = document.querySelector(".carousel__nav--next");

let index = 0;

// Clone first + last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// clone the first and last slides for infinite scrolling
firstClone.id = "first-clone";
lastClone.id = "last-clone";

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(document.querySelectorAll(".carousel__slide"));

// Set initial position
track.style.transform = `translateX(-${index * 100}%)`;

function moveToIndex() {
    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    if (index >= slides.length - 1) return;
    index++;
    moveToIndex();
});

prevBtn.addEventListener("click", () => {
    if (index <= 0) return;
    index--;
    moveToIndex();
});

track.addEventListener("transitionend", () => {
    if (slides[index].id === "first-clone") {
        track.style.transition = "none";
        index = 1;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (slides[index].id === "last-clone") {
        track.style.transition = "none";
        index = slides.length - 2;
        track.style.transform = `translateX(-${index * 100}%)`;
    }
});
