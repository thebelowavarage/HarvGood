
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".scroll-fade");

    function revealOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});
