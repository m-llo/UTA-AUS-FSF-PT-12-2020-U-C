//javascript code goes here
// As a user, I want to start the game by clicking on a button. 

// * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.

// * As a user, I want the game to be timed. 

// * As a user, I want to win the game when I have guessed all the letters in the word.

// * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

// * As a user, I want to see my total wins and losses on the screen. 

// When a user presses a letter key, the user's guess should be captured as a key event.

// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

// * When a user wins or loses a game, a message should appear and the timer should stop. 

// * When a user clicks the start button, the timer should reset. 

// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

var startGame = document.querySelector("start-button")
var mysteryWord = document.querySelector(".word-blanks");
var winCount = document.querySelector(".win");
var loseCount = document.querySelector(".lose");
var timerCount = document.querySelector(".timer-count");


// let timer = 10
let wins = 0;
let losses = 0;

// as a user, I want to start the game by clicking on a button.
// click start buttion event listener

startGame.addEventListener("click", setTime());

var timeLeft = 10;
    
// timer starts
// function gameStart() {
//     // Sets interval in variable
//     let timeLeft = 10;
//     var timer = setInterval(function() {
//       timeLeft--;
  
//       if(timeLeft === 0) {
//         // Game over
//         clearInterval(timer);
//         // Calls function to create and append image
//         // gameOver();
//       }
  
//     }, 1000);
//   }
  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerCount.textContent = secondsLeft;
     
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }



