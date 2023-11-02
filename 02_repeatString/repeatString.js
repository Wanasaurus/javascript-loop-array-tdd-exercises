const repeatString = function(string, num) {
	if (num < 0) {
	return "ERROR";
	}
	let longString = string.repeat(num);
	return longString;
}

repeatString("hey", -1);
// Do not edit below this line
module.exports = repeatString;
