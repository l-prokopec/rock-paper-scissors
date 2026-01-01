function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper"
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    input = window.prompt("Choose: rock, paper, scissors");
    return input.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`);
        return "humanWins";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You loose! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} looses to ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`);
        return "computerWins";
    }
    else {
        console.log("It's a draw!");
        return "draw";
    }
}

humanScore = 0;
computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const winner = playRound(humanSelection, computerSelection);

if (winner === "humanWins") {
    humanScore += 1;
}
else if (winner === "computerWins") {
    computerScore += 1;
}

console.log(`Current score is: You ${humanScore} : Computer ${computerScore}`)