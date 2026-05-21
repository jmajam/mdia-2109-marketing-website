document.addEventListener("DOMContentLoaded", () => {
    const areas = document.querySelectorAll(".trigger-area");

    areas.forEach((area) => {
        const isGlow = area.classList.contains("trigger-area--glow");

        if (isGlow) {
            area.addEventListener("click", () => {
                area.classList.toggle("glow-active");
            });
        }
    });

    window.addEventListener("scroll", () => {
        areas.forEach((area) => {
            const rect = area.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > -10) {
                area.classList.add("scroll-active");
            } else {
                area.classList.remove("scroll-active");
            }
        });
    });
});
