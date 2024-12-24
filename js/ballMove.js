let ball = document.getElementById('ball')

let velocityX = -3
let velocityY = -3

function moveBall() {

    let newX = ball.offsetLeft + velocityX;
    let newY = ball.offsetTop + velocityY;

    if (newX < 10 || newX > 730) {
        velocityX *= -1;
    } else if (newY < 10 || newY > 550) {
        velocityY *= -1;
    }

    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
    requestAnimationFrame(moveBall);
    
}

moveBall()
