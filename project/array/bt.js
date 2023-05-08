function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    let arr = document.getElementById('inputArr1').value.split(',').map(Number);
        console.log(arr);  
        document.getElementById('kq1').innerHTML = "[" + arr +"]";
        return `Kết quả là :`;  
}

function bt2(){
    let arr = document.getElementById('inputArr2').value.split(',').map(Number);
    
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] % 2 === 0 ){
            console.log(arr[i]);  
            document.getElementById('kq2').innerHTML += arr[i] + ' ';
        }   
    }  
    return `Kết quả là :`;      
}

function bt3(){
    let arrA = document.getElementById('inputA').value.split(',').map(Number);
    let arrB = document.getElementById('inputB').value.split(',').map(Number);
    
    for ( let i = 0; i < arrA.length; i++){
        if (arrA[i] % 2 === 0){
            document.getElementById('kq3-chan').innerHTML += "<h1>"+arrA[i]+"</h1>" + ' ' 
        }
        else {
            document.getElementById('kq3-le').innerHTML += "<h2>"+arrA[i]+"</h2>" + ' ' 
        }
    }

    for ( let j = 0; j < arrB.length; j++){
        if (arrB[j] % 2 === 0){
            document.getElementById('kq3-chan').innerHTML += "<h1>"+arrB[j]+"</h1>" + ' '
        }
        else {
            document.getElementById('kq3-le').innerHTML += "<h2>"+arrB[j]+"</h2>" + ' ' 
        }
    }

    return `Kết quả là :`; 
}

function bt4(){
    let tich = 1
    let arr = document.getElementById('inputA-4').value.split(',').map(Number);
        for ( let i = 0; i < arr.length; i++){
            tich *= arr[i];
            document.getElementById('kq4').innerHTML = tich
        }
    return `Kết quả là :`;     
}

function bt5(){
    let sum = 0;
    let arr = document.getElementById('inputA-5').value.split(',').map(Number);
        for ( let i = 0; i < arr.length; i++){
            sum += arr[i];
            document.getElementById('kq5').innerHTML = sum
        }
    return `Kết quả là :`;     
}

function bt6(){
    let count = 0;
    let arr = document.getElementById('inputA-6').value.split(',').map(Number);
        for ( let i = 0; i < arr.length; i++){
            count++
            document.getElementById('kq6').innerHTML = count
        }
    return `Kết quả là :`;   
}

function bt7(){
    let arr = document.getElementById('inputA-7').value.split(',').map(Number)
    let max = arr[0];
    let max_index = [];   

    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]) { 
            max = arr[i];
            max_index = [i];
                
        } else if( max === arr[i]) {
            max_index.push(i);
        }     
    }

    if (max_index.length > 1) {
        document.getElementById('kq7-max').innerHTML = (`Số max là ${max}`) 
        document.getElementById('kq7-maxindex').innerHTML = (`Vị trí số max là: [${max_index.join(', ')}]`)
    }                                                     
    else {
        document.getElementById('kq7-max').innerHTML = (`Số max là ${max}`) 
        document.getElementById('kq7-maxindex').innerHTML = (`Vị trí số max là: [${max_index}]`)
    }
    return `Kết quả : `;    
}

function bt8(){ 
        let num = +document.getElementById('inputNum').value
        let arr = document.getElementById('inputA-8').value.split(',').map(Number);
        let index = []; 

        for (let i = 0; i < arr.length; i++){
            if ( arr[i] === num ){
                index.push(i);   
            }
        }
        
        if (index.length > 0) {
            document.getElementById('kq8-index').innerHTML = (`Phần tử ${num} xuất hiện ở vị trí: [${index.join(', ')}]`);
            
        } else {
            document.getElementById('kq8-index').innerHTML = (`Phần tử ${num} không có trong mảng`);
        }

    return `Kết quả : `;    
}

function bt9(){
    let arr = document.getElementById('inputA-9').value.split(',').map(Number); 
    let max = arr[0];   
    let max_second = -Infinity; // đảm bảo tính chính xác của thuật toán

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max ) {
            max_second = max; 
            max = arr[i];
        } else if (arr[i] > max_second && arr[i] !== max){
            max_second = arr[i];
        }
    }
    document.getElementById('kq9').innerHTML = (`Số max thứ hai là: ${max_second}`);
    return `Kết quả : `;    
}

function bt10(){
    let arr = document.getElementById('inputArr-10').value.split(',').map(Number);   
    
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] >= 10) {
            document.getElementById('kq10').innerHTML += arr[i] + ' ';
        }
    }
    return `Các phần tử >=10 là: `;
}

