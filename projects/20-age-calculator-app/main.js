const form = document.querySelector("form");
const day = document.getElementById("day-input");
const month = document.getElementById("month-input");
const year = document.getElementById("year-input");
const yearsSpan = document.getElementById("years-span");
const monthsSpan = document.getElementById("months-span");
const daysSpan = document.getElementById("days-span");
const answerNumbers = document.querySelectorAll(".answer-number");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateInputs()) {
        calculateDate(day.value.trim(), month.value.trim(), year.value.trim())
    } else {
        yearsSpan.innerText = "--";
        monthsSpan.innerText = "--";
        daysSpan.innerText = "--";
        answerNumbers.forEach(num => num.classList.remove("has-number"))
    }
});

const setError = (element, text) => {
    const parentElement = element.parentElement;
    const errorElement = parentElement.querySelector(".input-control__error");
    errorElement.innerText = text;
    parentElement.classList.add("error");
};

const removeError = (element) => {
    const parentElement = element.parentElement;
    const errorElement = parentElement.querySelector(".input-control__error");
    errorElement.innerText = "";
    parentElement.classList.remove("error");
};

function isDateValid(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getDate() === parseInt(day) &&
        date.getMonth() === parseInt(month) - 1 &&
        date.getFullYear() === parseInt(year) &&
        day >= 1 &&
        day <= 31 &&
        month >= 1 &&
        month <= 12
    );
}

const validateInputs = () => {
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const now = new Date();
    let hasErrors = false;

    if (dayValue === "") {
        setError(day, "This field is required");
        hasErrors = true;
    } else if (dayValue < 1 || dayValue > 31) {
        setError(day, "Must be a valid day");
        hasErrors = true;
    } else {
        removeError(day)
    }

    if (monthValue === "") {
        setError(month, "This field is required");
        hasErrors = true;
    } else if (monthValue < 1 || monthValue > 12) {
        setError(month, "Must be a valid month");
        hasErrors = true;
    } else {
        removeError(month);
    }

    if (yearValue === "") {
        setError(year, "This field is required");
        hasErrors = true;
    } else if (yearValue > now.getFullYear()) {
        setError(year, "Must be in the past");
        hasErrors = true;
    } else {
        removeError(year);
    }

    if (hasErrors === false && !isDateValid(dayValue, monthValue, yearValue)) {
        setError(day, "Must be a valid date");
        setError(month, "");
        setError(year, "");
        hasErrors = true;
    }
    return hasErrors;
}

const calculateDate = (day, month, year) => {
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        months += 12;
    }

    if (days < 0) {
        months--
        days += new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate()
    }

    yearsSpan.innerText = age;
    monthsSpan.innerText = months;
    daysSpan.innerText = days;

    answerNumbers.forEach(num => num.classList.add("has-number"))
}