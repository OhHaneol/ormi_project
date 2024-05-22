    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelector('#sub-btn');
    const modalClose = document.querySelector('.close-btn');

    <!--    열기 버튼을 누르면 모달팝업이 열림-->
    modalOpen.addEventListener('click', function(){
    <!--    'on' class 추가-->
        modal.classList.add('subOn');
    });

    <!--    닫기 버튼을 누르면 모달팝업이 닫힘-->
    modalClose.addEventListener('click', function(){
    <!--        'on' class 제거-->
        modal.classList.remove('subOn');
    });