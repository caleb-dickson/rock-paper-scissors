// DOM SELECTORS
// DOM SELECTORS
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const currentRoundPara = document.getElementById("currentGame");

const playerScorePara = document.getElementById("playerRoundScore");
const playerTotalScorePara = document.getElementById("playerTotalScore");

const computerScorePara = document.getElementById("computerRoundScore");
const computerTotalScorePara = document.getElementById("computerTotalScore");

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const endgameGraphic = document.getElementById("endgameGraphic");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");
// DOM SELECTORS
// DOM SELECTORS

// EVENT LISTENERS
// EVENT LISTENERS
rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));
restartBtn.addEventListener("click", () => restart());
// EVENT LISTENERS
// EVENT LISTENERS

// GLOBAL VARIABLES
// GLOBAL VARIABLES
let playerRoundScore = 0;
let computerRoundScore = 0;

let playerTotalScore = 0;
let computerTotalScore = 0;

let roundWinner = "";
let roundsPlayed = 0;
let currentRound = 1;

let tiedMessage;
// GLOBAL VARIABLES
// GLOBAL VARIABLES

// GAME LOGIC
// GAME LOGIC
function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal();
    return;
  }
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  scoreUpdate();
  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    clearTimeout(this.tiedMessage);
    playerRoundScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    clearTimeout(this.tiedMessage);
    computerRoundScore++;
    roundWinner = "computer";
  }
  scoreUpdateMessage(roundWinner, playerSelection, computerSelection);
}

function scoreUpdate() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It's a tie!";
    scoreMessage.textContent = "Tied!";
    this.tiedMessage = setTimeout(() => {
      scoreMessage.textContent = "Play again!";
    }, 1000);
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }
  playerScorePara.textContent = "Player: " + playerRoundScore;
  computerScorePara.textContent = "Computer: " + computerRoundScore;
}

function scoreUpdateMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = playerSelection + " beats " + computerSelection;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent =
      playerSelection + " is beaten by " + computerSelection;
    return;
  }
}

function isGameOver() {
  return playerRoundScore === 5 || computerRoundScore === 5;
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      playerChoice.textContent = "✊";
      break;
    case "Paper":
      playerChoice.textContent = "✋";
      break;
    case "Scissors":
      playerChoice.textContent = "✌️";
      break;
  }

  switch (computerSelection) {
    case "Rock":
      computerChoice.textContent = "✊";
      break;
    case "Paper":
      computerChoice.textContent = "✋";
      break;
    case "Scissors":
      computerChoice.textContent = "✌";
      break;
  }
}

function openEndgameModal() {
  clearTimeout(this.tiedMessage);
  console.log();
  endgameModal.classList.add("show");
}

function closeEndgameModal() {
  endgameModal.classList.remove("show");
  restart();
}

function setFinalMessage() {
  if (playerRoundScore > computerRoundScore) {
    playerTotalScore++;
    endgameMsg.textContent = "You won this game!";
    endgameGraphic.textContent = "🥳";
  } else if (computerRoundScore > playerRoundScore) {
    computerTotalScore++;
    endgameMsg.textContent = "You lost";
    endgameGraphic.textContent = "¯\\_(ツ)_/¯";
  }
}

function restart() {
  playerRoundScore = 0;
  computerRoundScore = 0;
  roundsPlayed++;
  currentRound++;
  currentRoundPara.textContent = roundsPlayed;
  playerTotalScorePara.textContent = playerTotalScore;
  computerTotalScorePara.textContent = computerTotalScore;
  scoreInfo.textContent = "Round " + currentRound + "!";
  scoreMessage.textContent = "Best out of 5 wins";
  playerScorePara.textContent = "Player - 0";
  computerScorePara.textContent = "Computer - 0";
  playerChoice.textContent = "⌀";
  computerChoice.textContent = "⌀";
  endgameModal.classList.remove("show");
}
// GAME LOGIC
// GAME LOGIC
