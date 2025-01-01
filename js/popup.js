const popup = document.querySelector('.popup');
const shadowBackground = document.querySelector('.shadow-background');
const btnPause = document.getElementById('pause');
const timerDisplay = document.getElementById('timer');
const livesDisplay = document.getElementById('lives');

function createImage() {
    const img = document.createElement('img');
    img.src = './styles/logo.jpg';
    return img;
}

function createHeading(text) {
    const heading = document.createElement('h2');
    heading.textContent = text;
    return heading;
}

function createButton(text, id = '', className = '') {
    const button = document.createElement('button');
    button.textContent = text;
    if (id) button.id = id;
    if (className) button.className = className;
    return button;
}

function showPopup() {
    shadowBackground.style.display = 'block';
    popup.classList.add('open-popup');
}

function hidePopup() {
    popup.classList.remove('open-popup');
    shadowBackground.style.display = 'none';
}

function clearPopup() {
    popup.innerHTML = '';
}

function resetGameState() {
    gameState.ball.x = 300;
    gameState.ball.y = 520;
    gameState.ball.velocityX = -3;
    gameState.ball.velocityY = -3;
    gameState.isPaused = false;
    gameState.score = 0;
}

function handlePlayButton() {
    document.getElementById('play').addEventListener('click', () => {
        startTimer();
        hidePopup();
        resetGameState();
        drawBricks();
        requestAnimationFrame(moveBall);
    });
}

function handleResumeButton() {
    document.getElementById('resume').addEventListener('click', () => {
        hidePopup();
        gameState.isPaused = false;
        requestAnimationFrame(moveBall);
    });
}

function handleRestartButton() {
    document.getElementsByClassName('restart')[0].addEventListener('click', () => {
        hidePopup();
        timerDisplay.innerHTML = 'Timer: 00:00';
        scoreDisplay.innerHTML = 'Score: 0';
        livesDisplay.innerHTML = 'Lives: 3';
        bricksContainer.innerHTML = '';
        
        livesNum = 3;
        paddlePosition = 235;
        resetGameState();
        
        stopTimer();
        startTimer();
        drawBricks();
        requestAnimationFrame(moveBall);
    });
}

function handleQuitButton() {
    document.getElementById('quit').addEventListener('click', () => {
        hidePopup();
        bricksContainer.innerHTML = '';
        startGame();
    });
}

function pauseGame() {
    gameState.isPaused = true;
    clearPopup();
    showPopup();
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading('Paused'));
    popup.appendChild(createButton('Continue', 'resume'));
    popup.appendChild(createButton('Restart', '', 'restart'));
    
    handleRestartButton();
    handleResumeButton();
}

function startGame() {
    clearPopup();
    
    popup.appendChild(createImage());
    popup.appendChild(createButton('Play', 'play'));
    
    showPopup();
    handlePlayButton();
}

function gameOver() {
    stopTimer();
    clearPopup();
    showPopup();
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading('GAME OVER'));
    
    const timeElement = document.createElement('h3');
    timeElement.textContent = timerDisplay.textContent;
    popup.appendChild(timeElement);
    
    const scoreElement = document.createElement('h3');
    scoreElement.textContent = scoreDisplay.textContent;
    popup.appendChild(scoreElement);
    
    popup.appendChild(createButton('Restart', '', 'restart'));
    popup.appendChild(createButton('Quit', 'quit'));
    
    handleQuitButton();
    handleRestartButton();
}

btnPause.addEventListener('click', pauseGame);

startGame();
