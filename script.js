let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let roundCounter = 0;

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const nextRound = document.querySelector("button.next-round");
const roundResultMessage = document.querySelector(".round-result-message p");
const roundWin = document.querySelector("h2.you-won");
const roundLose = document.querySelector("h2.you-lose");
const roundDraw = document.querySelector("h2.draw");
const roundResultTitles = document.querySelectorAll(".round-result-message h2");

rock.addEventListener("click", () => {
    playerChoice = "Rock";
    playGame();
    changeView();
})
paper.addEventListener("click", () => {
    playerChoice = "Paper";
    playGame();
    changeView();
})
scissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    playGame();
    changeView();
})
nextRound.addEventListener("click", () => {
    changeView();
})

function playGame() {
    computerChoice = getcomputerChoice();
   let result = playRound(playerChoice, computerChoice);
    displayChoices();
    roundResult(result);
    roundCounter++;
    countRounds();
}

function resetGame() {
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
}

function countRounds() {
    const roundCounterText = document.querySelector(".round-container .counter");
    const roundCounterMax = document.querySelector(".round-container .counter span");
    roundCounterText.textContent = roundCounter;
    roundCounterText.appendChild(roundCounterMax);
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

function roundResult(playRound) {
    const computerScoreText = document.querySelector(".scoreboard .computer.points");
    const playerScoreText = document.querySelector(".scoreboard .player.points");
    if (playRound === -1) {
        computerScore++;
    } else if (playRound === 1) {
        playerScore++;
    }
    console.log(playRound);
    computerScoreText.textContent = `${computerScore}`;
    playerScoreText.textContent = playerScore;
}

function getcomputerChoice() {
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

function playRound(playerChoice, computerChoice) {
    roundResultTitlesInvisible();
    if (playerChoice === computerChoice) {
        roundResultMessage.textContent = "It's a";
        roundDraw.classList.remove("invisible");
        return 0;
    }
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            roundComputerWinMessage();
            roundLose.classList.remove("invisible");
            return -1;
        } else {
            roundPlayerWinMessage();
            roundWin.classList.remove("invisible");
            return 1;
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            roundComputerWinMessage();
            roundLose.classList.remove("invisible");
            return -1;
        } else {
            roundPlayerWinMessage();
            roundWin.classList.remove("invisible");
            return 1;
        } 
    }  else {
        if (computerChoice === "Rock") {
            roundComputerWinMessage();
            roundLose.classList.remove("invisible");
            return -1;
        } else {
            roundPlayerWinMessage();
            roundWin.classList.remove("invisible");
            return 1;
        }
    }
}


function roundResultTitlesInvisible () {
    roundResultTitles.forEach((title) => {
        title.classList.add("invisible");
    })
}

function roundComputerWinMessage() {
    roundResultMessage.textContent = `${computerChoice} beats ${playerChoice}!`;
}

function roundPlayerWinMessage() {
    roundResultMessage.textContent = `${playerChoice} beats ${computerChoice}!`; 
}

function displayChoices() {
    const playerChoiceImage = document.querySelector(".round-result .player-choice img");
    const computerChoiceImage = document.querySelector(".round-result .computer-choice img");
    playerChoiceImage.setAttribute("src", `images/${playerChoice.toLowerCase()}.png`);
    computerChoiceImage.setAttribute("src", `images/${computerChoice.toLowerCase()}.png`);
}

function changeView() {
    const choose = document.querySelector(".playground .choose");
    const resultView = document.querySelector(".playground .round-result");
    choose.classList.toggle("invisible");
    resultView.classList.toggle("invisible");
}
