// link variables to html classes
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choices = [rock, paper, scissors];
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const cpuSelection = document.querySelector("#cpu-selection");
let playerChoice;
let cpuChoice;

let playerScore = document.querySelector("#win");
let cpuScore = document.querySelector("#lose");

// adds to the user's score fior each win
const win = function () {
  playerScore.value = "P1: " + playerScore.dataset.value++;
};

// adds to the computer's score for each loss
const lose = function () {
  cpuScore.value = "CPU: " + cpuScore.dataset.value++;
};

// evaluates results given user input
rock.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === rock) {
    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Rock";
  } else if (cpuChoice === scissors) {
    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Scissors";
    win();
  } else if (cpuChoice === paper) {
    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Paper";
    lose();
  }
});

paper.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === paper) {
    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Paper";
  } else if (cpuChoice === rock) {
    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Rock";
    win();
  } else if (cpuChoice === scissors) {
    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Scissors";
    lose();
  }
});

scissors.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === scissors) {
    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Scissors";
  } else if (cpuChoice === paper) {
    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Paper";
    win();
  } else if (cpuChoice === rock) {
    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Rock";
    lose();
  }
});

// resets score
reset.addEventListener("click", function () {
  playerScore.value = "P1: " + 0;
  cpuScore.value = "CPU: " + 0;
  playerScore.dataset.value = 0;
  cpuScore.dataset.value = 0;
  result.innerHTML = "";
  cpuSelection.textContent = "";
});
