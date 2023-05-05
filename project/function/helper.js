function alertMessage(){
    alert('Xin chao');
}

function giaTri(x){
    let num = x + 1
    return num;
}

/**
 * So sánh 2 số x và y
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
function soSanhHaiSo(x,y){
    if (x > y) {
        return "x > y";
    }
    else {
        return x + y; 
    }
}   

/**
 * Tính tổng 2 số 
 * @param {number} firstNum 
 * @param {number} secondNum 
 * @returns 
 */
function addNumbers(firstNum,secondNum) {
    return firstNum + secondNum;
}

/**
 * Tìm vị trí index
 * @param {string} value 
 * @param {string[]} arr 
 * @returns 
 */
function check_index(value,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return i;
        }
    }
    return -1;
}

function square(num){
    let result = num * num;
    return result
}

function calculateArea(radius) {
    const pi = 3.14;
    const area = pi * radius * radius;
    return area;
}
  
function calculateCircumference(radius) {
    const pi = 3.14;
    const circumference = 2 * pi * radius;
    return circumference;
}

function swap(a,b) {
    let temp = a;
    a = b;
    b = temp
    return [a, b]
}

function daoNguoc(arr){
    let swap = arr.reverse();
    return swap
}

function countChar(arr, char) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === char) {
        count++;
        }
    }
    if (count === 0) { 
        console.log('Kí tự không có trong mảng');
    }
        return count; 
}
