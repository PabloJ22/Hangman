//arrays and variables for holding data
const wordOptions = ["blobfish", "angler", "viperfish", "mermaid", "merman", "shark", "tiburon"]
let chosenWord = "";
let letterInChosenWord = [];
let numBlanks = 0;
let blanksAndSuccesses = [];
let wrongGuesses = [];

//Game counters
let winCount = 0;
let lossCount = 0;
let numGuesses = 9;



//Game functions 

function startGame() {
    numGuesses = 9;
    chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    letterInChosenWord = chosenWord.split('');
    numBlanks = letterInChosenWord.length;


    wrongGuesses = [];
    blanksAndSuccesses = [];

    //populate blanks and successes 
    for (let i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");

    }

    //Change HTML
    document.getElementById("pageWordBlanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("winCount").innerHTML = winCount;
    document.getElementById("lossCount").innerHTML = lossCount;


    console.log(chosenWord);
    console.log(letterInChosenWord);
    console.log(numBlanks);
    console.log("blancks and sucesses in startGame()" + blanksAndSuccesses);

};

function checkLetters(letter) {
    let isLetterInWord = false;

    for (let i = 0; i < numBlanks; i++) {

        if (chosenWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (let j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log("this should show specific letters to be filled in the blanks:: " + blanksAndSuccesses);
    } else {
        wrongGuesses.push(letter);
        numGuesses--;

    }
};

function roundComplete() {
    console.log("WinCount: " + winCount + " | LossCount: " + lossCount + " | NumGuesses: " + numGuesses);


    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("pageWordBlanks").innerHTML = blanksAndSuccesses.join(" ");
    console.log("this is filling in the array with a '_' " + blanksAndSuccesses);
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");

    if (letterInChosenWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won");

        document.getElementById("winCount").innerHTML = winCount;
        startGame();
    } else if (numGuesses === 0) {
        lossCount++;
        alert("you lost");

        document.getElementById("lossCount").innerHTML = lossCount;
        startGame();
    }
};


// Main Process


//initial start of game code
startGame();


//recognizing what key is pressed and the functional steps to follow. 
window.addEventListener('keydown', function (event) {

    letterGuessed = event.key;
    checkLetters(letterGuessed);
    roundComplete();

    console.log("this is letter guessed: " + letterGuessed);


});