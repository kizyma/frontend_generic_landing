"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayContent = function (content, message) {
  document.querySelector(content).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayContent(".message", "⛔No number!");
  } else if (guess === secretNumber) {
    displayContent(".message", "🎉Correct Number!");
    displayContent(".number", secretNumber);
    // css style change
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // highscore
    if (score > highscore) {
      highscore = score;
      displayContent(".highscore", highscore);
    }
    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let content = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayContent(".message", content);
      score--;
      displayContent(".score", score);
    } else {
      displayContent(".message", "☠Game over!");
      displayContent(".score", 0);
    }
  }
});

///////////////////////////////////////
// restart the game, retain the high score

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayContent(".message", "Start guessing...");
  displayContent(".score", score);
  displayContent(".guess", "");
  displayContent(".number", "?");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
