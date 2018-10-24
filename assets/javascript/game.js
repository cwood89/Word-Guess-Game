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



function buildpuzzle() {
    startText = "";
    for (var i = 0;i < wordChoice.length; i++) {
        display.push("_");
    };
   
};

function startGame() {
    pickWord();
    buildpuzzle();
    updateView();
};

function pickWord() {
    wordChoice = words[Math.floor(Math.random() * words.length)];
};

function tryGuess(key) {
    var letterInWord = false;
    for( i = 0; i < wordChoice.length; i ++) {
         if ( wordChoice[i] === key ) {
            letterInWord = true;
        };
    };

    if (letterInWord) {
        for (var c = 0; c < wordChoice.length; c++) {
            if (wordchoice[c] === key) {
                display[i] = key;
            };
        };
    } else {
        wrongArr.push(key + " ");
    };
};

function updateView() {
    document.getElementById("currentword-text").textContent = display.join(" ");
    startText.innerHTML = "";
    
};

function checkWin() {
    if (!display.includes("_")) {
        wins++;
        alert("You Win"); 
    };
    startGame();
};

document.onkeypress = function(event) {
    var key = event.key;
    winsText = wins;
    guessRemainText.textContent = "Guesses Remaining: " + guess;
    letterGuessText.textContent = "Letters Guessed: " + wrongArr;
    updateView();
    tryGuess(key);
    checkWin();
    console.log(key);
    guess--;
};
startGame();














































// var words= {
// up: ["kobe", "quarters", "points", "defense", "center", "timeout"],
// hint: [],
// };
// var wins= 0;
// var guess= 7;
// 
// 
// var hintText = document.getElementById("hint-text");
// var wordUp = words.up[Math.floor(Math.random() * words.up.length)];
// var guessArr = wordUp.split(" ");
// var outputArr =[];
// var wrongArr =[];
// var display = [];
// var keyPress = [];
// // fill array with underscores 
// function underscore() {
//     for (var i = 0; i < wordUp.length; i++) {
//         display[i] = "_";
//         outputArr = display.join(" ");
//     };
    
//     currentWordText.textContent = outputArr;
// };

// var newGame = function() {
// guess= 7;
// outputArr =[];
// wrongArr = [];
// display =[];
// };

// if (guess > 0) {
    
//     document.onkeypress = function(event) {
//         var letter = event.key;
//         
//         winsText.textContent = "Wins: " + wins;
//          
//         keyPress = letter;
//         console.log(keyPress);
//        underscore(); 
//        guess--
    
//         if (wordUp[i] === keyPress) {
//                 display[i] = keyPress;
//                 outputArr.join(display[i]);
//                 console.log(display);
//             };
//             currentWordText.textContent = outputArr;
        
//         if (keyPress !== wordUp[i]) {
//                 wrongArr.join(keyPress + " ");
//                ;
//             }; 
            
         
//      };

//     // hintText.textContent = "Hint: " + hint;
    
// }