let random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const ui = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");
const entryCount = document.querySelector("#entryCount");
const p = document.createElement("p");

let prevGuess = [];
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = parseInt(ui.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        ui.value = "";
        return;
    }

    if (guess < 1) {
        alert("Please enter a number greater than 0.");
        ui.value = "";
        return;
    }

    if (guess > 100) {
        alert("Please enter a number less than or equal to 100.");
        ui.value = "";
        return;
    }

    prevGuess.push(guess);
    displayGuess();

    if (guess === random_number) {
        displayMessage("🎉 Congratulations! You guessed it right.");
        endGame();
    } else if (prevGuess.length === 10) {
        displayMessage(`Game Over! Random number was ${random_number}`);
        endGame();
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess < random_number) {
        displayMessage("📉 Number is TOO LOW");
    } else {
        displayMessage("📈 Number is TOO HIGH");
    }
}

function displayGuess() {
    ui.value = "";
    guessSlot.textContent = prevGuess.join(", ");
    remaining.innerHTML = `${10 - prevGuess.length}`;
    entryCount.innerHTML = prevGuess.length;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    ui.value = "";
    ui.setAttribute("disabled", "");

    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    resultParas.appendChild(p);

    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click", function () {
        random_number = parseInt(Math.random() * 100 + 1);

        prevGuess = [];

        guessSlot.innerHTML = "";
        remaining.innerHTML = "10";
        entryCount.innerHTML = "0";  
        lowOrHi.innerHTML = "";

        ui.value = "";
        ui.removeAttribute("disabled");

        resultParas.removeChild(p);

        playGame = true;
    });
}