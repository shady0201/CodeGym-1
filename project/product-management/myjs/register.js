var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.font = "50px Arial";
context.strokeStyle = "blue";
context.strokeText("Đăng ký thành công!", 30, 50);

var seconds = 10;
document.querySelector("#countdown").innerHTML = seconds;
var countdown = setInterval(function() {
    seconds--;
    document.querySelector("#countdown").innerHTML = seconds;
    if (seconds <= 0) {
    clearInterval(countdown);
    setTimeout(function() {
        window.location.href = "/project/product-management/myhtml/signin.html";
    }, 1000);
    }
}, 1000);