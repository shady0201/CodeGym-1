function run(tenbt){ 
    let data = eval(tenbt + '()'); 
    let result = document.getElementById(tenbt);
     
    result.innerHTML = data;
 }

function bt1(){
    alertMessage();
    return " ";
}

function bt2(){
    let x = +document.getElementById('input2').value
    return "Kết quả: " + giaTri(x);
}

function bt3(){
    let x = +document.getElementById('input3-1').value
    let y = +document.getElementById('input3-2').value   
    return "Kết quả: " + soSanhHaiSo(x,y);
}

function bt4(){
    let result = 0;
    alert('Giá trị của biến Result trước khi gọi hàm là: ' + result);
    result = addNumbers(5,2); 
    alert("Giá trị của biến result sau khi gọi hàm là: " + result);
    return "";
}

function bt5(){
    let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let chomSao = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
    let result = "Không tìm thấy sao";

    let star = prompt("Nhập vào ngôi sao: ");
    let index = check_index(star,stars);
    if (index >= 0) {
        result = chomSao[index];
    }
    return "Kết quả: " + result;
}

function bt6(){
    let num = +document.getElementById('input6').value; 
    return "Kết quả: " + square(num); 
}

function bt7(){
    let radius = +document.getElementById('input7').value
    return "Kết quả: <br>" + 'Diện tích hình tròn là: ' + calculateArea(radius)+'<br>'+'Chu vi hình tròn là: ' + calculateCircumference(radius);   ;  
}

function bt8(){
        let a = +document.getElementById('input8-1').value     
        let b = +document.getElementById('input8-2').value     
        let swapValue = swap(a,b);
        return "Kết quả: " + "a = " + swapValue[0] + ", b = " + swapValue[1]; 
}

function bt9(){
    let arr = document.getElementById('input9').value.split(',').map(String);
    return "Kết quả: " + daoNguoc(arr); 
}

function bt10(){  
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'c'];
    let char = 'c';
    let count = countChar(arr, char);
    return `Kết quả: Số lần xuất hiện của ký tự "${char}" trong mảng là "${count}"`; 
}


function bt11(){
    function sumHam(arr){
        for (let i = 0; i < arr.length; i++) {
            count++
        }
        return count;
    }
    let arr = document.getElementById('input11').value.split(',').map(Number);
    let count = 0

    return "Kết quả: " + sumHam(arr)
}

function bt12(){
    function leHam(arr){
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i] % 2 != 0 ) {
                tong += arr[i]
            }
        }
        return tong;  
    }
    let arr = document.getElementById('input12').value.split(',').map(Number);
    let tong = 0
    return "Kết quả: " + leHam(arr)
}

function bt13(){
    function demLeHam(arr){
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i] % 2 != 0 ) {
                count++
            }
        }
        return count;  
    }
    let arr = document.getElementById('input13').value.split(',').map(Number);
    let count = 0
    return "Kết quả: " + demLeHam(arr)
}

function bt14(){
    function tbLeHam(arr){
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i] % 2 != 0 ) {
                tong += arr[i]
                count++
            }
        }
        sumTb = tong/count
        return sumTb;  
    }
    let arr = document.getElementById('input14').value.split(',').map(Number);
    let tong = 0
    let count = 0
    return "Kết quả: " + tbLeHam(arr)
}


