
//Create a variable that contains the value of a random COMPUTER choice: Rock, Paper, or Scissors
//Create a comparisson that determines who wins and displays 

//let userInput = prompt("Rock, Paper, or Scissors?");

const playerChoice = 'rock';
const computerChoice = pickComputerChoice();
const result = playRound(playerChoice, computerChoice);

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

function playRound(playerChoice, computerChoice) {
  
  let result = ''
  
  //Player choice is Rock
  if(playerChoice === computerChoice || playerChoice.toUpperCase() === computerChoice || playerChoice.toLowerCase() === computerChoice) {
  result = 'Tie nobody wins.';
  } else if(playerChoice === 'rock' && computerChoice === 'scissors') {
  result = 'You Win! Rock beats Scissors.'
  } else if(playerChoice === 'rock' && computerChoice === 'paper') {
  result = 'You Lose! Paper beats Rock.'
  }
  //Player choice is Scissors
  if(playerChoice === computerChoice || playerChoice.toUpperCase() === computerChoice || playerChoice.toLowerCase() === computerChoice) {
  result = 'Tie nobody wins.';
  } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
  result = 'You Win! Scissors beats Paper.'
  } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
  result = 'You Lose! Rock beats Scissors.'
  }
  //Player choice is Paper 
  if(playerChoice === computerChoice || playerChoice.toUpperCase() === computerChoice || playerChoice.toLowerCase() === computerChoice) {
  result = 'Tie nobody wins.';
  } else if(playerChoice === 'paper' && computerChoice === 'rock') {
  result = 'You Win! Paper beats Rock.'
  } else if(playerChoice === 'paper' && computerChoice === 'scissors') {
  result = 'You Lose! Scissors beats Paper.'
  }

  return(result);
}
