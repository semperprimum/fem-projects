const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
    const visibility = navigation.getAttribute("data-visible");

    if (visibility === "false") {
        navigation.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        overlay.classList.add("overlay-active");
    } else if (visibility === "true") {
        navigation.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        overlay.classList.remove("overlay-active")
    }
})