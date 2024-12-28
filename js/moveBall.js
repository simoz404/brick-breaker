let ball = document.getElementById("ball");
let bricks = document.getElementsByClassName("brick")
let isPause = false
let velocityX = -3;
let velocityY = -3;
let ballX = 400;
let ballY = 500;
let isrecersived = false;
let div = document.querySelector("#game-area")
let currentBrickIndex = 0;
function bricksBreakid(ballRect) {

  for (let brick of bricks) {
    let brickRect = brick.getBoundingClientRect()
    let hitPosition = postion(ballRect, brickRect);

    if (topdetected(ballRect, brickRect) && !brick.classList.contains('breaked') ) {
 
      if (hitPosition < -0.5) {
        brick.classList.add('breaked');
        console.log("one", isrecersived);

        isrecersived = true
        velocityX *= 1
      }
      else if (hitPosition > 0.5) {
        console.log("tow", isrecersived);

        brick.classList.add('breaked');
        isrecersived = true
        velocityX *= -1
      }
      else if(!brick.classList.contains('breaked')) {
        console.log("three", isrecersived);
        velocityX *= -0.5;
        brick.classList.add('breaked');
      }
      let angleEffect = hitPosition * Math.PI / 6;
      let newSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

      velocityX = newSpeed * Math.sin(angleEffect);
      velocityY = -Math.abs(newSpeed * Math.cos(angleEffect));
      currentBrickIndex++;
    }

  }
}



function moveBall() {
  ballX += velocityX;
  ballY += velocityY;
  let ballRect = ball.getBoundingClientRect()
  let paddle = document.getElementById('paddle')
  let rec = paddle.getBoundingClientRect()
  let game = div.getBoundingClientRect()
  if (ballX <= 0 || ballX > game.width - ballRect.width) {
    velocityX *= -1;
  } else if (ballY < 0) {
    velocityY *= -1;
  }


  bricksBreakid(ballRect)
  if (detecteted(ballRect, rec)) {
    isrecersived = false
    let hitPosition = postion(ballRect, rec);
    console.log(hitPosition);
    if (hitPosition < -0.3) {
      velocityX *= -1
    }
    else if (hitPosition > 0.3) {
      velocityX *= 1
    }
    else {
      velocityX *= 0.5;
    }
    let angleEffect = hitPosition * Math.PI / 6;
    let newSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

    velocityX = newSpeed * Math.sin(angleEffect);
    velocityY = -Math.abs(newSpeed * Math.cos(angleEffect));

  }

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;

  // bricksBreakid()
  if (ballY > 600) {
    gameOver()
  } else if (!isPause) {
    requestAnimationFrame(moveBall);
  }
}
function detecteted(ballRect, rec) {
  return ballRect.x + ballRect.width > rec.x &&
    ballRect.x < rec.x + rec.width &&
    ballRect.y + ballRect.height > rec.y &&
    ballRect.y < rec.y + rec.height
}
function topdetected(ballRect, brick) {
  return ballRect.right > brick.left &&
    ballRect.left < brick.right &&
    ballRect.bottom > brick.top &&
    ballRect.top < brick.bottom
}
function postion(ballRect, rec) {
  let ballCenter = ballRect.x + ballRect.width / 2; // مركز الكرة
  let paddleCenter = rec.x + rec.width / 2;         // مركز المضرب
  let hitPosition = ballCenter - paddleCenter;
  let direction = hitPosition / (rec.width / 2);
  return direction
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


