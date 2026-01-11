function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    round.textContent = `You win! ${
      humanChoice[0].toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
    return "humanWinsRound";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    round.textContent = `You loose! ${
      humanChoice[0].toUpperCase() + humanChoice.slice(1)
    } looses to ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
    return "computerWinsRound";
  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    round.textContent = "It's a draw!";
    return "draw";
  }
}

let humanScore = 0;
let computerScore = 0;

const controls = document.getElementById("controls");
const round = document.getElementById("round");
const result = document.getElementById("result");
const playDiv = document.getElementById("playDiv");
const playButton = document.createElement("button");
playButton.textContent = "Play again!";

controls.addEventListener("click", (e) => {
  if (humanScore >= 5 || computerScore >= 5) return;
  const target = e.target;

  let humanMove;

  switch (target.id) {
    case "rockButton":
      humanMove = "rock";
      break;
    case "paperButton":
      humanMove = "paper";
      break;
    case "scissorsButton":
      humanMove = "scissors";
      break;
    default:
      return; // klik mimo tlačítka
  }

  const computerMove = getComputerChoice();
  const roundWinner = playRound(humanMove, computerMove);

  if (roundWinner === "humanWinsRound") {
    humanScore += 1;
  } else if (roundWinner === "computerWinsRound") {
    computerScore += 1;
  }

  result.textContent = `Current score is: You ${humanScore} : Computer ${computerScore}`;

  if (humanScore === 5) {
    result.textContent = `You won!\nThe final score is: You ${humanScore} : Computer ${computerScore}`;
    playDiv.appendChild(playButton);
  } else if (computerScore === 5) {
    result.textContent = `You lost!\nThe final score is: You ${humanScore} : Computer ${computerScore}`;
    playDiv.appendChild(playButton);
  }
});

playButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  playButton.remove();
  round.textContent = "";
  result.textContent = "";
});
