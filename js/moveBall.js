let ball = document.getElementById("ball");
let bricks = document.getElementsByClassName("brick")
let div = document.querySelector("#game-area")

let scorep = 0;
let speed = 5


const gameState = {
  score: 0,
  isPaused: false,
  isGameOver: false,
  ball: {x: 300, y: 520, velocityX: -2, velocityY: 3}
};


let currentBrickIndex = 0;
function bricksBreakid(ballRect) {
  for (let brick of bricks) {
    let brickRect = brick.getBoundingClientRect();
    if (detecteted(ballRect, brickRect) && !brick.classList.contains('breaked')) {
      let hitPosition = postion(ballRect, brickRect);
      if (hitPosition < -0.5) {
        gameState.ball.velocityY *= -1;
      } else if (hitPosition > 0.5) {
        gameState.ball.velocityY *= 1;
      } else {
        gameState.ball.velocityY *= 0.5;
      }
      brick.classList.add('breaked');
      gameState.score++;
      score()
      let angleEffect = hitPosition * Math.PI / 6;
      gameState.ball.velocityX = speed * Math.sin(angleEffect);

      if (ballRect.bottom >= brickRect.top && ballRect.top <= brickRect.top) {
        gameState.ball.velocityY = -Math.abs(speed * Math.cos(angleEffect));
      } else if (ballRect.top <= brickRect.bottom && ballRect.bottom >= brickRect.bottom) {
        gameState.ball.velocityY = Math.abs(speed * Math.cos(angleEffect));
      }
    }
  }
}


function moveBall() {
  gameState.ball.x += gameState.ball.velocityX;
  gameState.ball.y += gameState.ball.velocityY;
  let ballRect = ball.getBoundingClientRect()
  let paddle = document.getElementById('paddle')
  let rec = paddle.getBoundingClientRect()
  let game = div.getBoundingClientRect()

  if (gameState.ball.x <= 0) {
    gameState.ball.x = 0
    gameState.ball.velocityX *= -1;
  } else if (gameState.ball.x > game.width - ballRect.width) {
    gameState.ball.x = game.width - ballRect.width
    gameState.ball.velocityX *= -1;
  }
  if (gameState.ball.y <= 0) {
    gameState.ball.velocityY *= -1;
  }

  bricksBreakid(ballRect)

  if (detecteted(ballRect, rec)) {
    isrecersived = false
    let hitPosition = postion(ballRect, rec);
    console.log(hitPosition);
    if (hitPosition < -0.3) {
      gameState.ball.velocityX *= -1
    }
    else if (hitPosition > 0.3) {
      gameState.ball.velocityX *= 1
    }
    else {
      gameState.ball.velocityX *= 0.5;
    }

    let angleEffect = hitPosition * Math.PI / 6;
    gameState.ball.velocityX = (speed * Math.sin(angleEffect));
    gameState.ball.velocityY = -Math.abs(speed * Math.cos(angleEffect));

  }

  ball.style.transform = `translate(${gameState.ball.x}px, ${gameState.ball.y}px)`;

  if (gameState.ball.y > 600) {
    gameOver()
  } else if (!gameState.isPaused) {
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
    if (!gameState.isPaused) {
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