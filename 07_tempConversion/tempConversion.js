const convertToCelsius = function(temperature) {

	let celsius = ((temperature - 32) * 5) / 9;
	let celsiusNumber = celsius.toFixed(1);	
	return Number(celsiusNumber);

};

convertToCelsius(100);



const convertToFahrenheit = function(temp) {
	let fahrenheit = (temp * (9/5)) + 32;
	let fahrenheitNumber = fahrenheit.toFixed(1);
	return Number(fahrenheitNumber);
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
