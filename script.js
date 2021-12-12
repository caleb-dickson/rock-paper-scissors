function playGame(playerSelection, round) {
    console.log("Round " + round);
    const computerSelection = computerPlay();
    console.log(`Your selection is ${playerSelection}`);
    console.log(`Computer's selection is ${computerSelection}`);
    if (playerSelection === playerSelection && computerSelection === "Paper") {
      return 'lose';
    } else if (
      playerSelection === playerSelection &&
      computerSelection === "Scissors"
    ) {
      return 'win';
    } else {
      return 'tie';
    }
  }
  
  function game() {
    const tie = "This round's a tie";
    const win = "You Win! Rock beats Scissors";
    const lose = "You Lose! Paper beats Rock";
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 20; i++) {
      const result = playGame(playerSelection, i);
      switch (result) {
        case 'win':
          console.log(win);
          playerScore++;
          break;
        case 'lose':
          console.log(lose);
          computerScore++;
          break;
        default:
          console.log(tie);
          break;
      }
    }
        console.log("Final Results: Player: " + playerScore + " Computer: " + computerScore);
        if (playerScore > computerScore) {
          console.log("You win the game!");
        } else if (playerScore < computerScore) {
          console.log("You lose the game.");
        } else {
          console.log("The game was an overall tie.");
        }
  }

  
  function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
  }

const playerSelection = 'Rock';
game();