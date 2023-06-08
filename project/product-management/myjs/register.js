var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.font = "50px Arial";
context.strokeStyle = "blue";
context.strokeText("Just A 2`!", 30, 50);

var seconds = 500;
$('#countdown').html(seconds);
var countdown = setInterval(function() {
    seconds--;
    $('#countdown').html(seconds);
    if (seconds <= 0) {
        clearInterval(countdown);
        setTimeout(function() {
            window.location.href = "/project/product-management/myhtml/signin.html";
        }, 1000);
    }
}, 1000);