const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('#sub-btn');
const modalClose = document.querySelector('.close-btn');

modalOpen.addEventListener('click', () => {
    modal.classList.add('subOn');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('subOn');
});