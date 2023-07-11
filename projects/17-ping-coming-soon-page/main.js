const form = document.querySelector("form");
const input = document.getElementById("input");
const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!regex.test(input.value)) {
        form.classList.add("active");
    } else {
        form.submit();
    }
})