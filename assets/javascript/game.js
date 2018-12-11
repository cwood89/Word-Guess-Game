// global variables
var words = ["kobe", "quarters", "points", "defense", "center", "timeout"];
var wordChoice;
var display = [];
var wrongArr = [];
var wins = 0;
var guess = 7;

// display variables
var startText = document.getElementById("start-text");
var currentWordText = document.getElementById("currentword-text");
var winsText = document.getElementById("wins-text");
var guessRemainText = document.getElementById("guessremain-text");
var letterGuessText = document.getElementById("lettterguess-text");



function buildPuzzle() {
    wordChoice = words[Math.floor(Math.random() * words.length)];
    console.log(wordChoice);
    for (var i = 0; i < wordChoice.length; i++) {
        display.push("_");
    };
    currentWordText.textContent = display.join(" ");
};


function newGame() {
    display = [];
    wrongArr = [];
    guess = 7;
    buildPuzzle();
}

function tryGuess(key) {
    var letterInWord = false;
    for (i = 0; i < wordChoice.length; i++) {
        if (wordChoice[i] === key) {
            letterInWord = true;
            display[i] = key;
        };
    };

    if (letterInWord) {
        currentWordText.textContent = display.join(" ");
    } else {
        wrongArr.push(key + " ");
        guess--;
    };
};


function checkWin() {
    if (!display.includes("_")) {
        wins++;
        alert("You Win");
        newGame();
    };
    if (guess === 0) {
        alert("You Lose")
        newGame();
    }
};

document.onkeypress = function (event) {
    var key = event.key;
    winsText = wins;
    startText.innerHTML = "";
    guessRemainText.textContent = "Guesses Remaining: " + guess;
    letterGuessText.textContent = "Letters Guessed: " + wrongArr;
    tryGuess(key);
    checkWin();
    console.log(key);
};
newGame();
