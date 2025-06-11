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
    revealOnScroll();

    // Language toggle logic
    const en = document.getElementById("english-content");
    const zh = document.getElementById("chinese-content");
    const btn = document.getElementById("lang-toggle");

    function setLanguage(lang) {
        if (lang === "zh") {
            en.style.display = "none";
            zh.style.display = "block";
            if (btn) btn.innerText = "Switch to English";
        } else {
            en.style.display = "block";
            zh.style.display = "none";
            if (btn) btn.innerText = "切换到中文";
        }
    }

    // Apply saved language on load
    const savedLang = localStorage.getItem("site-lang") || "en";
    setLanguage(savedLang);

    // When button clicked, toggle language and save
    if (btn) {
        btn.addEventListener("click", function () {
            const currentLang = localStorage.getItem("site-lang") || "en";
            const newLang = currentLang === "en" ? "zh" : "en";
            localStorage.setItem("site-lang", newLang);
            setLanguage(newLang);
        });
    }
});
