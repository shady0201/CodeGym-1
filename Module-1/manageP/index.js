let productList = [
    { nameProduct : "Iphone",
      price : 100,
      amount : 5,
      code : 69,
    }
];
displayProducts();
updateProductCount();

function displayProducts(){
    let itemWrap = document.getElementsByClassName("table-bordered")[0];
    itemWrap.innerHTML = "";
    for (let i = 0; i < productList.length; i++) {
        let { nameProduct, price, amount, code } = productList[i];
        let cardHtml = 
            `
            <tr>
            <td id="name-${i}">${nameProduct}</td>
            <td id="price-${i}">${price}</td>
            <td id="amount-${i}">${amount}</td>
            <td id="code-${i}">${code}</td>
            <td>
            <button onclick="editProduct(${i})" class="btn btn-success" id="edit-button-${i}" style="padding: 3px 9px">Edit</button>
            <button onclick="confirmProduct(${i})" class="btn btn-success" id="confirm-button-${i}" style="padding: 3px 9px" hidden>OK</button>
            <button onclick="deleteProduct(${i})" class="btn btn-success" id="delete-button-${i}" style="padding: 3px 9px">Xóa</button>
            </td>
            </tr>
            `;
        itemWrap.innerHTML += cardHtml;
    }
}

function addProduct(ten, gia, soLuong, ma) {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].nameProduct === ten) {
            alert('Đã có sản phẩm ' + ten);
            return;
        }
    }
    productList.push({
      nameProduct: ten,
      price: gia,
      amount : soLuong,
      code : ma,
    });
}

function clickAddProduct() {
  let nameInput = document.getElementById("name-input").value;
  let priceInput = document.getElementById("price-input").value;
  let amountInput = document.getElementById("amount-input").value;
  let codeInput = document.getElementById("code-input").value;
  
  let nameProduct = nameInput.trim(); // trim() xóa bỏ khoảng trắng
  let price = parseFloat(priceInput); // parseFloat() chuyển chuỗi -> giá trị
  let amount = parseFloat(amountInput)
  let code = parseFloat(codeInput)
  
  if (nameProduct && price && amount && code) {
    addProduct(nameProduct, price, amount, code);
    displayProducts();
    updateProductCount();
  }
  clearInput(); //tránh bị lặp khi click
}

function clearInput(){
    document.getElementById("name-input").value = "";
    document.getElementById("price-input").value = "";
    document.getElementById("amount-input").value = "";
    document.getElementById("code-input").value = "";
}

function updateProductCount() {
    var countProduct = document.getElementById("product-count");
    countProduct.innerHTML = productList.length;
}

function deleteProduct(index) {
    productList.splice(index, 1);
    displayProducts();
    updateProductCount();
}

function editProduct(index) {
    document.getElementById(`name-${index}`).innerHTML = `<input type='text' value='${productList[index].nameProduct}'>`;
    document.getElementById(`price-${index}`).innerHTML = `<input type='number' value='${productList[index].price}'>`;
    document.getElementById(`amount-${index}`).innerHTML = `<input type='number' value='${productList[index].amount}'>`;
    document.getElementById(`code-${index}`).innerHTML = `<input type='number' value='${productList[index].amount}'>`;
    document.getElementById(`edit-button-${index}`).setAttribute("hidden", "");
    document.getElementById(`confirm-button-${index}`).removeAttribute("hidden");
}

function confirmProduct(index){
    let newName = document.getElementById(`name-${index}`).getElementsByTagName('input')[0].value;
    let newPrice = document.getElementById(`price-${index}`).getElementsByTagName('input')[0].value;
    let newAmount = document.getElementById(`amount-${index}`).getElementsByTagName('input')[0].value;
    let newCode = document.getElementById(`code-${index}`).getElementsByTagName('input')[0].value;

    //Trả về một danh sách các phần tử con của phần tử được chọn trước ('name-${index}') - <input>.

    document.getElementById(`name-${index}`).innerHTML = newName;
    document.getElementById(`price-${index}`).innerHTML = newPrice;
    document.getElementById(`amount-${index}`).innerHTML = newPrice;
    document.getElementById(`code-${index}`).innerHTML = newPrice;
    document.getElementById(`edit-button-${index}`).removeAttribute("hidden");
    document.getElementById(`confirm-button-${index}`).setAttribute("hidden", "");
    
    productList[index].nameProduct = newName;
    productList[index].price = newPrice;
    productList[index].amount = newAmount;
    productList[index].code = newCode;
    
    displayProducts();
}

