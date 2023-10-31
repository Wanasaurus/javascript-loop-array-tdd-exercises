const repeatString = function(string, num) {
	let longString = string.repeat(num);
	if (num >= 0) {
	console.log(longString);
	} else if (num < 0) {
	console.log("ERROR");
	}
}

repeatString("hey", -1);
// Do not edit below this line
module.exports = repeatString;
