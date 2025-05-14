function DiceRoll() {

    const noOFDice = document.getElementById("noOfDice").value;
    const diceImages = document.getElementById("diceImages");
    const diceValues = document.getElementById("diceValues");
    let images = [];
    let values = [];
    for (let i = 0; i < noOFDice; i++) {
        let value = Math.floor((Math.random() * 6)) + 1;
        values.push(value);
        images.push(`<img src="diceFaces/dice-${value}.svg" alt="dice-${value}">`);
        diceValues.textContent = `Result: ${values.join(', ')}`
        diceImages.innerHTML = images.join('');
    }
}

// Added event listener for Enter key
document.getElementById("noOfDice").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        DiceRoll();
    }
});
