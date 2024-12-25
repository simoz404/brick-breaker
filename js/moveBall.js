let ball = document.getElementById('ball')
let velocityX = -3
let velocityY = -3
let ballX = 400;
let ballY = 500;

function moveBall() {
    let rec = paddle.getBoundingClientRect()
    let rec2 = ball.getBoundingClientRect()
    ballX += velocityX;
    ballY += velocityY;

    if (ballX < 0 || ballX > 720) {
        velocityX *= -1;
    }
    
    if (ballY < 0 || ((rec2.x <= rec.right && rec2.x >= rec.left) && (ballY > 530))) {
        velocityY *= -1;
    }
    if (ballY > 600) {
        alert("Game Over")
        return
    }
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

    requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall)
