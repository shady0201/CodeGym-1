function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    let nhapA = document.getElementById('nhapA').value
        return `<h2>${nhapA}</h2>`;
}
    
function bt2(){
    let nhapImg = document.getElementById('nhapImg').value
    return `<img src="${nhapImg}" width="300px" height="200px">`
}

function bt3(){
    let nhapF = document.getElementById('nhapF').value
    let nhapNick = document.getElementById('nhapNick').value
    return `<a href="${nhapF}">"${nhapNick}"</a>`
}

function bt4(){
    let age = document.getElementById('nhapTuoi').value
        if (age > 100){
            return `Trường thọ}`;
        }
        else{
            return `Tuổi không hợp lệ`;
        }
}

function bt5(){
    let diem = +document.getElementById('diem').value
        
        if (diem === 10){
            return `Xuất sắc`;
        }
        else if (diem >= 8){
            return `Giỏi`;
        }
        else if (diem >=5){
            return `Khá`;
        }
        else {
            return `Yếu`;
        }
}

function bt6(){
    let chuoiA = document.getElementById('chuoiA').value
    let n = 20;

        for (i = 0; i < n; i++){
            console.log(chuoiA);
        }
        return `F12 đi ạ <i class="fa-regular fa-face-smile-beam"></i>`
        
}

function bt7(){
    let chuoiA = document.getElementById('nhapAnh').value;
    let n = 20;
    chuoiImg = `<img src="${chuoiA}">`
    // https://storage.googleapis.com/july-bucket/g9tLkaYXByDaanZ8pZw5NHKz
        for (i = 0; i < n; i++){
            console.log(chuoiImg);
        }
        return `F12 đi ạ <i class="fa-regular fa-face-smile-beam"></i>`
}

function bt8(){
    let danAnh = document.getElementById('danAnh').value;
    let count = document.getElementById('soLuong').value;
    countAnh = `<img src="${danAnh}">`
        for (i = 0; i < count; i++){
            console.log(countAnh);
        }
        return `F12 đi ạ <i class="fa-regular fa-face-smile-beam"></i>`
}

function bt9(){
    let a = +document.getElementById('inputA').value;
    let b = +document.getElementById('inputB').value;
    
        let result = "Các số chia hết cho 7 dư 3 từ " + a + " đến " + b + " là: ";
        let arr = []

        for (let i = a; i <= b; i++){
             if (i % 7 === 4){  
                arr.push(i);
            }  
        }

        result += arr.join(', ')
        result += "<br>Tổng các số chia hết cho 5 từ " + a + " đến " + b + " là: ";

        let sum = 0;
        for (let j = a; j <= b; j++) {
            if (j % 5 === 0) {
                sum += j;
            }
        }
        result += sum + '<br>'
       
        // let count = 0;
        //     for (let i = a; i <= b; i++) {
        //         if (i % 7 === 4) {
        //         count++;
        //     }
        // }
        //     document.getElementById('bt9-c').innerHTML = "Số lượng các số chia 7 dư 4 từ " + a + " đến " + b + " là: " + count;
        
    
        // if (a > b) {
        //     inter = a*b;
        //     document.getElementById('bt9-d').innerHTML = "Tích của " + a + b + " là: " + inter;
        // } 
        
        // if (b > a) {    
        // let result = 1;
        //     for (let i = a; i <= b; i++) {
        //         result *= i;
        //     }
        //     document.getElementById('bt9-d').innerHTML = "Tích các số từ " + a + " đến " + b + " là: " + result;
        // }
    
        // let square = 0;
        //     for (let i = a; i <= b; i++) {
        //         square += i * i;            
        // }
        // document.getElementById('bt9-e').innerHTML = "Tổng bình phương các số từ " + a + " đến " + b + " là: " + square;
    
        // for (let k = a; k <= b; k++) {
        //     if (Number.isInteger(Math.sqrt(k))) {
        //         document.getElementById('bt9-ff').innerHTML = "Các số chính phương từ " + a + " đến " + b + " là: ";
        //         document.getElementById('bt9-f').innerHTML += k + ', ';
        //     }
        // }

    return 'Kết quả : <br>' + result;
}

function bt10(){
    let n = document.getElementById('inputN').value;
    let sum = 100;
        for (let i = 1; i <= n; i++) {
            sum += i * (i + 1) / ((i + 1) * (i + 2));
        }
        return `Kết quả : ${sum}`;
}
        


