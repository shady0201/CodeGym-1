function hienTraiTim(){
    alert('<3');
}

function diVao(){
   // let randomNumber = Math.random() * 1000; // 0->1 * 1000
    let randomWidth = Math.random() * window.innerWidth;
    let randomHeight = Math.random() * window.innerHeight;

    let buttonNo = document.getElementById("no");
    buttonNo.style.left = randomWidth + 'px';
    buttonNo.style.right = randomHeight + 'px';
    console.log(buttonNo.style.left, buttonNo.style.right);
    
}