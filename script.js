let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (inputGuess, target) => {
    return Math.abs(target - inputGuess);   
}


const alarm = humanGuess => {
    if (humanGuess < 0 || humanGuess > 9) {
      window.alert("ERROR: You've entered wrong number, try something between 0 to 9");

    }}


const compareGuesses = (userGuess, compGuess, targetNum) => {
    userDifference = getAbsoluteDistance(userGuess, targetNum);
    compDifference = getAbsoluteDistance(compGuess, target);
    alarm(userGuess);
    if (userDifference > compDifference) {
        return false;
    } else if (userDifference < compDifference) {
        return true;
    } else {
        return true;
    }
}


   


// const compareGuesses = (userGuess, compGuess, targetNum) => {
//     userDifference = Math.abs(targetNum - userGuess);
//     compDifference = Math.abs(targetNum - compGuess);
//     if (userDifference > compDifference) {
//         return false;
//     } else if (userDifference < compDifference) {
//         return true;
//     } else {
//         return true;
//     }
// }

const updateScore = winner => {
    if (winner === 'human') {
        humanScore = humanScore + 1;
    } else if (winner === 'computer') {
        computerScore = computerScore + 1;
    } else {
        console.log("Error: wrong winner!");
    }
}

const advanceRound = () => {
    return currentRoundNumber = currentRoundNumber + 1;
}