function getComputerChoice() {
  const randomNum = Math.random();
  let result = ''
  if(randomNum < 1/3) {
  result = 'rock'
  } else if(randomNum > 2/3) {
  result = 'paper'
  } else {
  result = 'scissors'
  }
return result
}

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
}

function playRound(playerSelection, computerSelection) {

let result = ''
computerSelection = getComputerChoice();
if(playerSelection === 'rock') {
  if(playerSelection === computerSelection) {
  result = 'Tie'
  } else if (computerSelection === 'paper') {
  result = 'You Lose'
  } else if(computerSelection === 'scissors') {
  result = 'You Win'  
  }
}

if(playerSelection === 'paper') {
  if(playerSelection === computerSelection) {
  result = 'Tie'
  } else if (computerSelection === 'scissors') {
  result = 'You Lose'
  } else if(computerSelection === 'rock') {
  result = 'You Win'  
  }
}

if(playerSelection === 'scissors') {
  if(playerSelection === computerSelection) {
  result = 'Tie'
  } else if (computerSelection === 'rock') {
  result = 'You Lose'
  } else if(computerSelection === 'paper') {
  result = 'You Win'  
  }
}

let message = ''

if(result === 'You Win') {
  score.wins += 1
  message = `${result}. ${playerSelection} beats ${computerSelection}.
  Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
} else if (result === 'You Lose') {
  score.losses += 1
  message = `${result}. ${computerSelection} beats ${playerSelection}.
  Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
} else {
  score.ties += 1
  message = `${result}
  Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}

return message
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Chose rock, paper, or scissors", undefined).toUpperCase().toLowerCase();

game();

function game() {

console.log(playRound(playerSelection, computerSelection));
playerSelection = prompt("Chose rock, paper, or scissors", undefined).toUpperCase().toLowerCase();
console.log(playRound(playerSelection, computerSelection));
playerSelection = prompt("Chose rock, paper, or scissors", undefined).toUpperCase().toLowerCase();
console.log(playRound(playerSelection, computerSelection));
playerSelection = prompt("Chose rock, paper, or scissors", undefined).toUpperCase().toLowerCase();
console.log(playRound(playerSelection, computerSelection));
playerSelection = prompt("Chose rock, paper, or scissors", undefined).toUpperCase().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

}
