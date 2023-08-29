
//Create a variable that contains the value of a random computer choice: Rock, Paper, or Scissors


let computerChoice = pickcomputerChoice();
console.log(computerChoice);

function pickcomputerChoice() {
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

]
