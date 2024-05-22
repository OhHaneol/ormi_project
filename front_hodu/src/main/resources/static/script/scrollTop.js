const scrollTop = document.querySelector('#scroll-top');
scrollTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});