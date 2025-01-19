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
    const input = prompt();
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "Rock" && computerChoice == "Rock") {
            console.log("Tie! You both chose Rock.");
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            computerScore += 1;
            console.log("You lose! Paper beats Rock.");
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            humanScore += 1;
            console.log("You win! Rock beat Scissors.");
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            humanScore += 1;
            console.log("You win! Paper beats Rock.");
        } else if (humanChoice == "Paper" && computerChoice == "Paper") {
            console.log("Tie! You both chose Paper.");
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper.");
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            computerScore += 1;
            console.log("You loose! Rock beats Scissors.");
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            humanScore += 1;
            console.log("You win! Scissors beats Paper.");
        } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
            console.log("Tie! You both chose Scissors.");
        } else {
            console.log("That's not an option!");
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}