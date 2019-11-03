//created a for loop and a holder for the letters guessed
var letters = ["a", "b", "c"];

var guessedLetters = [];

var letterToGuess = null;

// Every guess reduced by one starting out 9
var guessesLeft = 9;

// Wins losses, guesses are counted
var wins = 0;
var losses = 0;
//Need functions to pass the guesses with
var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  //This displays the guesses guessed so the player doesn't repeat them
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(
    ", "
  );
};

// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();

// This function will capture the keyboard clicks.
document.onkeydown = function(event) {
  // It's going to reduce the guesses by one
  guessesLeft--;

  // Lowercase the letter
  var letter = event.key.toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();

  // We'll check if there's a match.
  if (letter === letterToGuess) {
    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then we'll reset the game
    reset();
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {
    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    // Then we'll call the reset.
    reset();
  }
};
