const bodyContainer = document.querySelector("body");
const divContainer = document.querySelector(".grid-container");
const buttonContainer = document.querySelector(".button-container")
const submitButton = document.querySelector("#submit-button");

function setNewBoard(width = 16, height = 16) {
    divContainer.innerHTML = "";

    for (let i = 0; i < height; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = `rowContainer`;

        for (let j = 0; j < width; j++) {
            let gridSquare = document.createElement("span");

            gridSquare.className = "square";
            gridRow.appendChild(gridSquare);
        }

        divContainer.appendChild(gridRow);
    }

    let gridSquare = getSquares();

    gridSquare.forEach(
    square => square.addEventListener(
        "mouseover", (event) => {
            event.target.style.backgroundColor = "grey";
        }
    ))
}

function resetBoard() {
    let gridSquare = getSquares();

    gridSquare.forEach(
        square => square.style.backgroundColor = null
    )
}

function getSquares() {
    return Array.from(document.querySelectorAll("span"));
}

function createResetButton() {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset board";

    buttonContainer.appendChild(resetButton);
    resetButton.addEventListener("click", resetBoard);
}

function getUserInput() {
    let widthInput = document.getElementById("grid-width");
    let heightInput = document.getElementById("grid-height");
    
    return [widthInput.value, heightInput.value]
}

function runBoard() {
    setNewBoard();
    createResetButton();

    submitButton.addEventListener(
    "click", () => {
        setNewBoard(...getUserInput());
    })
}

runBoard();