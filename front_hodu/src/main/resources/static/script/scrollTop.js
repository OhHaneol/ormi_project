const scrollTop = document.querySelector('#scroll-top');
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});