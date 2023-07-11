const buttons = document.querySelectorAll(".score-btn");
const submitButton = document.querySelector('.submit-btn');
const selectedScore = document.getElementById('selected-score');
const ratingWindow = document.querySelector('.rating');
const thankYouWindow = document.querySelector('.thank-you');

let score = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        removePreviousSelection()
        button.classList.add('active')
        score = button.textContent;
    })
})

const removePreviousSelection = () => {
    buttons.forEach(button => {
        button.classList.remove('active');
    })
}

submitButton.addEventListener('click', () => {
    if (score !== null) {
        selectedScore.textContent = score;
        ratingWindow.classList.add('hidden');
        thankYouWindow.classList.remove('hidden');
    }
})