let paddle = document.getElementById("paddle");

let moveSpeed = 5;
let isMovingLeft = false;
let isMovingRight = false;

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
  const paddleLeft = paddle.offsetLeft;

  if (isMovingLeft && paddleLeft > 70) {
    paddle.style.left = paddleLeft - moveSpeed + "px";
  } else if (isMovingRight && paddleLeft < 670) {
    paddle.style.left = paddleLeft + moveSpeed + "px";
  }

  requestAnimationFrame(movePaddle);
}

movePaddle();
