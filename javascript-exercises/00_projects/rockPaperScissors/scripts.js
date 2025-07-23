let humanScore = 0;
let computerScore = 0;

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

function playRound(humanPrompt, computer) {
    let human = humanPrompt.toLowerCase();
    let infoLose = `You lose! The ${computer} beats ${human}.`;
    let infoWin = `You win! The ${human} beats ${computer}.`;

    if (human == computer) {
        return "It's a tie!";
    }

    if (human == "rock") {
        if (computer == "paper") {
            computerScore ++;
            return infoLose;
        } else if (computer == "scissors") {
            humanScore ++;
            return infoWin;
        }
    }

    if (human == "paper") {
        if (computer == "rock") {
            humanScore ++;
            return infoWin;
        } else if (computer == "scissors") {
            computerScore ++;
            return infoLose;
        }
    }

    if (human == "scissors") {
        if (computer == "rock") {
            computerScore ++;
            return infoLose;
        } else if (computer == "paper") {
            humanScore ++;
            return infoWin;
        }
    }

}

buttonNodes = Array.from(document.querySelectorAll("button"));

buttonNodes.forEach(
    (buttonNode) => buttonNode.addEventListener(
        "click", (playerChoice) => {
            let computerChoice = getComputerChoice();
            let roundResults = playRound(playerChoice.target.textContent, computerChoice);

            let resultContainer = document.querySelector("#resultContainer");
            let storeContainer = document.querySelector("#scoreContainer");
            let buttonContainer = document.querySelector(".button-container");

            if (!resultContainer) {
                resultContainer = document.createElement("div");
                resultContainer.id = "resultContainer";

                let scoreContainer = document.createElement("p");
                scoreContainer.id = "scoreContainer";
                
                buttonContainer.appendChild(resultContainer);
                buttonContainer.appendChild(scoreContainer);
            }
            
            resultContainer.textContent = roundResults;
            scoreContainer.textContent = `Current score: Human: ${humanScore}/5 | Computer: ${computerScore}/5`;

            if (humanScore == 5) {
                storeContainer.textContent = "Congratulations, You win!";
                humanScore = 0;
                computerScore = 0;
            } else if (computerScore == 5) {
                storeContainer.textContent = "Oopsie, computer win!";
                humanScore = 0;
                computerScore = 0;
            }

        }
    )
)
