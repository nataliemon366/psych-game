alert("I ALWAYS WIN! MUAHAHA");
var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p,", "q", "r", "s", "t", "u", "v", "w", "w", "y", "z"]

var wins = 0;
var losses = 0;
var chances = 15;
var guessArray =[]

var confirmPsychics = confirm("Are you a psychic?");

if (confirmPsychic) {
    alert("Is there a chance you have powers of the supernatural?")
    alert("See if you can guess which letter the computer is thinking of.")
}
else {
    alert("Wrong Answer,Try Again");
    location.reload();
}

//set up key funcition for key press

document.onkeyup = function (event) {
    console.log(event.key)
    var userGuess = event.key;

    var computerGuess =
    computerChoice[Math.floor(Math.random()* computerChoices.length)];

    // chech 2 insure if the user is in the array of letters.


    console.log(compPick === userChoice)
    if (guess === LettertoGuess) {
        wins();
    } else if (GuessesLeft - 1 === 0) {

        lost();
    } else {
        fail(guess);
    }
    display();
}
function display() {
    var winsP = document.getElementById("wins!");
    var loosesP = document.getElementById("looses")
    var guessesLeft = document.getElementById("guessed");
    winsP.innerHTML = wins;
    lossesP.innerHTML = loses;
    guessesLeft.innerHTML = guessesLeft;
    letterGuessed.innerHTML = guessedLetters.join(',')
}
function win() {
    wins++;
    resetGame();
}
function lost() {
    losses++;
    resetGame();
}
function reset(letter) {
    guessesLeft = 12;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to Guess:" + letterToGuess);
}


