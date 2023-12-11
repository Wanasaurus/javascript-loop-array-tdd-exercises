const convertToCelsius = function(temperature) {

	let newTemp = ((temperature - 32) * 5) / 9;
	return newTemp.toFixed(1);	

};

convertToCelsius(100);

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
