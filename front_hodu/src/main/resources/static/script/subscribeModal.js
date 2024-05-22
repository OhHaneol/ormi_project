const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('#sub-btn');
const modalClose = document.querySelector('.close-btn');

modalOpen.addEventListener('click', function(){
    modal.classList.add('subOn');
});

modalClose.addEventListener('click', function(){
    modal.classList.remove('subOn');
});