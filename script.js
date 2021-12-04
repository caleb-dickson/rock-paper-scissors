//THE GAME IS CREATED/FUNCTION DECLARED
function playGame() {
    //THIS EXECUTES THE PROMPT FOR THE HUMAN PLAYER AND STORES THE INPUT
    let playerInputPrompt = prompt('Rock, Paper or Scissors?')
    //THIS CODE CHANGES THE USER INPUT TO ALL LOWER CASE TO AVOID TYPE ERRORS.
    let playerInput = playerInputPrompt.toLowerCase()
    //HERE, WE CONVERT THE PLAYER'S INPUT TO A NUMBER VALUE, TO BE LATER COMPARED TO THE COMPUTER'S RANDOM CHOICE
    switch (playerInput)  {
        case 'rock':
            playerInput = 1;
            break;
        case 'paper':
            playerInput = 2;
            break;
        case 'scissors':
            playerInput = 3;
         }

    //THIS IS THE COMPUTER PLAYER, WHICH PRODUCES A RANDOM NUMBER VALUE, 1-3 (ROCK, PAPER, OR SCISSORS)
    let computerOutput = Math.floor(Math.random() * 3) + 1;

    //THE TWO PLAYERS' ANSWERS ARE COMPARED AND A RESULT IS RETURNED
     if (playerInput == computerOutput) {
         alert('It is a Tie');
     } else if (playerInput == 1 && computerOutput == 2) {
         alert('Computer chose Paper, you lose.');
     } else if (playerInput == 2 && computerOutput == 1) {
         alert('Computer chose Rock, you WIN!');
     } else if (playerInput == 2 && computerOutput == 3) {
         alert('Computer chose Scissors, you lose.');
     } else if (playerInput == 3 && computerOutput == 2) {
         alert('Computer chose Paper, you WIN!');
     } else if (playerInput == 1 && computerOutput == 3) {
         alert('Computer chose Scissors, you WIN!');
     }else if (playerInput == 3 && computerOutput == 1) {
         alert('Computer chose Rock, you lose.');
     }
    }

//HERE, THE FUNCTION ABOVE IS CALLED/EXECUTED AND THE PROGRAM RUNS
playGame();