//const moreCatBtn = document.querySelector('.more-cat-btn');
//const catImageList = document.getElementById('multi-cat-list');
//const catImageBlock = document.querySelector('.multi-cat-img');
//
//moreCatBtn.addEventListener('click', () => {
//    const newCatImageBlock = document.createElement('div');
//    newCatImageBlock.setAttribute('class', 'multi-cat-img');
//
//    newCatImageBlock.innerHTML += catImageBlock.innerHTML;
//    catImageList.appendChild(newCatImageBlock);
//});

//const moreCatBtn = document.querySelector('.more-cat-btn');
//const catImageList = document.getElementById('multi-cat-list');
//const catImageBlock = document.querySelector('.multi-cat-img');
//
//moreCatBtn.addEventListener('click', () => {
//    const newCatImageBlock = document.createElement('div');
//    newCatImageBlock.setAttribute('class', 'multi-cat-img');
//
//
//    fetch('data.json')
//                    .then((response) => {
//                    if(!response.ok) {
//                        throw new Error(`HTTP error! Status: ${response.status}`);
//                    }
//                    return response.json();
//                    })
//                    .then((data) => {
//                        var str = "";
//                        $.each(data, function(index, obj) {
//                            str += "<img src='./image/cat/multi-cat/";
//                            str += obj.imgFile;
//                            str += "'>";
//                        });
//                        newCatImageBlock.append(str);
//                    })
//                    .catch((error) => {
//                        console.error(error);
//    });
//
//    catImageList.appendChild(newCatImageBlock);
//
//});


        const listPic = document.querySelector('#multi-cat-list');
        const btn = document.querySelector('.more-cat-btn');
        let pageToPatch = 1;


        btn.addEventListener('click', ()=>{fetchImages(pageToPatch += 1)});

        async function fetchImages(page){
            try{
                const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);

                if(!response.ok){
                    throw new Error('네트워크 응답에 문제가 있습니다.');
                }

                // 제이슨 데이터를 자바스크립트 객체로 파싱
                const datas = await response.json();
                console.log(datas);
                makeImageList(datas);

            }catch(error){
                console.error(error);
            }
        }

        function makeImageList(datas){
            listPic.insertAdjacentHTML('beforeend', `<div class="multi-img">`);
            const listBlock = document.querySelector('.multi-img');

            datas.forEach((data)=>{
                listBlock.insertAdjacentHTML('beforeend', `<img src="${data.download_url}" alt="">`);
            });

            listPic.insertAdjacentHTML('beforeend', `</div>`);
        }