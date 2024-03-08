let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let roundCounter = 1;

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const nextRound = document.querySelector("button.next-round");
const newGameButton = document.querySelector("button.new-game");
const roundResultMessage = document.querySelector(".round-result-message p");
const roundWin = document.querySelector("h2.you-won");
const roundLose = document.querySelector("h2.you-lose");
const roundDraw = document.querySelector("h2.draw");
const roundResultTitles = document.querySelectorAll(".round-result-message h2");
const gameOverTitle = document.querySelector(".game-over h2");

const chooseView = document.querySelector(".playground .choose");
const resultView = document.querySelector(".playground .round-result");
const currentRoundResult = document.querySelector(".round-result .round-result-message");
const gameOverView = document.querySelector("div.game-over");

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
    roundCounter++;
    setRoundCounter(roundCounter);
    changeView();
})
newGameButton.addEventListener("click", () => {
    resetGame();
})

function playGame() {
    computerChoice = getcomputerChoice();
   let result = playRound(playerChoice, computerChoice);
    displayChoices();
    roundResult(result);
    setPlayersScore(computerScore, playerScore);
    if (playerScore >= 5 || computerScore >= 5) {
        showGameOverScreen();
    }    
}

function resetGame() {
    roundCounter = 1;
    setRoundCounter(roundCounter);
    playerScore = 0;
    computerScore = 0;
    setPlayersScore(computerScore, playerScore);
    gameOverTitle.classList.remove("you-win", "you-lose", "draw");
    chooseView.classList.remove("invisible");
    resultView.classList.add("invisible");
    gameOverView.classList.add("invisible");
    currentRoundResult.classList.remove("invisible");
}

function showGameOverScreen() {
    setGameOverTitle();
    setGameOverPoints();
    gameOverView.classList.remove("invisible");
    currentRoundResult.classList.add("invisible");
}

function setGameOverTitle() {
    if (computerScore > playerScore) {
        gameOverTitle.textContent = "You Lose!";
        gameOverTitle.classList.add("you-lose");
    } else {
        gameOverTitle.textContent = "You Won!";
        gameOverTitle.classList.add("you-won");
    }
}

function setGameOverPoints() {
    const playerFinalScore = document.querySelector(".game-over .player-final-score");
    const computerFinalScore = document.querySelector(".game-over .computer-final-score");
    playerFinalScore.textContent = `Your score: ${playerScore}`;
    computerFinalScore.textContent = `Computer score: ${computerScore}`;

}

function setRoundCounter(roundCounter) {
    const roundCounterText = document.querySelector(".round-container .counter");
    roundCounterText.textContent = roundCounter;
}

function roundResult(playRound) {
    if (playRound === -1) {
        computerScore++;
    } else if (playRound === 1) {
        playerScore++;
    }
}

function setPlayersScore(computerScore, playerScore) {
    const computerScoreText = document.querySelector(".scoreboard .computer.points");
    const playerScoreText = document.querySelector(".scoreboard .player.points");
    computerScoreText.textContent = computerScore;
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
    chooseView.classList.toggle("invisible");
    resultView.classList.toggle("invisible");
}
