function GetComputerChoice() {
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

console.log(GetComputerChoice());
