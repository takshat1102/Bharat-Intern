function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var conversionType = document.querySelector('input[name="conversionType"]:checked').value;
    var resultElement = document.getElementById("result");
    
    if (conversionType === "celsiusToFahrenheit") {
      var result = (inputTemp * 9/5) + 32;
      resultElement.textContent = inputTemp + "°C = " + result + "°F";
    } else if (conversionType === "fahrenheitToCelsius") {
      var result = (inputTemp - 32) * 5/9;
      resultElement.textContent = inputTemp + "°F = " + result + "°C";
    }
  }