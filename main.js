const userChoice = document.querySelectorAll("[data-selection]");

let computerChoice;
var result = resultFunc();
const displayResult = document.getElementById("result");
const computerResult = document.getElementById("computer-choice");
const random = Math.round(Math.random() * 3);
const userResult = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");

//Get user choices
userChoice.forEach((userChoice) => {
  userChoice.addEventListener("click", (e) => {
    const choiceName = userChoice.dataset.selection;
    makeSelection(choiceName);
  });
});

//Random computer choices
function generateComputerChoice() {
  if (random === 1) {
    return (computerChoice = "rock");
  } else if (random === 2) {
    return (computerChoice = "paper");
  } else if (random === 3) {
    return (computerChoice = "scissors");
  }
}

//Results
function resultFunc() {
  if (computerChoice === userChoice) {
    return (result = "It's a draw");
  } else if (computerChoice === "rock" && userChoice === "paper") {
    return (result = "You lose suckaaaaaa!");
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    return (result = "You WIN!");
  } else if (computerChoice === "paper" && userChoice === "rock") {
    return (result = "You lose suckaaaaaa!");
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    return (result = "You WIN!");
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    return (result = "You lose suckaaaaaa!");
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    return (result = "You WIN!");
  }
}
