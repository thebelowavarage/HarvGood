document.addEventListener("DOMContentLoaded", function () {
    const en = document.getElementById("english-content");
    const zh = document.getElementById("chinese-content");
    const langEn = document.getElementById("lang-en");
    const langZh = document.getElementById("lang-zh");

    // Header elements
    const siteTitle = document.getElementById("site-title");
    const navHome = document.getElementById("nav-home");
    const navAbout = document.getElementById("nav-about");
    const navProducts = document.getElementById("nav-products");
    const navTransport = document.getElementById("nav-transport");
    const navContact = document.getElementById("nav-contact");
    const heroTitle = document.getElementById("hero-title");
    const heroDesc = document.getElementById("hero-desc");

    function setLanguage(lang) {
        if (lang === "zh") {
            if (en) en.style.display = "none";
            if (zh) zh.style.display = "block";
            if (langEn) langEn.classList.remove("lang-active");
            if (langZh) langZh.classList.add("lang-active");
            if (siteTitle) siteTitle.innerText = "Harvgood 钢铁供应商";
            if (navHome) navHome.innerText = "首页";
            if (navAbout) navAbout.innerText = "关于";
            if (navProducts) navProducts.innerText = "产品";
            if (navTransport) navTransport.innerText = "运输";
            if (navContact) navContact.innerText = "联系";
            if (heroTitle) heroTitle.innerText = "可靠的钢筋供应";
            if (heroDesc) heroDesc.innerText = "为非洲建筑注入坚实力量";
        } else {
            if (en) en.style.display = "block";
            if (zh) zh.style.display = "none";
            if (langEn) langEn.classList.add("lang-active");
            if (langZh) langZh.classList.remove("lang-active");
            if (siteTitle) siteTitle.innerText = "Harvgood Pvt Ltd";
            if (navHome) navHome.innerText = "Home";
            if (navAbout) navAbout.innerText = "About";
            if (navProducts) navProducts.innerText = "Products";
            if (navTransport) navTransport.innerText = "Transportations";
            if (navContact) navContact.innerText = "Contact";
            if (heroTitle) heroTitle.innerText = "Reliable Reinforcement Steel";
            if (heroDesc) heroDesc.innerText = "Reinforcing Africa, One Bar at a Time";
        }
    }

    const savedLang = (localStorage.getItem("site-lang") === "zh") ? "zh" : "en";
    setLanguage(savedLang);

    if (langEn) {
        langEn.onclick = function (e) {
            e.preventDefault();
            localStorage.setItem("site-lang", "en");
            setLanguage("en");
        };
    }
    if (langZh) {
        langZh.onclick = function (e) {
            e.preventDefault();
            localStorage.setItem("site-lang", "zh");
            setLanguage("zh");
        };
    }
});