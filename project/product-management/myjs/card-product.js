$( document ).ready(function() {   // == document.addEventListener('DOMContentLoaded', function()
    myLocal.loadProducts();
    showCard(); 
    
    document.getElementById('btn-savecard').addEventListener('click', function() {
       let clientName = document.getElementById('clientname').value;
       const formattedClientName = clientName.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
       const upperCaseFormattedClientName = formattedClientName.toUpperCase();
       let codePart1 = document.getElementById('code-part1').value.trim().padEnd(4, ' ');
       let codePart2 = document.getElementById('code-part2').value.trim().padEnd(4, ' ');
       let codePart3 = document.getElementById('code-part3').value.trim().padEnd(4, ' ');
       let codePart4 = document.getElementById('code-part4').value.trim().padEnd(4, ' ');
       code = codePart1 + ' ' + codePart2 + ' ' + codePart3 + ' ' + codePart4;
       addCard(upperCaseFormattedClientName, code);
    })
});

function addCard(name, code){
    let card = {
        name : name,
        code : code,
    }

    let findCard = myLocal.findProductByCode(code);
    if ( findCard != undefined ) {
        alert("Mã thẻ đã tồn tại!");
        return; 
    }
    
    myLocal.addNewProduct(card);
    alert('Thêm card thành công!');

    document.getElementById('clientname').value = '';
    document.getElementById('code-part1').value = '';
    document.getElementById('code-part2').value = '';
    document.getElementById('code-part3').value = '';
    document.getElementById('code-part4').value = '';

    showCard(); 
}

function showCard(){
    let itemWrap = document.getElementsByClassName("home-text")[0];
    itemWrap.innerHTML = ''; 

    let cards = myLocal.getProducts();
    for (let i = 0; i < cards.length; i++) {
        let { name, code } = cards[i];
        let cardHtml =
            `<div class="container" style="background:#323271">
                <div class="card-head">
                    <span class="logo">
                        <img src="images/logo.png" alt="">
                        <h5>Master Card</h5>
                    </span>
                    <span>
                        <img src="images/chip.png" alt="" class="chip">
                    </span>
                </div>

                <div class="card-details">
                    <div class="name-number">
                        <div class="card-icon">
                            <h6>Card Number</h6>
                            <i class='bx bx-wifi icon'></i>
                        </div>
                        <h5 id="number-${i}" class="number">${code}</h5>
                    </div>
                    <div class="valid-date">
                        <div class="valid-from">
                            <h6>Valid From</h6>
                            <h5 style="text-align: center;">05/23</h5>
                        </div>
                        <div class="valid-thru">
                            <h6>Valid Thru</h6>
                            <h5 style="text-align: center;">05/27</h5>
                        </div>
                    </div>
                    <div class="card-bottom">
                        <div class="card-name">
                            <h6 id="username-${i}">${name}</h6>
                        </div>
                        <div class="delete-button">
                            <button onclick="deleteCard(${i})" type="button" class="btn btn-primary delete-card" hidden>Delete</button>
                        </div>
                    </div>   
                </div>
            </div>`;
        itemWrap.innerHTML += cardHtml;
    }
}

let deleteProductButton = document.getElementById('deleteproduct');

deleteProductButton.addEventListener('click', function() {
    if (deleteProductButton) {
        deleteProductButton.setAttribute("hidden", "");
    }
    
    let deleteButtons = document.getElementsByClassName("delete-card");
    for (let i = 0; i < deleteButtons.length; i++) {
        if (deleteButtons[i]) {
            deleteButtons[i].removeAttribute("hidden");
        }         
    }

    let confirmButtons = document.getElementById('confirmproduct');
    if (confirmButtons) {
        confirmButtons.removeAttribute("hidden");
    }         
})

function deleteCard(index) {
    let cardList = JSON.parse(localStorage.getItem('cards'));
    cardList.splice(index, 1); 
    showCard(); 
        let confirmBtn = document.getElementById('confirmproduct');
        confirmBtn.addEventListener('click', function() {
            alert('Xác nhận thành công');
        localStorage.setItem('cards', JSON.stringify(cardList));
        window.location.reload();
    })
}



 
