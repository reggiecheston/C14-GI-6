// link variables to html classes
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choices = [rock, paper, scissors];
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const cpuSelection = document.querySelector("#cpuSelection");
let playerChoice;
let cpuChoice;
// let result;

let playerScore = document.querySelector("#win");
let cpuScore = document.querySelector("#lose");

// console.log(choices[Math.floor(Math.random() * 3)]);

const win = function () {
  playerScore.value = "P1: " + playerScore.dataset.value++;
};

const lose = function () {
  cpuScore.value = "CPU: " + cpuScore.dataset.value++;
};

rock.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === rock) {
    console.log("Tie");

    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Rock";
  } else if (cpuChoice === scissors) {
    console.log("You win");

    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Scissors";
    win();
  } else if (cpuChoice === paper) {
    console.log("You lose");
    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Paper";

    lose();
  }
});

paper.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === paper) {
    console.log("Tie");

    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Paper";
  } else if (cpuChoice === rock) {
    console.log("You win");

    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Rock";
    win();
  } else if (cpuChoice === scissors) {
    console.log("You lose");
    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Scissors";
    lose();
  }
});

scissors.addEventListener("click", function () {
  cpuChoice = choices[Math.trunc(Math.random() * 3)];

  if (cpuChoice === scissors) {
    console.log("Tie");

    result.innerHTML = "Draw!";
    cpuSelection.textContent = "CPU Chose: Scissors";
  } else if (cpuChoice === paper) {
    console.log("You win");

    result.innerHTML = "You Win";
    cpuSelection.textContent = "CPU Chose: Paper";
    win();
  } else if (cpuChoice === rock) {
    console.log("You lose");

    result.innerHTML = "You Lose";
    cpuSelection.textContent = "CPU Chose: Rock";
    lose();
  }
});

reset.addEventListener("click", function () {
  playerScore.value = "P1: " + 0;
  cpuScore.value = "CPU: " + 0;
  playerScore.dataset.value = 0;
  cpuScore.dataset.value = 0;
  result.innerHTML = "";
  cpuSelection.textContent = "";
});

// paper.addEventListener("click", function () {
//   cpuChoice = choices[Math.trunc(Math.random() * 3) + 1];
//
//   if (playerChoice == cpuChoice) {
//     return "Draw";
//   } else if (cpuChoice == "rock") {
//     return playerChoice == "paper" ? "You win" : "You lose";
//   } else if (cpuChoice == "paper") {
//     return playerChoice == "scissors" ? "You win" : "You lose";
//   } else if (cpuChoice == "scissors") {
//     return playerChoice == "rock" ? "You win" : "You lose";
//   }
// });

// choices.forEach((button) =>
//   button.addEventListener("click", () => {
//     playerChoice = button.textContent;
//     cpuTurn();
//     checkWinner();
//   })
// );

// function cpuTurn() {
//   const randNum = Math.trunc(Math.random() * 3) + 1;

//   switch (randNum) {
//     case 1:
//       cpuChoice = "rock";
//       break;
//     case 2:
//       cpuChoice = "paper";
//       break;
//     case 3:
//       cpuChoice = "scissors";
//       break;
//   }
// }

// function checkWinner() {
//   if (playerChoice == cpuChoice) {
//     return "Draw";
//   } else if (cpuChoice == "rock") {
//     return playerChoice == "paper" ? "You win" : "You lose";
//   } else if (cpuChoice == "paper") {
//     return playerChoice == "scissors" ? "You win" : "You lose";
//   } else if (cpuChoice == "scssors") {
//     return playerChoice == "rock" ? "You win" : "You lose";
//   }
// }

// rock.addEventListener("click", function () {
//   cpuChoice = choices[Math.trunc(Math.random() * 3) + 1];
//
//   if (cpuChoice === rock) {
//     console.log("Tie");
//   } else if (cpuChoice === scissors) {
//     console.log("You win");
//   } else if (cpuChoice === paper) {
//     console.log("You lose");
//   }
// });

// paper.addEventListener("click", function () {
//   cpuChoice = choices[Math.trunc(Math.random() * 3) + 1];
//
//   if (cpuChoice === rock) {
//     console.log("You win");
//   } else if (cpuChoice === scissors) {
//     console.log("Tie");
//   } else if (cpuChoice === paper) {
//     console.log("You win");
//   }
// });

// receive input from clicked button

// compare to randomized cpu selection

// return result and reset game
