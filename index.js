
//Create a variable that contains the value of a random COMPUTER choice: Rock, Paper, or Scissors
//Create a comparisson that determines who wins and displays 

let computerChoice = pickComputerChoice();
let result = '';
playGame('rock', computerChoice);
console.log(result);

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

function playGame(playerChoice, computerChoice) {
  if(computerChoice === playerChoice || computerChoice === playerChoice.toUpperCase() || computerChoice === playerChoice.toLowerCase()) {
    result = 'Tie'
  } else if(computerChoice === 'scissors') {
    result = 'You Win. Rock beats Scissors.'
  } else if(computerChoice === 'paper') {
    result = 'You Lose! Paper beats Rock.'
  }

  return(result);
}