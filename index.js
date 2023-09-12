function getComputerChoice() {
let randomNum = Math.random()
let result = ''
if(randomNum > 2/3) {
 result = 'rock'
} else if (randomNum < 1/3) {
  result = 'scissors'
} else {
  result = 'paper'
}

return result
}

let computuerChoice = getComputerChoice();

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
}


function playGame(playerChoice) {

computuerChoice = getComputerChoice();

if(playerChoice === 'rock') {
  if(playerChoice === computuerChoice) {
    result = 'Tie.'
  } else if (computuerChoice === 'paper') {
    result = 'You Lose.'
  } else if (computuerChoice === 'scissors') {
    result = 'You Win!'
  }
}
if(playerChoice === 'paper') {
  if(playerChoice === computuerChoice) {
    result = 'Tie.'
  } else if (computuerChoice === 'scissors') {
    result = 'You Lose.'
  } else if (computuerChoice === 'rock') {
    result = 'You Win!'
  }
}
if(playerChoice === 'scissors') {
  if(playerChoice === computuerChoice) {
    result = 'Tie.'
  } else if (computuerChoice === 'rock') {
    result = 'You Lose.'
  } else if (computuerChoice === 'paper') {
    result = 'You Win!'
  }
}

if(result === 'You Win!') {
  score.wins += 1
} else if(result === 'You Lose.') {
  score.losses += 1
} else if(result === 'Tie.') {
  score.ties += 1
}

let final = `${result}`
let message = `You ${playerChoice}
 ${computuerChoice} Computer`

document.querySelector('.js-result').innerHTML = result

document.querySelector('.js-message').innerHTML = `You <img src="imgs/${playerChoice}-emoji.png" alt="" class="icons"> <img src="imgs/${computuerChoice}-emoji.png" alt="" class="icons"> Computer`

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}

function updateScore() {
  score.wins = 0
  score.losses = 0
  score.ties = 0

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`

  document.querySelector('.js-result').innerHTML = ''

  document.querySelector('.js-message').innerHTML = ''
}