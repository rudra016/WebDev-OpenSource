let boardState = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let playWithComputer = false;
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const cells = document.querySelectorAll('.cell');
        const message = document.getElementById('message');
        const playWithComputerCheckbox = document.getElementById('playWithComputer');

        function checkWinner() {
            for (const combination of winCombinations) {
                const [a, b, c] = combination;
                if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                    return boardState[a];
                }
            }

            if (boardState.every(cell => cell !== '')) {
                return 'draw';
            }

            return null;
        }

        function updateMessage(winner) {
            if (winner === 'X' || winner === 'O') {
                message.innerText = `Player ${winner} wins! 🎉`;
            } else if (winner === 'draw') {
                message.innerText = "It's a draw! 😕";
            }
        }

        function makeMove(index) {
            if (boardState[index] === '' && !checkWinner()) {
                boardState[index] = currentPlayer;
                cells[index].innerText = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

                const winner = checkWinner();
                if (winner) {
                    updateMessage(winner);
                }

                if (playWithComputer && currentPlayer === 'O') {
                    setTimeout(makeComputerMove, 500); // Delay computer move slightly for better user experience
                }
            }
        }

        function makeComputerMove() {
            const emptyCells = boardState.reduce((acc, cell, index) => {
                if (!cell) acc.push(index);
                return acc;
            }, []);

            if (emptyCells.length === 0 || !playWithComputer || checkWinner()) return;

            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const computerMove = emptyCells[randomIndex];
            makeMove(computerMove);
        }

        function toggleComputer() {
            playWithComputer = !playWithComputer;
            resetGame();
        }

        function resetGame() {
            boardState = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            cells.forEach(cell => cell.innerText = '');
            message.innerText = '';
        }