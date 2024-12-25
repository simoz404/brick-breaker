//import { bricksBreaker } from "./bricksBreaker.js";
let ball = document.getElementById('ball')
let velocityX = -3
let velocityY = -3
let ballX = 400;
let ballY = 500;

function moveBall() {
    let recPaddle = paddle.getBoundingClientRect()
    let recBall = ball.getBoundingClientRect()
    ballX += velocityX;
    ballY += velocityY;

    if (ballX < 0 || ballX > 720) {
        velocityX *= -1;
    }
    if (ballY < 0 || ((recBall.left <= recPaddle.right && recBall.right >= recPaddle.left) && (ballY === 530))) {
        velocityY *= -1;
    } else if (((recBall.left <= recPaddle.right && recBall.right >= recPaddle.left) && (ballY === 550))) {
      velocityY *= -1;
      velocityX *= -1;
    }
    if (ballY > 600) {
        alert("Game Over")
        return
    }
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    //bricksBreaker(ballRec.x, ballRec.y)
    requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall)
