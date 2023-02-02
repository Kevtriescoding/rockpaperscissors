const options = ["rock", "paper", "scissors"]
const computerChoice = options[Math.floor(Math.random() * options.length)];
const prompt = require("prompt-sync")({ sigint: true });
const yourChoice = prompt("Please choose rock, paper, or scissors ");
const winAgainstRock = computerChoice === 'rock' && yourChoice === 'paper'
const winAgainstPaper = computerChoice === 'paper' && yourChoice === 'scissors'
const winAgainstScissors = computerChoice === 'scissors' && yourChoice === 'rock'
const isDraw = computerChoice === yourChoice
if (winAgainstRock || winAgainstPaper || winAgainstScissors) {
    console.log("YOU WON")
}
else if (isDraw) {
    console.log("You've Drawn")
}
else { console.log("You've lost") }