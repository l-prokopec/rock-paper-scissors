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
        return "humanWinsRound";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You loose! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} looses to ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`);
        return "computerWinsRound";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("It's a draw!");
        return "draw";
    }
}


function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundWinner = playRound(humanSelection, computerSelection); 

        if ( roundWinner === "humanWinsRound") {
            humanScore += 1;
        }
        else if (roundWinner === "computerWinsRound") {
            computerScore += 1;
        }

        console.log(`Current score is: You ${humanScore} : Computer ${computerScore}`)
    }

    if (humanScore === 5) {
        return "humanIsWinner";
    }
    else if (computerScore === 5) {
        return "computerIsWinner"
    }
}

humanScore = 0;
computerScore = 0;

const gameWinner = playGame()


if (gameWinner === "humanIsWinner") {
    console.log("You won!");
}
else if (gameWinner === "computerIsWinner") {
    console.log("You lost!");
}