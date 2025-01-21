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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        const result = document.querySelector("#result");

        if (humanChoice == "Rock" && computerChoice == "Rock") {
            result.textContent = "Tie! You both chose Rock.";
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            computerScore += 1;
            result.textContent = "You lose! Paper beats Rock.";
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            humanScore += 1;
            result.textContent = "You win! Rock beat Scissors.";
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            humanScore += 1;
            result.textContent = "You win! Paper beats Rock.";
        } else if (humanChoice == "Paper" && computerChoice == "Paper") {
            result.textContent = "Tie! You both chose Paper.";
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            computerScore += 1;
            result.textContent = "You lose! Scissors beats Paper.";
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            computerScore += 1;
            result.textContent = "You lose! Rock beats Scissors.";
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            humanScore += 1;
            result.textContent = "You win! Scissors beats Paper.";
        } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
            result.textContent = "Tie! You both chose Scissors.";
        } else {
            result.textContent = "That's not an option!";
        }

        result.textContent += " Your score is " + +humanScore + " and the computer's score is " + +computerScore;
        if (humanScore == 5 && computerScore == 5) {
            result.textContent = "It's a TIE!";
            humanScore = 0;
            computerScore = 0;
        } else if (humanScore == 5) {
            result.textContent = "Congratulations! You WON the game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            result.textContent = "You LOST the game. Better luck next time!";
            humanScore = 0;
            computerScore = 0;
        }
    }

    document.querySelector("#rock").addEventListener("click", () => playRound("Rock", getComputerChoice()));
    document.querySelector("#paper").addEventListener("click", () => playRound("Paper", getComputerChoice()));
    document.querySelector("#scissors").addEventListener("click", () => playRound("Scissors", getComputerChoice()));
}

playGame();
