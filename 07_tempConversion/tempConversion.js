const convertToCelsius = function(temperature) {

	let celsius = ((temperature - 32) * 5) / 9;
	let celsiusNumber = celsius.toFixed(1);	
	return Number(celsiusNumber);

};

convertToCelsius(100);



const convertToFahrenheit = function(temperature) {

	
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
