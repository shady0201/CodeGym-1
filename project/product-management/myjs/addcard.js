// const myLocal = new MyLocalData();

// $( document ).ready(function() {
//     document.getElementById('btn-savecard').addEventListener('click', function() {
//        let clientName = document.getElementById('clientname').value;
//        let code = document.getElementById('code').value;
//        addCard(clientName, code);
//     })
//     console.log(myLocal.getProducts());
// });

// function addCard(name, code){
//     let card = {
//         name : name,
//         code : code,
//     }

//     let findCard = myLocal.findProductByCode(code);
//     if ( findCard != undefined ) {
//         alert("Mã thẻ đã tồn tại!");
//         return; 
//     }

//     myLocal.addNewProduct(card);
//     alert('Thêm card thành công!');

//     document.getElementById('clientname').value = '';
//     document.getElementById('code').value = '';

// }