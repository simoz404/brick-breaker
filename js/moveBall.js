let ball = document.getElementById("ball");
let bricks = document.getElementsByClassName("brick")
let isPause = false
let velocityX = -1;
let velocityY = 2;
let ballX = 300;
let ballY = 520;
let scorep = 0;
let div = document.querySelector("#game-area")
let currentBrickIndex = 0;
function bricksBreakid(ballRect) {
  for (let brick of bricks) {
    let brickRect = brick.getBoundingClientRect();
    if (detecteted(ballRect, brickRect) && !brick.classList.contains('breaked')) {
      let hitPosition = postion(ballRect, brickRect);
      if (hitPosition < -0.5) {
        velocityY *= -1;
      } else if (hitPosition > 0.5) {
        velocityY *= 1;
      } else {
        velocityY *= 0.5;
      }
      brick.classList.add('breaked');
      scorep++
      score()
      let angleEffect = hitPosition * Math.PI / 6;
      velocityX = 3 * Math.sin(angleEffect);

      if (ballRect.bottom >= brickRect.top && ballRect.top <= brickRect.top) {
        velocityY = -Math.abs(3 * Math.cos(angleEffect));
      } else if (ballRect.top <= brickRect.bottom && ballRect.bottom >= brickRect.bottom) {
        velocityY = Math.abs(3 * Math.cos(angleEffect));
      }

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

  if (ballX <= 0) {
    ballX = 0
    velocityX *= -1;
  } else if (ballX > game.width - ballRect.width) {
    ballX = game.width - ballRect.width
    velocityX *= -1;
  }
  if (ballY <= 0) {
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
    velocityX = (3 * Math.sin(angleEffect));
    velocityY = -Math.abs(3 * Math.cos(angleEffect));

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
  return ballRect.x + ballRect.width >= rec.x &&
    ballRect.x <= rec.x + rec.width &&
    ballRect.y + ballRect.height > rec.y &&
    ballRect.y < rec.y + rec.height
}
function topdetected(ballRect, brick) {
  return ballRect.right >= brick.left &&
    ballRect.left <= brick.right &&
    ballRect.bottom >= brick.top &&
    ballRect.top <= brick.bottom
}
function postion(ballRect, rec) {
  let ballCenter = ballRect.x + ballRect.width / 2;
  let paddleCenter = rec.x + rec.width / 2;
  let hitPosition = ballCenter - paddleCenter;
  let direction = hitPosition / (rec.width / 2);
  return direction
}

var t;
function timer() {
  var sec = 1
  var min = 0
  let timer = document.getElementById('timer')
  let s = '0'
  let m = '0'
  t = setInterval(() => {
    if (!isPause) {
      timer.innerHTML = 'Timer: ' + m + min + ':' + s + sec;
      if (sec >= 9) {
        s = ''
      }
      if (min >= 9) {
        m = ''
      }
      if (sec == 60) {
        s = '0'
        sec = -1
        min++
      }
      sec++
    }
  }, 1000)
}

function stop() {
  clearInterval(t)
}

function score() {
  let scorediv = document.getElementById("score")
  scorediv.innerHTML = 'Score: ' + scorep
}