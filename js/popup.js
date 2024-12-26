let pop = document.querySelector('.popup');
let btnpause = document.getElementById('pause')
let brickss = document.getElementById('bricks-container')

btnpause.addEventListener('click', ()=> {
    isPause = true
    pop.innerHTML = ''
    pause()
    pop.classList.add("open-popup");
})

function pause() {
    let img = document.createElement('img');
    img.src = './styles/logo.jpg';
    let h2 = document.createElement('h2');
    h2.textContent = 'Paused';
    let btn = document.createElement('button');
    btn.textContent = 'Resume';
    btn.id = 'resume'
    let btn2 = document.createElement('button');
    btn2.textContent = 'Quit';
    btn2.id = 'quit'
    pop.appendChild(img)
    pop.appendChild(h2);
    pop.appendChild(btn);
    pop.appendChild(btn2);
    quit()
    resume()
}


function start() {
    pop.innerHTML = ''
    let img = document.createElement('img');
    img.src = './styles/logo.jpg';
    let btn = document.createElement('button');
    btn.textContent = 'Play';
    btn.id = 'play'
    pop.appendChild(img)
    pop.appendChild(btn);
    pop.classList.add("open-popup");
    play()
}



start();
function play() {
let play = document.getElementById('play')
play.addEventListener('click', ()=> {
    popup.classList.remove("open-popup")
    ballX = 400;
    ballY = 500;
    velocityX = -3;
    velocityY = -3;
    isPause = false;
    drawBricks();
    requestAnimationFrame(moveBall);
})
}

function gameOver() {
    pop.innerHTML = ''
    pop.classList.add("open-popup");
    let img = document.createElement('img');
    img.src = './styles/logo.jpg';
    let btn = document.createElement('button');
    btn.textContent = 'Restart';
    btn.className = 'restart'
    let btn2 = document.createElement('button');
    btn2.textContent = 'Quit';
    btn2.id = 'quit'
    let h2 = document.createElement('h2');
    h2.textContent = 'GAME OVER';
    pop.appendChild(img)
    pop.appendChild(h2)
    pop.appendChild(btn);
    pop.appendChild(btn2)
    quit()
    restart()
}

function resume() {
    let btnresume = document.getElementById('resume')
    btnresume.addEventListener('click', ()=> {
        popup.classList.remove("open-popup")
        isPause = false;
        requestAnimationFrame(moveBall);
    })
}

function restart() {
    let btnrestart = document.getElementsByClassName('restart')
    btnrestart[0].addEventListener('click', ()=> {
        brickss.innerHTML = ''
        popup.classList.remove("open-popup");
        ballX = 400;
        ballY = 500;
        velocityX = -3;
        velocityY = -3;
        isPause = false;
        drawBricks();
        requestAnimationFrame(moveBall);
    })
}

function quit() {
    let btmquit = document.getElementById('quit')
    btmquit.addEventListener('click', ()=> {
        popup.classList.remove("open-popup")
        brickss.innerHTML = ''
        start()
    })
}