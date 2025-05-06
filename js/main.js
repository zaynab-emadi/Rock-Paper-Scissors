let scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  tie: 0,
  lose: 0,
};
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
  alert(
    `player one has ${playerOne}, computer has ${computerChoice} \n${result}\nwin: ${scores.win}, lose: ${scores.lose}, tie: ${scores.tie}`,
  );
}
function clearScores() {
  scores.lose = 0;
  scores.tie = 0;
  scores.win = 0;
  localStorage.removeItem("scores");
}
