// javascript
const gameBoard = document.getElementById('game-board');
const score = document.getElementById('score');
let gameInterval;
let moleInterval;
let moleCount = 0;

function createBoard() {
    for (let i = 0; i < 16; i++) {
        const hole = document.createElement('div');
        hole.classList.add('hole');
        hole.addEventListener('click', whackMole);
        gameBoard.appendChild(hole);
    }
}

function whackMole(e) {
    const hole = e.target;
    const mole = hole.querySelector('.mole');
    if (mole) {
        hole.removeChild(mole);
        moleCount++;
        score.textContent = `Score: ${moleCount}`;
    }
}

function startGame() {
    gameInterval = setInterval(() => {
        const holes = document.querySelectorAll('.hole');
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        const mole = document.createElement('div');
        mole.classList.add('mole');
        randomHole.appendChild(mole);
    }, 1000);

    moleInterval = setInterval(() => {
        const moles = document.querySelectorAll('.mole');
        moles.forEach(mole => mole.parentElement.removeChild(mole));
    }, 2000);
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(moleInterval);
}

createBoard();
startGame();