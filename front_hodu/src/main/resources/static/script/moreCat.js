    const moreCatBtn = document.querySelector('.more-cat-btn');
    const catImageList = document.getElementById('multi-cat-list');
    const catImageBlock = document.querySelector('.multi-cat-img');

    moreCatBtn.addEventListener('click', function(){
        const newCatImageBlock = document.createElement('div');
        newCatImageBlock.setAttribute('class', 'multi-cat-img');

<!-- newCatImageBlock = catImageBlock 는 주소 복사와 같음. 따라서 catImageList 에 새로운 자식 노드가 추가되지 않는다!-->
        newCatImageBlock.innerHTML += catImageBlock.innerHTML;
        catImageList.appendChild(newCatImageBlock);

    });