let ball = document.getElementById('ball')

let velocityX = -3
let velocityY = -3
let ballX = 400;
let ballY = 500;

function moveBall() {
    ballX += velocityX;
    ballY += velocityY;

    if (ballX < 0 || ballX > 720) {
        velocityX *= -1;
    }
    if (ballY < 0 || ballY > 550) {
        velocityY *= -1;
    }

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

    requestAnimationFrame(moveBall);
}

// requestAnimationFrame(moveBall)
