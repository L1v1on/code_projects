let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}
//console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, target){
    if(humanGuess === computerGuess){
        return true;
    }
    if(humanGuess === target){
        return true;
    }
    if(computerGuess === target){
        return false;
    }

    let humanDiff = humanGuess - target;
    let computerDiff = computerGuess - target;
    // turn negative difference into positive
    if(humanDiff < 0){
        humanDiff = humanDiff*-1;
    }
    if(computerDiff < 0){
        computerDiff = computerDiff*-1;
    }

    if(humanDiff > computerDiff){
        return false;
    }else{
        return true;
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore ++;
    }else{
        computerScore ++;
    }
}

function advanceRound(){
    currentRoundNumber ++;
}