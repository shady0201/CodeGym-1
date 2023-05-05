let ball = document.querySelector('.ball');

function startAnimation(){
    ball.style.animationPlayState = 'running';
};

function stopAnimation(){
    ball.style.animationPlayState = 'paused';
};

// document.getElementById('startBall').addEventListener('click', startAnimation);
// document.getElementById('stopBall').addEventListener('click', stopAnimation);