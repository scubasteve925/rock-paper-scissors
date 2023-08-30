
//Create a variable that contains the value of a random COMPUTER choice: Rock, Paper, or Scissors
//Create a variable that contains the value of a random PLAYER choice: Rock, Paper, or Scissors.

let computerChoice = pickComputerChoice();
console.log(computerChoice);

let playerChoice = pickPlayerChoice();
console.log(playerChoice);

function pickComputerChoice() {
  const randomNum = Math.random()

  let computerChoice = ''

  if(randomNum > 0 && randomNum < 1/3) {
    computerChoice = 'rock'
  } else if(randomNum > 1/3 && randomNum < 2/3) {
    computerChoice = 'paper'
  } else if(randomNum > 2/3 && randomNum < 1) {
    computerChoice = 'scissors'
  }

  return(computerChoice);
}

function pickPlayerChoice() {
  const randomNum = Math.random()

  let playerChoice = ''

  if(randomNum > 0 && randomNum < 1/3) {
    playerChoice = 'rock'
  } else if(randomNum > 1/3 && randomNum < 2/3) {
    playerChoice = 'paper'
  } else if(randomNum > 2/3 && randomNum < 1) {
    playerChoice = 'scissors'
  }

  return(playerChoice);
}
