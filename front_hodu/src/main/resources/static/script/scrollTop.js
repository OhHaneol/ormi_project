    <!--버튼 DOM 객체를 불러와서 onclick 이벤트를 걸어줌. 클릭 시 스크롤을 이동시키기 위한 window.scrollTo 메서드 이용. 해당 메서드의 behavior: "smooth" 속성을 이용해 부드러운 이동을 구현-->
    const scrollTop = document.querySelector('#scroll-top');
    scrollTop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });