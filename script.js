
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


//#1 Create a function
//#2 Fix random number syntax, should be camel case - line 8 and 12
//#3 Need a starting value for score, should be 0
//#4 On line 13 this should be score-- as otherwise it would keep increasing the players score
//#5 On line 19 score should equal score and not randomNumber

//#6 Function undefined - check if function required

//Requirements/plan:
// - We want a game where a player takes a guess at a number between 1 and 10 // complete?
// - You should keep score, and if a player guesses correctly, you should add to the score
// - We need a method to keep score, we need to assign score something and can add the score correctly and score is displayed correctly
// - You should ask the player if they want to continue the game, and keep playing until they refuse // complete?
