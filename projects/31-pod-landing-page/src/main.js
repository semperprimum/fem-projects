const inputControl = document.querySelectorAll(".input-control");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateInputs()) form.submit();
});

const validateInputs = () => {
  let hasErrors = false;
  inputControl.forEach((input) => {
    const inputField = input.querySelector("input");
    const errorField = input.querySelector(".error");
    if (validateInput(inputField, errorField)) {
      hasErrors = true;
    }
  });
  return hasErrors;
};

const validateInput = (inputField, errorField) => {
  let hasErrors = false;
  if (inputField.value === "") {
    setError(inputField, errorField, "Oops! This field cannot be empty");
    hasErrors = true;
  }

  if (inputField.getAttribute("type") === "email") {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputField.value === "") {
      setError(inputField, errorField, "Oops! Please add your email");
      hasErrors = true;
    } else if (!regex.test(inputField.value)) {
      setError(inputField, errorField, "Oops! Please check your email");
      hasErrors = true;
    } else {
      removeError(inputField, errorField);
    }
  }
  return hasErrors;
};

const setError = (inputElement, errorField, text) => {
  const parentElement = inputElement.parentElement;
  if (parentElement.classList.contains("input-control")) {
    parentElement.classList.add("validation-error");
    errorField.innerText = text;
  } else {
    console.error("Parent element is not an input-control");
  }
};

const removeError = (inputElement, errorField) => {
  const parentElement = inputElement.parentElement;
  if (parentElement.classList.contains("input-control")) {
    parentElement.classList.remove("validation-error");
    errorField.innerText = "";
  } else {
    console.error("Parent element is not an input-control");
  }
};
