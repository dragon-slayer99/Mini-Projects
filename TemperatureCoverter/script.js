const TextBox = document.getElementById("TextBox");
const fahrenheit = document.getElementById("Fahrenheit");
const celsius = document.getElementById("Celsius");
const Kelvin = document.getElementById("Kelvin")
const result = document.getElementById("result");
let temp;


function convert(){
    if(fahrenheit.checked){
        temp = Number(TextBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(1)} °C`;
    }
    else if(celsius.checked){
        temp = Number(TextBox.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = `${temp.toFixed(1)} °F`;
    }
    else if(Kelvin.checked){
        temp = Number(TextBox.value);
        temp = temp + 273.15;
        result.textContent = `${temp.toFixed(1)} °K`;
    }
    else{
        result.textContent = "Select a radio button";
    }
}