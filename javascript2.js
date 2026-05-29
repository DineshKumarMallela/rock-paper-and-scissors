let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent =
      `Tie! Both chose ${humanChoice}`;
  }

  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;

    resultsDiv.textContent =
      `You Win! ${humanChoice} beats ${computerChoice}`;
  }

  else {
    computerScore++;

    resultsDiv.textContent =
      `You Lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent =
    `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    resultsDiv.textContent =
      "🎉 Congratulations! You won the game!";
  }

  if (computerScore === 5) {
    resultsDiv.textContent =
      "💻 Computer wins the game!";
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});