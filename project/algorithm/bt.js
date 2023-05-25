function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    for (let i = 1; i <= 100; i++) {
        if (i === 100) {
           return 'Kiểm tra Console nhé!';
        }
        console.log (i);
    }
}

function bt2(){
    let nhietDo = +prompt('Nhiệt độ bằng ℃');

    if (nhietDo >= 100) {
        return 'Nhiệt độ quá cao, yêu cầu giảm!';
    }
    else if (nhietDo > 20) {
        return 'Nhiệt độ bình thường';
    }
    else{
        return 'Nhiệt độ quá thấp, yêu cầu tăng!';
    }
}

function bt3(){
    let n = 20;
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        // if (fib[i] >= 200){
        //     break;
        // }
       
    }
    console.log(fib);
    return 'Kiểm tra Console nhé!';
}

function bt4(){
    let previousNum = 0;
    let currentNum = 1;

    for (let fibonacciNum = currentNum; ;fibonacciNum = previousNum + currentNum ) {
        if (fibonacciNum % 5 === 0) {
        return 'Đáp án = ' + fibonacciNum;
    }

    previousNum = currentNum;
    currentNum = fibonacciNum;
    }
       
}

function bt5(){
    let previousNum = 0;
    let currentNum = 1;
    let sum = 0;
  
    for (let i = 0; i < 20; i++) {
      // tính số tiếp theo trong dãy Fibonacci
      const next = previousNum + currentNum;
  
      // cộng giá trị của số hiện tại vào biến tổng
      sum = sum + currentNum;
  
      // cập nhật previous và current
      previousNum = currentNum;
      currentNum = next;
    }
  
    return 'Đáp án = ' + sum;
}

function bt6(){
    let sum = 0;

    for (let i = 0; i <= 210; i++) {
        if (i % 7 === 0 ){
            sum = sum + i;
        }
    }
    console.log(sum);
    return `Đáp án = ${sum}`;
}

function bt7(){
    let thongBao = 0

    for (let i = 0; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0)
        {
           thongBao =+ i;
           console.log("BuzzFizz");
        }
        else if (i % 3 === 0){
            thongBao =+ i;
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            thongBao =+ i;
            console.log("Buzz");
        }
        else
            thongBao =+ i;
            console.log(i);
    }   
    return `Kiểm tra Console nhé!`;
}

function bt8(){
    let nhapNumber = +prompt('Bạn muốn đoán trong khoảng nào');
    let nhapNumberRan = Math.floor(Math.random() * nhapNumber);
    console.log(nhapNumberRan);

    let i = 1;

    while (i < 4) {
        let nhapNumberGuess = +prompt('Bạn đoán ra số nào')
        if (nhapNumberGuess === nhapNumberRan){
            return `Bạn đã đoán đúng`;
        }
        else if (nhapNumberGuess < nhapNumberRan){
            alert(`Số bạn đoán bé hơn`);
        }
        else {
            alert(`Số bạn đoán lớn hơn`);
        }
        i++;
    }
    return `Bạn đã hết số lần đoán`;
}   
        




