let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let gameActive = true;

function makeMove(cellIndex) {
    if (!gameActive || gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;

    if (checkWin()) {
        document.querySelector('.status').textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (gameBoard.indexOf('') === -1) {
        document.querySelector('.status').textContent = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.querySelector('.status').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

    document.querySelector('.status').textContent = "Player X's turn";
}

resetBoard();
