let cpuScore = 0;
let playerScore = 0;

function getPlayerChoice () {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    return randomChoice === 1 ? "rock" : randomChoice === 2 ? "paper" : "scissors";
}

function gameRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = getRoundResult(playerSelection, computerSelection);
    return result;
}

function getRoundResult (player, cpu) {
    if (player === cpu) {
        return `It's a tie, both players chose ${player}`;
    } else if(player === "rock") {
        if (cpu === "paper") {
            cpuScore++;
            return `You Lose! ${cpu} beats ${player}`;
        } else {
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        }
    } else if (player === "paper") {
        if (cpu === "scissors") {
            cpuScore++;
            return `You Lose! ${cpu} beats ${player}`;
        } else {
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        }
    } else if (player === "scissors") {
        if (cpu === "rock") {
            cpuScore++;
            return `You Lose! ${cpu} beats ${player}`;
        } else {
            playerScore++;
            return `You Win! ${player} beats ${cpu}`;
        }
    }  
}

function game () {
    for (let i = 1; i <= 5; i++) {
        console.log(gameRound());
    }
    if (cpuScore === playerScore) {
        console.log("Game ended in a tie");
    } else if (cpuScore > playerScore) {
        console.log(`GameOver, Computer won this game by ${cpuScore}pts to ${playerScore}pts`);
    } else {
        console.log(`GameOver, Player won this game by ${playerScore}pts to ${cpuScore}pts`);
    }
}

console.log("Welcome to Rock Paper Scissors");
game();