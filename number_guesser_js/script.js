let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}
//console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, target){
    if(humanGuess === target && computerGuess === target){
        return true;
    }
    if(humanGuess === target){
        return true;
    }
    if(computerGuess === target){
        return false;
    }
    
}