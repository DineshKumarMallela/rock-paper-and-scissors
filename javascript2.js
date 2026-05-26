function playGame() {

    // Scores
    let humanScore = 0;
    let computerScore = 0;
  
    // Computer choice
    function getComputerChoice() {
  
      let randomNumber = Math.floor(Math.random() * 3);
  
      if (randomNumber === 0) {
        return "rock";
      } else if (randomNumber === 1) {
        return "paper";
      } else {
        return "scissors";
      }
  
    }
  
    // Human choice
    function getHumanChoice() {
  
      let choice = prompt("Enter rock, paper, or scissors");
  
      return choice;
  
    }
  
    // One round
    function playRound(humanChoice, computerChoice) {
  
      // Make input lowercase
      humanChoice = humanChoice.toLowerCase();
  
      // Tie
      if (humanChoice === computerChoice) {
  
        console.log("It's a tie!");
  
      }
  
      // Human wins
      else if (
        humanChoice === "rock" &&
        computerChoice === "scissors"
      ) {
  
        console.log("You win! Rock beats Scissors");
  
        humanScore++;
  
      }
  
      else if (
        humanChoice === "paper" &&
        computerChoice === "rock"
      ) {
  
        console.log("You win! Paper beats Rock");
  
        humanScore++;
  
      }
  
      else if (
        humanChoice === "scissors" &&
        computerChoice === "paper"
      ) {
  
        console.log("You win! Scissors beats Paper");
  
        humanScore++;
  
      }
  
      // Computer wins
      else {
  
        console.log(
          `You lose! ${computerChoice} beats ${humanChoice}`
        );
  
        computerScore++;
  
      }
  
      // Show scores
      console.log("Human Score:", humanScore);
      console.log("Computer Score:", computerScore);
  
    }
  
    // Play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
  
    playRound(getHumanChoice(), getComputerChoice());
  
    playRound(getHumanChoice(), getComputerChoice());
  
    playRound(getHumanChoice(), getComputerChoice());
  
    playRound(getHumanChoice(), getComputerChoice());
  
    // Final winner
    if (humanScore > computerScore) {
  
      console.log("You won the game!");
  
    } else if (computerScore > humanScore) {
  
      console.log("Computer won the game!");
  
    } else {
  
      console.log("The game is a tie!");
  
    }
  
  }
  
  // Start game
  playGame();