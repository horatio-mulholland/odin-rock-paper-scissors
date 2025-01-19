function getComputerChoice() {
    const rand_num = 3 * Math.random();
    if (0 <= rand_num && rand_num < 1) {
        return "Rock";
    } else if (1 <= rand_num && rand_num < 2) {
        return "Paper";
    } else if (2 <= rand_num && rand_num < 3) {
        return "Scissors";
    } else {
        return "How did we get here?";
    }
}

function getHumanChoice() {
    let input = prompt();
    if (input.toLowerCase() == "rock") {
        return "Rock";
    } else if (input.toLowerCase() == "paper") {
        return "Paper";
    } else if (input.toLowerCase() == "scissors") {
        return "Scissors"
    } else {
        return "That's not an option!";
    }
}

let humanScore = 0;
let compterScore = 0;
