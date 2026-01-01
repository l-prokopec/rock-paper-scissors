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
    // Round logic
}

humanScore = 0;
computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);