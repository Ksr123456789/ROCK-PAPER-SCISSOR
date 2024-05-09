let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScorePara.innerText = userScore;
  computerScorePara.innerText = computerScore;
  msg.innerText = `Choose among three`;
  msg.style.backgroundColor = "#081b31";
});
const gameDraw = () => {
  msg.innerText = "game was draw, Play again!";
  msg.style.backgroundColor = "#081b31";
};

const gameWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `you win, your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `you lose, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const PlayGame = (userChoice) => {
  //generate computer choice
  let compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    gameWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    PlayGame(userChoice);
  });
});
