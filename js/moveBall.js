let ball = document.getElementById("ball");

let bricks = document.getElementsByClassName("brick")

function bricksBreakid() {
  
  for (let brick of bricks) {
    let recBrick = brick.getBoundingClientRect();
    let recBall = ball.getBoundingClientRect();
    
    if ( !brick.classList.contains('breaked')  && (recBall.right > recBrick.left && 
        recBall.left < recBrick.right &&
        recBall.bottom > recBrick.top && 
        recBall.top < recBrick.bottom)) {
      brick.classList.add('breaked');
      velocityY *= -1;
    }
  }
}


let velocityX = -2;
let velocityY = -2;
let ballX = 400;
let ballY = 500;
let isrecersived = false;

function moveBall() {
  let recPaddle = paddle.getBoundingClientRect();
  let recBall = ball.getBoundingClientRect();

  ballX += velocityX;
  ballY += velocityY;
  if (ballX < 0 || ballX > 720) {
    velocityX *= -1;
  }

  if ( ballY < 0 || (recBall.left <= recPaddle.right && recBall.right >= recPaddle.left && ballY === 530 && !isrecersived)) {
    velocityY *= -1;
  } else if ( recBall.left <= recPaddle.right && recBall.right >= recPaddle.left && ballY === 550) {
    velocityY *= -1;
    velocityX *= -1;
    isrecersived = true;
    setTimeout(() => {
      isrecersived = false;
    }, 1000);
  }

  if (ballY > 600) {
    alert("Game Over");
    return;
  }

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

  bricksBreakid()
  requestAnimationFrame(moveBall);
}






// function randomVelocities() {
//     if (velocityX > 0) {
//         velocityX += Math.random();
//         velocityX = Math.min(Math.max(velocityX, 2), 3);
//     } else {
//         velocityX -= Math.random();
//         velocityX = Math.max(Math.min(velocityX, -2), -3);
//     }

//     if (velocityY > 0) {
//         velocityY += Math.random();
//         velocityY = Math.min(Math.max(velocityY, 2), 3);
//     } else {
//         velocityY -= Math.random();
//         velocityY = Math.max(Math.min(velocityY, -2), -3);
//     }
// }

requestAnimationFrame(moveBall);
