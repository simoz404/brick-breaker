let ball = document.getElementById('ball')

let velocityX = 3
let velocityY = 3

function moveBall() {

    let newX = ball.offsetLeft + velocityX;
    let newY = ball.offsetTop + velocityY;

    let paddle = document.getElementById("paddle");
    var rect = paddle.getBoundingClientRect();
    var rect2 = ball.getBoundingClientRect();

    if (newX < 10 || newX > 730) {
        velocityX *= -1;
    } else if (newY < 10 || ((rect.right < rect2.right || rect.left > rect2.left) && rect.top <= rect2.top+16.5)) {
        velocityY *= -1;
    }
    //console.log(ball.offsetTop);
    
    // console.log(rect.top);
    // console.log(rect2.top);
    
    // if ((rect.right >= rect2.right && rect.left <= rect2.left && rect.top <= rect2.top+16.5)) {
    //     console.log("here");
        
    //     velocityY *= -1;
        
    // }
    // console.log(rect.right, rect.left);
    // console.log(rect2.right, rect2.left);

    // if (newY >= paddle.offsetLeft && newY <= paddle.offsetLeft + 70) {

    //     console.log('here');
        
    // }
    
    

    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
    requestAnimationFrame(moveBall);
    
}

moveBall()
