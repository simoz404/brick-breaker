let ball = document.getElementById("ball");

let velocityX = -2.5;
let velocityY = -2.5;
let ballX = 400;
let ballY = 500;

function moveBall() {
    
  ballX += velocityX;
  ballY += velocityY;

  if (ballX < 0 || ballX > 720) {
    velocityX *= -1;
    randomVelocities()
  } else if (ballY < 0 || ballY > 550) {
    velocityY *= -1;
    randomVelocities()
  }

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

  requestAnimationFrame(moveBall);
}

function randomVelocities() {
    if (velocityX > 0) {
        velocityX += Math.random();
        velocityX = Math.min(Math.max(velocityX, 2), 3);
    } else {
        velocityX -= Math.random();
        velocityX = Math.max(Math.min(velocityX, -2), -3);
    }

    if (velocityY > 0) {
        velocityY += Math.random();
        velocityY = Math.min(Math.max(velocityY, 2), 3);
    } else {
        velocityY -= Math.random();
        velocityY = Math.max(Math.min(velocityY, -2), -3);
    }
}

requestAnimationFrame(moveBall);
