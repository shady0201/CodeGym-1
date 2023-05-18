let projectList = [ 
    {
        title : 'Caculator',
        desc : 'Mô phỏng ứng dụng Caculator trong máy tính',
        url : '/project/caculator/index.html',
        icon : 'fa-solid fa-calculator',
        anim : 'ring',
        bcolor : '#ff00664d',
        id : 1,
    },
    
    {
        title : 'If, Else',
        desc : 'Cấu trúc điều kiện',
        url : 'project/if condition 1/index.html',
        icon : 'fa-brands fa-usb',
        anim : 'beat',
        bcolor : '#2edfc38a',
        id : 2,
    },

    {
        title : 'For, While',
        desc : 'Cấu trúc For - While',
        url : '/project/for-while 1/index.html',
        icon : 'fa-solid fa-rotate',
        anim : 'rotate',
        bcolor : '#54ff0078',
        id : 3,
    },

    {
        title : 'Animation',
        desc : 'Chỉnh Animation',
        url : '/project/anim/animBall.html',
        icon : 'fa-solid fa-people-pulling',
        anim : 'bounce',
        bcolor : '#efce3d8a',
        id : 4,
    },


    {   
        title : 'Facebook',
        desc : 'My Facebook',
        url : 'https://www.facebook.com/truonghoanganh.810/',
        icon : 'fa-brands fa-facebook',
        anim : 'pulse',
        bcolor : '#e000ff69',
        id : 5,
    },

    {   
        title : 'Multiplication Table',
        desc : 'Bảng cửu chương',
        url : '/project/multiplication-table/index.html',
        icon : 'fa-solid fa-table-cells',
        anim : 'ring',
        bcolor : '#ff00007d',
        id : 6,
    },

    {   
        title : 'Array',
        desc : 'Mảng',
        url : '/project/array/index.html',
        icon : 'fa-solid fa-users-viewfinder',
        anim : 'pulse',
        bcolor : '#5a78e791',
        id : 7,
    },

    {   
        title : 'Function',
        desc : 'Hàm',
        url : '/project/function/index.html',
        icon : 'fa-regular fa-chart-bar',
        anim : 'ring-beat',
        bcolor : '#cbe98591',
        id : 8,
    },

    {   
        title : 'Object Oriented Program',
        desc : 'Lập trình đối tượng',
        url : '/project/oop/index.html',
        icon : 'fa-regular fa-object-ungroup',
        anim : 'pulse',
        bcolor : '#d75e7291',
        id : 9,
    },

    {   
        title : 'Product Management',
        desc : 'Quản lý sản phẩm',
        url : '/project/product-management/myhtml/signin.html',
        icon : 'fa-brands fa-product-hunt',
        anim : 'rotate',
        bcolor : '#65fd6b91',
        id : 10,
    },

]
renderItem();

function cardMouseIn(id, animName, active){
    let card = document.querySelector('#card-' + id);
    let icon = card.querySelector('i');
    icon.classList.toggle(animName, active);
}

function renderItem() {
    let itemWrap = document.getElementsByClassName("card-wrap")[0];
    let cardsHtml = projectList.map(function (product){
        let { icon, title, desc, url, anim, id, bcolor } = product;
        return `
        <div id="card-${id}" onmouseenter="cardMouseIn(${id}, '${anim}', true)" onmouseleave="cardMouseIn(${id}, '${anim}', false)" class="card">
            <div class="img-wrap" style="background-color:${bcolor}">
            <i class="${icon}"></i>
            </div>
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
            <a href="${url}" class="btn btn-primary" style="width:250px">Xem</a>
            </div>
        </div>
        `});
    itemWrap.innerHTML = cardsHtml.join('');
}

// for (const item of projectList) {
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    // }

    // projectList.forEach(item => {
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    // });

    // let index = 0;
    // while (index < projectList.length) {
    //     let item = projectList[index];
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    //     index++;     
    // }

// function renderItem(){
//     let itemWrap = document.getElementsByClassName("card-wrap")[0];
//     for (let i = 0; i < projectList.length; i++) {
//         let { icon, title, desc, url, anim, id, bcolor } = projectList[i];
//         let cardHtml = 
//             `<div id="card-${id}" onmouseenter="cardMouseIn(${id}, '${anim}', true)" onmouseleave="cardMouseIn(${id}, '${anim}', false)" class="card">
//                 <div class="img-wrap" style="background-color:${bcolor}">
//                     <i class="${icon}"></i>
//                 </div>
//                 <div class="card-body">
//                     <h5 class="card-title">${title}</h5>
//                     <p class="card-text">${desc}</p>
//                     <a href="${url}" class="btn btn-primary" style="width:250px">Xem</a>
//                 </div>
//             </div>`;
//         itemWrap.innerHTML += cardHtml;
//     }
// }   



