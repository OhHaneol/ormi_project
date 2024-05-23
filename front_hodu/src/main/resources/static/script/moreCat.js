const moreCatBtn = document.querySelector('.more-cat-btn');
const catImageList = document.getElementById('multi-cat-list');
const catImageBlock = document.querySelector('.multi-cat-img');

moreCatBtn.addEventListener('click', () => {
    const newCatImageBlock = document.createElement('div');
    newCatImageBlock.setAttribute('class', 'multi-cat-img');

    newCatImageBlock.innerHTML += catImageBlock.innerHTML;
    catImageList.appendChild(newCatImageBlock);
});