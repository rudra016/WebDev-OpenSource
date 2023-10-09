const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input"),
    scoreElement = document.querySelector(".SCORE span");

let word, maxGuesses, incorrectLetters = [], correctLetters = [], score = 0;

function updateScore() {
    scoreElement.innerText = score;
}

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    if (word.length <= 5) {
        maxGuesses = 6;
    } else if (word.length > 5 && word.length <= 10) {
        maxGuesses = 8;
    } else {
        maxGuesses = 10;
    }
    correctLetters = [];
    incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    score = 0;
    updateScore();

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();



function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                    score += 10;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
            score -= 5;
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
        updateScore();
    }
    typingInput.value = "";

    setTimeout(() => {
        if (correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if (maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