function bt11(){
    let arr = document.getElementById('inputArr-11').value.split(',').map(Number);   
    let max = arr[0];
    let viTri_max = []

    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] > max ) {
            max = arr[i];
            viTri_max = [i];
        } else if ( max === arr[i] ) {
            viTri_max.push(i);
        } 

        if ( viTri_max.length > 1) {
            document.getElementById('kq11-max').innerHTML = (`Số max là ${max}`) 
            document.getElementById('kq11-viTriMax').innerHTML = (`Vị trí số max là: [${viTri_max.join(', ')}]`)
        }                                                     
        else {
            document.getElementById('kq11-max').innerHTML = (`Số max là ${max}`) 
            document.getElementById('kq11-viTriMax').innerHTML = (`Vị trí số max là: [${viTri_max}]`)
        }
    }
    return `Kết quả là: `;
}

function bt12(){
    let arr = document.getElementById('inputArr-12').value.split(',').map(Number);
    let max = arr[0];
    let sum = 0

    for ( let i = 0; i < arr.length; i++) {
            sum += arr[i]/ arr.length;
        if ( arr[i] > max ) {
            max = arr[i];
        }  
    }

    document.getElementById('kq12-max').innerHTML = `Số max là: ${max}`
    document.getElementById('kq12-tb').innerHTML =  `Trung bình cộng của mảng trên là: ${sum}`

    return `Kết quả: `;
}

function bt13(){
    let arr = document.getElementById('inputArr-13').value.split(',').map(Number);
    document.getElementById('kq13').innerHTML = arr.reverse();
    return `Đảo ngược các phần tử trong mảng: `;
}

function bt14(){
    let arr = document.getElementById('inputArr-14').value.split(',').map(Number);
    let count = 0;

    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] < 0)
        count++
    }
    document.getElementById('kq14').innerHTML = count
    return `Số phần tử nguyên âm là: `;
}

function bt15(){
    let arr = document.getElementById('inputArr-15').value.split(',').map(Number);
    let v = +document.getElementById('inputV').value

    if (arr.includes(v)) {
        document.getElementById('kq15').innerHTML = "V is in the array";
      } else {
        document.getElementById('kq15').innerHTML = "V is not in the array";
      }
    return `Kết quả: `;
}

function bt16() {
    let arr = document.getElementById('inputArr-16').value.split(',').map(Number);
    let v = +document.getElementById('inputV16').value;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === v) {
        arr.splice(i, 1);
        arr.push(0);   
      }
    }
    
    document.getElementById('kq16').innerHTML = arr;
    return "Kết quả: ";
  }

function bt17(){
    let arr = document.getElementById('inputArr-17').value.split(',').map(Number);
    // Xếp theo thứ tự từ bé tới lớn
    arr.sort(function(a, b) {
        return a - b 
    })
    document.getElementById('kq17-ab').innerHTML = arr;

    // Xếp theo thứ tự từ lớn tới bé
    arr.sort(function(a, b) {
        return b - a
    })
    document.getElementById('kq17-ba').innerHTML = arr;
    return `Kết quả: `;       
}

function bt18(){
    let arrA = document.getElementById('inputArrA-18').value.split(',').map(Number);
    let arrB = document.getElementById('inputArrB-18').value.split(',').map(Number);
    let arrC = document.getElementById('inputArrC-18').value.split(',').map(Number);

    let newArrCA = arrC.concat(arrA)
    let newArrCAB = newArrCA.concat(arrB)
    document.getElementById('kq18').innerHTML = `[${newArrCAB}]`;

    return `Kết quả: `; 
}

function bt21(){    
    let arr = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    
    for (let i = 0; i < arr.length; i++) {
        console.log(" row " + i);
        document.getElementById('kq21-1').innerHTML += " row " + i;
        for (let j = 0; j < arr[i].length; j++) {
        console.log(" " + arr[i][j]);
        document.getElementById('kq21-2').innerHTML += " " + arr[i][j];
        }
    }
    return `Kết quả: `
}

function bt22(){
    let arr = document.getElementById('input22').value.split(',').map(String);
    let sum = ' '

    for ( let i = 0; i < arr.length; i++) {
        sum += arr[i]      
    }
        console.log(sum)
        document.getElementById('kq22').innerHTML = sum.split('').reverse().join('');
    return `Kết quả: `
}

function bt23(){
    let arr = document.getElementById('input23').value.split(',').map(String);
    let count = 0;

    for ( let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            count++;
        }
        document.getElementById('kq23').innerHTML = count;
    }
    return `Kết quả: `
}

function bt24(){
    let arrA = document.getElementById('input24-A').value.split(',').map(String);
    let arrB = document.getElementById('input24-B').value.split(',').map(String);

    for ( let i = 0; i < arrA.length; i++) {
        if ( arrA.length === arrB.length && arrA[i] === arrB[i]) 
        { 
            document.getElementById('kq24').innerHTML = 'True';
        }
        else {
            document.getElementById('kq24').innerHTML = 'False';
        }
    }

    return `Kết quả: `
}

function bt25(){
    let arr = document.getElementById('input25').value.split(',').map(String);

    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === '-') {
            arr[i] = '_'
        }
    }
    document.getElementById('kq25').innerHTML = arr;

    return `Kết quả: `
}