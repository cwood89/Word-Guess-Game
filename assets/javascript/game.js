var words= {
up: ["kobe", "quarters", "points", "defense", "center", "timeout"],
hint: [],
};
var wins= 0;
var guess= 7;
var startText = document.getElementById("start-text");
var currentWordText = document.getElementById("currentword-text");
var winsText = document.getElementById("wins-text");
var guessRemainText = document.getElementById("guessremain-text");
var letterGuessText = document.getElementById("lettterguess-text");
var hintText = document.getElementById("hint-text");
var wordUp = words.up[Math.floor(Math.random() * words.up.length)];
var guessArr = wordUp.split(" ");
var outputArr =[];
var wrongArr =[];
var display = [];

// fill array with underscores 
var start = function() {
    for (var i = 0; i < wordUp.length; i++) {
        display[i] = "_ ";
        outputArr = display[i] + " ";
    };
    
    currentWordText.textContent = outputArr;
};

var newGame = function() {
guess= 7;
outputArr =[];
wrongArr = [];
display =[];
};

if (guess > 0) {
    
    document.onkeyup = function(event) {
        var letter = event.key;
        startText.innerHTML = "";
        winsText.textContent = "Wins: " + wins;
        guessRemainText.textContent = "Guesses Remaining: " + guess;
        letterGuessText.textContent = "Letters Guessed: " + wrongArr; 
        start();
        console.log(display);
        for ( var i = 0; i < wordUp.length; i++) {
            if (wordUp[i] === letter) {
                outputArr[i] = letter;
            };
        };

        // if (
        // wrongArr.push(letter + " ");
        // guess--;
        // };
        

    
    //              wrongArr.push(letter);
    //             guess--;
    //           };
    // //         };
    // //         console.log(wrongArr);
    // //     };
    

    // // // if (guessArray === emptyArr) {
    // // //         wins++;
    // // //      };
    

    
        
         
        
    //     // hintText.textContent = "Hint: " + hint;
    };
};