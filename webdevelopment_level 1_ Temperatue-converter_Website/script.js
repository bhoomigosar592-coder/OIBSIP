
const converterForm = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const errorMessage = document.getElementById("errorMessage");
const resultsSection = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


function convertToCelsius(value, unit) {
    if (unit === "celsius") {
        return value;
    }

    if (unit === "fahrenheit") {
        return (value - 32) * 5 / 9;
    }

    
    return value - 273.15;
}

function formatTemperature(value) {
    return value.toFixed(2);
}


converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    
    errorMessage.textContent = "";
    resultsSection.hidden = true;

    const inputValue = temperatureInput.value.trim();
    const temperature = Number(inputValue);
    const selectedUnit = unitSelect.value;

    
    if (inputValue === "" || !Number.isFinite(temperature)) {
        errorMessage.textContent = "Please enter a valid numeric temperature.";
        return;
    }

    
    
    if (selectedUnit === "celsius" && temperature < -273.15) {
        errorMessage.textContent = "Temperature cannot be below absolute zero (-273.15 °C).";
        return;
    }

    if (selectedUnit === "fahrenheit" && temperature < -459.67) {
        errorMessage.textContent = "Temperature cannot be below absolute zero (-459.67 °F).";
        return;
    }

    if (selectedUnit === "kelvin" && temperature < 0) {
        errorMessage.textContent = "Kelvin temperature cannot be below absolute zero (0 K).";
        return;
    }

    
    const celsius = convertToCelsius(temperature, selectedUnit);
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    
    celsiusResult.textContent = formatTemperature(celsius) + " °C";
    fahrenheitResult.textContent = formatTemperature(fahrenheit) + " °F";
    kelvinResult.textContent = formatTemperature(kelvin) + " K";

    resultsSection.hidden = false;
});
