humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
}

function playRound(humanPrompt, computer) {
    let human = humanPrompt.toLowerCase();
    let infoLose = `You lose! The ${computer} beats ${human}.`;
    let infoWin = `You win! The ${human} beats ${computer}.`;

    if (human == computer) {
        console.log("It's a tie!");
    }

    if (human == "rock") {
        if (computer == "paper") {
            console.log(infoLose);
            computerScore ++;
        } else if (computer == "scissors") {
            console.log(infoWin);
            humanScore ++;
        }
    }

    if (human == "paper") {
        if (computer == "rock") {
            console.log(infoWin);
            humanScore ++;
        } else if (computer == "scissors") {
            console.log(infoLose);
            computerScore ++;
        }
    }

    if (human == "scissors") {
        if (computer == "rock") {
            console.log(infoLose);
            computerScore ++;
        } else if (computer == "paper") {
            console.log(infoWin);
            humanScore ++;
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`The round begins!`);
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You win with the score ${humanScore}!`);
    } else {
        console.log(`Oopsie! You lose with the score ${humanScore}!`);
    }
}

playGame();