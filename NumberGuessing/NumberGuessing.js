const minNumber = 1;
const maxNumber = 100;
const number = Math.floor(Math.random() * 100) + minNumber;
const Result = document.getElementById("result");
const attempts = document.getElementById("attempts");
let attempt = 0;
function guessing() {

    const guessInput = document.getElementById("textBox");
    const guess = Number(guessInput.value);
    attempt++;
    attempts.textContent = `${attempt}`;
    if (guess === number) {
        Result.textContent = `you guessed the number in ${attempt} attempts`;
        attempts.textContent = ``;
    }
    else if (guess > number) {
        Result.textContent = `the guess is too high`;

    }
    else {
        Result.textContent = `the guess is too low`;
    }
    
}

