

let ball = document.getElementById("ball");

let bricks = document.getElementsByClassName("brick")

let isPause = false

let velocityX = -5;
let velocityY = 5;


let ballx = 400;
let bally = 500;
let div = document.querySelector("#game-area")

var sec = 0
function bricksBreakid() {
    for (let brick of bricks) {
    let recBrick = brick.getBoundingClientRect();
    let recBall = ball.getBoundingClientRect();
    if ( !brick.classList.contains('breaked') && (recBall.right >= recBrick.left && 
      recBall.left <= recBrick.right &&
      recBall.bottom >= recBrick.top && 
      recBall.top <= recBrick.bottom) ) {
      brick.classList.add('breaked');
          velocityY *= -1
    }
  }
  
}


function moveBall() {
    ballx += velocityX;
    bally += velocityY;
    let ball = document.getElementById('ball')
    let ballRect = ball.getBoundingClientRect()

    let paddle = document.getElementById('paddle')
    let rec = paddle.getBoundingClientRect()
    let game = div.getBoundingClientRect()


    if (ballx <= 0 || ballx > game.width - ballRect.width) {
        velocityX *= -1;
    } else if (bally < 0) {
        velocityY *= -1;
    }
    else if (ballRect.y + ballRect.height >= game.height) {
        gameOver()
        
        return
    }

    if (detecteted(ballRect, rec)) {
        let hitPosition = postion(ballRect, rec); 

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
    
    ball.style.transform = `translate(${ballx}px, ${bally}px)`
    bricksBreakid()
    if (!isPause) {
    requestAnimationFrame(moveBall);
    }
}



function detecteted(ballRect, rec) {
    return ballRect.x + ballRect.width > rec.x &&
        ballRect.x < rec.x + rec.width &&
        ballRect.y + ballRect.height > rec.y && 
        ballRect.y < rec.y + rec.height
}

function postion(ballRect, rec) {
  let ballCenter = ballRect.x + ballRect.width / 2; // مركز الكرة
  let paddleCenter = rec.x + rec.width / 2;         // مركز المضرب
  let hitPosition = ballCenter - paddleCenter;
  let direction = hitPosition / (rec.width / 2);
  return direction
}
var t;
function timer() {
    let timer = document.getElementById('timer')
    var sec = 1
    var min = 0
    let s = '0'
    let m = '0'
    t = setInterval(() => {
        if (!isPause) {
        timer.innerHTML = 'Timer: '+m+min+':'+s+sec;
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