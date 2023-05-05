function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    let n = 20;
    let a = 0, b = 1;
    let i = 0;
    while (i < n){ 
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
        i++;
    }
    return 'Kiểm tra Console nhé!';
}

function bt2(){
    function calculateFactorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i;
        }
        return result;
      }
      let n = document.getElementById('soND').value
      let factorial = calculateFactorial(n);
      console.log(factorial);  
      return 'Kiểm tra Console nhé!';
}

function bt3(){
    document.getElementById("tamGiac1").innerHTML = '';
    document.getElementById("tamGiac2").innerHTML = '';
    document.getElementById("tamGiac3").innerHTML = '';
    document.getElementById("tamGiac4").innerHTML = '';

    for (let i = 1; i <= 5; i++) { 
        for (let j = 1; j <= i; j++) {
            document.getElementById("tamGiac1").innerHTML += '*';
        }
        document.getElementById("tamGiac1").innerHTML += '<br>'
    }   
   
    
    for (let i = 5; i > 0; i--) { 
        for (let j = 1; j <= i; j++) {
            document.getElementById("tamGiac2").innerHTML += "*";
        }
        document.getElementById("tamGiac2").innerHTML +='<br>'
    }   

    for (let i = 5; i > 0; i--) { 
        for (let j = 1; j <= i; j++)  {
            document.getElementById("tamGiac3").innerHTML += '&nbsp;&nbsp';
        }
        for (let j = 0; j <= 5-i; j++) {
            document.getElementById("tamGiac3").innerHTML += '*'
        }
        document.getElementById("tamGiac3").innerHTML += '<br>'
    }    

    for (let i = 1; i <= 5; i++) { 
        for (let j = 1; j <= i; j++) {
            document.getElementById("tamGiac4").innerHTML += '&nbsp;&nbsp';
        }
        for (let j = 0; j <= 5-i; j++) {
            document.getElementById("tamGiac4").innerHTML += '*'
        }
        document.getElementById("tamGiac4").innerHTML += '<br>'
    }   

    return `<p style="font-style: italic">4 tam giác vuông:</p>`;
}

function bt4(){
    document.getElementById("hinhCn").innerHTML = '';

    for (let i = 1; i < 8; i++) {
        for (let j = 1; j < 30; j++) {
            if (i == 1 || i == 7) {
                document.getElementById("hinhCn").innerHTML += ('*')

            } else if (j == 1 || j == 21) {
                document.getElementById("hinhCn").innerHTML += ('*')
            } else {
                document.getElementById("hinhCn").innerHTML += ('&nbsp;&nbsp')
            }
        }
        document.getElementById("hinhCn").innerHTML += ('<br>')
    }
    return `<p style="font-style: italic">Hình chữ nhật:</p>`;
}