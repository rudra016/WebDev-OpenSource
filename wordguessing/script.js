const words = ['javascript', 'python', 'html', 'css', 'react', 'node', 'angular'];
let chosenWord = '';
let guessedLetters = [];
let attemptsLeft = 6;

const wordDisplay = document.getElementById('wordDisplay');
const letterInput = document.getElementById('letterInput');
const guessButton = document.getElementById('guessButton');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart');
function initGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attemptsLeft = 6;
    updateWordDisplay();
    messageDisplay.textContent = '';
    restartButton.style.display = 'none';
}
function updateWordDisplay() {
    const displayedWord = chosenWord.split('').map(letter => 
        guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');
    wordDisplay.textContent = displayedWord;
}
function makeGuess() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

 if (guessedLetters.includes(letter) || letter.length !== 1) {
        messageDisplay.textContent = 'Please guess a new letter.';
        return;
    }
 guessedLetters.push(letter);
    if (!chosenWord.includes(letter)) {
        attemptsLeft--;
        messageDisplay.textContent = `Wrong guess! Attempts left: ${attemptsLeft}`;
    } else {
        messageDisplay.textContent = 'Good guess!';
    }

    updateWordDisplay();

    if (attemptsLeft === 0) {
        messageDisplay.textContent = `Game Over! The word was: ${chosenWord}`;
        restartButton.style.display = 'block';
    } else if (!wordDisplay.textContent.includes('_')) {
        messageDisplay.textContent = 'Congratulations! You guessed the word!';
        restartButton.style.display = 'block';
    }
}
guessButton.addEventListener('click', makeGuess);
letterInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        makeGuess();
    }
});
restartButton.addEventListener('click', initGame);
initGame();
