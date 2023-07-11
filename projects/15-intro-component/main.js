const formElement = document.querySelector("form");
const inputs = document.querySelectorAll("input");

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasErrors = false;

    inputs.forEach(input => {
        if (input.value === "") {
            showError(input, `${input.placeholder} cannot be empty`);
            hasErrors = true;
        } else {
            hideError(input);
        }

        if (input.id === 'email' && input.value !== "" && !validateEmail(input)) {
            hasErrors = true;
            showError(input, 'Looks like this is not an email');
        }

    })
    if (!hasErrors) {
        formElement.submit();
        inputs.forEach(input => {
            input.value = "";
        });
        alert("Form submitted!")
    }
})

// Utility functions ⬇️
const showError = (input, message) => {
    input.parentElement.classList.add("error-active");
    input.nextElementSibling.innerHTML = message;
}

const hideError = (input) => {
    input.parentElement.classList.remove("error-active");
    input.nextElementSibling.innerHTML = "";
}

const validateEmail = (input) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regex.test(input.value);
}