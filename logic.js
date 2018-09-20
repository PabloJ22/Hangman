//arrays and variables for holding data
const wordOptions = ["blobfish", "angler", "viperfish", "mermaid", "merman", "shark", "tiburon"]
let chosenWord = "";
let letterInWord = [];
let numBlanks = 0;
let blanksAndSuccesses = [];
let wrongGuesses = [];

//Game counters
let winCount = 0;
let lossCount = 0;
let guessesLeft = 0;



//Game functions 

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    letterInWord = selectedWord.split('');
    numBlanks = letterInWord.length;

    //reset the board
    guessesLeft = 9;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    //populate blanks and successes 
    for (let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");

    };

    //Change HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;


    console.log(selectedWord);
    console.log(letterInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
};

function checkLetters(letter) {
    let isLetterInWord = false;

    for (let i = 0; i < numBlanks; i++) {

        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            blanksAndSuccesses[i] = letter;
        }
    };

    if (isLetterInWord) {
        for (let i = 0; i < numBlanks; i++) {

            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] == letter;
            } else {
                wrongGuesses.push(letter);
                guessesLeft--;
            }

            console.log(blanksAndSuccesses);
        };
    };
};

function roundComplete() {

    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
    // document.getElementById("wordToGuess").innerHTML =
    //     document.getElementById("wordToGuess").innerHTML =

    if (letterInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won");

        document.getElementById("winCount").innerHTML = winCount;
        startGame();
    } else if (guessesLeft == 0) {
        lossCount++;
        alert("you lost");

        document.getElementById("lossCount").innerHTML = lossCount;
        startGame();
    }
};


// Main Process


//initial start of game code
startGame();

//Register key clicks
// document.onkeyup = function (event) {
//     // let letterGuessed = String(event.keyCode).toLowerCase();

//     console.log(letterGuessed);
// }

window.addEventListener('keydown', function (event) {

    letterGuessed = event.key;
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);


});