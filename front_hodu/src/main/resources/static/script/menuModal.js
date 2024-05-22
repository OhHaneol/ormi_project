const menu = document.querySelector('.menu');
const menuOpen = document.querySelector('#menu-btn');
const menuClose = document.querySelector('#back-btn');

menuOpen.addEventListener('click', function(){
    menu.classList.add('menuOn');
});
menuClose.addEventListener('click', function(){
    menu.classList.remove('menuOn');
});