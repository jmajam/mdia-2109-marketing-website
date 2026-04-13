const track = document.querySelector(".carousel__track");
const slides = Array.from(document.querySelectorAll(".carousel__slide"));
const prevBtn = document.querySelector(".carousel__nav--prev");
const nextBtn = document.querySelector(".carousel__nav--next");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});
