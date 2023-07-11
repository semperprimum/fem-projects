const form = document.querySelector("form")
const inputDiv = document.querySelector('.input');
const errorSpan = document.querySelector('.error');
const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!inputDiv.value.match(regex)) {
        inputDiv.classList.toggle("active-error")
        inputDiv.parentElement.classList.toggle("active-error")
        errorSpan.innerHTML = "Please provide a valid email"
    } else {
        form.submit()
    }
})