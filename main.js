let userChoice;
let computerChoice;
var result = result();
const displayResult = document.getElementById("result");
const computerResult = document.getElementById("computerChoice");
const random = Math.round(Math.random() * (3));
const userResult = document.getElementById("userChoice");
const possibleChoices = document.querySelectorAll(".choices");

//Get user choices
possibleChoices.forEach(possibleChoice => possibleChoices.addEventListner("click", (e) => {
  userResult = e.target.id;
  generateComputerChoice();
  result();
  userChoice.innerHTML = userResult;
  computerChoice.innerHTML = computerResult;
  displayResult.innerHTML = result;
}));

//Random computer choices
function generateComputerChoice() {
  if (random === 1) {
    return computerChoice = "rock";
  }
  else if (random === 2) {
    return computerChoice = "paper";
  }
  else if (random === 3) {
    return computerChoice = "scissors";
  }
}

//Results
function result() {
  if(computerChoice === userChoice) {
  return result = "It's a draw"
  }
    else if (computerChoice === "rock" && userChoice === "paper") {
      return result = "You lose suckaaaaaa!";
  }
    else if (computerChoice === "rock" && userChoice === "scissors") {
      return result = "You WIN!";
  }
    else if (computerChoice === "paper" && userChoice === "rock") {
      return result = "You lose suckaaaaaa!";
  }
    else if (computerChoice === "paper" && userChoice === "scissors") {
      return result = "You WIN!";
  }
    else if (computerChoice === "scissors" && userChoice === "paper") {
      return result = "You lose suckaaaaaa!";
  }
    else if (computerChoice === "scissors" && userChoice === "rock") {
      return result = "You WIN!";
  }
}
