// @ts-nocheck
const signupWrapper = document.querySelector(".signup-wrapper");
const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const inputWrapper = document.querySelector(".form__input-wrapper");
const image = document.querySelector(".img-wrapper");
const content = document.querySelector(".content");
const successScreen = document.querySelector(".success-page");
const emailSpan = document.getElementById("email-span");
const dismissBtn = document.querySelector(".btn--dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (emailInput.value === "") {
    setError(inputWrapper, "This field cannot be empty");
    return;
  }
  if (!validateEmail(email)) {
    setError(inputWrapper, "Valid email required");
    return;
  }
  emailInput.value = "";
  showSuccessScreen(email);
});

dismissBtn.addEventListener("click", () => dismissSuccessScreen());

// Utility functions ⬇️
const validateEmail = (email) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};

const setError = (element, text) => {
  element.classList.add("error");
  element.dataset.errorText = text;
};

const removeError = (element) => {
  element.classList.remove("error");
};

const showSuccessScreen = (email) => {
  signupWrapper.classList.add("hidden");
  successScreen.classList.remove("hidden");
  emailSpan.innerHTML = email;
};

const dismissSuccessScreen = () => {
  signupWrapper.classList.remove("hidden");
  successScreen.classList.add("hidden");
  removeError(inputWrapper);
};
