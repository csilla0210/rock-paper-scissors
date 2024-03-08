let playerScore = 0;
let computerScore = 0;

// for (let i = 1; i <= 5; i++) {
//     playGame();
// }
// console.log(winnerMessage());

function playGame() {
    const playerSelection = prompt("Choose: Rock, Paper or Scissors?");
    const computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
    roundResult(round);
    console.log(currentPoints());
}

function winnerMessage() {
    if (playerScore > computerScore) {
        return "You won!";
    } else if(playerScore < computerScore) {
        return "You lose!";
    } else {
        return "Draw!";
    }
}

function currentPoints() {
    return `Playerscore: ${playerScore}, ComputerScore: ${computerScore}.`;
}

function roundResult(playRound) {
    if (playRound.includes("You Lose!")) {
        computerScore++;
    } else if (playRound.includes("You Win!")) {
        playerScore++;
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1:
            return "Rock";
            case 2: 
            return "Scissors";
            case 3: 
            return "Paper";
    }
}

function playRound(playerSel, computerSelection) {
    const playerSelection = playerSel.charAt(0).toUpperCase() + playerSel.substring(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        } 
    }  else {
        if (computerSelection === "Rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    }
}