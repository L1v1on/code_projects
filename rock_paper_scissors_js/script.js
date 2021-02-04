const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }
    else{
        console.log('Please enter rock, paper, or scissors.');
    }
}

//console.log(getUserChoice('ROCK'));

const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
          return 'rock';
        break;

      case 1:
          return 'paper';
        break;

      case 2:
          return 'scissors';
        break;

      default:
          return 'shotgun';
        break;
    }
}
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} BOMB YOU WIN!`;
    }

    if(userChoice === computerChoice){
        return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} TIE!`;
    }

    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Lose!`;
        }
        else{
            return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Win!`;
        }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Lose!`;
      } else {
        return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Win!`;
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Lose!`;
      } else {
        return `Rock Paper Scissors.....Player: ${userChoice} Computer: ${computerChoice} You Win!`;
      }
    }
}
//console.log(determineWinner(getUserChoice('SCISSORS'), getComputerChoice()));

function playGame(userChoice) {
  //let userChoice = getUserChoice('BOMB');
  //console.log(userChoice);
  let computerChoice = getComputerChoice();
  //console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame(getUserChoice('BOMB'));