function playGame (value){
    let playerOne = value;
    let moves = ['rock', 'paper', 'scissors'];
    let computerChoice = moves[Math.floor(Math.random() * moves.length)];
    if(computerChoice === playerOne){
        alert(`player one has ${playerOne}, computer has ${computerChoice} \nit's a tie`);
    }
    else if(playerOne === 'rock' && computerChoice === 'paper') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \ncomputer wins`);
    }
    else if (playerOne === 'rock' && computerChoice === 'scissors') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \nplayer one wins`);
    }
    else if (playerOne === 'paper' && computerChoice === 'scissors') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \ncomputer wins`);
    }
    else if (playerOne === 'paper' && computerChoice === 'rock') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \nplayer one wins`);
    }
    else if (playerOne === 'scissors' && computerChoice === 'paper') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \nplayer one wins`);
    }
    else if (playerOne === 'scissors' && computerChoice === 'rock') {
        alert(`player one has ${playerOne}, computer has ${computerChoice} \ncomputer wins`);
    }
}

