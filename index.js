
//Create a variable that contains the value of a random COMPUTER choice: Rock, Paper, or Scissors
//Create a comparisson that determines who wins and displays 

let computerChoice = pickComputerChoice();
let playerChoice = 'rock'

playGame();

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

function playGame() {
  if(computerChoice === 'rock') {
    console.log('Tie')
  } else if(computerChoice === 'scissors') {
    console.log('You Win!')
  } else if(computerChoice === 'paper') {
    console.log('You Lose!')
  }
}