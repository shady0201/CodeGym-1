let ball = document.querySelector('.ball');

window.addEventListener('DOMContentLoaded', function() {
    stopAnimation();
})

function startAnimation(){
    ball.style.animationPlayState = 'running';
};

function stopAnimation(){
    ball.style.animationPlayState = 'paused';
};

