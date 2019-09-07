alert("I ALWAYS WIN! MUAHAHA");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p,", "q", "r", "s", "t", "u", "v", "w", "w", "y", "z"]

var wins = 0;
var losses = 0;
var chances = 15;
var guessArray = []

var confirmPsychic = confirm("Are you a psychic?");

if (userGuess) {
    alert("Is there a chance you have powers of the supernatural?")
    alert("See if you can guess which letter the computer is thinking of.")
}
else {
    alert("Wrong Answer,Try Again");
    location.reload();


//set up key funcition for key press

document.onkeyup = function (event) {
    console.log(event.key)
    var userGuess = event.key;

    var computerGuess =
        computerChoice[Math.floor(Math.random() * computerChoices.length)];

    // checks 2 insure if the user is in the array of letters.
    if (computerChoices.includes(userGuess)) {
        //if the user guess matches computer guess, u must have ESP
        if (userGuess === computerGuess) {
            wins++;
            guessArray.push(useGuess);
            chances--;
        }
    }
    //if user guess doesn't match,dont quit your day job haha

    else if (userGuess !== computerGuess) {
        losses++;
        guessArray.push(userGuess);
        chances--;

    }
    //chances =0

    if (chances === 0) {
        alert("Nice try. You're not a Psychic!")
        location.reload();
    }
    //looses reaches 10
    else if (looses === 10) {
        alert(
            "You have guessed wrong 10 times. Don't quit your day job."
        );
        location.reload();
    }
}
    //user guess wins 10
   if (wins === 10) {
    alert(
        "Impressive Psychic skills.Good Job!"
    );
    location.reload();

} else {
    //if the user enters any characters other than a letter
    alert("That was not a letter!")
}

var html =
    "<p>you choose:" +
    userGuess +
    "</p" +
    "<P>You previously guesses:" +
    guessArray +
    "</p>" +
    "<p>wins: " +
    wins +
    "</p>" +
    "<p>wins: " +
    wins +
    "</p>" +
    "<p>losses:" +
    losses +
    "</p>" +
    "<p> chances:" +
    chances +
    "</.>";

//set the inner HTML contents of the #game div to this html string
document.querySelector("#game").innerHTML = html;

