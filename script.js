
let score = 0;
let playAgain = true;

while (playAgain === true) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = prompt("Guess a number between 1 and 10:");

  if (userGuess === randomNumber.toString()) {
    alert("Congratulations! You guessed the correct number.");
    score++;
  } else {
    alert(`Sorry, the correct number was ${randomNumber}. You lose.`);
    score--;
  }

  playAgain = confirm("Do you want to play again?");

  if (playAgain === false) {
    alert(`Game over. Your final score is ${score}.`);
  }
}

//Requirements/plan:
// - We want a game where a player takes a guess at a number between 1 and 10 // complete?
// - You should keep score, and if a player guesses correctly, you should add to the score
// - We need a method to keep score, we need to assign score something and can add the score correctly and score is displayed correctly
// - You should ask the player if they want to continue the game, and keep playing until they refuse // complete?
