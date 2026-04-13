document.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll(".trigger-area");

    areas.forEach((area) => {
        const type = area.dataset.trigger;

        if (type === "fog") {
            area.addEventListener("mouseenter", () => {
                area.classList.add("fog-active");
            });
            area.addEventListener("mouseleave", () => {
                area.classList.remove("fog-active");
            });
        }

        if (type === "glow") {
            area.addEventListener("click", () => {
                area.classList.toggle("glow-active");
            });
        }
    });

    window.addEventListener("scroll", () => {
        areas.forEach((area) => {
            const rect = area.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                area.classList.add("scroll-active");
            } else {
                area.classList.remove("scroll-active");
            }
        });
    });
});
