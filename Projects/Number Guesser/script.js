let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target) {
  let humanAbs = Math.abs(target - human);
  let computerAbs = Math.abs(target - computer);
  if (human === computer) {
    return true;
  } else if (humanAbs < computerAbs) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
