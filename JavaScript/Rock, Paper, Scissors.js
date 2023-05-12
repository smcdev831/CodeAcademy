const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Please select Rock, Paper, or Scissors");
  }
};

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      compChoice = "rock";
      break;
    case 1:
      compChoice = "paper";
      break;
    case 2:
      compChoice = "scissors";
      break;
  }
  return compChoice;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  }

  if (userChoice === "rock" && computerChoice === "paper") {
    return "The computer wins this round";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "The computer wins this round";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "The computer wins this round";
  } else if (userChoice === "bomb") {
    return "Blast it! You win!";
  } else {
    return "You win this round!";
  }
}

function playGame() {
  let userChoice = getUserChoice((userInput = "bomb"));
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
