alert("I ALWAYS WIN! MUAHAHA");
var allAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p,", "q", "r", "s", "t", "u", "v", "w", "w", "y", "z"]

var compPick
var wins = 0;
var losses = 0;
var guessesLeft, guessedLetters, letterToGuess

function reset();
function display();

var random = Math.random() * allAlphabet.length
var result = Math.floor(random)

compPick = allAlphabet[result]
{
    return result 
    Math.floor(Math.random()*26)
}
document.onkeyup = function (event) {
    console.log(event.key)
    var userChoice = event.key

    // console.log(compPick === userChoice)
    if (guess === LettertoGuess){
        wins();
    }else if (GuessesLeft - 1 === 0) {

   lost();
    }else{
        fail(guess);
    } 
    display();
}
function display(){
    var winsP =document.getElementById("wins!");
    var loosesP =document.getElementById("looses")
    var guessesLeft =document.getElementById("guessed");
    winsP.innerHTML
}



console.log(compPick)
reset()
console.log(compPick)



// console.log(reset())
