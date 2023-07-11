const shareOptions = document.querySelector('.share-options');
const shareBtn = document.querySelector('.share-button');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    shareOptions.classList.toggle('active');
})