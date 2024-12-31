let paddle = document.getElementById("paddle");

let moveSpeed = 5;
let isMovingLeft = false;
let isMovingRight = false;
let paddlePosition = 235;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "ArrowLeft") {
    isMovingLeft = true;
  } else if (e.key == "ArrowRight") {
    isMovingRight = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "ArrowLeft") {
    isMovingLeft = false;
  } else if (e.key === "ArrowRight") {
    isMovingRight = false;
  }
}



function movePaddle() {
  let game = div.getBoundingClientRect()
  let paddleRec = paddle.getBoundingClientRect()

  if (isMovingLeft && paddlePosition > 0 && !isPause) {
    paddlePosition -= moveSpeed;
  } else if (isMovingRight && paddlePosition < game.width - paddleRec.width && !isPause) {
    paddlePosition += moveSpeed;
  }

  paddle.style.transform = `translateX(${paddlePosition}px)`;

  requestAnimationFrame(movePaddle);
}

requestAnimationFrame(movePaddle);
