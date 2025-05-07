let scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  tie: 0,
  lose: 0,
};
function setScore(scores) {
  document.getElementById("win").innerText = scores.win;
  document.getElementById("tie").innerText = scores.tie;
  document.getElementById("lose").innerText = scores.lose;
}
setScore(scores);
function playGame(value) {
  let playerOne = value;
  let moves = ["rock", "paper", "scissors"];
  let result;
  let computerChoice = moves[Math.floor(Math.random() * moves.length)];
  if (computerChoice === playerOne) {
    scores.tie += 1;
    result = "it's a tie";
  } else if (playerOne === "rock" && computerChoice === "paper") {
    scores.lose += 1;
    result = "computer Wins";
  } else if (playerOne === "rock" && computerChoice === "scissors") {
    scores.win += 1;
    result = "You Wins";
  } else if (playerOne === "paper" && computerChoice === "scissors") {
    scores.lose += 1;
    result = "computer Wins";
  } else if (playerOne === "paper" && computerChoice === "rock") {
    scores.win += 1;
    result = "You Wins";
  } else if (playerOne === "scissors" && computerChoice === "paper") {
    scores.win += 1;
    result = "You Wins";
  } else if (playerOne === "scissors" && computerChoice === "rock") {
    scores.lose += 1;
    result = "computer Wins";
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  setScore(scores);
  document.getElementById("result").innerText = result;
  document.getElementById("moves").innerHTML =
    `You <img src="../img/${playerOne}.png" alt="${playerOne}" class="result-images">  <img src="../img/${computerChoice}.png" alt="${computerChoice}" class="result-images"> computer`;
}
function clearScores() {
  scores.lose = 0;
  scores.tie = 0;
  scores.win = 0;
  localStorage.removeItem("scores");
  setScore(scores);
}
